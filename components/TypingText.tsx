"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
    text: string;
    delay?: number;
    className?: string;
    onComplete?: () => void;
}

export default function TypingText({ text, delay = 0, className = "", onComplete }: TypingTextProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length * 0.05,
            delay: delay,
            ease: "linear",
            onComplete: () => {
                setComplete(true);
                if (onComplete) onComplete();
            },
        });
        return controls.stop;
    }, [count, text, delay, onComplete]);

    return (
        <span className={className}>
            <motion.span>{displayText}</motion.span>
            {!complete && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-3 h-5 bg-primary ml-1 align-middle"
                />
            )}
        </span>
    );
}
