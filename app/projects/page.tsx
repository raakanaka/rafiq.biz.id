"use client";

import Navbar from "@/components/Navbar";
import CommandInput from "@/components/CommandInput";

// Placeholder data - would ideally come from a CMS or the PDF content
const projects = [
    {
        id: 1,
        title: "PT_Dananjaya_Zafer_Adibrata",
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
        title: "MEJA_KREATIF_STUDIO",
        description: "Modern website for a creative studio focusing on digital branding and aesthetics.",
        tech: ["Creative", "Branding", "UI/UX"],
        link: "https://mejakreatif.com",
    },
    {
        id: 4,
        title: "YAYASAN_PETAI",
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
        title: "JAPAN_SHIKEN_SHOP",
        description: "Specialized e-commerce store catering to niche markets with a Japanese focus.",
        tech: ["E-Commerce", "Niche", "Store"],
        link: "https://japanshiken.com",
    },
    {
        id: 7,
        title: "THE_BUSINESS_TAILOR",
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
        title: "ALKHAIR TOUR AND TRAVEL",
        description: "The Travel Agency for the best travel experience.",
        tech: ["Travel", "Agency", "Gallery"],
        link: "https://alkhaitravel.id",
    },
    {
        id: 11,
        title: "PRAKTIQU",
        description: "The Consultant Psychology Agency.",
        tech: ["Consulting", "Psychology", "Agency"],
        link: "https://praktiqu.com",
    },
    {
        id: 12,
        title: "EVRANDO_SEO",
        description: "SEO case study achieving top rankings for 'Lysaght Medan' keyword.",
        tech: ["SEO", "Keyword Research", "Analytics"],
        link: "https://evrando.com",
    },
];

export default function Projects() {
    return (
        <main className="min-h-screen flex flex-col font-mono relative z-10 p-4 md:p-8">
            <Navbar />
            <div className="max-w-6xl mx-auto w-full flex-1">
                <h1 className="text-3xl md:text-5xl text-primary mb-8 text-shadow-glow">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border border-primary bg-black/50 p-4 hover:bg-primary/10 transition-colors group relative"
                        >
                            <div className="absolute top-0 right-0 p-1 text-xs text-secondary bg-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                [OPEN]
                            </div>
                            <h2 className="text-xl text-accent mb-2">{project.title}</h2>
                            <p className="text-sm text-primary/80 mb-4 h-20 overflow-hidden">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs border border-secondary px-1 text-secondary font-bold">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-accent text-accent hover:bg-accent hover:text-black py-1 text-sm">
                                [ Visit_Site ]
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8"></div>
            <CommandInput />
        </main>
    );
}
