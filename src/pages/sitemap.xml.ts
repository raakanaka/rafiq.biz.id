import { getCollection } from 'astro:content';
import { ALLOWED_SERVICES, TARGET_CITIES, TARGET_CITIES_98 } from '../../lib/constants';
import { NICHE_SLUGS } from '../../lib/niches';
import { projects } from '../../lib/projects';

export async function GET() {
  const baseUrl = 'https://rafiq.biz.id';
  const lastmod = '2026-06-04';

  const routes: Array<{ url: string; priority: string; changefreq: string }> = [
    { url: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/projects`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/blog`, priority: '0.8', changefreq: 'weekly' },
    { url: `${baseUrl}/contact`, priority: '0.5', changefreq: 'yearly' },
  ];

  const blogPosts = await getCollection('blog');
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.id}`,
      priority: '0.7',
      changefreq: 'weekly'
    });
  });

  projects.forEach((project) => {
    routes.push({
      url: `${baseUrl}/projects/${project.slug}`,
      priority: '0.6',
      changefreq: 'monthly'
    });
  });

  // Existing service pages (web dev + SEO services × old cities)
  ALLOWED_SERVICES.forEach((service) => {
    routes.push({ url: `${baseUrl}/${service}`, priority: '0.9', changefreq: 'weekly' });
    routes.push({ url: `${baseUrl}/${service}/area`, priority: '0.8', changefreq: 'weekly' });
    routes.push({ url: `${baseUrl}/${service}/area/jakarta`, priority: '0.85', changefreq: 'monthly' });
    routes.push({ url: `${baseUrl}/${service}/area/medan`, priority: '0.85', changefreq: 'monthly' });

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

  const uniqueRoutes = Array.from(
    new Map(routes.map((route) => [route.url, route])).values()
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes.map(r => `  <url>
    <loc>${r.url}</loc>
    <lastmod>${lastmod}</lastmod>
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
