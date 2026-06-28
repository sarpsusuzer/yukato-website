"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div key={1} className="w-full h-full bg-gradient-to-br from-[#f8fafa] to-[#eef4f4] p-8 flex flex-col gap-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: color }}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <div>
          <div className="text-[15px] font-bold text-neutral-700">Belge Akışı</div>
          <div className="text-[12px] text-neutral-400">3 belge işleniyor</div>
        </div>
      </div>
      {["e-İrsaliye", "Teslimat Kanıtı", "Fatura Eşleştirme", "Depo Giriş Formu"].map((doc, i) => (
        <div key={doc} className="bg-white rounded-xl p-5 border border-neutral-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold text-neutral-800">{doc}</div>
            <div className="text-[12px] text-neutral-400 mt-0.5">Otomatik doğrulandı</div>
          </div>
          <div className="text-[12px] font-medium px-3 py-1.5 rounded-full" style={{ background: `${color}15`, color }}>{i < 2 ? "Tamamlandı" : i === 2 ? "İşleniyor" : "Bekliyor"}</div>
        </div>
      ))}
    </div>,
    <div key={2} className="w-full h-full bg-gradient-to-br from-[#f8fafa] to-[#eef4f4] p-8 flex flex-col gap-5">
      <div className="text-[15px] font-bold text-neutral-700">Performans Özeti</div>
      <div className="flex-1 bg-white rounded-xl border border-neutral-100 p-6 flex items-end gap-2.5">
        {[35, 52, 45, 78, 62, 85, 70, 90, 55, 75, 88, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: i >= 8 ? color : `${color}30` }} />
        ))}
      </div>
      <div className="flex gap-4">
        {[["Zamanında Teslimat", "96.4%", true], ["Ort. Süre", "2.4 saat", false], ["Verimlilik", "+12%", true]].map(([lbl, val, highlight]) => (
          <div key={lbl as string} className="flex-1 bg-white rounded-xl p-4 border border-neutral-100">
            <div className="text-[11px] text-neutral-400">{lbl as string}</div>
            <div className="text-[20px] font-bold mt-1" style={{ color: highlight ? color : "#282c34" }}>{val as string}</div>
          </div>
        ))}
      </div>
    </div>,
    <div key={3} className="w-full h-full bg-gradient-to-br from-[#f8fafa] to-[#eef4f4] p-8 flex flex-col gap-5">
      <div className="text-[15px] font-bold text-neutral-700">Entegrasyon Durumu</div>
      {["ERP Sistemi", "TMS Platform", "WMS Modülü", "Muhasebe", "CRM"].map((sys, i) => (
        <div key={sys} className="bg-white rounded-xl p-5 border border-neutral-100 flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[12px] font-bold text-white" style={{ background: i < 3 ? color : "#a3aab8" }}>
            {sys.substring(0, 3).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold text-neutral-800">{sys}</div>
            <div className="text-[12px] text-neutral-400 mt-0.5">{i < 3 ? "Bağlı · Son senkronizasyon 2dk önce" : "Bağlantı bekleniyor"}</div>
          </div>
          <div className={`w-3 h-3 rounded-full ${i < 3 ? "bg-emerald-400" : "bg-neutral-300"}`} />
        </div>
      ))}
    </div>,
  ];
  return patterns[index];
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
              <div>
                <span
                  className="text-[13px] font-bold uppercase tracking-widest block"
                  style={{ color: feature.color }}
                >
                  {feature.label}
                </span>
                <h3 className="mt-3 text-[clamp(26px,3vw,40px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[17px] leading-[1.7] text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — sticky image */}
        <div className="hidden md:block w-1/2 h-screen sticky top-0">
          <div className="relative h-full p-5">
            <div className="absolute inset-5">
              <div className="relative w-full h-full">
                <svg
                  className="absolute top-0 left-0 w-full -translate-y-[99%] z-10"
                  viewBox="0 0 1440 36"
                  preserveAspectRatio="none"
                  fill="#f0f2f2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
                </svg>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full rounded-2xl rounded-tr-none rounded-bl-none overflow-hidden"
                  >
                    <MockImage index={activeIndex} color={features[activeIndex].color} />
                  </motion.div>
                </AnimatePresence>
                <svg
                  className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10"
                  viewBox="0 0 1440 36"
                  preserveAspectRatio="none"
                  fill="#f0f2f2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
