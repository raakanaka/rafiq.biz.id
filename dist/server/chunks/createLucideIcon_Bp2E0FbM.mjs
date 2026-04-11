globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BDQLFbuj.mjs";
import { g as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate, n as reactExports } from "./worker-entry_C3X8gKDK.mjs";
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Rafiq — Web Developer & SEO Specialist",
    description = "Hi, I'm Rafiq. A Web Developer and SEO Specialist based in Indonesia. I craft performant, accessible, and visually polished web experiences.",
    keywords = ["Rafiq", "Web Developer", "SEO Specialist", "Indonesia", "Frontend Developer", "Astro", "React"],
    canonicalUrl = Astro2.url.href,
    robots = "index, follow"
  } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta name="keywords"${addAttribute(keywords.join(", "), "content")}><meta name="robots"${addAttribute(robots, "content")}><meta name="googlebot"${addAttribute(robots, "content")}><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical"${addAttribute(canonicalUrl, "href")}><link rel="sitemap" href="/sitemap.xml"><link rel="alternate" type="application/rss+xml" href="/feed.xml"><link rel="llms" type="text/plain" href="/llms.txt"><link rel="llms-full" type="text/plain" href="/llms-full.txt"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google Verification --><meta name="google-site-verification" content="5miu4ARJmpD9kvO9MCJEXx68h31JTqARMZbMlb8Kem4"><!-- OpenGraph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:site_name" content="Rafiq's Portfolio"><meta property="og:locale" content="id_ID"><meta property="og:type" content="website"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><title>${title}</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/malaka/Documents/rafiq/src/layouts/Layout.astro", void 0);
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
export {
  $$Layout as $,
  createLucideIcon as c
};
