"use client";

import { motion } from "framer-motion";

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

export default function LuminaBenefits() {
  return (
    <section className="bg-[#0a2e2e] py-24 md:py-32 px-6">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {benefits.slice(0, 3).map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <h3 className="text-[18px] font-bold text-white leading-snug mb-2">
                {b.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/60">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 my-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10">
          {benefits.slice(3).map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <h3 className="text-[16px] font-bold text-white leading-snug mb-2">
                {b.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-white/60">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
