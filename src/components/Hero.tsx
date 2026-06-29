"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TARGET_FPS = 30;
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function extractFrames(
  videoSrc: string,
  fps: number,
  onProgress: (pct: number) => void
): Promise<ImageBitmap[]> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.crossOrigin = "anonymous";
    video.src = videoSrc;

    video.addEventListener("error", () => reject(new Error("Video load failed")), { once: true });

    video.addEventListener("loadeddata", async () => {
      const { duration, videoWidth, videoHeight } = video;
      const totalFrames = Math.ceil(duration * fps);
      const offscreen = new OffscreenCanvas(videoWidth, videoHeight);
      const ctx = offscreen.getContext("2d")!;
      const frames: ImageBitmap[] = [];

      for (let i = 0; i <= totalFrames; i++) {
        video.currentTime = (i / totalFrames) * duration;
        await new Promise<void>((r) => {
          video.addEventListener("seeked", () => r(), { once: true });
        });
        ctx.drawImage(video, 0, 0);
        const bitmap = await createImageBitmap(offscreen);
        frames.push(bitmap);
        onProgress(i / totalFrames);
      }

      resolve(frames);
    }, { once: true });
  });
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const [loaded, setLoaded] = useState(false);
  const currentFrameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Phase 1: 0–0.7 = video scrub, Phase 2: 0.7–1 = hero scrolls away
  const videoProgress = useTransform(scrollYProgress, [0, 0.7], [0, 1], { clamp: true });

  useEffect(() => {
    const src = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-video.mp4`;
    extractFrames(src, TARGET_FPS, () => {})
      .then((frames) => {
        framesRef.current = frames;
        setLoaded(true);
        drawFrame(0);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    if (!canvas || !frames.length) return;
    const frame = frames[Math.min(index, frames.length - 1)];
    if (canvas.width !== frame.width || canvas.height !== frame.height) {
      canvas.width = frame.width;
      canvas.height = frame.height;
    }
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.drawImage(frame, 0, 0);
  }

  useMotionValueEvent(videoProgress, "change", (latest) => {
    if (!framesRef.current.length) return;
    const targetFrame = Math.round(latest * (framesRef.current.length - 1));
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
        <div className="absolute inset-0 bottom-[36px] rounded-b-[36px] rounded-bl-none overflow-hidden">
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
        <svg
          className="absolute bottom-[36px] left-0 w-full translate-y-[99%] z-10"
          viewBox="0 0 1440 36"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" fill="black" />
        </svg>
      </div>
    </section>
  );
}
