"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const features = [
  {
    title: "Stoğu Belirsizliğe Göre Değil, Veriye Göre Planlayın",
    description:
      "Neyin geldiğini ve ne zaman geleceğini bilin, gereksiz stok tutmayın.",
    color: "#21beba",
  },
  {
    title: "E-posta ve Telefon Trafiğini Azaltın",
    description:
      "Sevkiyat takibi için süren e-posta ve telefon trafiğine, yüksek personel maliyetlerine ve hata riskine son verin.",
    color: "#00a29d",
  },
  {
    title: "Mal Kabulden Önce Uyumsuzlukları Yakalayın",
    description:
      "Sipariş ile sevkiyat arasındaki uyumsuzlukları mal kabul öncesinde kontrol ederek tespit edin ve mal kabulde zaman kazanın.",
    color: "#008582",
  },
  {
    title: "Boşaltma Sürecini Öngörülebilir Hale Getirin",
    description:
      "Boşaltma zamanının belirsizliği, araçların bir sonraki işinin planlanmasını engeller ve sürücüleri bekletir.",
    color: "#003735",
  },
  {
    title: "Kağıt Evrakla Zaman Kaybetmeyin",
    description:
      "Fiziksel teslimat belgeleri yüzünden kaybettiğiniz zamanı geri kazanın, teslimatları daha hızlı tamamlayın.",
    color: "#21beba",
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
    <div key={4} className="w-full h-full">
      <video
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/fiziksel-teslimat.mp4`}
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
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const clipTitle = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const clipDesc = useTransform(scrollYProgress, [0.35, 1], [0, 100]);

  return (
    <div ref={ref} className="space-y-3">
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

function MobileFeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(features.length - 1, i));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <div className="md:hidden">
      <div className="relative px-6">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => { slideRefs.current[i] = el; }}
              className="snap-center shrink-0 w-full"
            >
              <div className="relative h-[60vh] rounded-tr-[32px] rounded-bl-[32px] overflow-hidden">
                <MockImage index={i} color={feature.color} />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-neutral-900"
            aria-label="Önceki"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-neutral-900"
            aria-label="Sonraki"
          >
            ›
          </button>
        </div>
      </div>

      <div className="px-6 mt-5">
        <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-900">
          {features[activeIndex].title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-neutral-500">
          {features[activeIndex].description}
        </p>
        <div className="flex gap-1.5 mt-4">
          {features.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-neutral-900" : "w-4 bg-neutral-200"
              }`}
            />
          ))}
        </div>
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
      <div className="md:hidden py-16">
        <MobileFeatureCarousel />
      </div>
      <div className="hidden md:flex">
        {/* Left — scrolling text panels with 60px padding, full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 shrink-0" style={{ padding: "0 60px" }}>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={(el) => { sectionRefs.current[i] = el; }}
              data-index={i}
              className="h-screen flex items-center"
            >
              <FeatureRevealText
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* Right — sticky video */}
        <div className="hidden md:block w-1/2 h-screen sticky top-0">
          <div className="relative h-full p-5">
            <div className="absolute inset-5 overflow-hidden rounded-tr-[32px] rounded-bl-[32px]">
              <div className="relative w-full h-full">
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
                <svg
                  className="absolute top-0 left-0 w-full z-10"
                  viewBox="0 0 1440 36"
                  preserveAspectRatio="none"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "36px" }}
                >
                  <path d="M0 0H1440V4C1440 21.7 1425.7 36 1408 36H820C780 36 760 20 740 8C720 0 710 0 680 0H32C14.3 0 0 14.3 0 32V0Z" />
                </svg>
                <svg
                  className="absolute bottom-0 left-0 w-full z-10"
                  viewBox="0 0 1440 36"
                  preserveAspectRatio="none"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "36px" }}
                >
                  <path d="M1440 36H32C14.3 36 0 21.7 0 4V0H620C660 0 680 16 700 28C720 36 730 36 760 36H1408C1425.7 36 1440 21.7 1440 4V36Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
