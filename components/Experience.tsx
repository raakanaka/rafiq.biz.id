"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";

const experiences = [
    {
        title: "SEO - Web Development",
        company: "Asia Safety Protection",
        type: "Freelance",
        location: "Remote",
        period: "Jan 2026 – Present",
        description:
            "Freelance SEO Manager focused on improving website structure, on-page/off-page SEO, page speed, technical foundations, and search visibility to support long-term organic growth.",
        emoji: "🔍",
        color: { bg: "#dbeafe", border: "#2563eb" },
    },
    {
        title: "Web Development",
        company: "PraktiQu",
        type: "Contract",
        location: "Remote",
        period: "Apr 2025 – Present",
        description:
            "Freelance Front-End Developer focused on improving UI design, building landing page systems, layout refinement, and creating responsive, user-friendly interfaces.",
        emoji: "⚛️",
        color: { bg: "#ede9fe", border: "#7c3aed" },
    },
    {
        title: "Web Development",
        company: "Al Khair Tour and Travel",
        type: "Contract",
        location: "Onsite",
        period: "Aug 2025 – Mar 2026",
        description:
            "Fully responsible for the design and development of Al Khair website, including UI design, responsive frontend/backend development, CMS integration, and SEO optimization.",
        emoji: "🌍",
        color: { bg: "#d1fae5", border: "#059669" },
    },
    {
        title: "Web Development",
        company: "PT Socta Creatives Indonesia",
        type: "Apprenticeship",
        location: "Remote",
        period: "Nov 2024 – Oct 2025",
        description:
            "Web designer providing enhanced user experiences, designing and implementing websites using WordPress and Framer. Improved site speed by 40% through cache optimization and image compression.",
        emoji: "🎨",
        color: { bg: "#fef3c7", border: "#d97706" },
    },
    {
        title: "Product Design",
        company: "PT Duta Agensi Mail",
        type: "Contract",
        location: "Remote",
        period: "Jan 2024 – Nov 2024",
        description:
            "Led project to speed up website and improve user experience on duniafintech.com. Optimized widgets, plugins, images, caching, and clean databases using WordPress CMS.",
        emoji: "📊",
        color: { bg: "#fce7f3", border: "#db2777" },
    },
    {
        title: "Product Design",
        company: "PT Halo Karya Bersama",
        type: "Intern",
        location: "Remote",
        period: "Nov 2023 – Mar 2024",
        description:
            "Redesigned Halo Siswa's UI/UX (rebranded as HaloExpert). Created visualizations for heroes, footers, navigation, researched interaction design, and prototyped in application testing.",
        emoji: "⚙️",
        color: { bg: "#e0f2fe", border: "#0284c7" },
    },
    {
        title: "Web Designer",
        company: "PT Ouzen Anugerah Indonesia",
        type: "Full-Time",
        location: "Onsite",
        period: "Jun 2019 – Feb 2023",
        description:
            "Team leader handling landing pages for product sales. Developed 20+ landing pages per month using Native HTML and WordPress CMS with a focus on speed, design frameworks, and mockups.",
        emoji: "💻",
        color: { bg: "#fee2e2", border: "#ef4444" },
    },
    {
        title: "Web Designer",
        company: "PT Kereta Api Indonesia",
        type: "Intern",
        location: "Onsite",
        period: "Dec 2017 – Mar 2018",
        description:
            "Internship at PT Kereta Api Indonesia. Managed and redesigned a subsidiary company profile website belonging to PT Kereta Api Indonesia Divre 1 North Sumatra using Native PHP.",
        emoji: "🚂",
        color: { bg: "#dbeafe", border: "#2563eb" },
    },
];

const typeColors: Record<string, { bg: string; color: string; border: string }> = {
    Freelance: { bg: "#d1fae5", color: "#065f46", border: "#059669" },
    Remote: { bg: "#dbeafe", color: "#1e40af", border: "#2563eb" },
    Contract: { bg: "#fef3c7", color: "#92400e", border: "#d97706" },
    "Full-Time": { bg: "#ede9fe", color: "#5b21b6", border: "#7c3aed" },
    Apprenticeship: { bg: "#fce7f3", color: "#9d174d", border: "#db2777" },
    Intern: { bg: "#e0f2fe", color: "#0369a1", border: "#0284c7" },
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
