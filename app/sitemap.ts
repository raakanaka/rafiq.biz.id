import { MetadataRoute } from 'next'
import { ALLOWED_SERVICES, TARGET_CITIES } from '@/lib/constants'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rafiq.biz.id';

  // Base routes structure
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Append programmatic SEO routes
  ALLOWED_SERVICES.forEach((service) => {
    // 1. Service base URL
    routes.push({
      url: `${baseUrl}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // 2. The Entry-point for the 83k HTML Nested Directory
    // Googlebot will crawl this up to the Village level
    routes.push({
      url: `${baseUrl}/${service}/area`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // 3. Short-circuit high-priority commercial cities
    TARGET_CITIES.forEach((city) => {
      routes.push({
        url: `${baseUrl}/${service}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return routes;
}
