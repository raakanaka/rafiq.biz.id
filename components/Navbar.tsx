"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b-2 border-primary mb-8 p-4">
            <ul className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            href={item.path}
                            className={`hover:bg-primary hover:text-black hover:cursor-pointer px-2 py-1 transition-colors duration-200 ${pathname === item.path ? "bg-primary text-black" : "text-primary"
                                }`}
                        >
                            [{item.name}]
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
