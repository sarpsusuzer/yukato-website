"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wraps an image/video that sits inside a `relative overflow-hidden` box.
 * Renders the media slightly oversized so it can translate vertically with
 * scroll position without revealing empty edges.
 */
export default function Parallax({
  children,
  strength = 28,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
