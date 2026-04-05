"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [pathname, setPathname] = useState("/");
    
    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav
            className="sticky top-0 z-50"
            style={{
                background: "var(--card-bg)",
                borderBottom: "2px solid var(--border-dark)",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <a
                    href="/"
                    className="text-xl font-extrabold"
                    style={{
                        color: "var(--foreground)",
                        textDecoration: "none",
                        fontFamily: "var(--font-heading)",
                    }}
                >
                    <span style={{ color: "var(--accent)" }}>R</span>afiq<span style={{ color: "var(--accent)" }}>.</span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                className="px-4 py-2 text-sm font-bold transition-all"
                                style={{
                                    color: pathname === item.path ? "var(--accent)" : "var(--text-secondary)",
                                    textDecoration: "none",
                                    borderRadius: "var(--radius-sm)",
                                    background: pathname === item.path ? "var(--accent-light)" : "transparent",
                                    border: pathname === item.path ? "1.5px solid var(--accent-dark)" : "1.5px solid transparent",
                                    fontFamily: "var(--font-heading)",
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Desktop */}
                <a href="/contact" className="btn-kirim hidden md:inline-flex" style={{ padding: "0.5rem 1.25rem", fontSize: "0.8125rem", textDecoration: "none" }}>
                    Let&apos;s Talk ✦
                </a>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden p-2"
                    style={{
                        background: "none",
                        border: "2px solid var(--border-dark)",
                        borderRadius: "var(--radius-sm)",
                        color: "var(--foreground)",
                        cursor: "pointer",
                        boxShadow: "2px 2px 0px 0px var(--border-dark)",
                    }}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                        style={{ borderTop: "2px solid var(--border-dark)" }}
                    >
                        <div className="px-6 py-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="py-2.5 px-4 text-sm font-bold"
                                    style={{
                                        color: pathname === item.path ? "var(--accent)" : "var(--foreground)",
                                        textDecoration: "none",
                                        borderRadius: "var(--radius-sm)",
                                        background: pathname === item.path ? "var(--accent-light)" : "transparent",
                                        border: pathname === item.path ? "1.5px solid var(--accent-dark)" : "1.5px solid transparent",
                                        fontFamily: "var(--font-heading)",
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-kirim mt-2"
                                style={{ textAlign: "center", fontSize: "0.8125rem", textDecoration: "none" }}
                            >
                                Let&apos;s Talk ✦
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
