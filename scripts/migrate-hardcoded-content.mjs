import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { newsEventsData, CONTENT_TYPES } from '../src/data/newsEventsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const REPORTS_DIR = path.join(ROOT_DIR, 'migration-reports');
const MIGRATION_ENV_FILE = path.join(ROOT_DIR, '.env.migration.local');

// Parse CLI flags
const args = process.argv.slice(2);
const IS_DRY_RUN = args.includes('--dry-run');
const IS_VERIFY = args.includes('--verify');
const STRICT_MODE = args.includes('--strict');
const UPDATE_MODE = args.includes('--update');

/**
 * Helper to load environment variables strictly from .env.migration.local
 */
function loadMigrationEnv() {
  if (!fs.existsSync(MIGRATION_ENV_FILE)) {
    return { SUPABASE_URL: null, SUPABASE_SERVICE_ROLE_KEY: null };
  }

  const content = fs.readFileSync(MIGRATION_ENV_FILE, 'utf8');
  const env = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  }

  return {
    SUPABASE_URL: env.SUPABASE_URL || null,
    SUPABASE_SERVICE_ROLE_KEY: env.SUPABASE_SERVICE_ROLE_KEY || null
  };
}

/**
 * Normalize Content Types to database enum
 */
function normalizeContentType(typeStr) {
  if (!typeStr) return { normalized: null, error: 'Missing content type' };

  switch (typeStr.trim()) {
    case CONTENT_TYPES.NEWS:
    case 'News':
    case 'news':
      return { normalized: 'news', error: null };
    case 'Blog':
    case 'blog':
      return { normalized: 'blog', error: null };
    case CONTENT_TYPES.PRESS_RELEASE:
    case 'Press Release':
    case 'press_release':
    case 'Press':
    case 'press':
      return { normalized: 'press_release', error: null };
    case CONTENT_TYPES.EVENT:
    case 'Event':
    case 'event':
      return { normalized: 'event', error: null };
    case CONTENT_TYPES.READOUT:
    case 'Readout':
    case 'readout':
      return { normalized: 'readout', error: null };
    default:
      return { normalized: null, error: `Unsupported content type: "${typeStr}"` };
  }
}

/**
 * Generate clean URL-friendly slug
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Get MIME type from file path
 */
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.webp': return 'image/webp';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    case '.pdf': return 'application/pdf';
    case '.pptx': return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    case '.docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case '.mp4': return 'video/mp4';
    default: return 'application/octet-stream';
  }
}

/**
 * Sanitize filename for Supabase storage path
 */
function sanitizeStorageFilename(filename) {
  const decoded = decodeURIComponent(filename);
  const ext = path.extname(decoded);
  const name = path.basename(decoded, ext);
  const cleanName = name.replace(/[^a-zA-Z0-9_\-]/g, '_');
  return `${cleanName}${ext.toLowerCase()}`;
}

/**
 * Main Migration Orchestrator
 */
