globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BDQLFbuj.mjs";
import { k as renderComponent, r as renderTemplate, l as Fragment, u as unescapeHTML, m as maybeRenderHead, g as addAttribute } from "./worker-entry_C3X8gKDK.mjs";
import { c as createLucideIcon, $ as $$Layout } from "./createLucideIcon_Bp2E0FbM.mjs";
import { C as CITY_DISPLAY_NAMES } from "./constants_CXIdmYgm.mjs";
import { A as ArrowUpRight } from "./arrow-up-right_BKp41FND.mjs";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$NicheLandingPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NicheLandingPage;
  const { niche: n, citySlug } = Astro2.props;
  function formatCityName(slug) {
    if (CITY_DISPLAY_NAMES[slug]) return CITY_DISPLAY_NAMES[slug];
    return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }
  const cityName = formatCityName(citySlug);
  function r(text) {
    return text.replace(/\[KOTA\]/g, cityName);
  }
  const whatsappNumber = "6282160731800";
  const waMessage = `Halo, saya tertarik dengan jasa website ${n.slug.replace(/-/g, " ")} di ${cityName}. Boleh info lebih lanjut?`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
  const canonicalUrl = `https://rafiq.biz.id/jasa-website-${n.slug}-${citySlug}`;
  const pageTitle = r(n.title);
  const pageDesc = r(n.description);
  const pageKeywords = [
    `Jasa Website ${n.slug.replace(/-/g, " ")}`,
    `website ${n.slug.replace(/-/g, " ")} ${cityName}`,
    `jasa pembuatan website ${cityName}`,
    "website profesional",
    "SEO friendly",
    `web developer ${cityName}`
  ];
  const nicheDisplayName = n.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const offers = [
    { name: "Paket Starter", price: "1600000", priceCurrency: "IDR" },
    { name: "Paket Pro", price: "2200000", priceCurrency: "IDR" },
    { name: "Paket Premium", price: "2900000", priceCurrency: "IDR" }
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": `Jasa Website ${nicheDisplayName}`,
        "provider": { "@type": "Organization", "name": "Rafiq Web Developer", "url": "https://rafiq.biz.id" },
        "areaServed": { "@type": "Place", "name": cityName },
        "offers": offers.map((o) => ({ "@type": "Offer", "name": o.name, "price": o.price, "priceCurrency": o.priceCurrency }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": n.faq.map((faq) => ({ "@type": "Question", "name": r(faq.q), "acceptedAnswer": { "@type": "Answer", "text": r(faq.a) } }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://rafiq.biz.id" },
          { "@type": "ListItem", "position": 2, "name": `Jasa Website ${nicheDisplayName}`, "item": canonicalUrl }
        ]
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDesc, "keywords": pageKeywords, "canonicalUrl": canonicalUrl, "robots": "index, follow" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="min-h-screen flex flex-col bg-background font-body"> <header class="w-full p-6 flex justify-center items-center"> <a href="/" class="text-xl font-bold font-heading text-foreground" style="text-decoration: none;">
Rafiq<span class="text-accent-pop">.</span> </a> </header> <!-- HERO --> <section class="section pt-6 lg:pt-16 pb-12 lg:pb-24 flex-1 flex flex-col items-center justify-center text-center"> <div class="max-w-4xl mx-auto px-4"> <div class="badge-brutal mb-6 mx-auto inline-flex"> <span>${r(n.hero.badge)}</span> </div> <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-foreground leading-tight" style="letter-spacing: -0.02em;"> ${r(n.hero.headline).includes(cityName) ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${r(n.hero.headline).split(cityName)[0]}<span class="text-accent-pop">${cityName}</span>${r(n.hero.headline).split(cityName).slice(1).join(cityName)}` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${r(n.hero.headline)}` })}`} </h1> <p class="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">${r(n.hero.subheadline)}</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="btn-kirim w-full sm:w-auto text-lg py-4 px-8"> ${n.hero.cta} ${renderComponent($$result2, "ArrowUpRight", ArrowUpRight, { "className": "ml-2 inline-block", "size": 20 })} </a> <a href="#harga" class="btn-outline-brutal w-full sm:w-auto text-lg py-4 px-8">Lihat Harga</a> </div> </div> </section> <!-- MASALAH & SOLUSI --> <section class="section niche-problem-section" style="background: var(--card-bg);"> <div class="max-w-4xl mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Masalah <span class="text-accent-pop">& Solusi</span></h2> </div> <div class="card-hard p-8 md:p-10 niche-highlight-card"> <div class="flex items-start gap-4 mb-4"> <span class="text-3xl flex-shrink-0">⚠️</span> <div> <h3 class="text-xl font-bold text-foreground mb-3">Kenapa Bisnis Anda Butuh Website Sekarang?</h3> <p class="text-text-secondary leading-relaxed text-lg">${r(n.problem)}</p> </div> </div> <div class="mt-6 pt-6" style="border-top: 2px dashed var(--accent);"> <div class="flex items-start gap-4"> <span class="text-3xl flex-shrink-0">✅</span> <div> <h3 class="text-xl font-bold text-foreground mb-3">Solusi Kami</h3> <p class="text-text-secondary leading-relaxed text-lg">
Kami membangun website profesional yang dirancang khusus untuk bisnis Anda di ${cityName}. Dengan desain premium, optimasi SEO lokal, dan fitur-fitur yang meningkatkan konversi, website Anda akan menjadi mesin penarik pelanggan baru 24/7.
</p> </div> </div> </div> </div> </div> </section> <div class="divider-band"></div> <!-- FITUR LAYANAN --> <section class="section"> <div class="max-w-6xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Fitur <span class="text-accent-pop">Website</span> yang Anda Dapatkan</h2> <p class="text-text-secondary text-lg">Fitur lengkap yang dirancang khusus untuk kebutuhan bisnis Anda di ${cityName}.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${n.features.map((feature) => renderTemplate`<div class="card-brutal p-8 hover:-translate-y-1 transition-transform"> <div class="icon-circle mb-6 bg-accent-light border-accent-dark"><span class="text-2xl">${feature.emoji}</span></div> <h3 class="text-xl font-bold mb-3 text-foreground">${r(feature.title)}</h3> <p class="text-text-secondary leading-relaxed">${r(feature.description)}</p> </div>`)} </div> </div> </section> <!-- KEUNGGULAN --> <section class="section" style="background: var(--card-bg);"> <div class="max-w-6xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Kenapa <span class="text-accent-pop">Memilih Kami?</span></h2> <p class="text-text-secondary text-lg">Keunggulan yang membedakan kami dari penyedia jasa website lainnya.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${n.usp.map((item) => renderTemplate`<div class="card-hard p-8 hover:-translate-y-1 transition-transform"> <div class="icon-circle mb-6 bg-accent-light border-accent-dark"><span class="text-2xl">${item.emoji}</span></div> <h3 class="text-xl font-bold mb-3 text-foreground">${r(item.title)}</h3> <p class="text-text-secondary leading-relaxed">${r(item.description)}</p> </div>`)} </div> </div> </section> <div class="divider-band"></div> <!-- TESTIMONI --> <section class="section"> <div class="max-w-6xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Apa Kata <span class="text-accent-pop">Klien Kami?</span></h2> <p class="text-text-secondary text-lg">Testimoni nyata dari klien yang sudah merasakan manfaat website profesional.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${n.testimonials.map((t) => renderTemplate`<div class="card-hard p-8 testimonial-card"> <div class="flex items-center gap-1 mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`${renderComponent($$result2, "Star", Star, { "className": "text-accent fill-accent", "size": 16 })}`)} </div> ${renderComponent($$result2, "Quote", Quote, { "className": "text-accent-dark opacity-30 mb-3", "size": 28 })} <p class="text-text-secondary leading-relaxed mb-6 italic">"${t.text}"</p> <div class="mt-auto pt-4" style="border-top: 1px solid #e5e7eb;"> <p class="font-bold text-foreground">${t.name}</p> <p class="text-sm text-text-secondary">${t.role}</p> </div> </div>`)} </div> </div> </section> <!-- HARGA --> <section id="harga" class="section bg-background"> <div class="max-w-6xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Paket <span class="text-accent-pop">Harga</span> Terbaik</h2> <p class="text-text-secondary text-lg">Investasi website profesional yang menghasilkan return berkali lipat lewat pelanggan baru.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"> <div class="card-hard flex flex-col p-8 bg-white"> <div class="mb-4"><span class="badge-brutal text-xs mb-4">UMKM / Personal</span><h3 class="text-2xl font-bold text-foreground">Paket Starter</h3></div> <div class="mb-6 flex items-baseline"><span class="text-3xl font-extrabold text-foreground">Rp1,6 Juta</span></div> <ul class="space-y-4 mb-8 flex-1"> ${["Custom Tema Responsif", "Domain & Hosting (1 Tahun)", "SEO On-Page Dasar", "Bandwidth Unmetered", "Integrasi Tombol WhatsApp", "Maks. 5 Halaman Dasar"].map((f) => renderTemplate`<li class="flex items-start gap-3 text-text-secondary">${renderComponent($$result2, "CheckCircle2", CircleCheck, { "className": "text-accent flex-shrink-0", "size": 20 })}<span>${f}</span></li>`)} </ul> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="btn-outline-brutal w-full justify-center">Pilih Paket</a> </div> <div class="card-hard flex flex-col p-8 transform md:-translate-y-4" style="background: var(--accent-light); border-color: var(--accent-dark);"> <div class="mb-4 relative"> <div class="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full border border-border-dark shadow-[2px_2px_0px_#0f172a] transform rotate-3">TERLARIS</div> <span class="badge-brutal text-xs mb-4 bg-white">Perusahaan / CV</span><h3 class="text-2xl font-bold text-foreground">Paket Pro</h3> </div> <div class="mb-6 flex items-baseline"><span class="text-3xl font-extrabold text-foreground">Rp2,2 Juta</span></div> <ul class="space-y-4 mb-8 flex-1"> ${["Semua Fitur Paket Starter", "Desain Halaman Khusus Premium", "Email Bisnis Profesional", "Setup Schema Markup / AI Overview", "Maks. 10 Halaman", "Gratis Setup Google My Business"].map((f) => renderTemplate`<li class="flex items-start gap-3 text-text-secondary font-medium">${renderComponent($$result2, "CheckCircle2", CircleCheck, { "className": "text-accent flex-shrink-0", "size": 20 })}<span>${f}</span></li>`)} </ul> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="btn-kirim w-full justify-center text-center">Pilih Paket Kami</a> </div> <div class="card-hard flex flex-col p-8 bg-white"> <div class="mb-4"><span class="badge-brutal text-xs mb-4">Corporate VIP</span><h3 class="text-2xl font-bold text-foreground">Paket Premium</h3></div> <div class="mb-6 flex items-baseline"><span class="text-3xl font-extrabold text-foreground">Rp2,9 Juta</span></div> <ul class="space-y-4 mb-8 flex-1"> ${["Semua Fitur Paket Pro", "Server Hosting Premium", "Katalog Produk Lanjut/LMS", "Fitur Bilingual (Dua Bahasa)", "Analisis Konversi", "Revisi Minor Selama Masa Aktif"].map((f) => renderTemplate`<li class="flex items-start gap-3 text-text-secondary">${renderComponent($$result2, "CheckCircle2", CircleCheck, { "className": "text-accent flex-shrink-0", "size": 20 })}<span>${f}</span></li>`)} </ul> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="btn-outline-brutal w-full justify-center">Pilih Paket</a> </div> </div> </div> </section> <div class="divider-band"></div> <!-- FAQ --> <section class="section pb-12" style="background: var(--card-bg);"> <div class="max-w-4xl mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Pertanyaan<span class="text-accent-pop"> Umum</span></h2> <p class="text-text-secondary text-lg">FAQ seputar jasa pembuatan website ${n.slug.replace(/-/g, " ")} di ${cityName}.</p> </div> <div class="space-y-4"> ${n.faq.map((faq) => renderTemplate`<div class="card-hard p-6"> <h3 class="text-lg font-bold mb-2 text-foreground flex items-center gap-2"><span class="text-accent">Q:</span> ${r(faq.q)}</h3> <p class="text-text-secondary pl-6 leading-relaxed">${r(faq.a)}</p> </div>`)} </div> </div> </section> <!-- CTA FINAL --> <section class="section bg-border-dark text-white text-center"> <div class="max-w-3xl mx-auto px-4"> <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
Siap Membuat Website <span style="color: var(--accent);">${nicheDisplayName}</span> di ${cityName}?
</h2> <p class="text-lg opacity-80 mb-10 leading-relaxed">Jangan biarkan kompetitor mengambil pelanggan Anda. Konsultasi gratis sekarang dan dapatkan website profesional dalam 7 hari!</p> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="btn-kirim text-lg py-4 px-10 inline-flex"> ${renderComponent($$result2, "MessageCircle", MessageCircle, { "className": "mr-2", "size": 22 })} Hubungi via WhatsApp
</a> </div> </section> <footer class="w-full py-8 text-center bg-border-dark text-white text-sm" style="border-top: 1px solid rgba(255,255,255,0.1);"> <p class="mb-2 opacity-80">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Rafiq Web Developer. All rights reserved.</p> <p class="opacity-60 text-xs">Jasa Website ${nicheDisplayName} Profesional di ${cityName}</p> </footer> </main> <a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="wa-float" aria-label="Hubungi via WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> </a> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(jsonLd))) })}` })}`;
}, "/home/malaka/Documents/rafiq/src/pages/[service]/NicheLandingPage.astro", void 0);
const $$file = "/home/malaka/Documents/rafiq/src/pages/[service]/NicheLandingPage.astro";
const $$url = "/[service]/NicheLandingPage";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$NicheLandingPage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$NicheLandingPage as $,
  CircleCheck as C,
  _page as _
};
