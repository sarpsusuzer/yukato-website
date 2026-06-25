"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Video scrub: map full scroll to full video duration
  const handleProgress = useCallback((latest: number) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;
    const targetTime = latest * video.duration;
    if (Math.abs(video.currentTime - targetTime) > 0.05) {
      video.currentTime = targetTime;
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", handleProgress);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const initVideo = () => {
      video.pause();
      video.currentTime = 0;
    };
    if (video.readyState >= 2) {
      initVideo();
    } else {
      video.addEventListener("loadeddata", initVideo, { once: true });
    }
  }, []);

  // Text reveal: starts hidden below, slides up and fades in during first 40% of scroll
  const textY = useTransform(scrollYProgress, [0.05, 0.35], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.15, 0.4, 0.55]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 rounded-b-[36px]">
        {/* Video */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Text pinned to bottom */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute bottom-12 md:bottom-16 left-0 right-0 z-10 px-6"
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
    </section>
  );
}