async function run() {
  const modeLabel = IS_VERIFY ? 'VERIFICATION' : IS_DRY_RUN ? 'DRY RUN' : 'REAL MIGRATION';
  console.log(`=======================================================`);
  console.log(` AASU HARDCODED CONTENT MIGRATION TOOL [${modeLabel}]`);
  console.log(`=======================================================\n`);

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = loadMigrationEnv();

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    if (IS_DRY_RUN) {
      console.warn(`[WARNING] .env.migration.local missing or incomplete (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required).`);
      console.warn(`[WARNING] Proceeding with dry-run static validations only (DB lookups will be skipped).\n`);
    } else {
      console.error(`[FATAL ERROR] Missing migration environment variables.`);
      console.error(`Please create .env.migration.local with SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.`);
      console.error(`Example:`);
      console.error(`  SUPABASE_URL=https://your-project.supabase.co`);
      console.error(`  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key\n`);
      process.exit(1);
    }
  }

  const supabase = (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY)
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false, autoRefreshToken: false }
      })
    : null;

  // --- VERIFICATION MODE ---
  if (IS_VERIFY) {
    await runVerification(supabase);
    return;
  }

  // --- AUTHOR RESOLUTION ---
  let migrationAuthorId = null;
  let migrationAuthorEmail = 'web@aasuonline.org';
  if (supabase) {
    console.log(`[1/5] Resolving migration author profile (${migrationAuthorEmail})...`);
    const { data: profile, error: pErr } = await supabase
      .from('profiles')
      .select('id, email, full_name')
      .eq('email', migrationAuthorEmail)
      .maybeSingle();

    if (pErr) {
      console.error(`[ERROR] Failed querying profiles table: ${pErr.message}`);
      process.exit(1);
    }

    if (!profile) {
      console.error(`[FATAL ERROR] Migration author profile "${migrationAuthorEmail}" not found in Supabase profiles table.`);
      console.error(`Please ensure a profile record with email "${migrationAuthorEmail}" exists in Supabase before migrating.`);
      process.exit(1);
    }

    migrationAuthorId = profile.id;
    console.log(`[SUCCESS] Resolved author: ${profile.full_name || migrationAuthorEmail} (UUID: ${migrationAuthorId})\n`);
  } else {
    console.log(`[1/5] Skipping author resolution (no Supabase client in dry-run mode)\n`);
  }

  // --- REPORT METRICS ---
  const report = {
    mode: IS_DRY_RUN ? 'dry-run' : 'migration',
    timestamp: new Date().toISOString(),
    author: migrationAuthorEmail,
    author_id: migrationAuthorId,
    source_count: newsEventsData.length,
    valid_count: 0,
    imported_count: 0,
    already_existing_count: 0,
    skipped_count: 0,
    failed_count: 0,
    category_totals: {},
    gallery_totals: 0,
    image_upload_totals: 0,
    document_upload_totals: 0,
    missing_files: [],
    slug_conflicts: [],
    link_conflicts: [],
    unsupported_types: [],
    records: []
  };

  // Pre-fetch DB categories & posts if Supabase available
  let existingCategoriesMap = new Map(); // lowercase name -> category object
  let existingPostsMap = new Map(); // slug -> post row

  if (supabase) {
    console.log(`[2/5] Inspecting existing categories & posts in Supabase...`);
    const { data: cats } = await supabase.from('categories').select('*');
    if (cats) {
      for (const c of cats) {
        existingCategoriesMap.set(c.name.toLowerCase(), c);
      }
    }

    const { data: existingPosts } = await supabase.from('posts').select('id, slug, title, content, published_at');
    if (existingPosts) {
      for (const p of existingPosts) {
        if (p.slug) existingPostsMap.set(p.slug, p);
      }
    }
    console.log(`Found ${existingCategoriesMap.size} existing categories and ${existingPostsMap.size} existing posts in Supabase.\n`);
  }

  console.log(`[3/5] Auditing and mapping ${newsEventsData.length} records...`);

  const seenSourceIds = new Set();
  const seenSlugs = new Set();

  for (let index = 0; index < newsEventsData.length; index++) {
    const item = newsEventsData[index];
    const recordNum = index + 1;
    const recordLogPrefix = `[Record ${recordNum}/${newsEventsData.length}]`;
    const recordResult = {
      source_id: item.id,
      title: item.title,
      slug: null,
      status: 'pending',
      operations: [],
      errors: []
    };

    // 1. Validate Source ID & Duplicates
    if (!item.id) {
      recordResult.status = 'failed';
      recordResult.errors.push('Missing source ID');
      report.failed_count++;
      report.records.push(recordResult);
      console.error(`${recordLogPrefix} ERROR: Missing source ID for "${item.title}"`);
      continue;
    }

    if (seenSourceIds.has(item.id)) {
      recordResult.status = 'failed';
      recordResult.errors.push(`Duplicate source ID in file: ${item.id}`);
      report.failed_count++;
      report.records.push(recordResult);
      console.error(`${recordLogPrefix} ERROR: Duplicate source ID "${item.id}"`);
      continue;
    }
    seenSourceIds.add(item.id);

    // 2. Validate & Normalize Slug
    const slug = slugify(item.id);
    recordResult.slug = slug;

    if (seenSlugs.has(slug)) {
      recordResult.status = 'failed';
      recordResult.errors.push(`Duplicate slug generated: ${slug}`);
      report.failed_count++;
      report.slug_conflicts.push({ source_id: item.id, slug, title: item.title });
      report.records.push(recordResult);
      console.error(`${recordLogPrefix} ERROR: Duplicate slug "${slug}"`);
      continue;
    }
    seenSlugs.add(slug);

    // 3. Validate Type
    const { normalized: normalizedType, error: typeErr } = normalizeContentType(item.type);
    if (typeErr) {
      recordResult.status = 'failed';
      recordResult.errors.push(typeErr);
      report.failed_count++;
      report.unsupported_types.push({ source_id: item.id, title: item.title, type: item.type });
      report.records.push(recordResult);
      console.error(`${recordLogPrefix} ERROR: ${typeErr} for "${item.title}"`);
      continue;
    }

    // 4. Validate Required Fields & Dates
    if (!item.title || !item.title.trim()) {
      recordResult.status = 'failed';
      recordResult.errors.push('Missing title');
      report.failed_count++;
      report.records.push(recordResult);
      continue;
    }

    let publishedAtIso = null;
    if (item.date) {
      const parsedDate = new Date(item.date);
      if (isNaN(parsedDate.getTime())) {
        recordResult.errors.push(`Invalid date format: ${item.date}`);
        if (STRICT_MODE) {
          recordResult.status = 'failed';
          report.failed_count++;
          report.records.push(recordResult);
          continue;
        }
      } else {
        publishedAtIso = parsedDate.toISOString();
      }
    }
    if (!publishedAtIso) {
      publishedAtIso = new Date().toISOString();
    }

    // 5. Detect linkOverride vs redirectUrl Conflicts
    let redirectUrl = item.redirectUrl || null;
    if (item.linkOverride && item.redirectUrl && item.linkOverride !== item.redirectUrl) {
      report.link_conflicts.push({
        source_id: item.id,
        title: item.title,
        redirectUrl: item.redirectUrl,
        linkOverride: item.linkOverride
      });
      recordResult.operations.push(`Conflict: redirectUrl (${item.redirectUrl}) != linkOverride (${item.linkOverride}). Precedence given to redirectUrl.`);
    } else if (!redirectUrl && item.linkOverride) {
      redirectUrl = item.linkOverride;
    }

    // 6. Audit Local Featured Image
    let featuredImageUrl = item.img || null;
    let localFeaturedPath = null;
    if (featuredImageUrl && featuredImageUrl.startsWith('/')) {
      const relativePath = decodeURIComponent(featuredImageUrl.slice(1));
      localFeaturedPath = path.join(PUBLIC_DIR, relativePath);
      if (!fs.existsSync(localFeaturedPath)) {
        report.missing_files.push({ source_id: item.id, field: 'img', path: featuredImageUrl });
        recordResult.operations.push(`Missing local image: ${featuredImageUrl}`);
        if (STRICT_MODE) {
          recordResult.status = 'failed';
          recordResult.errors.push(`Missing local image: ${featuredImageUrl}`);
          report.failed_count++;
          report.records.push(recordResult);
          continue;
        }
      }
    }

    // 7. Audit Local Gallery Images
    const auditedGallery = [];
    if (Array.isArray(item.images)) {
      for (const imgPath of item.images) {
        if (typeof imgPath === 'string' && imgPath.startsWith('/')) {
          const relativePath = decodeURIComponent(imgPath.slice(1));
          const localPath = path.join(PUBLIC_DIR, relativePath);
          if (!fs.existsSync(localPath)) {
            report.missing_files.push({ source_id: item.id, field: 'images[]', path: imgPath });
            recordResult.operations.push(`Missing gallery image: ${imgPath}`);
          }
        }
        auditedGallery.push(imgPath);
      }
    }

    // 8. Audit Local Documents
    const auditedDocuments = [];
    if (Array.isArray(item.documents)) {
      for (const doc of item.documents) {
        const docCopy = { ...doc };
        if (docCopy.fileUrl && docCopy.fileUrl.startsWith('/')) {
          const relativePath = decodeURIComponent(docCopy.fileUrl.slice(1));
          const localPath = path.join(PUBLIC_DIR, relativePath);
          if (!fs.existsSync(localPath)) {
            report.missing_files.push({ source_id: item.id, field: 'documents[].fileUrl', path: docCopy.fileUrl });
            recordResult.operations.push(`Missing document file: ${docCopy.fileUrl}`);
          }
        }
        if (docCopy.thumbnail && docCopy.thumbnail.startsWith('/')) {
          const relativePath = decodeURIComponent(docCopy.thumbnail.slice(1));
          const localPath = path.join(PUBLIC_DIR, relativePath);
          if (!fs.existsSync(localPath)) {
            report.missing_files.push({ source_id: item.id, field: 'documents[].thumbnail', path: docCopy.thumbnail });
            recordResult.operations.push(`Missing document thumbnail: ${docCopy.thumbnail}`);
          }
        }
        auditedDocuments.push(docCopy);
      }
    }

    // 9. Check Existing Post in Supabase
    if (existingPostsMap.has(slug)) {
      report.already_existing_count++;
      recordResult.status = 'already_exists';
      recordResult.operations.push(`Post with slug "${slug}" already exists in Supabase.`);
      if (!UPDATE_MODE) {
        report.records.push(recordResult);
        console.log(`${recordLogPrefix} SKIP: Already exists in Supabase -> "${item.title}" (${slug})`);
        continue;
      }
    }

    report.valid_count++;

    // Track Category Totals
    const catName = item.category || 'General';
    report.category_totals[catName] = (report.category_totals[catName] || 0) + 1;

    // --- DRY RUN LOGIC ---
    if (IS_DRY_RUN) {
      recordResult.status = 'dry_run_success';
      recordResult.operations.push(`Mapped type: ${normalizedType}`);
      recordResult.operations.push(`Mapped category: ${catName}`);
      if (item.pressReleaseCategory) recordResult.operations.push(`Mapped pressReleaseCategory: ${item.pressReleaseCategory}`);
      recordResult.operations.push(`Featured Image: ${featuredImageUrl || 'none'}`);
      recordResult.operations.push(`Gallery images count: ${auditedGallery.length}`);
      recordResult.operations.push(`Documents count: ${auditedDocuments.length}`);
      report.records.push(recordResult);
      console.log(`${recordLogPrefix} DRY RUN VALIDATED: "${item.title}" -> slug: "${slug}" [${normalizedType}]`);
      continue;
    }

    // --- REAL MIGRATION EXECUTION ---
    console.log(`${recordLogPrefix} MIGRATING: "${item.title}" (${slug})...`);

    try {
      // Step A: Upload Featured Image
      let finalFeaturedImageUrl = featuredImageUrl;
      if (localFeaturedPath && fs.existsSync(localFeaturedPath)) {
        const uploadedUrl = await uploadMediaToStorage(
          supabase,
          localFeaturedPath,
          `migrated/${slug}/${sanitizeStorageFilename(path.basename(localFeaturedPath))}`,
          migrationAuthorId,
          item.title
        );
        if (uploadedUrl) {
          finalFeaturedImageUrl = uploadedUrl;
          report.image_upload_totals++;
          recordResult.operations.push(`Uploaded featured image to Storage: ${uploadedUrl}`);
        }
      }

      // Step B: Upload Gallery Images
      const finalGalleryUrls = [];
      for (const imgPath of auditedGallery) {
        if (typeof imgPath === 'string' && imgPath.startsWith('/')) {
          const relativePath = decodeURIComponent(imgPath.slice(1));
          const localPath = path.join(PUBLIC_DIR, relativePath);
          if (fs.existsSync(localPath)) {
            const uploadedUrl = await uploadMediaToStorage(
              supabase,
              localPath,
              `migrated/${slug}/gallery/${sanitizeStorageFilename(path.basename(localPath))}`,
              migrationAuthorId,
              item.title
            );
            if (uploadedUrl) {
              finalGalleryUrls.push(uploadedUrl);
              report.image_upload_totals++;
              report.gallery_totals++;
              continue;
            }
          }
        }
        finalGalleryUrls.push(imgPath);
      }

      // Step C: Upload Documents & Thumbnails
      const finalDocuments = [];
      for (const doc of auditedDocuments) {
        const updatedDoc = { ...doc };
        if (doc.fileUrl && doc.fileUrl.startsWith('/')) {
          const relativePath = decodeURIComponent(doc.fileUrl.slice(1));
          const localPath = path.join(PUBLIC_DIR, relativePath);
          if (fs.existsSync(localPath)) {
            const uploadedUrl = await uploadMediaToStorage(
              supabase,
              localPath,
              `migrated/${slug}/docs/${sanitizeStorageFilename(path.basename(localPath))}`,
              migrationAuthorId,
              doc.title || item.title
            );
            if (uploadedUrl) {
              updatedDoc.fileUrl = uploadedUrl;
              report.document_upload_totals++;
            }
          }
        }
        if (doc.thumbnail && doc.thumbnail.startsWith('/')) {
          const relativePath = decodeURIComponent(doc.thumbnail.slice(1));
          const localPath = path.join(PUBLIC_DIR, relativePath);
          if (fs.existsSync(localPath)) {
            const uploadedUrl = await uploadMediaToStorage(
              supabase,
              localPath,
              `migrated/${slug}/docs/${sanitizeStorageFilename(path.basename(localPath))}`,
              migrationAuthorId,
              doc.title || item.title
            );
            if (uploadedUrl) {
              updatedDoc.thumbnail = uploadedUrl;
              report.image_upload_totals++;
            }
          }
        }
        finalDocuments.push(updatedDoc);
      }

      // Step D: Event Location & Time Parsing
      let eventLocation = null;
      if (item.platform && item.time) {
        eventLocation = `${item.time} | ${item.platform}`;
      } else if (item.platform || item.time) {
        eventLocation = item.platform || item.time;
      }

      // Step E: Prepare Post Payload
      const postPayload = {
        title: item.title,
        slug: slug,
        excerpt: item.excerpt || (item.description ? item.description.slice(0, 200) : ''),
        content: item.description || '',
        type: normalizedType,
        status: 'published',
        published_at: publishedAtIso,
        featured_image_url: finalFeaturedImageUrl,
        featured_image_alt: item.title,
        external_url: item.link || null,
        redirect_url: redirectUrl,
        reference_number: item.refNumber || null,
        event_location: eventLocation,
        registration_url: (normalizedType === 'event' && item.link) ? item.link : null,
        hero_position: 'none',
        seo_title: item.title,
        seo_description: item.excerpt || '',
        author_id: migrationAuthorId,
        reviewed_by: migrationAuthorId,
        reviewed_at: new Date().toISOString(),
        created_at: publishedAtIso,
        updated_at: publishedAtIso,
        documents: finalDocuments,
        gallery_images: finalGalleryUrls,
        press_release_category: item.pressReleaseCategory || null
      };

      // Step F: Upsert/Insert Post Row
      let insertedPostId = null;
      if (existingPostsMap.has(slug) && UPDATE_MODE) {
        const existingPost = existingPostsMap.get(slug);
        const { data: updated, error: uErr } = await supabase
          .from('posts')
          .update(postPayload)
          .eq('id', existingPost.id)
          .select('id')
          .single();
        if (uErr) throw new Error(`Post update failed: ${uErr.message}`);
        insertedPostId = updated.id;
        recordResult.operations.push(`Updated post ID ${insertedPostId}`);
      } else {
        const { data: inserted, error: iErr } = await supabase
          .from('posts')
          .insert(postPayload)
          .select('id')
          .single();
        if (iErr) throw new Error(`Post insert failed: ${iErr.message}`);
        insertedPostId = inserted.id;
        recordResult.operations.push(`Inserted post ID ${insertedPostId}`);
      }

      // Step G: Resolve & Link Category
      const catName = item.category || 'General';
      let categoryObj = existingCategoriesMap.get(catName.toLowerCase());
      if (!categoryObj) {
        const catSlug = slugify(catName);
        const { data: newCat, error: cErr } = await supabase
          .from('categories')
          .insert({ name: catName, slug: catSlug, description: catName })
          .select('id, name, slug')
          .single();
        if (cErr) throw new Error(`Category insert failed ("${catName}"): ${cErr.message}`);
        categoryObj = newCat;
        existingCategoriesMap.set(catName.toLowerCase(), categoryObj);
        recordResult.operations.push(`Created category "${catName}" (ID: ${categoryObj.id})`);
      }

      // Insert post_categories junction record idempotently
      const { error: pcErr } = await supabase
        .from('post_categories')
        .upsert({ post_id: insertedPostId, category_id: categoryObj.id }, { onConflict: 'post_id,category_id' });
      if (pcErr) {
        // If upsert not supported by unique constraint, try simple select then insert
        const { data: existingPc } = await supabase
          .from('post_categories')
          .select('*')
          .eq('post_id', insertedPostId)
          .eq('category_id', categoryObj.id)
          .maybeSingle();

        if (!existingPc) {
          const { error: pcInsertErr } = await supabase
            .from('post_categories')
            .insert({ post_id: insertedPostId, category_id: categoryObj.id });
          if (pcInsertErr) {
            recordResult.operations.push(`Warning: post_categories link failed: ${pcInsertErr.message}`);
          }
        }
      }
      recordResult.operations.push(`Linked to category "${catName}"`);

      report.imported_count++;
      recordResult.status = 'success';
      report.records.push(recordResult);
      console.log(`${recordLogPrefix} SUCCESS: Migrated "${item.title}"`);
    } catch (postErr) {
      report.failed_count++;
      recordResult.status = 'failed';
      recordResult.errors.push(postErr.message);
      report.records.push(recordResult);
      console.error(`${recordLogPrefix} FAILED: Operation error on "${item.title}": ${postErr.message}`);
    }
  }

  // --- SAVE REPORT ---
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const timestampStr = new Date().toISOString().replace(/[:.]/g, '-');
  const reportFilename = `migration-report-${report.mode}-${timestampStr}.json`;
  const reportFilePath = path.join(REPORTS_DIR, reportFilename);
  fs.writeFileSync(reportFilePath, JSON.stringify(report, null, 2), 'utf8');

  console.log(`\n=======================================================`);
  console.log(` MIGRATION SUMMARY [${modeLabel}]`);
  console.log(`=======================================================`);
  console.log(` Source Total:           ${report.source_count}`);
  console.log(` Valid Items:            ${report.valid_count}`);
  console.log(` Successfully Imported:  ${report.imported_count}`);
  console.log(` Already Existing:       ${report.already_existing_count}`);
  console.log(` Failed Items:           ${report.failed_count}`);
  console.log(` Missing Local Files:    ${report.missing_files.length}`);
  console.log(` Slug Conflicts:         ${report.slug_conflicts.length}`);
  console.log(` Image Uploads:          ${report.image_upload_totals}`);
  console.log(` Document Uploads:       ${report.document_upload_totals}`);
  console.log(` Category Totals:`);
  for (const [cat, cnt] of Object.entries(report.category_totals)) {
    console.log(`   - ${cat}: ${cnt}`);
  }
  console.log(`\nDetailed Report Saved To: ${reportFilePath}`);
  console.log(`=======================================================\n`);
}

