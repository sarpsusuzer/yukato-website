"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefits = [
  {
    title: "Sevkiyat belgelerinde hata azaltma",
    desc: "Daha az eşleşmeyen veya kaybolan teslimat notları; yanlış ve alakasız belge yüklemelerini azaltma.",
  },
  {
    title: "Belge işleme süresini %90'a kadar hızlandırma",
    desc: "Dakikalarca süren manuel çalışmadan AI ile saniyelere.",
  },
  {
    title: "Otomatik çoğaltma önleme",
    desc: "Tüm şirket kayıtlarını temizler ve güvence altına alır.",
  },
  {
    title: "Rol spesifik zekâ",
    desc: "Yöneticiler içgörüler görür, operatörler görev düzeyinde netlik alır.",
  },
  {
    title: "Sıfır veri sızıntısı",
    desc: "Şirket verileri ayrılmış, uyum ve güven sağlar.",
  },
  {
    title: "Ölçeklenebilir verimlilik",
    desc: "AI altyapısı, işlem hacmi ile birlikte büyür, manuel iş yükü eklemeden.",
  },
  {
    title: "Daha düşük destek maliyetleri",
    desc: "AI chatbot, tekrarlayan müşteri destek taleplerini azaltır.",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function GlowDot({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute w-2.5 h-2.5 rounded-full bg-[#21beba] z-10 ${className || ""}`}
      animate={{
        boxShadow: [
          "0 0 4px rgba(33,190,186,0.4), 0 0 12px rgba(33,190,186,0.2)",
          "0 0 8px rgba(33,190,186,0.8), 0 0 24px rgba(33,190,186,0.4)",
          "0 0 4px rgba(33,190,186,0.4), 0 0 12px rgba(33,190,186,0.2)",
        ],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function LuminaBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dotY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={sectionRef} className="relative bg-[#0a2e2e] py-24 md:py-32 px-6 overflow-hidden">
      <motion.div
        style={{ y: dotY }}
        className="absolute inset-[-10%] pointer-events-none"
      >
        <div
          className="w-full h-full opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, #21beba 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>
      <div className="relative max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="relative rounded-[24px] border border-[#21beba]/20 p-10 md:p-12"
          style={{
            boxShadow: "0 0 30px rgba(33,190,186,0.06), inset 0 0 30px rgba(33,190,186,0.03)",
          }}
        >
          {/* Row 1: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-8">
            {benefits.slice(0, 3).map((b, i) => (
              <div
                key={b.title}
                className={`px-6 ${i < 2 ? "md:border-r md:border-[#21beba]/15" : ""}`}
                style={i < 2 ? { borderRightStyle: "solid" } : undefined}
              >
                <h3 className="text-[17px] font-bold text-[#21beba] leading-snug mb-3">
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-white/50">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Divider 1 with glow dot */}
          <div className="relative my-8">
            <div className="h-px bg-[#21beba]/15" style={{ boxShadow: "0 0 6px rgba(33,190,186,0.15)" }} />
            <GlowDot className="-translate-x-1/2 -translate-y-1/2 left-1/3" />
          </div>

          {/* Row 2: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-8">
            {benefits.slice(3, 6).map((b, i) => (
              <div
                key={b.title}
                className={`px-6 ${i < 2 ? "md:border-r md:border-[#21beba]/15" : ""}`}
                style={i < 2 ? { borderRightStyle: "solid" } : undefined}
              >
                <h3 className="text-[17px] font-bold text-[#21beba] leading-snug mb-3">
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-white/50">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Divider 2 with glow dot */}
          <div className="relative my-8">
            <div className="h-px bg-[#21beba]/15" style={{ boxShadow: "0 0 6px rgba(33,190,186,0.15)" }} />
            <GlowDot className="-translate-x-1/2 -translate-y-1/2 left-2/3" />
          </div>

          {/* Row 3: single item */}
          <div className="px-6">
            <h3 className="text-[17px] font-bold text-[#21beba] leading-snug mb-3">
              {benefits[6].title}
            </h3>
            <p className="text-[14px] leading-[1.7] text-white/50">
              {benefits[6].desc}
            </p>
          </div>

          {/* Corner glow accents */}
          <div className="absolute top-0 left-0 w-32 h-32 rounded-tl-[24px] pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(33,190,186,0.08), transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-br-[24px] pointer-events-none" style={{ background: "radial-gradient(circle at bottom right, rgba(33,190,186,0.08), transparent 70%)" }} />
        </motion.div>
      </div>
    </section>
  );
}
