"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function GlowingDotMatrix() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const cols = 24;
  const rows = 16;
  const dots = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const delay = Math.random() * 8;
      const duration = 2 + Math.random() * 4;
      const willGlow = Math.random() > 0.6;
      dots.push(
        <motion.div
          key={`${r}-${c}`}
          className="absolute rounded-full"
          style={{
            left: `${(c / cols) * 100}%`,
            top: `${(r / rows) * 100}%`,
            width: 4,
            height: 4,
            backgroundColor: willGlow ? "#21beba" : "#282c34",
          }}
          animate={
            willGlow
              ? {
                  opacity: [0.08, 0.6, 0.08],
                  scale: [1, 1.8, 1],
                  boxShadow: [
                    "0 0 0px rgba(33,190,186,0)",
                    "0 0 12px rgba(33,190,186,0.5)",
                    "0 0 0px rgba(33,190,186,0)",
                  ],
                }
              : { opacity: [0.06, 0.12, 0.06] }
          }
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {dots}
    </motion.div>
  );
}

export default function PlatformHero({
  label,
  title,
  variant = "dark",
}: {
  label: string;
  title: string;
  variant?: "dark" | "light";
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const dotY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const isDark = variant === "dark";

  return (
    <section ref={sectionRef} className={`relative overflow-hidden h-[95vh] flex flex-col justify-center ${isDark ? "bg-[#1a4d4d]" : "bg-white"}`}>
      <motion.div style={{ y: dotY }} className="absolute inset-[-15%] pointer-events-none">
        <GlowingDotMatrix />
      </motion.div>

      <div className="relative z-10 max-w-[1160px] mx-auto px-6 text-center">
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="text-[16px] font-medium text-[#21beba]"
          >
            {label}
          </motion.p>
        </div>
        <h1 className={`text-[clamp(32px,5vw,62px)] font-medium leading-[1.15] tracking-[-1px] max-w-[800px] mx-auto ${isDark ? "text-white" : "text-[#282c34]"}`}>
          {title.split(" ").reduce<string[][]>((lines, word) => {
            const last = lines[lines.length - 1];
            if (last && last.join(" ").length + word.length < 30) {
              last.push(word);
            } else {
              lines.push([word]);
            }
            return lines;
          }, []).map((words, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7 + i * 0.18, ease }}
                className="block"
              >
                {words.join(" ")}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