/**
 * Upload local media file to Supabase Storage bucket and create media_assets row
 */
async function uploadMediaToStorage(supabase, localFilePath, storagePath, authorId, altText) {
  if (!supabase) return null;

  try {
    const bucketName = 'content-images';
    const fileBuffer = fs.readFileSync(localFilePath);
    const contentType = getMimeType(localFilePath);

    // 1. Ensure bucket exists or handle upload
    const { error: uploadErr } = await supabase.storage
      .from(bucketName)
      .upload(storagePath, fileBuffer, {
        contentType,
        upsert: true
      });

    if (uploadErr) {
      console.warn(`[STORAGE WARNING] Failed uploading ${storagePath}: ${uploadErr.message}`);
      return null;
    }

    // 2. Get Public URL
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(storagePath);

    const publicUrl = urlData.publicUrl;

    // 3. Create media_assets record idempotently
    const { data: existingMedia } = await supabase
      .from('media_assets')
      .select('id')
      .eq('storage_path', storagePath)
      .maybeSingle();

    if (!existingMedia) {
      const stats = fs.statSync(localFilePath);
      await supabase.from('media_assets').insert({
        storage_path: storagePath,
        public_url: publicUrl,
        mime_type: contentType,
        file_size: stats.size,
        alt_text: altText || path.basename(localFilePath),
        uploaded_by: authorId
      });
    }

    return publicUrl;
  } catch (err) {
    console.warn(`[STORAGE EXCEPTION] ${localFilePath}: ${err.message}`);
    return null;
  }
}

