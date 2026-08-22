/**
 * Map a raw Supabase post database row into the exact object shape expected by the public AASU website components.
 */
export function mapPostToPublicShape(post) {
  if (!post) return null

  let categoryNames = []
  if (Array.isArray(post.categories)) {
    categoryNames = post.categories.map(c => typeof c === "object" ? c.name : c).filter(Boolean)
  } else if (Array.isArray(post.post_categories)) {
    categoryNames = post.post_categories
      .map(pc => pc.categories?.name || pc.name)
      .filter(Boolean)
  }

  let formattedDate = "—"
  const rawDateStr = post.published_at || post.created_at
  if (rawDateStr) {
    try {
      formattedDate = new Date(rawDateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    } catch {
      formattedDate = "—"
    }
  }

  // Map gallery images array from post_gallery_images relation if available
  let galleryImages = []
  if (Array.isArray(post.post_gallery_images)) {
    galleryImages = post.post_gallery_images
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
      .map(img => typeof img === "object" ? img.image_url : img)
      .filter(Boolean)
  } else if (Array.isArray(post.images)) {
    galleryImages = post.images
  }

  return {
    id: post.id,
    slug: post.slug,
    type: (post.type || "news").toLowerCase(),
    title: post.title || "Untitled Post",
    excerpt: post.excerpt || "",
    content: post.content || "",
    img: post.featured_image_url || "/placeholder-news.jpg",
    featured_image_alt: post.featured_image_alt || post.title || "AASU News Image",
    images: galleryImages,
    refNumber: post.reference_number || post.refNumber || null,
    link: post.external_url || post.link || null,
    redirectUrl: post.redirect_url || post.redirectUrl || null,
    linkOverride: post.redirect_url || post.linkOverride || null,
    date: formattedDate,
    raw_date: rawDateStr,
    published_at: post.published_at,
    eventDate: post.event_date || null,
    eventLocation: post.event_location || null,
    eventTime: post.event_time || null,
    registrationUrl: post.external_url || post.registration_url || null,
    regionalFocus: post.regional_focus || null,
    thematicFocus: post.thematic_focus || null,
    seoTitle: post.seo_title || post.title,
    seoDescription: post.seo_description || post.excerpt || "",
    categories: categoryNames,
    hero_position: post.hero_position || "none",
    documents: Array.isArray(post.documents) ? post.documents : []
  }
}

