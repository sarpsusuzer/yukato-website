"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Parallax from "./Parallax";
import { useT } from "@/i18n/LocaleContext";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stepImages = [
  `${bp}/hiw-1.jpg`,
  `${bp}/hiw-1.jpg`,
  `${bp}/hiw-2.jpg`,
  `${bp}/hiw-3.jpg`,
  `${bp}/hiw-4.jpg`,
];

export default function HowItWorks() {
  const t = useT();
  const steps = t.howItWorks.steps;
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 w-full" style={{ height: "calc(100vh + 36px)" }}>
        <svg className="absolute top-0 left-0 w-full z-10" style={{ height: "36px" }} viewBox="0 0 1440 36" preserveAspectRatio="none" fill="#1a4d4d" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
        </svg>
        <div className="absolute inset-0 top-[36px] overflow-hidden rounded-[36px] rounded-tr-none rounded-bl-none bg-[#1a4d4d] dot-matrix">
          <div className="absolute -left-[200px] -top-[100px] w-[970px] h-[955px] opacity-60 pointer-events-none animate-[spin_60s_linear_infinite]">
            <Image src={`${bp}/hiw-bg.svg`} alt="" fill className="object-contain" />
          </div>

          <div className="relative z-10 h-full flex flex-col px-6 md:px-[140px]">
            <div className="pt-[8vh] max-w-[1088px]">
              <p className="text-[32px] font-medium leading-[47px] tracking-[-1px] text-[#fbfbfb] italic">
                {t.howItWorks.heading}
              </p>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-medium leading-[1.2] tracking-[-1px] text-[#fbfbfb] mt-4">
                {t.howItWorks.subtitle}
              </h2>
              <div className="mt-4 border-b border-[#3bc6bd] inline-flex items-center h-[40px]">
                <span className="text-[14px] font-bold text-[#21beba] uppercase tracking-wide">
                  {t.howItWorks.cta}
                </span>
              </div>
            </div>

            <div className="mt-auto mb-[5vh] h-[400px]">
              <HowItWorksCards scrollProgress={scrollYProgress} steps={steps} />
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill="#1a4d4d" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
        </svg>
      </div>
    </div>
  );
}

const ACTIVE_W = 300;
const GAP = 12;

function HowItWorksCards({
  scrollProgress,
  steps,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  steps: { title: string; description: string }[];
}) {
  const translateX = useTransform(
    scrollProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, -(ACTIVE_W + GAP), -(2 * (ACTIVE_W + GAP)), -(3 * (ACTIVE_W + GAP)), -(4 * (ACTIVE_W + GAP))]
  );

  return (
    <div className="w-full">
      <motion.div style={{ x: translateX }} className="flex items-start gap-3">
        {steps.map((step, i) => (
          <div key={i} className="w-[300px] h-[380px] bg-white/[0.12] rounded-lg p-2.5 flex flex-col gap-2.5 shrink-0 overflow-hidden">
            <div className="flex flex-col gap-2.5 flex-1">
              <p className="text-[20px] font-bold text-white leading-normal whitespace-nowrap">{step.title}</p>
              <p className="text-[16px] font-medium text-white leading-normal">{step.description}</p>
            </div>
            <div className="relative w-full aspect-[399/267] rounded-lg overflow-hidden shrink-0">
              <Parallax strength={14}>
                <Image src={stepImages[i]} alt={step.title} fill className="object-cover" />
              </Parallax>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
