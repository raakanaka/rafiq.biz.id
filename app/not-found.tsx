"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col font-mono relative z-10 p-8">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl text-red-500 mb-4 text-shadow-glow">
                    ERROR 404
                </h1>
                <p className="text-xl text-primary mb-8">
                    &gt; FILE_NOT_FOUND_EXCEPTION
                    <br />
                    &gt; The requested resource could not be located in memory.
                </p>
                <Link href="/" className="bg-primary text-black px-4 py-2 hover:bg-white hover:text-black font-bold animate-pulse">
                    [ RETURN_HOME ]
                </Link>
            </div>
        </main>
    );
}
