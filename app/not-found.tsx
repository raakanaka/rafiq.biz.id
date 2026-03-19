"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main
            className="min-h-screen flex items-center justify-center"
            style={{ background: "var(--background)" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center px-6"
            >
                <div
                    className="inline-block mb-6"
                    style={{
                        background: "var(--accent)",
                        color: "#fff",
                        fontSize: "5rem",
                        fontWeight: 900,
                        padding: "0.25rem 2rem",
                        borderRadius: "var(--radius-sm)",
                        border: "3px solid var(--border-dark)",
                        boxShadow: "6px 6px 0px 0px var(--border-dark)",
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1.2,
                    }}
                >
                    404
                </div>
                <p
                    className="text-xl md:text-2xl font-extrabold mb-2"
                    style={{ color: "var(--foreground)" }}
                >
                    Page not found
                </p>
                <p
                    className="text-base mb-8"
                    style={{ color: "var(--text-secondary)", maxWidth: 400, margin: "0 auto 2rem" }}
                >
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="btn-kirim">
                    <ArrowLeft size={16} /> Go Home
                </Link>
            </motion.div>
        </main>
    );
}
