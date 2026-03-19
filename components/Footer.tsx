import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "2px solid var(--border-dark)",
                background: "var(--card-bg)",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <Link
                            href="/"
                            className="text-lg font-extrabold"
                            style={{
                                color: "var(--foreground)",
                                textDecoration: "none",
                                fontFamily: "var(--font-heading)",
                            }}
                        >
                            <span style={{ color: "var(--accent)" }}>R</span>afiq<span style={{ color: "var(--accent)" }}>.</span>
                        </Link>
                        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            Building polished web experiences ✦
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: <Github size={18} />, href: "https://github.com/raakanaka", label: "GitHub" },
                            { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/rafiq-alhafizh", label: "LinkedIn" },
                            { icon: <Mail size={18} />, href: "mailto:rafiq.adha@rafiq.biz.id", label: "Email" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="icon-circle"
                                style={{
                                    width: 40,
                                    height: 40,
                                    color: "var(--foreground)",
                                    background: "var(--card-bg)",
                                    textDecoration: "none",
                                    transition: "background 0.2s, transform 0.15s, box-shadow 0.15s",
                                    boxShadow: "2px 2px 0px 0px var(--border-dark)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--accent-light)";
                                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                                    e.currentTarget.style.boxShadow = "3px 3px 0px 0px var(--border-dark)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "var(--card-bg)";
                                    e.currentTarget.style.transform = "translate(0, 0)";
                                    e.currentTarget.style.boxShadow = "2px 2px 0px 0px var(--border-dark)";
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom line */}
                <div
                    className="mt-8 pt-5 text-center text-sm font-semibold"
                    style={{ borderTop: "1.5px solid #e5e7eb", color: "var(--text-secondary)" }}
                >
                    © {new Date().getFullYear()} Rafiq. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
