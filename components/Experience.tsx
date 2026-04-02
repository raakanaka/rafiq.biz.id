"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";

const experiences = [
    {
        title: "SEO Manager",
        company: "Asia Safety Protection®",
        type: "Freelance",
        location: "Bali, Indonesia",
        period: "Jan 2026 – Present",
        description:
            "Improving website structure, on-page/off-page SEO, and page speed performance to support organic growth and search visibility.",
        emoji: "🔍",
        color: { bg: "#dbeafe", border: "#2563eb" },
    },
    {
        title: "Frontend Developer",
        company: "PraktiQu",
        type: "Freelance",
        location: "Bandung, Indonesia",
        period: "Apr 2025 – Present",
        description:
            "Designing UI, building landing page systems, and creating responsive, user-friendly interfaces.",
        emoji: "⚛️",
        color: { bg: "#ede9fe", border: "#7c3aed" },
    },
    {
        title: "Senior Web Developer",
        company: "Al Khair Tour and Travel",
        type: "Freelance",
        location: "Medan, Indonesia",
        period: "Aug 2025 – Mar 2026",
        description:
            "Building, managing, and maintaining high-performance websites and providing technical support.",
        emoji: "🌍",
        color: { bg: "#d1fae5", border: "#059669" },
    },
    {
        title: "Senior Web Developer",
        company: "The Business Tailor Pte Ltd",
        type: "Remote",
        location: "Singapore",
        period: "Nov 2024 – Jul 2025",
        description:
            "Creating and maintaining the company's official website with modern web technologies.",
        emoji: "🏢",
        color: { bg: "#fef3c7", border: "#d97706" },
    },
    {
        title: "SEO Consultant",
        company: "PT. Duta Agensi",
        type: "Contract",
        location: "Jakarta, Indonesia",
        period: "Jan 2024 – Oct 2024",
        description:
            "Handling SEO structure, sandbox recovery strategies, and technical audits for various clients.",
        emoji: "📊",
        color: { bg: "#fce7f3", border: "#db2777" },
    },
    {
        title: "Web Developer",
        company: "Ouzen Group",
        type: "Full-Time",
        location: "Medan, Indonesia",
        period: "Jul 2019 – Feb 2023",
        description:
            "Full-stack development, technical troubleshooting, and site optimization for various digital projects.",
        emoji: "💻",
        color: { bg: "#e0f2fe", border: "#0284c7" },
    },
];

const typeColors: Record<string, { bg: string; color: string; border: string }> = {
    Freelance: { bg: "#d1fae5", color: "#065f46", border: "#059669" },
    Remote: { bg: "#dbeafe", color: "#1e40af", border: "#2563eb" },
    Contract: { bg: "#fef3c7", color: "#92400e", border: "#d97706" },
    "Full-Time": { bg: "#ede9fe", color: "#5b21b6", border: "#7c3aed" },
};

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2
                        className="text-3xl md:text-4xl font-extrabold mb-3"
                        style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                    >
                        Work <span className="text-accent-pop">Experience</span>
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem" }}>
                        My professional journey so far
                    </p>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={`${exp.company}-${exp.period}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="experience-item"
                        >
                            {/* Timeline dot */}
                            <div className="timeline-dot" style={{ background: exp.color.border }} />

                            {/* Card */}
                            <div className="card-brutal experience-card">
                                <div className="experience-card-header">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="icon-circle"
                                            style={{ background: exp.color.bg, width: 44, height: 44 }}
                                        >
                                            <span style={{ fontSize: "1.1rem" }}>{exp.emoji}</span>
                                        </div>
                                        <div>
                                            <h3
                                                className="text-base font-bold"
                                                style={{ color: "var(--foreground)", lineHeight: 1.3 }}
                                            >
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span
                                                    className="text-sm font-semibold"
                                                    style={{ color: "var(--accent-dark)" }}
                                                >
                                                    {exp.company}
                                                </span>
                                                <span
                                                    className="experience-type-badge"
                                                    style={{
                                                        background: typeColors[exp.type]?.bg,
                                                        color: typeColors[exp.type]?.color,
                                                        border: `1.5px solid ${typeColors[exp.type]?.border}`,
                                                    }}
                                                >
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p
                                    className="text-sm leading-relaxed mb-3"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {exp.description}
                                </p>

                                <div className="experience-meta">
                                    <span className="experience-meta-item">
                                        <Briefcase size={13} />
                                        {exp.period}
                                    </span>
                                    <span className="experience-meta-item">
                                        <MapPin size={13} />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* LinkedIn CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://www.linkedin.com/in/rafiq-alhafizh-adha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-brutal"
                        style={{ fontSize: "0.875rem" }}
                    >
                        View Full Profile on LinkedIn <ExternalLink size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
