globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_BDQLFbuj.mjs";
import { k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from "./worker-entry_C3X8gKDK.mjs";
import { c as createLucideIcon, $ as $$Layout } from "./createLucideIcon_Bp2E0FbM.mjs";
import { j as jsxRuntimeExports, m as motion, N as Navbar, F as Footer } from "./Footer_1b0BUHYF.mjs";
import { M as MapPin } from "./map-pin_SU6FhInq.mjs";
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      style: { minHeight: "88vh", display: "flex", alignItems: "center" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
              backgroundSize: "40px 40px",
              zIndex: 0
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "10%",
              right: "-5%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,158,14,0.15) 0%, transparent 70%)",
              zIndex: 0
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 w-full relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16, rotate: -2 },
                animate: { opacity: 1, y: 0, rotate: 0 },
                transition: { duration: 0.5 },
                className: "mb-6",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-brutal", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, style: { color: "var(--accent)" } }),
                  "Available for freelance"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6",
                style: { letterSpacing: "-0.02em", color: "var(--foreground)" },
                children: [
                  "Build, Create, &",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-pop", children: "Stand Out" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "— With",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "var(--accent)",
                        color: "#fff",
                        padding: "2px 12px",
                        borderRadius: "var(--radius-sm)",
                        border: "2px solid var(--border-dark)",
                        boxShadow: "3px 3px 0px 0px var(--border-dark)"
                      },
                      children: "Rafiq"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.25 },
                className: "text-lg mb-10 leading-relaxed",
                style: { color: "var(--text-secondary)", maxWidth: 480 },
                children: "Web Developer & SEO Specialist based in Indonesia. I craft performant, accessible, and visually polished digital experiences."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                className: "flex flex-wrap gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/projects", className: "btn-kirim", children: [
                    "View Projects ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "btn-outline-brutal", children: "About Me" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.92 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.7, delay: 0.3 },
              className: "hidden lg:block relative",
              style: { minHeight: 400 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "card-hard",
                    style: {
                      padding: "2rem",
                      position: "absolute",
                      top: "10%",
                      left: "10%",
                      width: "80%",
                      animation: "float 6s ease-in-out infinite"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "icon-circle", style: { background: "var(--accent-light)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.25rem" }, children: "💻" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", style: { color: "var(--foreground)" }, children: "Web Developer" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", style: { color: "var(--text-secondary)" }, children: "rafiq.biz.id" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["React", "Next.js", "SEO", "Node.js"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: t }, t)) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "badge-brutal",
                    style: {
                      position: "absolute",
                      top: "0%",
                      right: "5%",
                      animation: "float 8s ease-in-out infinite 1s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.875rem" }, children: "🟢" }),
                      " Available to work"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "card-hard",
                    style: {
                      position: "absolute",
                      bottom: "5%",
                      right: "5%",
                      padding: "1rem 1.25rem",
                      animation: "float 7s ease-in-out infinite 0.5s"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold", style: { color: "var(--accent)" }, children: "12+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", style: { color: "var(--text-secondary)" }, children: "Projects Done" })
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
const experiences = [
  {
    title: "SEO Manager",
    company: "Asia Safety Protection®",
    type: "Freelance",
    location: "Bali, Indonesia",
    period: "Jan 2026 – Present",
    description: "Improving website structure, on-page/off-page SEO, and page speed performance to support organic growth and search visibility.",
    emoji: "🔍",
    color: { bg: "#dbeafe", border: "#2563eb" }
  },
  {
    title: "Frontend Developer",
    company: "PraktiQu",
    type: "Freelance",
    location: "Bandung, Indonesia",
    period: "Apr 2025 – Present",
    description: "Designing UI, building landing page systems, and creating responsive, user-friendly interfaces.",
    emoji: "⚛️",
    color: { bg: "#ede9fe", border: "#7c3aed" }
  },
  {
    title: "Senior Web Developer",
    company: "Al Khair Tour and Travel",
    type: "Freelance",
    location: "Medan, Indonesia",
    period: "Aug 2025 – Mar 2026",
    description: "Building, managing, and maintaining high-performance websites and providing technical support.",
    emoji: "🌍",
    color: { bg: "#d1fae5", border: "#059669" }
  },
  {
    title: "Senior Web Developer",
    company: "The Business Tailor Pte Ltd",
    type: "Remote",
    location: "Singapore",
    period: "Nov 2024 – Jul 2025",
    description: "Creating and maintaining the company's official website with modern web technologies.",
    emoji: "🏢",
    color: { bg: "#fef3c7", border: "#d97706" }
  },
  {
    title: "SEO Consultant",
    company: "PT. Duta Agensi",
    type: "Contract",
    location: "Jakarta, Indonesia",
    period: "Jan 2024 – Oct 2024",
    description: "Handling SEO structure, sandbox recovery strategies, and technical audits for various clients.",
    emoji: "📊",
    color: { bg: "#fce7f3", border: "#db2777" }
  },
  {
    title: "Web Developer",
    company: "Ouzen Group",
    type: "Full-Time",
    location: "Medan, Indonesia",
    period: "Jul 2019 – Feb 2023",
    description: "Full-stack development, technical troubleshooting, and site optimization for various digital projects.",
    emoji: "💻",
    color: { bg: "#e0f2fe", border: "#0284c7" }
  }
];
const typeColors = {
  Freelance: { bg: "#d1fae5", color: "#065f46", border: "#059669" },
  Remote: { bg: "#dbeafe", color: "#1e40af", border: "#2563eb" },
  Contract: { bg: "#fef3c7", color: "#92400e", border: "#d97706" },
  "Full-Time": { bg: "#ede9fe", color: "#5b21b6", border: "#7c3aed" }
};
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", id: "experience", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h2",
            {
              className: "text-3xl md:text-4xl font-extrabold mb-3",
              style: { color: "var(--foreground)", letterSpacing: "-0.02em" },
              children: [
                "Work ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-pop", children: "Experience" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "1.0625rem" }, children: "My professional journey so far" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "experience-timeline", children: experiences.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "experience-item",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-dot", style: { background: exp.color.border } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-brutal experience-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "experience-card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "icon-circle",
                  style: { background: exp.color.bg, width: 44, height: 44 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1.1rem" }, children: exp.emoji })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-base font-bold",
                    style: { color: "var(--foreground)", lineHeight: 1.3 },
                    children: exp.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-sm font-semibold",
                      style: { color: "var(--accent-dark)" },
                      children: exp.company
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "experience-type-badge",
                      style: {
                        background: typeColors[exp.type]?.bg,
                        color: typeColors[exp.type]?.color,
                        border: `1.5px solid ${typeColors[exp.type]?.border}`
                      },
                      children: exp.type
                    }
                  )
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm leading-relaxed mb-3",
                style: { color: "var(--text-secondary)" },
                children: exp.description
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-meta", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "experience-meta-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 13 }),
                exp.period
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "experience-meta-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13 }),
                exp.location
              ] })
            ] })
          ] })
        ]
      },
      `${exp.company}-${exp.period}`
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.3 },
        className: "text-center mt-12",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/rafiq-alhafizh-adha/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "btn-outline-brutal",
            style: { fontSize: "0.875rem" },
            children: [
              "View Full Profile on LinkedIn ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 })
            ]
          }
        )
      }
    )
  ] }) });
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const iconColors = [
    { bg: "#fef3c7", border: "#d97706" },
    { bg: "#dbeafe", border: "#2563eb" },
    { bg: "#d1fae5", border: "#059669" }
  ];
  const featuredProjects = [
    {
      title: "HALOEXPERT",
      description: "Learning Management System simplifying online training and education programs.",
      tech: ["LMS", "Education", "Platform"],
      link: "https://haloexpert.id",
      emoji: "📚"
    },
    {
      title: "Meja Kreatif Studio",
      description: "Modern website for a creative studio focusing on digital branding and aesthetics.",
      tech: ["Creative", "Branding", "UI/UX"],
      link: "https://mejakreatif.com",
      emoji: "🎨"
    },
    {
      title: "EKSPORA",
      description: "Platform empowering SMEs to enter and succeed in the international export market.",
      tech: ["SME", "Export", "Platform"],
      link: "https://ekspora.com",
      emoji: "🌍"
    }
  ];
  const skills = [
    { name: "JavaScript", emoji: "⚡" },
    { name: "TypeScript", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "Astro", emoji: "🚀" },
    { name: "Tailwind CSS", emoji: "🎨" },
    { name: "Node.js", emoji: "🟩" },
    { name: "SEO", emoji: "🔍" },
    { name: "UI/UX Design", emoji: "✨" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col"> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/malaka/Documents/rafiq/components/Navbar", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/malaka/Documents/rafiq/components/Hero", "client:component-export": "default" })} <!-- Divider band --> <div class="divider-band"></div> <!-- Work Experience --> ${renderComponent($$result2, "Experience", Experience, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/malaka/Documents/rafiq/components/Experience", "client:component-export": "default" })} <!-- Divider band --> <div class="divider-band"></div> <!-- Featured Projects --> <section class="section" style="background: var(--card-bg)"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-extrabold mb-3" style="color: var(--foreground); letter-spacing: -0.02em;">
