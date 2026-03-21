"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projectEmojis = ["🏢", "📚", "🎨", "🌿", "🌍", "🇯🇵", "👔", "⚖️", "💰", "✈️", "🧠", "📈", "🤝", "🚗", "🧪", "🛡️"];

const iconColors = [
    { bg: "#fef3c7" },
    { bg: "#dbeafe" },
    { bg: "#d1fae5" },
    { bg: "#fce7f3" },
    { bg: "#e0e7ff" },
    { bg: "#fef9c3" },
    { bg: "#f3e8ff" },
    { bg: "#ffe4e6" },
    { bg: "#ccfbf1" },
    { bg: "#fef3c7" },
    { bg: "#dbeafe" },
    { bg: "#d1fae5" },
    { bg: "#e0f2fe" },
    { bg: "#fef9c3" },
    { bg: "#f0fdf4" },
    { bg: "#fce7f3" },
];

const projects = [
    {
        id: 1,
        title: "PT Dananjaya Zafer Adibrata",
        description: "Company profile for Arka Consultant, specializing in business licensing and formation.",
        tech: ["Web Profile", "Business", "Consulting"],
        link: "https://dzagroup.co.id/arka-consultant/",
    },
    {
        id: 2,
        title: "HALOEXPERT",
        description: "Learning Management System (LMS) simplifying online training and education programs.",
        tech: ["LMS", "Education", "Platform"],
        link: "https://haloexpert.id",
    },
    {
        id: 3,
        title: "Meja Kreatif Studio",
        description: "Modern website for a creative studio focusing on digital branding and aesthetics.",
        tech: ["Creative", "Branding", "UI/UX"],
        link: "https://mejakreatif.com",
    },
    {
        id: 4,
        title: "Yayasan PETAI",
        description: "Organization profile dedicated to forest conservation and environmental sustainability.",
        tech: ["Non-Profit", "Environment", "NGO"],
        link: "https://petai.or.id",
    },
    {
        id: 5,
        title: "EKSPORA",
        description: "Platform empowering SMEs to enter and succeed in the international export market.",
        tech: ["SME", "Export", "Platform"],
        link: "https://ekspora.com",
    },
    {
        id: 6,
        title: "Japan Shiken Shop",
        description: "Specialized e-commerce store catering to niche markets with a Japanese focus.",
        tech: ["E-Commerce", "Niche", "Store"],
        link: "https://japanshiken.com",
    },
    {
        id: 7,
        title: "The Business Tailor",
        description: "Corporate site offering bespoke business strategy and branding solutions.",
        tech: ["Corporate", "Strategy", "B2B"],
        link: "https://thebusinesstailor.com.sg",
    },
    {
        id: 8,
        title: "BEDAHKASUS",
        description: "News portal focused on legal updates, expert case analysis, and law enforcement.",
        tech: ["News Portal", "Law", "Media"],
        link: "https://bedahkasus.com",
    },
    {
        id: 9,
        title: "DUNIAFINTECH",
        description: "Fintech news platform optimized for SEO and high-speed performance.",
        tech: ["Fintech", "SEO", "Optimization"],
        link: "https://duniafintech.com",
    },
    {
        id: 10,
        title: "Alkhair Tour and Travel",
        description: "The Travel Agency for the best travel experience.",
        tech: ["Travel", "Agency", "Gallery"],
        link: "https://alkhaitravel.id",
    },
    {
        id: 11,
        title: "Praktiqu",
        description: "The Consultant Psychology Agency.",
        tech: ["Consulting", "Psychology", "Agency"],
        link: "https://event.praktiqu.com",
    },
    {
        id: 12,
        title: "Evrando SEO",
        description: "SEO case study achieving top rankings for 'Lysaght Medan' keyword.",
        tech: ["SEO", "Keyword Research", "Analytics"],
        link: "https://evrando.com",
    },
    {
        id: 13,
        title: "Kolaborasa",
        description: "Website sistem untuk platform kolaborasi dan manajemen.",
        tech: ["Platform", "System", "Collaboration"],
        link: "https://kolaborasa.id",
    },
    {
        id: 14,
        title: "Mulya Rental Mobil",
        description: "Website travel dan rental mobil untuk layanan transportasi wisata.",
        tech: ["Travel", "Rent Car", "Service"],
        link: "https://mulyarentalmobil.com",
    },
    {
        id: 15,
        title: "BPT KLIN",
        description: "Website produk chemical soap dan solusi kebersihan profesional.",
        tech: ["Chemical", "Product", "Industry"],
        link: "https://bptklin.com",
    },
    {
        id: 16,
        title: "Asia Safety Pro",
        description: "Website layanan protection guard dan keamanan profesional.",
        tech: ["Security", "Protection", "Service"],
        link: "https://asiasafety.pro",
    },
    {
        id: 17,
        title: "HiiBoss AI",
        description: "AI-powered platform building intelligent agents for business automation and smart workflow management.",
        tech: ["AI", "Automation", "Platform"],
        link: "https://hiiboss.ai/",
    },
    {
        id: 18,
        title: "ShopFoodie AI",
        description: "Innovative AI-driven culinary e-commerce platform for smart recipe recommendations and personalized shopping.",
        tech: ["E-Commerce", "AI", "FoodTech"],
        link: "https://shopfoodie-ai.com/",
    },
    {
        id: 19,
        title: "Vive Software",
        description: "Modern software solutions and technology consulting focusing on scalable enterprise systems and digital transformation.",
        tech: ["Software", "Enterprise", "Consulting"],
        link: "https://vive.software/",
    },
];

export default function Projects() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="section flex-1">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-extrabold mb-4"
                            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                        >
                            My <span className="text-accent-pop">Projects</span>
                        </h1>
                        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                            Explore the work I&apos;ve crafted for clients and personal endeavors ✦
                        </p>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="card-brutal group"
                                style={{
                                    padding: "1.5rem",
                                    textDecoration: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div
                                        className="icon-circle"
                                        style={{ background: iconColors[i % iconColors.length].bg }}
                                    >
                                        <span style={{ fontSize: "1.125rem" }}>{projectEmojis[i % projectEmojis.length]}</span>
                                    </div>
                                    <ArrowUpRight
                                        size={16}
                                        style={{
                                            color: "var(--text-secondary)",
                                            transition: "transform 0.2s",
                                            flexShrink: 0,
                                            marginTop: 2,
                                        }}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                                <h2
                                    className="text-base font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {project.title}
                                </h2>
                                <p
                                    className="text-sm leading-relaxed mb-4 flex-1"
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

            <Footer />
        </main>
    );
}
