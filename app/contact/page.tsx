"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactColors = [
    { bg: "#fef3c7", icon: "#d97706" },
    { bg: "#dbeafe", icon: "#2563eb" },
    { bg: "#d1fae5", icon: "#059669" },
    { bg: "#fce7f3", icon: "#db2777" },
];

const contacts = [
    {
        icon: <Mail size={22} />,
        title: "Email",
        value: "rafiq.adha@rafiq.biz.id",
        href: "mailto:rafiq.adha@rafiq.biz.id",
    },
    {
        icon: <Linkedin size={22} />,
        title: "LinkedIn",
        value: "@rafiq-alhafizh-adha",
        href: "https://linkedin.com/in/rafiq-alhafizh-adha",
    },
    {
        icon: <Github size={22} />,
        title: "GitHub",
        value: "/raakanaka",
        href: "https://github.com/raakanaka",
    },
    {
        icon: <MapPin size={22} />,
        title: "Location",
        value: "Jakarta, Indonesia",
        href: null,
    },
];

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="section flex-1 flex items-center">
                <div className="max-w-4xl mx-auto w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-14"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-extrabold mb-4"
                            style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}
                        >
                            Get in <span className="text-accent-pop">Touch</span>
                        </h1>
                        <p
                            className="text-lg mx-auto"
                            style={{ color: "var(--text-secondary)", maxWidth: 480 }}
                        >
                            Ready to start a project? I&apos;m available for freelance work and collaborations ✦
                        </p>
                    </motion.div>

                    {/* Contact cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {contacts.map((item, i) => {
                            const Wrapper = item.href ? "a" : "div";
                            const wrapperProps = item.href
                                ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
                                : {};

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                                >
                                    <Wrapper
                                        {...wrapperProps}
                                        className="card-brutal flex items-center gap-5"
                                        style={{
                                            padding: "1.5rem 1.75rem",
                                            textDecoration: "none",
                                            cursor: item.href ? "pointer" : "default",
                                            display: "flex",
                                        }}
                                    >
                                        <div
                                            className="icon-circle"
                                            style={{
                                                background: contactColors[i].bg,
                                                color: contactColors[i].icon,
                                            }}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div
                                                className="text-sm font-bold mb-0.5"
                                                style={{ color: "var(--text-secondary)" }}
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                className="text-base font-extrabold"
                                                style={{ color: "var(--foreground)" }}
                                            >
                                                {item.value}
                                            </div>
                                        </div>
                                    </Wrapper>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
