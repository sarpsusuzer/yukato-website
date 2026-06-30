"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const sections = [
  {
    step: 0,
    video: `${bp}/videos/nexus.mp4`,
    name: "Nexus",
    nameSup: "™",
    subtitle: "Perakendeci, tedarikçi ve nakliyeciyi tek platformda buluşturan operasyon merkezi.",
    cta: "Nexus'u Keşfet →",
    featureTitle: "Siparişten teslimata, tek kağıtsız akış.",
    featureDesc:
      "Satın alma siparişinden mal kabulüne kadar her adımı dijitalleştirir. E-irsaliyeden blokzincirle imzalı e-POD'a kadar tüm akış kağıtsız ilerler.",
  },
  {
    step: 1,
    video: `${bp}/videos/lighthouse.mp4`,
    name: "Lighthouse",
    nameSup: "™",
    subtitle: "Nakliyeci ve üreticiler için canlı sevkiyat takip platformu.",
    cta: "Lighthouse'u Keşfet →",
    featureTitle: "Canlı sevkiyat takibi ve e-POD görüntüleme.",
    featureDesc:
      "Yola çıkan her sevkiyatı gerçek zamanlı izleyin; teslimat tamamlandığında blokzincirle imzalı e-POD'a anında ulaşın.",
  },
  {
    step: 2,
    video: `${bp}/videos/yard-management.mp4`,
    name: "Yard Management",
    nameSup: "",
    subtitle: "Randevudan çıkışa, sahanın tam kontrolü.",
    cta: "Yard Management'ı Keşfet →",
    featureTitle: "Uçtan uca dijital planlama.",
    featureDesc:
      "Randevu oluşturmadan rampa tahsisine, sürücü girişinden geri bildirim döngüsüne kadar sahadaki tüm operasyonu dijitalleştirir.",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function StickyNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.3) setActiveStep(0);
    else if (v < 0.6) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white z-10">
        {/* Illustration area — video extends into notch areas */}
        <div className="relative w-full h-[65vh]">
          {/* Video container — full height including notch areas */}
          <div className="absolute inset-0 overflow-hidden">
            {sections.map((section, i) => (
              <motion.div
                key={section.name}
                animate={{ opacity: activeStep === i ? 1 : 0 }}
                transition={{ duration: 0.5, ease }}
                className="absolute inset-0"
              >
                <video
                  src={section.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          {/* Top notch — page background cuts into video */}
          <svg
            className="absolute top-0 left-0 w-full z-10"
            viewBox="0 0 1440 36"
            preserveAspectRatio="none"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "36px" }}
          >
            <path d="M0 0H1440V36H820C780 36 760 20 740 8C720 0 710 0 680 0H32C14.3 0 0 14.3 0 32V0Z" />
          </svg>
          {/* Bottom notch — page background cuts into video */}
          <svg
            className="absolute bottom-0 left-0 w-full z-10"
            viewBox="0 0 1440 36"
            preserveAspectRatio="none"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "36px" }}
          >
            <path d="M1440 36H0V0H620C660 0 680 16 700 28C720 36 730 36 760 36H1408C1425.7 36 1440 21.7 1440 4V36Z" />
          </svg>
        </div>

        {/* Content area */}
        <div className="relative h-[35vh] px-6 md:px-[60px] pt-5 md:pt-[40px] flex items-center">
          {sections.map((section, i) => (
            <motion.div
              key={section.name}
              animate={{
                opacity: activeStep === i ? 1 : 0,
                y: activeStep === i ? 0 : activeStep > i ? -40 : 40,
              }}
              transition={{ duration: 0.5, ease }}
              className="absolute inset-x-6 md:inset-x-[60px] top-0 bottom-0 flex items-center"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-start w-full">
                {/* Left — branding */}
                <div className="flex-1 min-w-0 md:max-w-[380px]">
                  <h3 className="text-[24px] md:text-[32px] font-bold leading-[1.3] md:leading-[60px] tracking-[-1px] text-[#008582]">
                    {section.name}
                    {section.nameSup && (
                      <sup className="text-[14px] md:text-[18px]">{section.nameSup}</sup>
                    )}
                  </h3>
                  <p className="text-[16px] md:text-[24px] font-bold leading-[1.3] md:leading-[32px] tracking-[-1px] text-[#21beba] max-w-[309px] whitespace-pre-line">
                    {section.subtitle}
                  </p>
                  <div className="mt-2 md:mt-3">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center h-[36px] md:h-[40px] px-4 rounded-full border border-[#3bc6bd] text-[13px] md:text-[14px] font-bold text-[#21beba] hover:bg-[#21beba]/5 transition-colors duration-200"
                    >
                      {section.cta}
                    </a>
                  </div>
                </div>

                {/* Right — feature */}
                <div className="flex-1 min-w-0 relative">
                  <div>
                    <p className="text-[15px] md:text-[20px] font-bold leading-normal text-[#434956] mb-1 md:mb-2">
                      {section.featureTitle}
                    </p>
                    {section.featureDesc && (
                      <p className="text-[14px] md:text-[20px] font-medium leading-[1.4] md:leading-normal text-[#596173]">
                        {section.featureDesc}
                      </p>
                    )}
                  </div>
                  {/* Teal accent line */}
                  <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#21beba] to-transparent rounded-full hidden md:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
