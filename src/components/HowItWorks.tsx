"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Parallax from "./Parallax";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const steps = [
  {
    title: "Sevkiyat Başlatılır",
    description:
      "Yeni sipariş depoya ulaşır. Yukato üzerinden rampa ve yükleme hazırlığı otomatik planlanır.",
    image: `${bp}/hiw-1.jpg`,
  },
  {
    title: "Yükleme Yapılır",
    description:
      "Sürücü, uygulama üzerinden depoya giriş yapar, yükünü alır ve yola çıkar.",
    image: `${bp}/hiw-1.jpg`,
  },
  {
    title: "Sürücü Takip Edilir",
    description:
      "Sürücünün anlık konum bilgisi ile TVZ bilgileri hesaplanır ve depo randevuları buna göre verilir.",
    image: `${bp}/hiw-2.jpg`,
  },
  {
    title: "Teslimat Yapılır",
    description:
      "Araç teslimat noktasına ulaşır. Sürücü mobil uygulaması ile teslimat gerçekleşir.",
    image: `${bp}/hiw-3.jpg`,
  },
  {
    title: "Anında İşlemler Tamamlanır",
    description:
      "Teslimat yapıldığı anda belgeler üzerinde saniyeler içersinde işlemler tamamlanır.",
    image: `${bp}/hiw-4.jpg`,
  },
];

function StepCard({
  step,
  isActive,
}: {
  step: (typeof steps)[0];
  isActive: boolean;
}) {
  return (
    <motion.div
      animate={{
        width: isActive ? 276 : 204,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/[0.12] rounded-lg p-2.5 flex flex-col gap-2.5 shrink-0 overflow-hidden"
    >
      <div className="flex flex-col gap-2.5">
        <motion.p
          animate={{ fontSize: isActive ? 16 : 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-white leading-normal whitespace-nowrap"
        >
          {step.title}
        </motion.p>
        <motion.p
          animate={{ fontSize: isActive ? 16 : 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-medium text-white leading-normal"
        >
          {step.description}
        </motion.p>
      </div>
      <div className="relative w-full aspect-[399/267] rounded-lg overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const activeIndexRaw = useTransform(scrollYProgress, [0, 1], [0, 4.99]);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 w-full" style={{ height: "calc(100vh + 36px)" }}>
        <svg
          className="absolute top-0 left-0 w-full z-10"
          style={{ height: "36px" }}
          viewBox="0 0 1440 36"
          preserveAspectRatio="none"
          fill="#1a4d4d"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
        </svg>
        <div className="absolute inset-0 top-[36px] overflow-hidden rounded-[36px] rounded-tr-none rounded-bl-none bg-[#1a4d4d] dot-matrix">
          {/* Background decoration */}
          <div className="absolute -left-[200px] -top-[100px] w-[970px] h-[955px] opacity-60 pointer-events-none animate-[spin_60s_linear_infinite]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hiw-bg.svg`}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Content — fixed layout, cards don't push header */}
          <div className="relative z-10 h-full flex flex-col px-6 md:px-[140px]">
            {/* Header — pinned to top area */}
            <div className="pt-[8vh] max-w-[1088px]">
              <p className="text-[32px] font-medium leading-[47px] tracking-[-1px] text-[#fbfbfb] italic">
                Sistem Nasıl İşliyor?
              </p>
              <h2 className="text-[clamp(32px,4.5vw,60px)] font-medium leading-[1.2] tracking-[-1px] text-[#fbfbfb] mt-4">
                Tedarik zincirinizi son teslimat noktasına kadar dijitalleştiren
                yenilikçi teknoloji.
              </h2>
              <div className="mt-4 border-b border-[#3bc6bd] inline-flex items-center h-[40px]">
                <span className="text-[14px] font-bold text-[#21beba] uppercase tracking-wide">
                  SÜRECİ DETAYLI İNCELE
                </span>
              </div>
            </div>

            {/* Cards row — fixed height container */}
            <div className="mt-auto mb-[5vh] h-[400px]">
              <HowItWorksCards scrollProgress={scrollYProgress} />
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
    </div>
  );
}

const ACTIVE_W = 300;
const GAP = 12;

function HowItWorksCards({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Smooth slide: interpolate between snap points
  const translateX = useTransform(
    scrollProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, -(ACTIVE_W + GAP), -(2 * (ACTIVE_W + GAP)), -(3 * (ACTIVE_W + GAP)), -(4 * (ACTIVE_W + GAP))]
  );

  return (
    <div className="w-full">
      <motion.div
        style={{ x: translateX }}
        className="flex items-start gap-3"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {steps.map((step) => (
          <div
            key={step.title}
            className="w-[300px] h-[380px] bg-white/[0.12] rounded-lg p-2.5 flex flex-col gap-2.5 shrink-0 overflow-hidden"
          >
            <div className="flex flex-col gap-2.5 flex-1">
              <p className="text-[16px] font-bold text-white leading-normal whitespace-nowrap">
                {step.title}
              </p>
              <p className="text-[16px] font-medium text-white leading-normal">
                {step.description}
              </p>
            </div>
            <div className="relative w-full aspect-[399/267] rounded-lg overflow-hidden shrink-0">
              <Parallax strength={14}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </Parallax>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
