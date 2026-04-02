"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import GitHubActivity from "@/components/GitHubActivity";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const iconColors = [
    { bg: "#fef3c7", border: "#d97706" },
    { bg: "#dbeafe", border: "#2563eb" },
    { bg: "#d1fae5", border: "#059669" },
];

const featuredProjects = [
    {
        title: "HALOEXPERT",
        description: "Learning Management System simplifying online training and education programs.",
        tech: ["LMS", "Education", "Platform"],
        link: "https://haloexpert.id",
        emoji: "📚",
    },
    {
        title: "Meja Kreatif Studio",
        description: "Modern website for a creative studio focusing on digital branding and aesthetics.",
        tech: ["Creative", "Branding", "UI/UX"],
        link: "https://mejakreatif.com",
        emoji: "🎨",
    },
    {
        title: "EKSPORA",
        description: "Platform empowering SMEs to enter and succeed in the international export market.",
        tech: ["SME", "Export", "Platform"],
        link: "https://ekspora.com",
        emoji: "🌍",
    },
];

const skills = [
    { name: "JavaScript", emoji: "⚡" },
    { name: "TypeScript", emoji: "🔷" },
    { name: "React", emoji: "⚛️" },
    { name: "Next.js", emoji: "▲" },
    { name: "Tailwind CSS", emoji: "🎨" },
    { name: "Node.js", emoji: "🟩" },
    { name: "SEO", emoji: "🔍" },
    { name: "UI/UX Design", emoji: "✨" },
];

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />

            {/* Divider band */}
            <div className="divider-band" />

            {/* Work Experience */}
            <Experience />

            {/* Divider band */}
            <div className="divider-band" />

            {/* GitHub Activity */}
            <GitHubActivity />

            {/* Divider band */}
            <div className="divider-band" />

            {/* Featured Projects */}
            <section className="section" style={{ background: "var(--card-bg)" }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-3xl md:text-4xl font-extrabold mb-3"
                            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                        >
                            Featured <span className="text-accent-pop">Projects</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem" }}>
                            A selection of work I&apos;m proud of
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <motion.a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="card-brutal group"
                                style={{ padding: "1.75rem", textDecoration: "none", display: "block" }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="icon-circle"
                                        style={{
                                            background: iconColors[i % iconColors.length].bg,
                                        }}
                                    >
                                        <span style={{ fontSize: "1.25rem" }}>{project.emoji}</span>
                                    </div>
                                    <ArrowUpRight
                                        size={18}
                                        style={{
                                            color: "var(--text-secondary)",
                                            transition: "transform 0.2s",
                                        }}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                                <h3
                                    className="text-lg font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-sm mb-5 leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="chip">{t}</span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider band */}
            <div className="divider-band" />

            {/* Skills */}
            <section className="section">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-3xl md:text-4xl font-extrabold mb-3"
                            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                        >
                            Skills & <span className="text-accent-pop">Stack</span>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem" }}>
                            Technologies I work with daily
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="badge-brutal"
                                style={{ fontSize: "0.875rem", padding: "8px 16px" }}
                            >
                                <span>{skill.emoji}</span> {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
