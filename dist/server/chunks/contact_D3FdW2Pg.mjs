import { c as createComponent } from './astro-component_XJQSBfgp.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './server_arAVftlG.mjs';
import { $ as $$Layout } from './Layout_3vgJ6SRq.mjs';
import { N as Navbar, F as Footer } from './Footer_vnFKzppp.mjs';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactColors = [
    { bg: "#fef3c7", icon: "#d97706" },
    { bg: "#dbeafe", icon: "#2563eb" },
    { bg: "#d1fae5", icon: "#059669" },
    { bg: "#fce7f3", icon: "#db2777" }
  ];
  const contacts = [
    {
      title: "Email",
      value: "rafiq.adha@rafiq.biz.id",
      href: "mailto:rafiq.adha@rafiq.biz.id"
    },
    {
      title: "LinkedIn",
      value: "@rafiq-alhafizh-adha",
      href: "https://linkedin.com/in/rafiq-alhafizh-adha"
    },
    {
      title: "GitHub",
      value: "/raakanaka",
      href: "https://github.com/raakanaka"
    },
    {
      title: "Location",
      value: "Jakarta, Indonesia",
      href: null
    }
  ];
  const getIcon = (title) => {
    switch (title) {
      case "Email":
        return Mail;
      case "LinkedIn":
        return Linkedin;
      case "GitHub":
        return Github;
      case "Location":
        return MapPin;
      default:
        return MapPin;
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Rafiq", "description": "Get in touch with Rafiq" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col"> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/rafiq.biz.id/components/Navbar", "client:component-export": "default" })} <section class="section flex-1 flex items-center"> <div class="max-w-4xl mx-auto w-full"> <!-- Header --> <div class="text-center mb-14"> <h1 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: var(--foreground); letter-spacing: -0.02em;">
Get in <span class="text-accent-pop">Touch</span> </h1> <p class="text-lg mx-auto" style="color: var(--text-secondary); max-width: 480px;">
Ready to start a project? I'm available for freelance work and collaborations ✦
</p> </div> <!-- Contact cards --> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${contacts.map((item, i) => {
    const Icon = getIcon(item.title);
    const isLink = !!item.href;
    return isLink ? renderTemplate`<a${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer" class="card-brutal flex items-center gap-5 hover:-translate-y-1 transition-transform"${addAttribute(`padding: 1.5rem 1.75rem; text-decoration: none; display: flex;`, "style")}> <div class="icon-circle"${addAttribute(`background: ${contactColors[i].bg}; color: ${contactColors[i].icon};`, "style")}> ${renderComponent($$result2, "Icon", Icon, { "size": 22 })} </div> <div> <div class="text-sm font-bold mb-0.5" style="color: var(--text-secondary);"> ${item.title} </div> <div class="text-base font-extrabold" style="color: var(--foreground);"> ${item.value} </div> </div> </a>` : renderTemplate`<div class="card-brutal flex items-center gap-5 hover:-translate-y-1 transition-transform"${addAttribute(`padding: 1.5rem 1.75rem; display: flex;`, "style")}> <div class="icon-circle"${addAttribute(`background: ${contactColors[i].bg}; color: ${contactColors[i].icon};`, "style")}> ${renderComponent($$result2, "Icon", Icon, { "size": 22 })} </div> <div> <div class="text-sm font-bold mb-0.5" style="color: var(--text-secondary);"> ${item.title} </div> <div class="text-base font-extrabold" style="color: var(--foreground);"> ${item.value} </div> </div> </div>`;
  })} </div> </div> </section> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Github/rafiq.biz.id/components/Footer", "client:component-export": "default" })} </main> ` })}`;
}, "D:/Github/rafiq.biz.id/src/pages/contact.astro", void 0);

const $$file = "D:/Github/rafiq.biz.id/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
