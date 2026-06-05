import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { newsEventsData } from '../src/data/newsEventsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://aasuonline.org';

const staticPaths = [
  '/',
  '/programs',
  '/history',
  '/membership',
  '/partners',
  '/students-voices',
  '/contact',
  '/executives',
  '/profile',
  '/search',
  '/technical-team',
  '/volunteer',
  '/become-a-member',
  '/internship',
  '/news',
  '/press-releases',
  '/events',
  '/reports',
  '/gallery',
  '/resources/branding',
  '/priority/education',
  '/priority/gender',
  '/priority/democracy',
  '/priority/capacity',
  '/priority/migration',
  '/priority/climate',
  '/priority/culture',
  '/privacy-policy',
  '/14th-congress',
  '/nels',
  '/dicampaign'
];

function generateSitemap() {
  const urls = [];

  // Add static paths
  staticPaths.forEach(p => {
    let priority = '0.8';
    if (p === '/') priority = '1.0';
    else if (p.startsWith('/priority/')) priority = '0.9';
    else if (p === '/privacy-policy') priority = '0.3';

    const lastmod = new Date().toISOString().split('T')[0];

    urls.push(`  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`);
  });

  // Add dynamic paths
  newsEventsData.forEach(item => {
    if (item.redirectUrl && (item.redirectUrl.startsWith('http://') || item.redirectUrl.startsWith('https://'))) {
      return;
    }

    const routePath = item.type === 'Event' ? `/events/${item.id}` : `/news/${item.id}`;
    const lastmod = item.date || new Date().toISOString().split('T')[0];

    urls.push(`  <url>
    <loc>${BASE_URL}${routePath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  const destPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(destPath, sitemapXml.trim(), 'utf8');
  console.log(`Sitemap successfully generated at: ${destPath}`);
}

generateSitemap();
