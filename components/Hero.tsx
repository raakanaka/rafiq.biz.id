"use client";

import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function Hero() {
    return (
        <section className="flex flex-col gap-4 text-primary p-4 md:p-8 max-w-4xl mx-auto min-h-[60vh] justify-center">
            <div className="mb-4">
                <TypingText
                    text="> Initializing Rafiq.exe..."
                    delay={0}
                    className="block text-accent mb-2"
                />
                <TypingText
                    text="> Status: ONLINE"
                    delay={1.5}
                    className="block text-primary mb-2"
                />
                <TypingText
                    text="> Loading profile data..."
                    delay={3}
                    className="block text-primary mb-4"
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl mb-6 text-white text-shadow-glow">
                    Hello, I am Rafiq.
                </h1>
                <h2 className="text-xl md:text-2xl text-accent mb-8">
                    &lt;WebDeveloper /&gt;
                </h2>

                <p className="leading-8 text-sm md:text-base max-w-2xl text-opacity-90 text-primary/80">
                    Welcome to my digital terminal. I build things for the web.
                    Passionate about clean code, retro aesthetics, and solving complex problems.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6.5, duration: 0.5 }}
                className="mt-12 flex flex-col gap-2 border border-secondary p-4 bg-secondary/10"
            >
                <h3 className="text-accent underline decoration-dotted mb-2">System Specs:</h3>
                <ul className="list-disc list-inside text-xs md:text-sm space-y-1">
                    <li>Location: Indonesia</li>
                    <li>OS: Windows (Power User)</li>
                    <li>Stack: React, Next.js, Node.js</li>
                    <li>Coffee: Required</li>
                </ul>
            </motion.div>
        </section>
    );
}
