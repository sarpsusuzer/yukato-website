"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function RevealText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  });
  const clip = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={ref} className={`relative ${className || ""}`}>
      <div className="text-neutral-300">{children}</div>
      <motion.div
        style={{ clipPath: useTransform(clip, (v) => `inset(0 ${100 - v}% 0 0)`) }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-6 md:px-[60px] bg-white">
          <div className="max-w-[1000px] mx-auto">
            <RevealText>
              <h1 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900 mb-4">
                Hakkımızda
              </h1>
            </RevealText>
            <RevealText>
              <p className="text-[24px] leading-[1.5] font-medium text-[#21beba] mb-12">
                Lojistik operasyonlarında görünmeyeni görünür kılmak için buradayız.
              </p>
            </RevealText>

            <div className="space-y-6 mb-20">
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Yukato, tedarik zinciri ve lojistik operasyonlarında yaşanan belirsizliği azaltmak için geliştirilmiş bir görünürlük platformudur.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Günümüzde şirketler yalnızca ürün taşımıyor; zaman, kapasite, stok, iş gücü ve müşteri beklentisi yönetiyor. Ancak birçok operasyonda hâlâ sevkiyatın nerede olduğu, ne zaman geleceği, boşaltmanın ne kadar süreceği ya da teslimatın nasıl kanıtlanacağı farklı kanallar, manuel kontroller ve dağınık bilgiler üzerinden takip ediliyor.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Bu belirsizlik; gereksiz stok seviyelerine, artan personel maliyetlerine, bekleyen araçlara, hatalı mal kabul süreçlerine ve operasyonel aksaklıklara dönüşüyor.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[20px] leading-[1.8] text-neutral-900 font-semibold">
                  Yukato, bu karmaşayı tek bir görünürlük katmanında toplar.
                </p>
              </RevealText>
            </div>

            <RevealText className="mb-6">
              <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900">
                Neden varız?
              </h2>
            </RevealText>
            <div className="space-y-6 mb-20">
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Lojistik operasyonları çoğu zaman sorun çıktığında fark edilir. Bir sevkiyat geciktiğinde, bir araç rampada beklediğinde, bir teslimat belgesi kaybolduğunda ya da sipariş ile gelen ürün arasında uyumsuzluk olduğunda operasyon ekipleri hızla reaksiyon almak zorunda kalır.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[20px] leading-[1.8] text-neutral-900 font-semibold">
                  Bizce lojistik yönetimi yalnızca sorunlara müdahale etmekten ibaret olmamalı.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Yukato, şirketlerin neyin geldiğini, ne zaman geleceğini, nerede beklediğini, hangi aşamada olduğunu ve teslimatın nasıl tamamlandığını önceden görebilmesini sağlar.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Böylece ekipler daha az telefon ve e-posta trafiğiyle çalışır, araçlar daha verimli planlanır, mal kabul süreçleri hızlanır ve teslimat operasyonları uçtan uca izlenebilir hale gelir.
                </p>
              </RevealText>
            </div>

            <RevealText className="mb-6">
              <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900">
                Ne yapıyoruz?
              </h2>
            </RevealText>
            <div className="space-y-6 mb-20">
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Yukato; tedarikçiler, taşıyıcılar, operasyon ekipleri ve teslimat noktaları arasındaki bilgi akışını dijitalleştirir.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Sevkiyat planlamasından randevulu rampaya, mal kabulden dijital teslimat kanıtına kadar lojistik operasyonlarının kritik adımlarını tek bir platformda birleştirir.
                </p>
              </RevealText>
              <RevealText>
                <p className="text-[18px] leading-[1.8] text-neutral-600">
                  Platformumuz; manuel takip süreçlerini azaltır, operasyonel veriyi anlamlı hale getirir ve ekiplerin karar almasını kolaylaştırır.
                </p>
              </RevealText>
            </div>
          </div>
        </section>
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
