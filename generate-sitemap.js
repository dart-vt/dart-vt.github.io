const fs = require('fs');
const path = require('path');

// Your live site URL
const domain = 'https://dart-vt.github.io';

// All your site pages (paths only)
const pages = [
  '/',         // Home
  '/about',    // About page
  '/team',     // Team page
  '/robots',   // Robots page
  '/sponsors'  // Sponsors page
];

// Build XML entries for each page
const urls = pages.map(page => {
  return `
  <url>
    <loc>${domain}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('');

// Wrap it with the XML sitemap format
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

// Save it to /public/sitemap.xml so it's deployed with your site
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated at public/sitemap.xml');
