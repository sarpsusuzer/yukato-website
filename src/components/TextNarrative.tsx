"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.15, 0.25], [0, -80]);
  const text1Scale = useTransform(scrollYProgress, [0.15, 0.25], [1, 0.95]);

  const text2Opacity = useTransform(scrollYProgress, [0.30, 0.40, 0.85, 1], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.30, 0.40], [60, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden bg-[#fafaf8] z-[5]">
        {/* First text */}
        <motion.div
          style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
          className="absolute max-w-[900px] text-center pointer-events-none px-6"
        >
          <h2 className="text-[clamp(32px,6vw,80px)] font-semibold leading-[1.06] tracking-[-0.035em] text-neutral-900">
            We have rebuilt the way logistics operations move.
          </h2>
        </motion.div>

        {/* Second text */}
        <motion.div
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute max-w-[900px] text-center pointer-events-none px-6"
        >
          <h2 className="text-[clamp(32px,6vw,80px)] font-semibold leading-[1.06] tracking-[-0.035em] text-neutral-900">
            We have connected logistics into one live operating flow.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
