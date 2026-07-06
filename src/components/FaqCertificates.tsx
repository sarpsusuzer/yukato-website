"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Yukato üzerinden sevkiyatlarımı hangi aşamalarda ve nasıl takip edebilirim?",
    answer: "Yukato ile sevkiyat sürecinizi sipariş/work order oluşturma aşamasından başlayarak sevkiyat planlama, taşıma, teslimat, mal kabul ve teslimat dokümanlarının tamamlanmasına kadar uçtan uca takip edebilirsiniz. Platform üzerinden sevkiyat durumu, tahmini varış zamanı, randevu bilgileri, teslimat kanıtları ve operasyonel güncellemeler tek bir ekrandan izlenebilir.",
  },
  {
    question: "Teslimat yapılacak lokasyon Yukato kullanmıyorsa yine de sevkiyat hakkında bilgi alabilir miyim?",
    answer: "Evet. Teslimat yapılacak lokasyon Yukato kullanmasa bile sevkiyat sürecine ait bilgiler platform üzerinden takip edilebilir. Taşıyıcı, tedarikçi veya ilgili operasyon ekipleri tarafından girilen bilgiler sayesinde sevkiyatın mevcut durumu, teslimat süreci ve gerekli dokümanlar görünür hale gelir.",
  },
  {
    question: "Anlaşmalı teslimat noktası kendi teslimat dokümanlarını sisteme yükleyebilir mi?",
    answer: "Evet. Yetkilendirilmiş teslimat noktaları, kendilerine ait teslimat dokümanlarını Yukato'ya yükleyebilir. Böylece irsaliye, teslimat kanıtı, imza, kaşe veya ilgili operasyonel belgeler dijital olarak saklanır ve ilgili taraflar tarafından erişilebilir hale gelir.",
  },
  {
    question: "Yukato'yu mevcut ERP veya TMS sistemlerimle entegre edebilir miyim?",
    answer: "Evet. Yukato, mevcut ERP, TMS veya diğer operasyonel sistemlerle entegre çalışabilecek şekilde tasarlanmıştır. Entegrasyon sayesinde sipariş, sevkiyat, randevu, teslimat ve doküman verileri sistemler arasında manuel iş yükü oluşturmadan aktarılabilir.",
  },
  {
    question: "Sisteme manuel olarak iş emri nasıl girebilirim?",
    answer: "Yukato üzerinden manuel iş emri oluşturmak için platformdaki iş emri veya sevkiyat oluşturma ekranını kullanabilirsiniz. Gerekli teslimat, alıcı, gönderici, ürün, tarih ve operasyon bilgileri girildikten sonra iş emri sisteme kaydedilir ve ilgili taraflarla takip edilebilir hale gelir.",
  },
  {
    question: "Yukato üzerinden operasyonel raporlar alabilir miyim?",
    answer: "Evet. Yukato, sevkiyat ve teslimat süreçlerinize ilişkin operasyonel raporlar sunar. Gecikmeler, teslimat performansı, işlem süreleri, randevu durumu, doküman tamamlama oranı ve operasyonel verimlilik gibi metrikler üzerinden süreçlerinizi analiz edebilirsiniz.",
  },
  {
    question: "Kullanıcı yetkilendirmeleri tanımlayabilir miyim?",
    answer: "Evet. Yukato'da farklı kullanıcı rolleri ve yetkileri tanımlanabilir. Böylece ekip üyeleri, tedarikçiler, taşıyıcılar veya teslimat noktaları yalnızca kendileriyle ilgili verilere ve işlemlere erişebilir. Bu yapı hem operasyonel güvenliği hem de süreç yönetimini kolaylaştırır.",
  },
  {
    question: "Geçmiş kayıtlarım Yukato'da ne kadar süreyle saklanır?",
    answer: "Yukato, sevkiyat, teslimat, iş emri ve doküman kayıtlarınızı dijital olarak saklar. Saklama süresi, kullanılan paket, şirket ihtiyaçları ve yasal gerekliliklere göre belirlenebilir. Böylece geçmiş operasyonlara gerektiğinde kolayca erişebilir ve denetim süreçlerinde kayıtlarınızı kullanabilirsiniz.",
  },
  {
    question: "Deneme sürümü talep edebilir miyim?",
    answer: "Evet. Yukato'yu daha yakından tanımak ve operasyonlarınıza uygunluğunu değerlendirmek için deneme sürümü veya demo talep edebilirsiniz. Yukato ekibi, ihtiyaçlarınızı analiz ederek size en uygun kullanım senaryosunu gösterebilir.",
  },
  {
    question: "Yukato'nun fiyatı nedir?",
    answer: "Yukato'nun fiyatlandırması şirketinizin operasyon hacmine, kullanıcı sayısına, ihtiyaç duyulan modüllere, entegrasyon kapsamına ve kullanım senaryosuna göre değişebilir. Size en uygun fiyatlandırma için Yukato ekibiyle iletişime geçerek ihtiyaçlarınıza özel teklif alabilirsiniz.",
  },
  {
    question: "Yukato üzerinden çalıştığım tüm şirketlerle iş süreçlerimi tek platformda yönetebilir miyim?",
    answer: "Evet. Yukato, tedarikçiler, taşıyıcılar, teslimat noktaları ve operasyon ekipleri arasındaki süreçleri tek bir platformda toplar. Böylece farklı şirketlerle yürütülen sevkiyat, teslimat, randevu, doküman ve takip süreçleri merkezi şekilde yönetilebilir.",
  },
  {
    question: "Bir tedarikçi veya perakende şirketiyim. Bir perakendeci benden Yukato'ya dahil olmamı istedi. Herhangi bir ödeme yapmam gerekiyor mu?",
    answer: "Yukato'ya davet edilme şeklinize ve kullanım kapsamınıza göre ödeme modeli değişebilir. Bazı senaryolarda platforma davet edilen iş ortakları yalnızca kendilerine tanımlanan süreçleri kullanır ve ek ödeme yapmaları gerekmez. Net bilgi için sizi davet eden şirketin kullanım modeli veya Yukato ekibiyle iletişime geçmeniz önerilir.",
  },
  {
    question: "Büyük ölçekli bir kurumsal şirketim ve halihazırda TMS kullanıyorum. Yukato benim için uygun mu?",
    answer: "Evet. Yukato, mevcut TMS'inizi değiştirmek zorunda kalmadan tamamlayıcı bir görünürlük ve iş birliği katmanı olarak kullanılabilir. TMS'iniz operasyonun ana planlama sistemi olarak çalışmaya devam ederken Yukato; tedarikçi, taşıyıcı, teslimat noktası, randevu, doküman ve teslimat görünürlüğünü merkezi bir yapıda birleştirebilir.",
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
      <div className="bg-white border border-[#d6dde5] overflow-hidden rounded-2xl">
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
        <div className="max-w-[850px] mx-auto flex flex-col gap-4 md:gap-[20px]">
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
