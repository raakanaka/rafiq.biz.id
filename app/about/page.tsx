"use client";

import Navbar from "@/components/Navbar";
import CommandInput from "@/components/CommandInput";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col font-mono relative z-10 p-4 md:p-8">
            <Navbar />
            <div className="max-w-4xl mx-auto w-full flex-1">
                <h1 className="text-3xl md:text-5xl text-primary mb-8 text-shadow-glow">
                    About_Me
                </h1>

                <div className="border border-primary p-6 bg-black/50 mb-8">
                    <p className="mb-4 text-justify leading-relaxed">
                        I am Rafiq, a dedicated Web Developer and SEO Specialist based in Indonesia. I specialize in building
                        accessible, performant, and visually striking applications. With a strong background
                        in modern web technologies, I turn complex problems into elegant solutions.
                    </p>
                    <p className="mb-4 text-justify leading-relaxed">
                        My journey began with a curiosity for how things work on the screen.
                        Today, I work with the latest tech stack including Next.js, React, and Tailwind CSS
                        to deliver high-quality digital experiences.
                    </p>
                </div>

                <h2 className="text-xl text-accent mb-4 underline decoration-dotted">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git", "UI/UX", "SEO", "Keyword Research", "Analytics"].map((skill) => (
                        <div key={skill} className="text-primary hover:text-accent cursor-crosshair">
                            &gt; {skill}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8"></div>
            <CommandInput />
        </main>
    );
}
