"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CommandInput() {
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [history, setHistory] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Focus input on mount
        if (inputRef.current) inputRef.current.focus();

        // Keep focus logic (clicking anywhere focuses input)
        const handleClick = () => inputRef.current?.focus();
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (input.trim()) {
                const cmd = input.trim().toLowerCase();
                let response = "";

                switch (cmd) {
                    case "help":
                        response = "Available commands: help, home, about, projects, contact, clear, date";
                        break;
                    case "home":
                        response = "Navigating to Home...";
                        router.push("/");
                        break;
                    case "about":
                        response = "Navigating to /about...";
                        router.push("/about");
                        break;
                    case "projects":
                        response = "Navigating to /projects...";
                        router.push("/projects");
                        break;
                    case "contact":
                        response = "Navigating to /contact...";
                        router.push("/contact");
                        break;
                    case "date":
                        response = new Date().toLocaleString();
                        break;
                    case "clear":
                        setHistory([]);
                        setInput("");
                        return;
                    default:
                        response = `Command not found: ${cmd}. Type 'help' for list.`;
                }

                setHistory((prev) => [...prev, `user@rafiq:~$ ${input}`, `> ${response}`]);
                setInput("");

                // Scroll to bottom
                setTimeout(() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }, 100);
            }
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 mt-auto sticky bottom-0 bg-black/90 backdrop-blur border-t border-primary/30 z-50">
            <div className="flex flex-col gap-1 mb-2 max-h-40 overflow-y-auto font-mono text-sm text-primary/80 scrollbar-hide">
                {history.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>
            <div className="flex items-center gap-2 text-primary font-bold">
                <span className="text-accent">user@rafiq:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none flex-1 font-inherit text-primary placeholder-primary/50"
                    placeholder="_"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                />
            </div>
        </div>
    );
}
