import { ALLOWED_SERVICES, TARGET_CITIES, TARGET_CITIES_98 } from '../../lib/constants';
import { NICHE_SLUGS } from '../../lib/niches';

export async function GET() {
  const baseUrl = 'https://rafiq.biz.id';
  const now = new Date().toISOString().split('T')[0];

  const routes: Array<{ url: string; priority: string; changefreq: string }> = [
    { url: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/projects`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: '0.5', changefreq: 'yearly' },
  ];

  // Existing service pages (web dev + SEO services × old cities)
  ALLOWED_SERVICES.forEach((service) => {
    routes.push({ url: `${baseUrl}/${service}`, priority: '0.9', changefreq: 'weekly' });
    routes.push({ url: `${baseUrl}/${service}/area`, priority: '0.8', changefreq: 'weekly' });

    TARGET_CITIES.forEach((city) => {
      routes.push({ url: `${baseUrl}/${service}/${city}`, priority: '0.7', changefreq: 'weekly' });
    });
  });

  // NEW: 48 Niches × 98 Cities = 4,704 landing pages
  NICHE_SLUGS.forEach((niche) => {
    TARGET_CITIES_98.forEach((city) => {
      routes.push({
        url: `${baseUrl}/jasa-website-${niche}-${city}`,
        priority: '0.8',
        changefreq: 'monthly'
      });
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${r.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
