globalThis.process ??= {};
globalThis.process.env ??= {};
import { T as TARGET_CITIES, W as WEB_DEV_SERVICES, S as SEO_SERVICES } from "./constants_CXIdmYgm.mjs";
function formatString(str) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
async function GET() {
  const baseUrl = "https://rafiq.biz.id";
  const content = `# Rafiq — Web Developer & SEO Specialist

> Personal portfolio and professional service website of Rafiq, a Web Developer and SEO Specialist based in Indonesia.

## About

Rafiq is a dedicated Web Developer and SEO Specialist based in Indonesia. He specializes in building accessible, performant, and visually striking web applications using modern technologies including Astro, React, TypeScript, and Tailwind CSS. He also provides professional SEO services including local SEO, keyword optimization, backlink building, and AI Overview (SGE) optimization.

## Contact

- Email: rafiq.adha@rafiq.biz.id
- LinkedIn: https://linkedin.com/in/rafiq-alhafizh-adha
- GitHub: https://github.com/raakanaka
- WhatsApp: https://wa.me/6282160731800
- Location: Jakarta, Indonesia

## Services

### Web Development Services
${WEB_DEV_SERVICES.map((s) => `- [${formatString(s)}](${baseUrl}/${s})`).join("\n")}

Pricing:
- Paket Starter (UMKM/Personal): Rp 1.600.000
- Paket Pro (Perusahaan/CV): Rp 2.200.000
- Paket Premium (Corporate VIP): Rp 2.900.000

### SEO Services
${SEO_SERVICES.map((s) => `- [${formatString(s)}](${baseUrl}/${s})`).join("\n")}

Pricing:
- SEO Lokal (GMB/Maps): Rp 1.800.000/bulan
- SEO Bisnis (Keyword Competition): Rp 2.500.000/bulan
- SEO VIP Enterprise (National): Rp 3.500.000/bulan

## Portfolio / Projects

- [PT Dananjaya Zafer Adibrata](https://dzagroup.co.id/arka-consultant/) — Company profile for business licensing
- [HALOEXPERT](https://haloexpert.id) — Learning Management System (LMS)
- [Meja Kreatif Studio](https://mejakreatif.com) — Creative studio website
- [Yayasan PETAI](https://petai.or.id) — Forest conservation NGO
- [EKSPORA](https://ekspora.com) — SME export platform
- [Japan Shiken Shop](https://japanshiken.com) — Japanese e-commerce store
- [The Business Tailor](https://thebusinesstailor.com.sg) — Corporate strategy solutions
- [BEDAHKASUS](https://bedahkasus.com) — Legal news portal
- [DUNIAFINTECH](https://duniafintech.com) — Fintech news platform
- [Alkhair Tour and Travel](https://alkhaitravel.id) — Travel agency
- [Praktiqu](https://event.praktiqu.com) — Psychology consulting agency
- [Evrando SEO](https://evrando.com) — SEO case study
- [Kolaborasa](https://kolaborasa.id) — Collaboration platform
- [Mulya Rental Mobil](https://mulyarentalmobil.com) — Car rental service
- [BPT KLIN](https://bptklin.com) — Chemical soap products
- [Asia Safety Pro](https://asiasafety.pro) — Security guard services
- [HiiBoss AI](https://hiiboss.ai/) — AI-powered business automation
- [ShopFoodie AI](https://shopfoodie-ai.com/) — AI culinary e-commerce
- [Vive Software](https://vive.software/) — Enterprise software solutions

## Skills & Technologies

JavaScript, TypeScript, React, Astro, Tailwind CSS, Node.js, SEO, UI/UX Design, Git, Keyword Research, Analytics

## Pages

- [Home](${baseUrl}/)
- [About](${baseUrl}/about)
- [Projects](${baseUrl}/projects)
- [Contact](${baseUrl}/contact)

## Service Area Coverage

Available across ${TARGET_CITIES.length}+ major cities in Indonesia covering 38 provinces and 83,000+ villages.

Top cities: ${TARGET_CITIES.slice(0, 15).map((c) => formatString(c)).join(", ")}, and more.

## Optional Links

- [Full LLM Content](${baseUrl}/llms-full.txt)
- [Sitemap](${baseUrl}/sitemap.xml)
- [RSS Feed](${baseUrl}/feed.xml)
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
