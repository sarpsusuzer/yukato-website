"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useT } from "@/i18n/LocaleContext";

const featureImages = [
  "/web-gorseller/Lumina/lumina1.webp",
  "/web-gorseller/Lumina/lumina2.webp",
  "/web-gorseller/Lumina/lumina3.webp",
  "/web-gorseller/Lumina/lumina4.webp",
  "/web-gorseller/Lumina/lumina5.webp",
  "/web-gorseller/Lumina/lumina6.webp",
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function LuminaFeatures() {
  const t = useT();
  const features = t.lumina.features;

  return (
    <section className="relative bg-[#0a2e2e]">
      <ParallaxHeader heading={t.lumina.featuresHeading} subtitle={t.lumina.featuresSubtitle} />

      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        const image = featureImages[i];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="min-h-screen py-20 md:py-0 md:h-screen flex items-center px-6 md:px-[60px]"
          >
            <div className={`max-w-[1160px] mx-auto w-full flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}>
              <div className="flex-1 w-full">
                {image ? (
                  <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden rounded-tr-[32px] rounded-bl-[32px]">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${image}`}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <svg className="absolute top-0 left-0 w-full z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill="#0a2e2e" xmlns="http://www.w3.org/2000/svg" style={{ height: "36px" }}>
                      <path d="M0 0H1440V4C1440 21.7 1425.7 36 1408 36H820C780 36 760 20 740 8C720 0 710 0 680 0H32C14.3 0 0 14.3 0 32V0Z" />
                    </svg>
                    <svg className="absolute bottom-0 left-0 w-full z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill="#0a2e2e" xmlns="http://www.w3.org/2000/svg" style={{ height: "36px" }}>
                      <path d="M1440 36H32C14.3 36 0 21.7 0 4V0H620C660 0 680 16 700 28C720 36 730 36 760 36H1408C1425.7 36 1440 21.7 1440 4V36Z" />
                    </svg>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden bg-[#1a4d4d] rounded-[36px] rounded-tr-none rounded-bl-none">
                      <div className="absolute inset-0 dot-matrix opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
                          <span className="text-[32px] font-bold text-white/30">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 w-full">
                <div className={isEven ? "md:pl-4" : "md:pr-4"}>
                  <ScrollRevealText number={String(i + 1).padStart(2, "0")} title={feature.title} desc={feature.desc} />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      <svg className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill="#0a2e2e" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
      </svg>
    </section>
  );
}

function ScrollRevealText({ number, title, desc }: { number: string; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.25"] });
  const clipNumber = useTransform(scrollYProgress, [0, 0.15], [0, 100]);
  const clipTitle = useTransform(scrollYProgress, [0.1, 0.55], [0, 100]);
  const clipDesc = useTransform(scrollYProgress, [0.4, 1], [0, 100]);

  return (
    <div ref={ref} className="space-y-4">
      <div className="relative">
        <span className="text-[13px] font-medium text-white/20 block">{number}</span>
        <motion.span style={{ clipPath: useTransform(clipNumber, (v) => `inset(0 ${100 - v}% 0 0)`) }} className="text-[13px] font-medium text-[#21beba] block absolute inset-0">{number}</motion.span>
      </div>
      <div className="relative">
        <h3 className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.2] tracking-[-0.5px] text-white/20">{title}</h3>
        <motion.h3 style={{ clipPath: useTransform(clipTitle, (v) => `inset(0 ${100 - v}% 0 0)`) }} className="text-[clamp(22px,3vw,32px)] font-bold leading-[1.2] tracking-[-0.5px] text-white absolute inset-0">{title}</motion.h3>
      </div>
      <div className="relative">
        <p className="text-[16px] text-white/20 leading-[1.7]">{desc}</p>
        <motion.p style={{ clipPath: useTransform(clipDesc, (v) => `inset(0 ${100 - v}% 0 0)`) }} className="text-[16px] text-white/60 leading-[1.7] absolute inset-0">{desc}</motion.p>
      </div>
    </div>
  );
}

function ParallaxHeader({ heading, subtitle }: { heading: string; subtitle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dotY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div style={{ y: dotY }} className="absolute inset-[-10%] pointer-events-none">
        <GlowingDotMatrix />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="text-center max-w-[900px] relative z-10"
      >
        <p className="text-[14px] font-bold text-[#21beba] uppercase tracking-widest mb-4">{heading}</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-medium leading-[1.2] tracking-[-1px] text-white">
          {subtitle}
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
          style={{ left: `${(c / cols) * 100}%`, top: `${(r / rows) * 100}%`, width: 4, height: 4, backgroundColor: willGlow ? "#21beba" : "#282c34" }}
          animate={willGlow ? { opacity: [0.08, 0.6, 0.08], scale: [1, 1.8, 1], boxShadow: ["0 0 0px rgba(33,190,186,0)", "0 0 12px rgba(33,190,186,0.5)", "0 0 0px rgba(33,190,186,0)"] } : { opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    }
  }

  return <>{dots}</>;
}
