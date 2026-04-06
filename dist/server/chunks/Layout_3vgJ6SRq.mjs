import { c as createComponent } from './astro-component_XJQSBfgp.mjs';
import 'piccolore';
import { h as addAttribute, q as renderHead, v as renderSlot, r as renderTemplate } from './server_arAVftlG.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Rafiq — Web Developer & SEO Specialist",
    description = "Hi, I'm Rafiq. A Web Developer and SEO Specialist based in Indonesia. I craft performant, accessible, and visually polished web experiences.",
    keywords = ["Rafiq", "Web Developer", "SEO Specialist", "Indonesia", "Frontend Developer", "Astro", "React"],
    canonicalUrl = Astro2.url.href
  } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta name="keywords"${addAttribute(keywords.join(", "), "content")}><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical"${addAttribute(canonicalUrl, "href")}><link rel="sitemap" href="/sitemap.xml"><link rel="alternate" type="application/rss+xml" href="/feed.xml"><link rel="llms" type="text/plain" href="/llms.txt"><link rel="llms-full" type="text/plain" href="/llms-full.txt"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google Verification --><meta name="google-site-verification" content="5miu4ARJmpD9kvO9MCJEXx68h31JTqARMZbMlb8Kem4"><!-- OpenGraph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:site_name" content="Rafiq's Portfolio"><meta property="og:locale" content="id_ID"><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><title>${title}</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Github/rafiq.biz.id/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
