"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const skills = [
    { name: "JavaScript", emoji: "⚡" },
    { name: "TypeScript", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "Next.js", emoji: "▲" },
    { name: "Tailwind CSS", emoji: "🎨" },
    { name: "Node.js", emoji: "🟩" },
    { name: "Git", emoji: "🔀" },
    { name: "UI/UX", emoji: "✨" },
    { name: "SEO", emoji: "🔍" },
    { name: "Keyword Research", emoji: "🔑" },
    { name: "Analytics", emoji: "📊" },
];

export default function About() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="section flex-1">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-extrabold mb-4"
                            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                        >
                            About <span className="text-accent-pop">Me</span>
                        </h1>
                        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                            Get to know the person behind the code ✦
                        </p>
                    </motion.div>

                    {/* Bio card (hard border style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="card-hard mb-12"
                        style={{ padding: "2rem" }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="icon-circle" style={{ background: "var(--accent-light)" }}>
                                <span style={{ fontSize: "1.25rem" }}>👋</span>
                            </div>
                            <div>
                                <div className="text-base font-bold" style={{ color: "var(--foreground)" }}>Rafiq</div>
                                <div className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>Web Developer & SEO Specialist</div>
                            </div>
                        </div>
                        <p
                            className="text-base leading-relaxed mb-4"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            I am Rafiq, a dedicated Web Developer and SEO Specialist based in Indonesia.
                            I specialize in building accessible, performant, and visually striking applications.
                            With a strong background in modern web technologies, I turn complex problems into elegant solutions.
                        </p>
                        <p
                            className="text-base leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            My journey began with a curiosity for how things work on the screen.
                            Today, I work with the latest tech stack including Next.js, React, and Tailwind CSS
                            to deliver high-quality digital experiences.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2
                            className="text-2xl font-extrabold mb-6"
                            style={{ color: "var(--foreground)" }}
                        >
                            Skills ⚡
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, i) => (
                                <motion.span
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                                    className="badge-brutal"
                                    style={{ fontSize: "0.8125rem", padding: "6px 14px" }}
                                >
                                    <span>{skill.emoji}</span> {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
