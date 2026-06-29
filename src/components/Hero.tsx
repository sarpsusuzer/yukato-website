"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 300;
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function getFrameSrc(index: number) {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const num = String(index + 1).padStart(3, "0");
  return `${bp}/hero-frames/frame_${num}.jpg`;
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const currentFrameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const videoProgress = useTransform(scrollYProgress, [0, 0.7], [0, 1], { clamp: true });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
          drawFrame(0);
        }
      };
      images.push(img);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || !images.length) return;
    const img = images[Math.min(index, images.length - 1)];
    if (!img.complete) return;
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.drawImage(img, 0, 0);
  }

  useMotionValueEvent(videoProgress, "change", (latest) => {
    if (!imagesRef.current.length) return;
    const targetFrame = Math.round(latest * (TOTAL_FRAMES - 1));
    if (targetFrame !== currentFrameRef.current) {
      currentFrameRef.current = targetFrame;
      drawFrame(targetFrame);
    }
  });

  const textY = useTransform(scrollYProgress, [0.05, 0.35], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.15, 0.4, 0.55]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full z-0" style={{ height: "calc(100vh + 36px)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ objectFit: "cover" }}
          />

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black"
          />

          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="absolute bottom-12 md:bottom-16 left-0 right-0 z-20 px-6"
          >
            <div className="max-w-[1000px] mx-auto">
              <motion.h1
                initial={{ filter: "blur(6px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease }}
                className="text-[clamp(32px,6vw,80px)] font-semibold leading-[1.06] tracking-[-0.035em] text-white"
              >
                We have rebuilt the way logistics operations move.
              </motion.h1>
              <p className="mt-5 text-[clamp(15px,1.8vw,20px)] leading-[1.6] text-white/60 max-w-[680px]">
                Every handoff, arrival, document, dock movement and delivery
                confirmation should be part of the same operational timeline.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Bottom notch — page background cuts into video */}
        <svg
          className="absolute bottom-0 left-0 w-full z-10"
          viewBox="0 0 1440 36"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "36px" }}
        >
          <path d="M1440 36H0V0H620C660 0 680 16 700 28C720 36 730 36 760 36H1408C1425.7 36 1440 21.7 1440 4V36Z" fill="#fafaf8" />
        </svg>
      </div>
    </section>
  );
}
