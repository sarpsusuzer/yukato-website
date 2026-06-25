"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PlatformProblems({
  sectionLabel,
  sectionTitle,
  problems,
}: {
  sectionLabel: string;
  sectionTitle: string;
  problems: { title: string; desc: string }[];
}) {
  return (
    <div className="relative">
      <svg
        className="absolute top-0 left-0 w-full -translate-y-[99%] z-10"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        fill="#1a4d4d"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
      </svg>
    <section className="relative py-24 md:py-32 px-6 bg-[#1a4d4d] overflow-hidden rounded-[32px] rounded-tr-none rounded-bl-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[970px] h-[955px] opacity-30 pointer-events-none animate-[spin_60s_linear_infinite]">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hiw-bg.svg`} alt="" fill className="object-contain" />
      </div>
      <div className="relative z-10 max-w-[1160px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <p className="text-[16px] font-medium text-[#6aded3] mb-4">
            {sectionLabel}
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-medium leading-[1.2] tracking-[-1px] text-white max-w-[800px] mx-auto">
            {sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="relative rounded-xl h-full"
            >
              <div className="absolute inset-0 rounded-xl border border-white/[0.08] pointer-events-none" />
              <div
                className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                style={{
                  mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              >
                <div
                  className="absolute inset-[-50%] animate-[border-spin_8s_linear_infinite]"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(33,190,186,0.8) 85%, rgba(33,190,186,0) 100%)`,
                    animationDelay: `${i * -1.2}s`,
                  }}
                />
              </div>
              <div className="relative p-6 h-full">
                <h3 className="text-[24px] font-bold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-[16px] text-white/60 leading-[1.6]">
                  {problem.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      <svg
        className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        fill="#1a4d4d"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
      </svg>
    </div>
  );
}
