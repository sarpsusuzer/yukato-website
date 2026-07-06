"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/LocaleContext";

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
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    "inset(0 100% 0 0)",
    "inset(0 0% 0 0)",
  ]);

  return (
    <div ref={ref} className={`relative ${className || ""}`}>
      <div className="text-neutral-300">{children}</div>
      <motion.div style={{ clipPath }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}

export default function HakkimizdaPage() {
  const t = useT();
  const a = t.about;

  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-6 md:px-[60px] bg-white">
          <div className="max-w-[1000px] mx-auto">
            <RevealText>
              <h1 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900 mb-4">
                {a.title}
              </h1>
            </RevealText>
            <RevealText>
              <p className="text-[24px] leading-[1.5] font-medium text-[#21beba] mb-12">
                {a.subtitle}
              </p>
            </RevealText>

            <div className="space-y-6 mb-20">
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.p1}</p></RevealText>
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.p2}</p></RevealText>
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.p3}</p></RevealText>
              <RevealText><p className="text-[20px] leading-[1.8] text-neutral-900 font-semibold">{a.p4}</p></RevealText>
            </div>

            <RevealText className="mb-6">
              <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900">
                {a.whyTitle}
              </h2>
            </RevealText>
            <div className="space-y-6 mb-20">
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.why1}</p></RevealText>
              <RevealText><p className="text-[20px] leading-[1.8] text-neutral-900 font-semibold">{a.why2}</p></RevealText>
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.why3}</p></RevealText>
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.why4}</p></RevealText>
            </div>

            <RevealText className="mb-6">
              <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900">
                {a.whatTitle}
              </h2>
            </RevealText>
            <div className="space-y-6 mb-20">
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.what1}</p></RevealText>
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.what2}</p></RevealText>
              <RevealText><p className="text-[18px] leading-[1.8] text-neutral-600">{a.what3}</p></RevealText>
            </div>
          </div>
        </section>
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
