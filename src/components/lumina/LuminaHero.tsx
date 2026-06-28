"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function NetworkPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 60 }, (_, i) => {
        const x = (i % 12) * 130 + Math.sin(i * 0.7) * 40;
        const y = Math.floor(i / 12) * 160 + Math.cos(i * 0.5) * 30;
        return <circle key={`d-${i}`} cx={x} cy={y} r={2} fill="#21beba" opacity={0.4 + Math.random() * 0.4} />;
      })}
      {Array.from({ length: 40 }, (_, i) => {
        const x1 = (i % 10) * 150 + 20;
        const y1 = Math.floor(i / 10) * 200 + 50;
        const x2 = x1 + 100 + Math.sin(i) * 80;
        const y2 = y1 + 60 + Math.cos(i) * 60;
        return <line key={`l-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#21beba" strokeWidth={0.5} opacity={0.15} />;
      })}
    </svg>
  );
}

export default function LuminaHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const patternY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a2e2e] overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      <motion.div style={{ y: patternY }} className="absolute inset-[-15%] pointer-events-none">
        <NetworkPattern />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a2e2e]/60 pointer-events-none" />

      <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.2] tracking-[-1px] text-white">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="block"
          >
            {"Yukato "}
            <span className="text-[#21beba]">LUMINA</span>
            <sup className="text-[0.5em]">®</sup>
            {" ile"}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="block"
          >
            Operasyonları Dönüştürür.
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
