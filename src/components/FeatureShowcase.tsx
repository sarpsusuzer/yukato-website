"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const features = [
  {
    label: "Gerçek Zamanlı Görünürlük",
    title: "Tüm operasyonlarınızı tek ekrandan takip edin.",
    description:
      "Sevkiyatlarınızın, araçlarınızın ve teslimatlarınızın anlık durumunu tek bir kontrol panelinden izleyin. Gecikmeleri önceden tespit edin, proaktif aksiyon alın.",
    color: "#21beba",
  },
  {
    label: "Dijital Dokümantasyon",
    title: "Kağıtsız operasyonlara geçiş yapın.",
    description:
      "E-irsaliye, dijital teslimat kanıtı ve otomatik belge eşleştirme ile operasyonel süreçlerinizi tamamen dijitalleştirin. Manuel hataları ortadan kaldırın.",
    color: "#00a29d",
  },
  {
    label: "Akıllı Raporlama",
    title: "Veriye dayalı kararlar alın.",
    description:
      "Operasyonel performansınızı ölçün, darboğazları tespit edin ve süreçlerinizi sürekli iyileştirin. Özelleştirilebilir raporlar ve anlık bildirimler ile tam kontrol sağlayın.",
    color: "#008582",
  },
  {
    label: "Entegrasyon Ağı",
    title: "Mevcut sistemlerinizle sorunsuz çalışın.",
    description:
      "ERP, TMS ve WMS sistemlerinizle kolayca entegre olun. Yukato'nun açık API yapısı sayesinde veri akışınızı kesintisiz sürdürün.",
    color: "#003735",
  },
];

function MockImage({ index, color }: { index: number; color: string }) {
  const patterns = [
    <div key={0} className="w-full h-full">
      <video
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/gercek-zamanli-gorunurluk.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>,
    <div key={1} className="w-full h-full">
      <video
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/dijital-dokumantasyon.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>,
    <div key={2} className="w-full h-full">
      <video
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/akilli-raporlama.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>,
    <div key={3} className="w-full h-full">
      <video
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/entegrasyon-agi.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>,
  ];
  return patterns[index];
}

function FeatureRevealText({
  label,
  title,
  description,
  color,
}: {
  label: string;
  title: string;
  description: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const clipLabel = useTransform(scrollYProgress, [0, 0.15], [0, 100]);
  const clipTitle = useTransform(scrollYProgress, [0.1, 0.55], [0, 100]);
  const clipDesc = useTransform(scrollYProgress, [0.4, 1], [0, 100]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="relative">
        <span className="text-[13px] font-bold uppercase tracking-widest block text-neutral-300">
          {label}
        </span>
        <motion.span
          style={{ clipPath: useTransform(clipLabel, (v) => `inset(0 ${100 - v}% 0 0)`), color }}
          className="text-[13px] font-bold uppercase tracking-widest block absolute inset-0"
        >
          {label}
        </motion.span>
      </div>

      <div className="relative">
        <h3 className="text-[clamp(26px,3vw,40px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-300">
          {title}
        </h3>
        <motion.h3
          style={{ clipPath: useTransform(clipTitle, (v) => `inset(0 ${100 - v}% 0 0)`) }}
          className="text-[clamp(26px,3vw,40px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900 absolute inset-0"
        >
          {title}
        </motion.h3>
      </div>

      <div className="relative">
        <p className="text-[17px] leading-[1.7] text-neutral-300">
          {description}
        </p>
        <motion.p
          style={{ clipPath: useTransform(clipDesc, (v) => `inset(0 ${100 - v}% 0 0)`) }}
          className="text-[17px] leading-[1.7] text-neutral-500 absolute inset-0"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="relative bg-white z-[5]">
      <div className="flex">
        {/* Left — scrolling text panels with 60px padding, full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 shrink-0" style={{ padding: "0 60px" }}>
          {features.map((feature, i) => (
            <div
              key={feature.label}
              ref={(el) => { sectionRefs.current[i] = el; }}
              data-index={i}
              className="h-screen flex items-center"
            >
              <FeatureRevealText
                label={feature.label}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            </div>
          ))}
        </div>

        {/* Right — sticky video */}
        <div className="hidden md:block w-1/2 h-screen sticky top-0">
          <div className="relative h-full p-5">
            <div className="absolute inset-5 overflow-hidden rounded-tr-[32px] rounded-bl-[32px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full overflow-hidden"
                >
                  <MockImage index={activeIndex} color={features[activeIndex].color} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
