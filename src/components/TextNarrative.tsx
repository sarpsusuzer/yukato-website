"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TextNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<0 | 1>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.4) setPhase(0);
    else setPhase(1);
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden bg-[#fafaf8] z-[5]">
        <motion.div
          animate={{
            opacity: phase === 0 ? 1 : 0,
            y: phase === 0 ? 0 : -60,
            scale: phase === 0 ? 1 : 0.95,
          }}
          transition={{ duration: 0.6, ease }}
          className="absolute max-w-[900px] text-center pointer-events-none px-6"
        >
          <h2 className="text-[clamp(32px,6vw,80px)] font-semibold leading-[1.06] tracking-[-0.035em] text-neutral-900">
            Lojistik operasyonların işleyişini yeniden inşa ettik.
          </h2>
        </motion.div>

        <motion.div
          animate={{
            opacity: phase === 1 ? 1 : 0,
            y: phase === 1 ? 0 : 60,
          }}
          transition={{ duration: 0.6, ease }}
          className="absolute max-w-[900px] text-center pointer-events-none px-6"
        >
          <h2 className="text-[clamp(32px,6vw,80px)] font-semibold leading-[1.06] tracking-[-0.035em] text-neutral-900">
            Lojistiği tek bir canlı operasyon akışında birleştirdik.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