/**
 * Verification Mode: Compare source records vs Supabase posts
 */
async function runVerification(supabase) {
  if (!supabase) {
    console.error(`[FATAL ERROR] Supabase connection required for verification mode.`);
    console.error(`Please provide SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.migration.local.`);
    process.exit(1);
  }

  console.log(`[VERIFY] Fetching all published posts from Supabase...`);
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*, post_categories(categories(name))');

  if (error) {
    console.error(`[VERIFY ERROR] Failed fetching posts: ${error.message}`);
    process.exit(1);
  }

  const postsBySlug = new Map();
  for (const p of posts || []) {
    if (p.slug) postsBySlug.set(p.slug, p);
  }

  console.log(`Found ${postsBySlug.size} posts in Supabase.\n`);

  let matchedCount = 0;
  let mismatchedCount = 0;
  let missingInDbCount = 0;

  console.log(`--------------------------------------------------------------------------------`);
  console.log(` SOURCE SLUG / TITLE                              | SUPABASE STATUS | RESULT    `);
  console.log(`--------------------------------------------------------------------------------`);

  for (const item of newsEventsData) {
    const slug = slugify(item.id);
    const dbPost = postsBySlug.get(slug);

    if (!dbPost) {
      missingInDbCount++;
      console.log(` MISSING: "${slug}" (${item.title.slice(0, 30)}...) | NOT IN DB       | FAIL`);
      continue;
    }

    // Compare fields
    const titleMatch = dbPost.title === item.title;
    const statusMatch = dbPost.status === 'published';
    const refMatch = !item.refNumber || dbPost.reference_number === item.refNumber;

    if (titleMatch && statusMatch && refMatch) {
      matchedCount++;
      console.log(` OK:      "${slug}"                                | PUBLISHED       | MATCH`);
    } else {
      mismatchedCount++;
      console.log(` MISMATCH:"${slug}"                                | MISMATCHED      | FAIL`);
      if (!titleMatch) console.log(`   - Title mismatch: DB="${dbPost.title}" vs SOURCE="${item.title}"`);
      if (!statusMatch) console.log(`   - Status mismatch: DB="${dbPost.status}" vs SOURCE="published"`);
    }
  }

  console.log(`--------------------------------------------------------------------------------`);
  console.log(` VERIFICATION COMPLETE`);
  console.log(` Source Count:    ${newsEventsData.length}`);
  console.log(` Supabase Total:  ${postsBySlug.size}`);
  console.log(` Matched Posts:   ${matchedCount}`);
  console.log(` Mismatched Posts:${mismatchedCount}`);
  console.log(` Missing Posts:   ${missingInDbCount}`);
  console.log(`--------------------------------------------------------------------------------\n`);

  if (missingInDbCount > 0 || mismatchedCount > 0) {
    console.error(`[VERIFY FAILED] ${missingInDbCount} source posts are missing in Supabase, and ${mismatchedCount} posts mismatched.`);
    process.exit(1);
  } else {
    console.log(`[VERIFY SUCCESS] All ${newsEventsData.length} source posts match 1-to-1 with Supabase!\n`);
  }
}

// Run script
run().catch(err => {
  console.error(`[UNHANDLED FATAL ERROR]`, err);
  process.exit(1);
});
