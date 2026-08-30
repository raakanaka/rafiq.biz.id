import { getCollection } from 'astro:content';
import { TARGET_CITIES, PRIORITY_CITIES } from '../../lib/constants';
import { NICHE_SLUGS } from '../../lib/niches';
import { projects } from '../../lib/projects';

export async function GET() {
  const baseUrl = 'https://rafiq.biz.id';
  // Fixed date, not new Date(): this route is SSR, so a live date would claim
  // every page changed today on every crawl — a false signal Google learns to ignore.
  const lastmod = '2026-08-30';

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

  // Only the two primary service slugs belong in the sitemap. The other 12 are
  // keyword variants that now canonicalise here and carry noindex — advertising
  // them would just ask Google to crawl pages we tell it not to index.
  const PRIMARY_SERVICES = ['jasa-pembuatan-website', 'jasa-seo'];

  PRIMARY_SERVICES.forEach((service) => {
    routes.push({ url: `${baseUrl}/${service}`, priority: '0.9', changefreq: 'weekly' });
    routes.push({ url: `${baseUrl}/${service}/area`, priority: '0.8', changefreq: 'weekly' });
    routes.push({ url: `${baseUrl}/${service}/area/jakarta`, priority: '0.85', changefreq: 'monthly' });
    routes.push({ url: `${baseUrl}/${service}/area/medan`, priority: '0.85', changefreq: 'monthly' });

    PRIORITY_CITIES.forEach((city) => {
      routes.push({ url: `${baseUrl}/${service}/${city}`, priority: '0.7', changefreq: 'weekly' });
    });
  });

  // Niche pages: one national page per niche, plus the priority cities only.
  // The other ~90 cities were near-identical duplicates and now 301 to the
  // national page, so listing them here would just advertise redirects.
  NICHE_SLUGS.forEach((niche) => {
    routes.push({
      url: `${baseUrl}/jasa-website-${niche}`,
      priority: '0.8',
      changefreq: 'monthly'
    });

    PRIORITY_CITIES.forEach((city) => {
      routes.push({
        url: `${baseUrl}/jasa-website-${niche}-${city}`,
        priority: '0.7',
        changefreq: 'monthly'
      });
    });
  });

  // Server emits 307 to the trailing-slash form, so publish that form directly
  // (a sitemap full of redirects burns crawl budget and dilutes canonical signals).
  const withSlash = routes.map((route) => ({
    ...route,
    url: route.url.endsWith('/') ? route.url : `${route.url}/`,
  }));

  const uniqueRoutes = Array.from(
    new Map(withSlash.map((route) => [route.url, route])).values()
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
