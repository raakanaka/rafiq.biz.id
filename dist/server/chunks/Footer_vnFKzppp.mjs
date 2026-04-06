import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Menu, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];
function Navbar() {
  const [pathname, setPathname] = useState("/");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "sticky top-0 z-50",
      style: {
        background: "var(--card-bg)",
        borderBottom: "2px solid var(--border-dark)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/",
              className: "text-xl font-extrabold",
              style: {
                color: "var(--foreground)",
                textDecoration: "none",
                fontFamily: "var(--font-heading)"
              },
              children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--accent)" }, children: "R" }),
                "afiq",
                /* @__PURE__ */ jsx("span", { style: { color: "var(--accent)" }, children: "." })
              ]
            }
          ),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-1", children: navItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: item.path,
              className: "px-4 py-2 text-sm font-bold transition-all",
              style: {
                color: pathname === item.path ? "var(--accent)" : "var(--text-secondary)",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
                background: pathname === item.path ? "var(--accent-light)" : "transparent",
                border: pathname === item.path ? "1.5px solid var(--accent-dark)" : "1.5px solid transparent",
                fontFamily: "var(--font-heading)"
              },
              children: item.name
            }
          ) }, item.path)) }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "btn-kirim hidden md:inline-flex", style: { padding: "0.5rem 1.25rem", fontSize: "0.8125rem", textDecoration: "none" }, children: "Let's Talk ✦" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden p-2",
              style: {
                background: "none",
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-sm)",
                color: "var(--foreground)",
                cursor: "pointer",
                boxShadow: "2px 2px 0px 0px var(--border-dark)"
              },
              onClick: () => setMobileOpen(!mobileOpen),
              "aria-label": "Toggle menu",
              children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden overflow-hidden",
            style: { borderTop: "2px solid var(--border-dark)" },
            children: /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex flex-col gap-2", children: [
              navItems.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.path,
                  onClick: () => setMobileOpen(false),
                  className: "py-2.5 px-4 text-sm font-bold",
                  style: {
                    color: pathname === item.path ? "var(--accent)" : "var(--foreground)",
                    textDecoration: "none",
                    borderRadius: "var(--radius-sm)",
                    background: pathname === item.path ? "var(--accent-light)" : "transparent",
                    border: pathname === item.path ? "1.5px solid var(--accent-dark)" : "1.5px solid transparent",
                    fontFamily: "var(--font-heading)"
                  },
                  children: item.name
                },
                item.path
              )),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/contact",
                  onClick: () => setMobileOpen(false),
                  className: "btn-kirim mt-2",
                  style: { textAlign: "center", fontSize: "0.8125rem", textDecoration: "none" },
                  children: "Let's Talk ✦"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}

function Footer() {
  return /* @__PURE__ */ jsx(
    "footer",
    {
      style: {
        borderTop: "2px solid var(--border-dark)",
        background: "var(--card-bg)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 py-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start gap-1", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/",
                className: "text-lg font-extrabold",
                style: {
                  color: "var(--foreground)",
                  textDecoration: "none",
                  fontFamily: "var(--font-heading)"
                },
                children: [
                  /* @__PURE__ */ jsx("span", { style: { color: "var(--accent)" }, children: "R" }),
                  "afiq",
                  /* @__PURE__ */ jsx("span", { style: { color: "var(--accent)" }, children: "." })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "var(--text-secondary)" }, children: "Building polished web experiences ✦" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [
            { icon: /* @__PURE__ */ jsx(Github, { size: 18 }), href: "https://github.com/raakanaka", label: "GitHub" },
            { icon: /* @__PURE__ */ jsx(Linkedin, { size: 18 }), href: "https://linkedin.com/in/rafiq-alhafizh", label: "LinkedIn" },
            { icon: /* @__PURE__ */ jsx(Mail, { size: 18 }), href: "mailto:rafiq.adha@rafiq.biz.id", label: "Email" }
          ].map((social) => /* @__PURE__ */ jsx(
            "a",
            {
              href: social.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": social.label,
              className: "icon-circle",
              style: {
                width: 40,
                height: 40,
                color: "var(--foreground)",
                background: "var(--card-bg)",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.15s",
                boxShadow: "2px 2px 0px 0px var(--border-dark)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "var(--accent-light)";
                e.currentTarget.style.transform = "translate(-1px, -1px)";
                e.currentTarget.style.boxShadow = "3px 3px 0px 0px var(--border-dark)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "var(--card-bg)";
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "2px 2px 0px 0px var(--border-dark)";
              },
              children: social.icon
            },
            social.label
          )) })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mt-8 pt-5 text-center text-sm font-semibold",
            style: { borderTop: "1.5px solid #e5e7eb", color: "var(--text-secondary)" },
            children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Rafiq. All rights reserved."
            ]
          }
        )
      ] })
    }
  );
}

export { Footer as F, Navbar as N };
