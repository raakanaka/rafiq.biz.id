"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommandInput from "@/components/CommandInput";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-mono relative z-10">
      <Navbar />
      <Hero />
      <div className="flex-1"></div>
      <CommandInput />
    </main>
  );
}