Featured <span class="text-accent-pop">Projects</span> </h2> <p style="color: var(--text-secondary); font-size: 1.0625rem;">
A selection of work I'm proud of
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${featuredProjects.map((project, i) => renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="card-brutal group block" style="padding: 1.75rem; text-decoration: none;"> <div class="flex items-start justify-between mb-4"> <div class="icon-circle"${addAttribute(`background: ${iconColors[i % iconColors.length].bg};`, "style")}> <span style="font-size: 1.25rem;">${project.emoji}</span> </div> <!-- Basic implementation of ArrowUpRight svg since lucide react icon is inside an astro map --> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style="color: var(--text-secondary); transition: transform 0.2s;"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> </div> <h3 class="text-lg font-bold mb-2" style="color: var(--foreground);"> ${project.title} </h3> <p class="text-sm mb-5 leading-relaxed" style="color: var(--text-secondary);"> ${project.description} </p> <div class="flex flex-wrap gap-2"> ${project.tech.map((t) => renderTemplate`<span class="chip">${t}</span>`)} </div> </a>`)} </div> </div> </section> <!-- Divider band --> <div class="divider-band"></div> <!-- Skills --> <section class="section"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-extrabold mb-3" style="color: var(--foreground); letter-spacing: -0.02em;">
Skills & <span class="text-accent-pop">Stack</span> </h2> <p style="color: var(--text-secondary); font-size: 1.0625rem;">
Technologies I work with daily
</p> </div> <div class="flex flex-wrap justify-center gap-4"> ${skills.map((skill) => renderTemplate`<div class="badge-brutal" style="font-size: 0.875rem; padding: 8px 16px;"> <span>${skill.emoji}</span> ${skill.name} </div>`)} </div> </div> </section> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/malaka/Documents/rafiq/components/Footer", "client:component-export": "default" })} </main> ` })}`;
}, "/home/malaka/Documents/rafiq/src/pages/index.astro", void 0);
const $$file = "/home/malaka/Documents/rafiq/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
