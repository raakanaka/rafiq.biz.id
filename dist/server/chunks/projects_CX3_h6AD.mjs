import { c as createComponent } from './astro-component_XJQSBfgp.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './server_arAVftlG.mjs';
import { $ as $$Layout } from './Layout_3vgJ6SRq.mjs';
import { N as Navbar, F as Footer } from './Footer_vnFKzppp.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projectEmojis = ["🏢", "📚", "🎨", "🌿", "🌍", "🇯🇵", "👔", "⚖️", "💰", "✈️", "🧠", "📈", "🤝", "🚗", "🧪", "🛡️"];
  const iconColors = [
    { bg: "#fef3c7" },
    { bg: "#dbeafe" },
    { bg: "#d1fae5" },
    { bg: "#fce7f3" },
    { bg: "#e0e7ff" },
    { bg: "#fef9c3" },
    { bg: "#f3e8ff" },
    { bg: "#ffe4e6" },
    { bg: "#ccfbf1" },
    { bg: "#fef3c7" },
    { bg: "#dbeafe" },
    { bg: "#d1fae5" },
    { bg: "#e0f2fe" },
    { bg: "#fef9c3" },
    { bg: "#f0fdf4" },
    { bg: "#fce7f3" }
  ];
  const projects = [
    {
      id: 1,
      title: "PT Dananjaya Zafer Adibrata",
      description: "Company profile for Arka Consultant, specializing in business licensing and formation.",
      tech: ["Web Profile", "Business", "Consulting"],
      link: "https://dzagroup.co.id/arka-consultant/"
    },
    {
      id: 2,
      title: "HALOEXPERT",
      description: "Learning Management System (LMS) simplifying online training and education programs.",
      tech: ["LMS", "Education", "Platform"],
      link: "https://haloexpert.id"
    },
    {
      id: 3,
      title: "Meja Kreatif Studio",
      description: "Modern website for a creative studio focusing on digital branding and aesthetics.",
      tech: ["Creative", "Branding", "UI/UX"],
      link: "https://mejakreatif.com"
    },
    {
      id: 4,
      title: "Yayasan PETAI",
      description: "Organization profile dedicated to forest conservation and environmental sustainability.",
      tech: ["Non-Profit", "Environment", "NGO"],
      link: "https://petai.or.id"
    },
    {
      id: 5,
      title: "EKSPORA",
      description: "Platform empowering SMEs to enter and succeed in the international export market.",
      tech: ["SME", "Export", "Platform"],
      link: "https://ekspora.com"
    },
    {
      id: 6,
      title: "Japan Shiken Shop",
      description: "Specialized e-commerce store catering to niche markets with a Japanese focus.",
      tech: ["E-Commerce", "Niche", "Store"],
      link: "https://japanshiken.com"
    },
    {
      id: 7,
      title: "The Business Tailor",
      description: "Corporate site offering bespoke business strategy and branding solutions.",
      tech: ["Corporate", "Strategy", "B2B"],
      link: "https://thebusinesstailor.com.sg"
    },
    {
      id: 8,
      title: "BEDAHKASUS",
      description: "News portal focused on legal updates, expert case analysis, and law enforcement.",
      tech: ["News Portal", "Law", "Media"],
      link: "https://bedahkasus.com"
    },
    {
      id: 9,
      title: "DUNIAFINTECH",
      description: "Fintech news platform optimized for SEO and high-speed performance.",
      tech: ["Fintech", "SEO", "Optimization"],
      link: "https://duniafintech.com"
    },
    {
      id: 10,
      title: "Alkhair Tour and Travel",
      description: "The Travel Agency for the best travel experience.",
      tech: ["Travel", "Agency", "Gallery"],
      link: "https://alkhaitravel.id"
    },
    {
      id: 11,
      title: "Praktiqu",
      description: "The Consultant Psychology Agency.",
      tech: ["Consulting", "Psychology", "Agency"],
      link: "https://event.praktiqu.com"
    },
    {
      id: 12,
      title: "Evrando SEO",
      description: "SEO case study achieving top rankings for 'Lysaght Medan' keyword.",
      tech: ["SEO", "Keyword Research", "Analytics"],
      link: "https://evrando.com"
    },
    {
      id: 13,
      title: "Kolaborasa",
      description: "Website sistem untuk platform kolaborasi dan manajemen.",
      tech: ["Platform", "System", "Collaboration"],
      link: "https://kolaborasa.id"
    },
    {
      id: 14,
      title: "Mulya Rental Mobil",
      description: "Website travel dan rental mobil untuk layanan transportasi wisata.",
      tech: ["Travel", "Rent Car", "Service"],
      link: "https://mulyarentalmobil.com"
    },
    {
      id: 15,
      title: "BPT KLIN",
      description: "Website produk chemical soap dan solusi kebersihan profesional.",
      tech: ["Chemical", "Product", "Industry"],
      link: "https://bptklin.com"
    },
    {
      id: 16,
      title: "Asia Safety Pro",
      description: "Website layanan protection guard dan keamanan profesional.",
      tech: ["Security", "Protection", "Service"],
      link: "https://asiasafety.pro"
    },
    {
      id: 17,
      title: "HiiBoss AI",
      description: "AI-powered platform building intelligent agents for business automation and smart workflow management.",
      tech: ["AI", "Automation", "Platform"],
      link: "https://hiiboss.ai/"
    },
    {
      id: 18,
      title: "ShopFoodie AI",
      description: "Innovative AI-driven culinary e-commerce platform for smart recipe recommendations and personalized shopping.",
      tech: ["E-Commerce", "AI", "FoodTech"],
      link: "https://shopfoodie-ai.com/"
    },
    {
      id: 19,
      title: "Vive Software",
      description: "Modern software solutions and technology consulting focusing on scalable enterprise systems and digital transformation.",
      tech: ["Software", "Enterprise", "Consulting"],
      link: "https://vive.software/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects | Rafiq", "description": "Explore the work I've crafted for clients and personal endeavors." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col"> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/rafiq.biz.id/components/Navbar", "client:component-export": "default" })} <section class="section flex-1"> <div class="max-w-6xl mx-auto"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: var(--foreground); letter-spacing: -0.02em;">
My <span class="text-accent-pop">Projects</span> </h1> <p class="text-lg" style="color: var(--text-secondary);">
Explore the work I've crafted for clients and personal endeavors ✦
</p> </div> <!-- Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${projects.map((project, i) => renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="card-brutal group block hover:-translate-y-1 transition-transform" style="padding: 1.5rem; text-decoration: none; display: flex; flex-direction: column;"> <div class="flex items-start justify-between mb-3"> <div class="icon-circle"${addAttribute(`background: ${iconColors[i % iconColors.length].bg};`, "style")}> <span style="font-size: 1.125rem;">${projectEmojis[i % projectEmojis.length]}</span> </div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style="color: var(--text-secondary); transition: transform 0.2s; flex-shrink: 0; margin-top: 2px;"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> </div> <h2 class="text-base font-bold mb-2" style="color: var(--foreground);"> ${project.title} </h2> <p class="text-sm leading-relaxed mb-4 flex-1" style="color: var(--text-secondary);"> ${project.description} </p> <div class="flex flex-wrap gap-2"> ${project.tech.map((t) => renderTemplate`<span class="chip">${t}</span>`)} </div> </a>`)} </div> </div> </section> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/rafiq.biz.id/components/Footer", "client:component-export": "default" })} </main> ` })}`;
}, "D:/Github/rafiq.biz.id/src/pages/projects.astro", void 0);

const $$file = "D:/Github/rafiq.biz.id/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
