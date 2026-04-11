globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BDQLFbuj.mjs";
import { k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_C3X8gKDK.mjs";
import { $ as $$Layout } from "./createLucideIcon_Bp2E0FbM.mjs";
import { N as Navbar, F as Footer } from "./Footer_1b0BUHYF.mjs";
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const skills = [
    { name: "JavaScript", emoji: "⚡" },
    { name: "TypeScript", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "Astro", emoji: "🚀" },
    { name: "Tailwind CSS", emoji: "🎨" },
    { name: "Node.js", emoji: "🟩" },
    { name: "Git", emoji: "🔀" },
    { name: "UI/UX", emoji: "✨" },
    { name: "SEO", emoji: "🔍" },
    { name: "Keyword Research", emoji: "🔑" },
    { name: "Analytics", emoji: "📊" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Me | Rafiq", "description": "Get to know Rafiq, Web Developer & SEO Specialist" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col"> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/malaka/Documents/rafiq/components/Navbar", "client:component-export": "default" })} <section class="section flex-1"> <div class="max-w-4xl mx-auto"> <!-- Header --> <div class="mb-12"> <h1 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: var(--foreground); letter-spacing: -0.02em;">
About <span class="text-accent-pop">Me</span> </h1> <p class="text-lg" style="color: var(--text-secondary);">
Get to know the person behind the code ✦
</p> </div> <!-- Bio card (hard border style) --> <div class="card-hard mb-12" style="padding: 2rem;"> <div class="flex items-center gap-3 mb-5"> <div class="icon-circle" style="background: var(--accent-light);"> <span style="font-size: 1.25rem;">👋</span> </div> <div> <div class="text-base font-bold" style="color: var(--foreground);">Rafiq</div> <div class="text-xs font-semibold" style="color: var(--text-secondary);">Web Developer & SEO Specialist</div> </div> </div> <p class="text-base leading-relaxed mb-4" style="color: var(--text-secondary);">
I am Rafiq, a dedicated Web Developer and SEO Specialist based in Indonesia.
                        I specialize in building accessible, performant, and visually striking applications.
                        With a strong background in modern web technologies, I turn complex problems into elegant solutions.
</p> <p class="text-base leading-relaxed" style="color: var(--text-secondary);">
My journey began with a curiosity for how things work on the screen.
                        Today, I work with the latest tech stack including Astro, React, and Tailwind CSS
                        to deliver high-quality digital experiences.
</p> </div> <!-- Skills --> <div> <h2 class="text-2xl font-extrabold mb-6" style="color: var(--foreground);">
Skills ⚡
</h2> <div class="flex flex-wrap gap-3"> ${skills.map((skill) => renderTemplate`<span class="badge-brutal hover:-translate-y-1 hover:shadow-[3px_3px_0px_var(--border-dark)] transition-all duration-300" style="font-size: 0.8125rem; padding: 6px 14px; display: inline-block;"> <span>${skill.emoji}</span> ${skill.name} </span>`)} </div> </div> </div> </section> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/malaka/Documents/rafiq/components/Footer", "client:component-export": "default" })} </main> ` })}`;
}, "/home/malaka/Documents/rafiq/src/pages/about.astro", void 0);
const $$file = "/home/malaka/Documents/rafiq/src/pages/about.astro";
const $$url = "/about";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
