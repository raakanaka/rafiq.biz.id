globalThis.process ??= {};
globalThis.process.env ??= {};
import { T as TARGET_CITIES, A as ALLOWED_SERVICES, W as WEB_DEV_SERVICES, S as SEO_SERVICES } from "./constants_CXIdmYgm.mjs";
function formatString(str) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
async function GET() {
  const baseUrl = "https://rafiq.biz.id";
  const faqWebDev = [
    { q: "Berapa biaya jasa pembuatan website profesional?", a: "Harga mulai dari Rp1.600.000 untuk paket UMKM, hingga Rp2.900.000 untuk Corporate Premium dengan fitur e-commerce dan optimasi SEO tingkat lanjut." },
    { q: "Berapa lama proses pembuatan website?", a: "Rata-rata antara 3-14 hari kerja tergantung kelengkapan materi dan kerumitan sistem." },
    { q: "Apakah website sudah SEO-Friendly?", a: "Ya. Semua website dibangun dengan On-Page SEO, Semantic HTML, schema markup JSON-LD, dan didaftarkan ke Google Search Console dan Bing Webmaster." },
    { q: "Bagaimana optimasi AI Overview (Google SGE)?", a: "Website dirancang ramah untuk crawler AI (LLM-friendly) dengan copywriting semantik agar mudah diindeks oleh mesin SGE." },
    { q: "Apakah desain Mobile-Friendly?", a: "Ya, kami menerapkan pendekatan Mobile-First yang menjamin Core Web Vitals superior di semua ukuran layar." },
    { q: "Template CMS atau Jasa Bikin Web Profesional?", a: "Template CMS sering heavy dan rentan celah keamanan. Dengan developer profesional, strategi konversi sudah dipikirkan matang." },
    { q: "Apakah ada biaya maintenance?", a: "Ya, maintenance mencakup perpanjangan domain dan hosting. Kami mengurus 100% kebutuhan teknis." },
    { q: "Bisa update konten sendiri?", a: "Pasti bisa melalui control panel admin intuitif tanpa butuh pengetahuan coding." }
  ];
  const faqSeo = [
    { q: "Berapa biaya Jasa SEO?", a: "Mulai Rp 1.800.000 untuk Lokal SEO GMB, Rp 2.500.000 untuk SEO Bisnis, dan Rp 3.500.000 untuk SEO VIP Enterprise." },
    { q: "Berapa lama website menembus Page 1 Google?", a: "Pergerakan naik biasanya terlihat di bulan pertama sampai ketiga, tergantung keyword difficulty dan frekuensi optimasi." },
    { q: "Teknik SEO apa yang digunakan?", a: "100% White-Hat SEO: perbaikan Core Web Vitals, siloing on-page, schema semantis, dan High-Authority Backlink." },
    { q: "Apakah mendukung AI Overview / SGE?", a: "Ya, melalui integrasi Schema-LD JSON dengan presisi informasi lokal, AI LLM lebih mudah memahami situs bisnis Anda." },
    { q: "Ada jaminan kenaikan traffic?", a: "Kami menjamin pelaksanaan optimasi premium. Traffic dipastikan meningkat sehat dengan monitoring analitik terverifikasi." },
    { q: "Perlu menyiapkan artikel sendiri?", a: "Tidak. Konten dan Content Writing pilar sudah termasuk dalam paket layanan." },
    { q: "Bagaimana optimasi SEO Lokal?", a: "Kami mengoptimasi Google Business Profile, distribusi NAP, dan mendominasi Local 3-Pack." },
    { q: "Bagaimana memantau progres SEO?", a: "Laporan bulanan terstruktur mencakup ranking keyword dan data Google Search Console." }
  ];
  const projects = [
    { title: "PT Dananjaya Zafer Adibrata", desc: "Company profile for business licensing and formation consulting.", link: "https://dzagroup.co.id/arka-consultant/", tech: ["Web Profile", "Business"] },
    { title: "HALOEXPERT", desc: "Learning Management System (LMS) simplifying online training and education programs.", link: "https://haloexpert.id", tech: ["LMS", "Education", "Platform"] },
    { title: "Meja Kreatif Studio", desc: "Modern website for a creative studio focusing on digital branding and aesthetics.", link: "https://mejakreatif.com", tech: ["Creative", "Branding", "UI/UX"] },
    { title: "Yayasan PETAI", desc: "Organization profile dedicated to forest conservation and environmental sustainability.", link: "https://petai.or.id", tech: ["Non-Profit", "Environment", "NGO"] },
    { title: "EKSPORA", desc: "Platform empowering SMEs to enter and succeed in the international export market.", link: "https://ekspora.com", tech: ["SME", "Export", "Platform"] },
    { title: "Japan Shiken Shop", desc: "Specialized e-commerce store catering to niche markets with a Japanese focus.", link: "https://japanshiken.com", tech: ["E-Commerce", "Niche", "Store"] },
    { title: "The Business Tailor", desc: "Corporate site offering bespoke business strategy and branding solutions.", link: "https://thebusinesstailor.com.sg", tech: ["Corporate", "Strategy"] },
    { title: "BEDAHKASUS", desc: "News portal focused on legal updates, expert case analysis, and law enforcement.", link: "https://bedahkasus.com", tech: ["News Portal", "Law", "Media"] },
    { title: "DUNIAFINTECH", desc: "Fintech news platform optimized for SEO and high-speed performance.", link: "https://duniafintech.com", tech: ["Fintech", "SEO", "Optimization"] },
    { title: "Alkhair Tour and Travel", desc: "Travel agency for the best travel experience.", link: "https://alkhaitravel.id", tech: ["Travel", "Agency", "Gallery"] },
    { title: "Praktiqu", desc: "Consultant psychology agency.", link: "https://event.praktiqu.com", tech: ["Consulting", "Psychology"] },
    { title: "Evrando SEO", desc: "SEO case study achieving top rankings for 'Lysaght Medan' keyword.", link: "https://evrando.com", tech: ["SEO", "Keyword Research"] },
    { title: "Kolaborasa", desc: "Collaboration and management platform.", link: "https://kolaborasa.id", tech: ["Platform", "System", "Collaboration"] },
    { title: "Mulya Rental Mobil", desc: "Car rental and tourist transportation service.", link: "https://mulyarentalmobil.com", tech: ["Travel", "Rent Car", "Service"] },
    { title: "BPT KLIN", desc: "Chemical soap and professional cleaning solutions.", link: "https://bptklin.com", tech: ["Chemical", "Product", "Industry"] },
    { title: "Asia Safety Pro", desc: "Professional security guard and protection services.", link: "https://asiasafety.pro", tech: ["Security", "Protection", "Service"] },
    { title: "HiiBoss AI", desc: "AI-powered platform building intelligent agents for business automation.", link: "https://hiiboss.ai/", tech: ["AI", "Automation", "Platform"] },
    { title: "ShopFoodie AI", desc: "AI-driven culinary e-commerce for smart recipe recommendations.", link: "https://shopfoodie-ai.com/", tech: ["E-Commerce", "AI", "FoodTech"] },
    { title: "Vive Software", desc: "Modern software solutions and technology consulting for enterprise systems.", link: "https://vive.software/", tech: ["Software", "Enterprise", "Consulting"] }
  ];
  const content = `# Rafiq — Web Developer & SEO Specialist (Full Content)

> Complete reference document for AI systems about rafiq.biz.id — a personal portfolio and professional service website.

---

## Identity & Bio

**Name:** Rafiq
**Role:** Web Developer & SEO Specialist
**Location:** Jakarta, Indonesia
**Website:** ${baseUrl}
**Email:** rafiq.adha@rafiq.biz.id
**LinkedIn:** https://linkedin.com/in/rafiq-alhafizh-adha
**GitHub:** https://github.com/raakanaka
**WhatsApp:** https://wa.me/6282160731800

Rafiq is a dedicated Web Developer and SEO Specialist based in Indonesia. He specializes in building accessible, performant, and visually striking web applications using modern technologies including Astro, React, TypeScript, and Tailwind CSS. He provides professional SEO services including local SEO, keyword optimization, backlink building, and AI Overview (SGE) optimization.

His journey began with a curiosity for how things work on the screen. Today, he works with the latest tech stack to deliver high-quality digital experiences for clients across Indonesia and Southeast Asia.

---

## Skills & Technologies

JavaScript, TypeScript, React, Astro, Tailwind CSS, Node.js, Git, UI/UX Design, SEO, Keyword Research, Analytics

---

## Web Development Services

${WEB_DEV_SERVICES.map((s) => `### ${formatString(s)}
- URL: ${baseUrl}/${s}
- Description: Professional web development service including company profile, e-commerce, and landing page creation with advanced SEO optimization.
`).join("\n")}

#### Web Development Pricing

| Package | Price | Features |
|---------|-------|----------|
| Paket Starter (UMKM/Personal) | Rp 1.600.000 | Custom responsive theme, domain & hosting (1 year), basic on-page SEO, WhatsApp integration, max 5 pages |
| Paket Pro (Perusahaan/CV) | Rp 2.200.000 | All Starter features + premium page design, professional business email, Schema Markup / AI Overview setup, max 10 pages, Google My Business setup |
| Paket Premium (Corporate VIP) | Rp 2.900.000 | All Pro features + premium hosting, advanced product catalog/LMS, bilingual support, conversion analysis, minor revisions during active period |

#### Web Development FAQ

${faqWebDev.map((f) => `**Q: ${f.q}**
A: ${f.a}
`).join("\n")}

---

## SEO Services

${SEO_SERVICES.map((s) => `### ${formatString(s)}
- URL: ${baseUrl}/${s}
- Description: Professional SEO optimization service for Google, Bing, and AI Overview dominance.
`).join("\n")}

#### SEO Pricing

| Package | Price | Features |
|---------|-------|----------|
| SEO Lokal (GMB/Maps) | Rp 1.800.000/month | Technical on-page SEO audit, Google Maps profile optimization, long-tail keyword research, meta & title tag optimization, sitemap submission |
| SEO Bisnis (Keyword Competition) | Rp 2.500.000/month | All Local features + high authority external backlinks, 2 semantic SEO articles, Schema JSON-LD/SGE optimization, monthly Google Analytics report |
| SEO VIP Enterprise (National) | Rp 3.500.000/month | All Business features + edu-web supplier network, site code structure optimization, 4+ authority pillar articles, external spam attack protection, dedicated consultant |

#### SEO FAQ

${faqSeo.map((f) => `**Q: ${f.q}**
A: ${f.a}
`).join("\n")}

---

## Portfolio — ${projects.length} Client Projects

${projects.map((p, i) => `### ${i + 1}. ${p.title}
- URL: ${p.link}
- Description: ${p.desc}
- Technologies: ${p.tech.join(", ")}
`).join("\n")}

---

## Service Area

Available across ${TARGET_CITIES.length}+ major cities in Indonesia, covering 38 provinces and 83,000+ villages nationwide.

### Priority Cities
${TARGET_CITIES.map((c) => `- ${formatString(c)}: ${baseUrl}/jasa-pembuatan-website/${c}`).join("\n")}

### Service Slugs (${ALLOWED_SERVICES.length} total)
${ALLOWED_SERVICES.map((s) => `- /${s}`).join("\n")}

---

## Site Navigation

| Page | URL | Description |
|------|-----|-------------|
| Home | ${baseUrl}/ | Main landing page with featured projects and skills |
| About | ${baseUrl}/about | Bio, background, and technical skills |
| Projects | ${baseUrl}/projects | Full portfolio of ${projects.length} client projects |
| Contact | ${baseUrl}/contact | Email, LinkedIn, GitHub, and WhatsApp contact information |

## Machine-Readable Resources

- Sitemap: ${baseUrl}/sitemap.xml
- RSS Feed: ${baseUrl}/feed.xml
- LLM Summary: ${baseUrl}/llms.txt
- LLM Full Content: ${baseUrl}/llms-full.txt
- Robots: ${baseUrl}/robots.txt

---

*Last updated: ${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}*
`;
  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400"
    }
  });
}
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
