import { ALLOWED_SERVICES, TARGET_CITIES, WEB_DEV_SERVICES, SEO_SERVICES } from '@/lib/constants';

function formatString(str: string): string {
  return str.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://rafiq.biz.id';
  const now = new Date().toUTCString();

  const projects = [
    { title: "PT Dananjaya Zafer Adibrata", desc: "Company profile for Arka Consultant, specializing in business licensing and formation.", link: "https://dzagroup.co.id/arka-consultant/" },
    { title: "HALOEXPERT", desc: "Learning Management System (LMS) simplifying online training and education programs.", link: "https://haloexpert.id" },
    { title: "Meja Kreatif Studio", desc: "Modern website for a creative studio focusing on digital branding and aesthetics.", link: "https://mejakreatif.com" },
    { title: "Yayasan PETAI", desc: "Organization profile dedicated to forest conservation and environmental sustainability.", link: "https://petai.or.id" },
    { title: "EKSPORA", desc: "Platform empowering SMEs to enter and succeed in the international export market.", link: "https://ekspora.com" },
    { title: "Japan Shiken Shop", desc: "Specialized e-commerce store catering to niche markets with a Japanese focus.", link: "https://japanshiken.com" },
    { title: "The Business Tailor", desc: "Corporate site offering bespoke business strategy and branding solutions.", link: "https://thebusinesstailor.com.sg" },
    { title: "BEDAHKASUS", desc: "News portal focused on legal updates, expert case analysis, and law enforcement.", link: "https://bedahkasus.com" },
    { title: "DUNIAFINTECH", desc: "Fintech news platform optimized for SEO and high-speed performance.", link: "https://duniafintech.com" },
    { title: "Alkhair Tour and Travel", desc: "Travel agency for the best travel experience.", link: "https://alkhaitravel.id" },
    { title: "HiiBoss AI", desc: "AI-powered platform building intelligent agents for business automation.", link: "https://hiiboss.ai/" },
    { title: "ShopFoodie AI", desc: "AI-driven culinary e-commerce for smart recipe recommendations.", link: "https://shopfoodie-ai.com/" },
    { title: "Vive Software", desc: "Modern software solutions and technology consulting for enterprise systems.", link: "https://vive.software/" },
  ];

  // Static pages
  const staticItems = [
    {
      title: 'Rafiq — Web Developer & SEO Specialist',
      link: `${baseUrl}/`,
      description: "Hi, I'm Rafiq. A Web Developer and SEO Specialist based in Indonesia. I craft performant, accessible, and visually polished web experiences.",
      category: 'Home',
    },
    {
      title: 'About Rafiq',
      link: `${baseUrl}/about`,
      description: 'Rafiq is a dedicated Web Developer and SEO Specialist based in Indonesia. He specializes in building accessible, performant, and visually striking applications using Next.js, React, TypeScript, and Tailwind CSS.',
      category: 'About',
    },
    {
      title: 'Portfolio Projects',
      link: `${baseUrl}/projects`,
      description: `Explore ${projects.length} client projects crafted by Rafiq, including LMS platforms, e-commerce stores, company profiles, fintech portals, and AI-powered applications.`,
      category: 'Portfolio',
    },
    {
      title: 'Contact Rafiq',
      link: `${baseUrl}/contact`,
      description: 'Get in touch with Rafiq for freelance web development and SEO projects. Available via email at rafiq.adha@rafiq.biz.id, LinkedIn, GitHub, and WhatsApp.',
      category: 'Contact',
    },
  ];

  // Service items (top-level only, not all location variants)
  const serviceItems = ALLOWED_SERVICES.map(service => {
    const name = formatString(service);
    const isSeo = SEO_SERVICES.includes(service);
    return {
      title: `Jasa ${name} — ${isSeo ? 'Pakar SEO Profesional Bergaransi' : 'Web Developer Bergaransi'}`,
      link: `${baseUrl}/${service}`,
      description: isSeo
        ? `Agensi Jasa SEO Profesional yang fokus mendominasi kata kunci Google, Bing, & AI Overview. Tingkatkan trafik bisnis Anda secara organik.`
        : `Jasa pembuatan website profesional berfokus pada desain web responsif, company profile, dan toko online dengan optimasi SEO tingkat lanjut. Mulai Rp 1.6 Juta.`,
      category: isSeo ? 'SEO Services' : 'Web Development',
    };
  });

  // Top city service items (only first 5 services × top 10 cities to keep feed manageable)
  const cityItems = ALLOWED_SERVICES.slice(0, 3).flatMap(service => {
    const name = formatString(service);
    const isSeo = SEO_SERVICES.includes(service);
    return TARGET_CITIES.slice(0, 10).map(city => ({
      title: `Jasa ${name} di ${formatString(city)}`,
      link: `${baseUrl}/${service}/${city}`,
      description: isSeo
        ? `Layanan ${name} profesional di ${formatString(city)}. Dominasi ranking Google, Bing, dan AI Overview untuk bisnis lokal Anda.`
        : `Jasa pembuatan website profesional di ${formatString(city)}. Desain responsif, SEO-friendly, mulai Rp 1.6 Juta.`,
      category: isSeo ? 'SEO Services' : 'Web Development',
    }));
  });

  // Project items
  const projectItems = projects.map(p => ({
    title: `Project: ${p.title}`,
    link: p.link,
    description: p.desc,
    category: 'Portfolio',
  }));

  const allItems = [...staticItems, ...serviceItems, ...cityItems, ...projectItems];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Rafiq — Web Developer &amp; SEO Specialist</title>
    <link>${baseUrl}</link>
    <description>Web Developer and SEO Specialist based in Indonesia. Professional web development and SEO optimization services.</description>
    <language>id</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>Rafiq — Web Developer &amp; SEO Specialist</title>
      <link>${baseUrl}</link>
    </image>
    <managingEditor>rafiq.adha@rafiq.biz.id (Rafiq)</managingEditor>
    <webMaster>rafiq.adha@rafiq.biz.id (Rafiq)</webMaster>
    <copyright>© ${new Date().getFullYear()} Rafiq Web Developer. All rights reserved.</copyright>
${allItems.map(item => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
      <guid isPermaLink="true">${escapeXml(item.link)}</guid>
      <pubDate>${now}</pubDate>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new Response(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
