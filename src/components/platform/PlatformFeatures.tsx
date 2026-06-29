"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PlatformFeatures({
  sectionLabel,
  sectionTitle,
  features,
}: {
  sectionLabel: string;
  sectionTitle: string;
  features: { title: string; desc: string; image?: string; bullets?: string[] }[];
}) {
  return (
    <section className="bg-[#fafaf8]">
      {/* Header — full vh with parallax dot matrix */}
      <ParallaxHeader sectionLabel={sectionLabel} sectionTitle={sectionTitle} />

      {/* Feature items — each vh height */}
      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className={`h-screen flex items-center px-6 md:px-[60px]`}
          >
            <div
              className={`max-w-[1160px] mx-auto w-full flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 md:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                {feature.image ? (
                  <div className="relative overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${feature.image}`}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <svg
                      className="relative w-full z-10"
                      viewBox="0 0 1440 36"
                      preserveAspectRatio="none"
                      fill="#fafaf8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
                    </svg>
                    <div className="relative w-full h-[50vh] md:h-[70vh]" />
                    <svg
                      className="relative w-full z-10"
                      viewBox="0 0 1440 36"
                      preserveAspectRatio="none"
                      fill="#fafaf8"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
                    </svg>
                  </div>
                ) : (
                  <div className="relative">
                    <svg
                      className="absolute top-0 left-0 w-full -translate-y-[99%] z-10"
                      viewBox="0 0 1440 36"
                      preserveAspectRatio="none"
                      fill="#1a4d4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
                    </svg>
                    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-[#1a4d4d] rounded-[36px] rounded-tr-none rounded-bl-none">
                      <div className="absolute inset-0 dot-matrix opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
                          <span className="text-[32px] font-bold text-white/30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <svg
                      className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10"
                      viewBox="0 0 1440 36"
                      preserveAspectRatio="none"
                      fill="#1a4d4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text — scroll reveal fill over gray ghost */}
              <div className="flex-1 w-full">
                <div className={isEven ? "md:pl-4" : "md:pr-4"}>
                  <ScrollRevealText
                    number={String(i + 1).padStart(2, "0")}
                    title={feature.title}
                    desc={feature.desc}
                    bullets={feature.bullets}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

function ScrollRevealText({
  number,
  title,
  desc,
  bullets,
}: {
  number: string;
  title: string;
  desc: string;
  bullets?: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const clipNumber = useTransform(scrollYProgress, [0, 0.15], [0, 100]);
  const clipTitle = useTransform(scrollYProgress, [0.1, 0.55], [0, 100]);
  const clipDesc = useTransform(scrollYProgress, [0.4, 1], [0, 100]);

  return (
    <div ref={ref} className="space-y-4">
      {/* Number */}
      <div className="relative">
        <span className="text-[13px] font-medium text-[#d4d8de] block">
          {number}
        </span>
        <motion.span
          style={{ clipPath: useTransform(clipNumber, (v) => `inset(0 ${100 - v}% 0 0)`) }}
          className="text-[13px] font-medium text-[#21beba] block absolute inset-0"
        >
          {number}
        </motion.span>
      </div>

      {/* Title */}
      <div className="relative">
        <h3 className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.2] tracking-[-0.5px] text-[#d4d8de]">
          {title}
        </h3>
        <motion.h3
          style={{ clipPath: useTransform(clipTitle, (v) => `inset(0 ${100 - v}% 0 0)`) }}
          className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.2] tracking-[-0.5px] text-[#282c34] absolute inset-0"
        >
          {title}
        </motion.h3>
      </div>

      {/* Description */}
      <div className="relative">
        <p className="text-[16px] text-[#d4d8de] leading-[1.7]">
          {desc}
        </p>
        <motion.p
          style={{ clipPath: useTransform(clipDesc, (v) => `inset(0 ${100 - v}% 0 0)`) }}
          className="text-[16px] text-[#596173] leading-[1.7] absolute inset-0"
        >
          {desc}
        </motion.p>
      </div>

      {/* Bullets */}
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2 mt-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[15px] leading-[1.7] text-[#596173]">
              <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#21beba] shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ParallaxHeader({
  sectionLabel,
  sectionTitle,
}: {
  sectionLabel: string;
  sectionTitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const dotY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Parallax glowing dot matrix */}
      <motion.div style={{ y: dotY }} className="absolute inset-[-10%] pointer-events-none">
        <GlowingDotMatrix />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="text-center max-w-[900px] relative z-10"
      >
        <p className="text-[14px] font-bold text-[#21beba] uppercase tracking-widest mb-4">
          {sectionLabel}
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-medium leading-[1.2] tracking-[-1px] text-[#282c34]">
          {sectionTitle}
        </h2>
      </motion.div>
    </div>
  );
}

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

  return <>{dots}</>;
}
