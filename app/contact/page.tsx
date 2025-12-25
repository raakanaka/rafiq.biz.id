"use client";

import Navbar from "@/components/Navbar";
import CommandInput from "@/components/CommandInput";

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col font-mono relative z-10 p-4 md:p-8">
            <Navbar />
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl md:text-5xl text-primary mb-8 text-shadow-glow">
                    Contact_Me
                </h1>

                <p className="text-lg text-primary/80 mb-12 max-w-xl">
                    Ready to start a new mission? Send a signal. I am currently available for freelance projects and collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                    <a href="mailto:rafiq.adha@rafiq.biz.id" className="border-2 border-primary p-6 hover:bg-primary hover:text-black transition-all group">
                        <h3 className="text-xl mb-2 group-hover:font-bold">Email</h3>
                        <p className="text-sm">rafiq.adha@rafiq.biz.id</p>
                    </a>

                    <a href="https://linkedin.com/in/rafiq-alhafizh" target="_blank" className="border-2 border-accent p-6 text-accent hover:bg-accent hover:text-black transition-all group">
                        <h3 className="text-xl mb-2 group-hover:font-bold">LinkedIn</h3>
                        <p className="text-sm">@rafiq-alhafizh</p>
                    </a>

                    <a href="https://github.com/raakanaka" target="_blank" className="border-2 border-secondary p-6 text-secondary hover:bg-secondary hover:text-white transition-all group">
                        <h3 className="text-xl mb-2 group-hover:font-bold">GitHub</h3>
                        <p className="text-sm">/raakanaka</p>
                    </a>

                    <div className="border-2 border-primary/50 p-6 opacity-80">
                        <h3 className="text-xl mb-2">Location</h3>
                        <p className="text-sm">Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="mt-8"></div>
            <CommandInput />
        </main>
    );
}
