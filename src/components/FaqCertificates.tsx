"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question:
      "Sevkiyatlarımı Yukato üzerinden hangi aşamalarda ve nasıl takip edebilirim?",
    answer:
      "Yukato, sevkiyat sürecinizin her adımını tek ekranda görmenizi sağlar. Araç çıkışı, varış, teslimat ve evrak yüklemeleri dahil tüm aşamaları anlık olarak takip edebilir, gecikme veya aksaklıklarda bildirim alabilirsiniz.",
  },
  {
    question:
      "Alıcı nokta Yukato kullanmıyorsa yine de sevkiyat hakkında bilgi alabilir miyim?",
    answer: "",
  },
  {
    question:
      "Anlaşmalı alıcı noktası kendi teslimat evraklarını sisteme yükleyebilir mi?",
    answer: "",
  },
  {
    question:
      "Yukato'yu mevcut ERP veya TMS sistemlerimle entegre edebilir miyim?",
    answer: "",
  },
  {
    question:
      "Manuel olarak bir iş emrini sisteme nasıl girebilirim?",
    answer: "",
  },
  {
    question:
      "Yukato üzerinden operasyonel raporlar alabilir miyim?",
    answer: "",
  },
  {
    question: "Kullanıcı yetkilendirmelerini nasıl yapabilirim?",
    answer: "",
  },
  {
    question:
      "Geçmiş kayıtlarım Yukato'da ne kadar süre saklanıyor?",
    answer: "",
  },
  {
    question: "Deneme sürümü talebinde bulunabilir miyim?",
    answer: "",
  },
  {
    question: "Yukato'nun fiyatı nedir?",
    answer: "",
  },
  {
    question:
      "Çalıştığım tüm firmalarla olan iş süreçlerimi tek platformda Yukato üzerinden yönetebilir miyim?",
    answer: "",
  },
];

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const certificates = [
  `${bp}/cert-1.png`,
  `${bp}/cert-2.png`,
  `${bp}/cert-3.png`,
  `${bp}/cert-4.png`,
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <svg
        className="hidden md:block absolute top-0 left-0 w-full -translate-y-[99%] z-10"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" fill="white" />
        <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36" fill="none" stroke="#d6dde5" strokeWidth="1.5" />
      </svg>
      <div className="bg-white border border-[#d6dde5] md:border-x md:border-y-0 overflow-hidden rounded-2xl md:rounded-tl-[32px] md:rounded-br-[32px] md:rounded-tr-none md:rounded-bl-none">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 md:p-8 text-left cursor-pointer"
        >
          <span className="text-[15px] md:text-[16px] font-bold text-black pr-4">
            {question}
          </span>
          <div className="shrink-0 w-6 h-6 flex items-center justify-center">
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19"
                  stroke="#282C34"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="#282C34"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </button>
        <AnimatePresence>
          {isOpen && answer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 md:px-8 md:pb-8 text-[13px] md:text-[14px] font-normal text-[#565f77] leading-normal max-w-[675px]">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full translate-y-[99%] z-10"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" fill="white" />
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0" fill="none" stroke="#d6dde5" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function FaqCertificates() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        {/* FAQ Header */}
        <div className="text-center max-w-[1088px] mx-auto mb-16">
          <h2 className="text-[clamp(36px,5vw,60px)] font-medium leading-[1.1] tracking-[-1px] text-[#282c34]">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-8 text-[clamp(20px,2.5vw,32px)] font-normal leading-normal tracking-[-0.5px] text-[#282c34] max-w-[838px] mx-auto">
            Yukato hakkında sıkça sorulan soruları sizin için derledik.
            Aklınızda hala bize sormak istediğiniz bir soru varsa
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[850px] mx-auto flex flex-col gap-4 md:gap-[48px]">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-16 md:mt-32 text-center">
          <h2 className="text-[clamp(28px,5vw,60px)] font-medium leading-[1.1] tracking-[-1px] text-black mb-6 md:mb-10">
            Sertifikalar
          </h2>
          <div className="max-w-[909px] mx-auto bg-[rgba(0,32,31,0.5)] rounded-xl p-4 md:p-8 grid grid-cols-2 gap-3 md:flex md:items-center md:justify-between md:gap-6">
            {certificates.map((src, i) => (
              <div
                key={i}
                className="relative w-full aspect-[177/254] md:w-[177px] md:h-[254px] rounded-lg overflow-hidden md:shrink-0"
              >
                <Image
                  src={src}
                  alt={`Sertifika ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
