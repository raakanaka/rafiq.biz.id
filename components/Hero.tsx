"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden"
            style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}
        >
            {/* Decorative grid background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    zIndex: 0,
                }}
            />

            {/* Decorative blob */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "-5%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(245,158,14,0.15) 0%, transparent 70%)",
                    zIndex: 0,
                }}
            />

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text content */}
                    <div>
                        {/* Sticker badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16, rotate: -2 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="badge-brutal">
                                <Sparkles size={14} style={{ color: "var(--accent)" }} />
                                Available for freelance
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
                            style={{ letterSpacing: "-0.02em", color: "var(--foreground)" }}
                        >
                            Build, Create, &{" "}
                            <span className="text-accent-pop">Stand Out</span>
                            <br />
                            — With{" "}
                            <span
                                style={{
                                    background: "var(--accent)",
                                    color: "#fff",
                                    padding: "2px 12px",
                                    borderRadius: "var(--radius-sm)",
                                    border: "2px solid var(--border-dark)",
                                    boxShadow: "3px 3px 0px 0px var(--border-dark)",
                                }}
                            >
                                Rafiq
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-lg mb-10 leading-relaxed"
                            style={{ color: "var(--text-secondary)", maxWidth: 480 }}
                        >
                            Web Developer & SEO Specialist based in Indonesia.
                            I craft performant, accessible, and visually polished digital experiences.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="/projects" className="btn-kirim">
                                View Projects <ArrowRight size={16} />
                            </a>
                            <a href="/about" className="btn-outline-brutal">
                                About Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Decorative card collage */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="hidden lg:block relative"
                        style={{ minHeight: 400 }}
                    >
                        {/* Main card */}
                        <div
                            className="card-hard"
                            style={{
                                padding: "2rem",
                                position: "absolute",
                                top: "10%",
                                left: "10%",
                                width: "80%",
                                animation: "float 6s ease-in-out infinite",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="icon-circle" style={{ background: "var(--accent-light)" }}>
                                    <span style={{ fontSize: "1.25rem" }}>💻</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold" style={{ color: "var(--foreground)" }}>Web Developer</div>
                                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>rafiq.biz.id</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "SEO", "Node.js"].map((t) => (
                                    <span key={t} className="chip">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Small floating badge */}
                        <div
                            className="badge-brutal"
                            style={{
                                position: "absolute",
                                top: "0%",
                                right: "5%",
                                animation: "float 8s ease-in-out infinite 1s",
                            }}
                        >
                            <span style={{ fontSize: "0.875rem" }}>🟢</span> Available to work
                        </div>

                        {/* Stats mini-card */}
                        <div
                            className="card-hard"
                            style={{
                                position: "absolute",
                                bottom: "5%",
                                right: "5%",
                                padding: "1rem 1.25rem",
                                animation: "float 7s ease-in-out infinite 0.5s",
                            }}
                        >
                            <div className="text-2xl font-extrabold" style={{ color: "var(--accent)" }}>12+</div>
                            <div className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>Projects Done</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
