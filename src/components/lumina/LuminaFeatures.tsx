"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Belge Doğrulama",
    desc: "Yüklenen dosyaların gerçek belgeler (örneğin, faturalar, teslimat notları) mi yoksa alakasız görüntüler mi olduğunu tespit eder. Yanlış yüklemeleri önler ve temiz, güvenilir veri sağlar.",
    column: "left",
  },
  {
    title: "Otomatik Veri Çıkartma ve Eşleştirme",
    desc: "Ödeme belgelerini okur ve belgelerdeki ana verileri (ID, şirket, adres) çıkarır. Belgeleri doğru sevkiyata otomatik olarak eşleştirir - manuel kontrolleri tamamen ortadan kaldırır.",
    column: "right",
  },
  {
    title: "Çok Sayfalı Belge Yönetimi",
    desc: "Büyük PDF'leri otomatik olarak ayrı sevkiyat belgelerine ayırır. Tekrarlayan, hata yapmaya açık manuel çalışmayı ortadan kaldırır.",
    column: "left",
  },
  {
    title: "Adres ve Şirket Çoğaltma Önleme",
    desc: "Girilen adresleri mevcut kayıtlarla benzerlik analizi kullanarak karşılaştırır. Potansiyel çift şirket kayıtlarını işaretler. Veritabanı bütünlüğünü sağlar ve maliyetli tutarsızlıkları önler.",
    column: "right",
  },
  {
    title: "AI Destekli Destek",
    desc: "Entegre bir chatbot, kullanıcılara API entegrasyonları, belgeler ve genel ürün desteği konusunda yardımcı olur. Anında yanıtlar sağlar, manuel müşteri desteğine bağımlılığı azaltır.",
    column: "left",
  },
  {
    title: "Stratejik ve İş Zekası Sistemleri",
    desc: "Karar verme süreçlerini desteklemek için veri toplar ve analiz eder (örneğin, Power BI, Tableau, satış analitiği). BI içgörülerini uzun vadeli stratejileri yönlendirmek ve sürdürülebilir rekabet avantajı yaratmak için kullanır.",
    column: "right",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function LuminaFeatures() {
  const leftFeatures = features.filter((f) => f.column === "left");
  const rightFeatures = features.filter((f) => f.column === "right");

  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.15] tracking-[-1px] text-[#282c34]">
            Yukato&apos;daki Dikey Yapay Zeka
            <br />
            Uygulamaları
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-8">
            {leftFeatures.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>

          {/* Right column — offset down */}
          <div className="flex-1 flex flex-col gap-8 md:mt-32">
            {rightFeatures.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; desc: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="bg-[#f5f7f7] rounded-2xl overflow-hidden"
    >
      <div className="w-full aspect-[4/3] bg-[#e8ecec] flex items-center justify-center">
        <div className="w-16 h-16 rounded-xl bg-[#21beba]/10 flex items-center justify-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#21beba" strokeWidth="1.5">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-[20px] font-bold text-[#282c34] mb-3">
          {feature.title}
        </h3>
        <p className="text-[15px] leading-[1.7] text-[#596173]">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}
