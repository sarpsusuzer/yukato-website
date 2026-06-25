"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    step: 0,
    image: "/nexus-hero.png",
    name: "Nexus",
    nameSup: "™",
    subtitle: "Perakendeci ve Tedarikçi için Operasyon Yönetim Platformu",
    cta: "Nexus'u Keşfet →",
    featureTitle: "Uçtan Uca Dijital İş Akışı",
    featureDesc:
      "Satın alma siparişinden mal kabulüne kadar olan tüm süreçleri dijitalleştirir. E-irsaliye entegrasyonundan dijital teslimat kanıtına (e-POD) kadar tamamen kağıtsız bir akış sunar.",
  },
  {
    step: 1,
    image: "/lighthouse-hero.png",
    name: "Lighthouse",
    nameSup: "™",
    subtitle: "Nakliye Firmaları ve Üreticiler için Sevkiyat Takip Platformu",
    cta: "Lighthouse'u Keşfet →",
    featureTitle: "Elektronik Teslimat Fişi Görüntüleme",
    featureDesc: "",
  },
  {
    step: 2,
    image: "/yard-hero.png",
    name: "Yard Management",
    nameSup: "",
    subtitle: "Başlangıçtan Sona\nTam Kontrol Süreci",
    cta: "Yard Management'ı Keşfet →",
    featureTitle: "Uçtan Uca Dijital Planlama",
    featureDesc:
      "Randevu oluşturulmasından rampa tahsisine, sürücü girişinden geri bildirim döngüsüne kadar tüm operasyonu dijitalleştirir.",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];


export default function StickyNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use pixel-based scroll tracking instead of useScroll for precise control
  const imageOpacity1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.20, 0.24, 0.46, 0.50], [0, 1, 1, 0]);
  const imageOpacity3 = useTransform(scrollYProgress, [0.48, 0.52, 1], [0, 1, 1]);

  const contentOpacity1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  const contentY1 = useTransform(scrollYProgress, [0.18, 0.22], [0, -40]);
  const contentOpacity2 = useTransform(scrollYProgress, [0.22, 0.26, 0.46, 0.50], [0, 1, 1, 0]);
  const contentY2 = useTransform(scrollYProgress, [0.22, 0.26, 0.46, 0.50], [40, 0, 0, -40]);
  const contentOpacity3 = useTransform(scrollYProgress, [0.50, 0.54, 1], [0, 1, 1]);
  const contentY3 = useTransform(scrollYProgress, [0.50, 0.54], [40, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white z-10">
        {/* Illustration area — top ~64% */}
        <div className="relative w-full h-[55vh] md:h-[64vh] bg-[#f0f0ee] overflow-hidden rounded-[36px]">
          {sections.map((section, i) => {
            const opacity = [imageOpacity1, imageOpacity2, imageOpacity3][i];
            return (
              <motion.div
                key={section.name}
                style={{ opacity }}
                className="absolute inset-0"
              >
                <Image
                  src={section.image}
                  alt={`${section.name} illustration`}
                  fill
                  className="object-cover object-center"
                  priority={i === 0}
                />
              </motion.div>
            );
          })}

          <StepIndicatorsReactive scrollProgress={scrollYProgress} />
        </div>

        {/* Content area — bottom ~36% */}
        <div className="relative h-[45vh] md:h-[36vh] px-6 md:px-[60px] flex items-center">
          {sections.map((section, i) => {
            const opacity = [contentOpacity1, contentOpacity2, contentOpacity3][i];
            const y = [contentY1, contentY2, contentY3][i];
            return (
              <motion.div
                key={section.name}
                style={{ opacity, y }}
                className="absolute inset-x-6 md:inset-x-[60px] top-0 bottom-0 flex items-center"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start w-full">
                  {/* Left — branding */}
                  <div className="flex-1 min-w-0 md:max-w-[380px]">
                    <h3 className="text-[32px] font-bold leading-[60px] tracking-[-1px] text-[#008582]">
                      {section.name}
                      {section.nameSup && (
                        <sup className="text-[18px]">{section.nameSup}</sup>
                      )}
                    </h3>
                    <p className="text-[24px] font-bold leading-[32px] tracking-[-1px] text-[#21beba] max-w-[309px] whitespace-pre-line">
                      {section.subtitle}
                    </p>
                    <div className="mt-3">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center h-[40px] px-4 rounded-full border border-[#3bc6bd] text-[14px] font-bold text-[#21beba] hover:bg-[#21beba]/5 transition-colors duration-200"
                      >
                        {section.cta}
                      </a>
                    </div>
                  </div>

                  {/* Right — feature */}
                  <div className="flex-1 min-w-0 relative">
                    <div className="max-h-[160px] overflow-hidden relative">
                      <p className="text-[20px] font-bold leading-normal text-[#434956] mb-2">
                        {section.featureTitle}
                      </p>
                      {section.featureDesc && (
                        <p className="text-[20px] font-medium leading-normal text-[#596173]">
                          {section.featureDesc}
                        </p>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    </div>
                    {/* Teal accent line */}
                    <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#21beba] to-transparent rounded-full hidden md:block" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepIndicatorsReactive({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const index = useTransform(scrollProgress, [0, 1], [0, 2.99]);
  const step0 = useTransform(index, (v) => (Math.floor(v) === 0 ? 1 : 0));
  const step1 = useTransform(index, (v) => (Math.floor(v) === 1 ? 1 : 0));
  const step2 = useTransform(index, (v) => (Math.min(2, Math.floor(v)) === 2 ? 1 : 0));

  const dotY = useTransform(index, (v) => Math.min(2, Math.floor(v)) * 56 + 12);
  const lineHeight = useTransform(index, (v) => `${((Math.min(2, Math.floor(v)) + 1) / 3) * 100}%`);

  const color0 = useTransform(step0, (v) => (v ? "#21beba" : "#a3aab8"));
  const color1 = useTransform(step1, (v) => (v ? "#21beba" : "#a3aab8"));
  const color2 = useTransform(step2, (v) => (v ? "#21beba" : "#a3aab8"));

  return (
    <div className="absolute left-6 md:left-[140px] top-[80px] md:top-[104px] flex flex-col items-end z-10">
      {[color0, color1, color2].map((color, i) => (
        <div key={i} className="flex items-center gap-2.5 h-[56px]">
          <motion.span
            style={{ color }}
            className="text-[20px] font-medium tabular-nums"
          >
            {String(i + 1).padStart(2, "0")}
          </motion.span>
          <div className="w-4 h-4" />
        </div>
      ))}
      {/* Animated dot */}
      <motion.div
        style={{ top: dotY }}
        className="absolute right-0 w-4 h-4 rounded-full bg-[#21beba]"
      />
      {/* Progress line */}
      <div className="absolute left-[calc(100%+14px)] top-[8px] w-[3px] h-[152px] bg-[#d4d8de] rounded-full overflow-hidden">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-[#21beba] rounded-full"
        />
      </div>
    </div>
  );
}
