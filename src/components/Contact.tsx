"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [submitted, setSubmitted] = useState(false);
  const [companyType, setCompanyType] = useState("");
  const isLight = variant === "light";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${
        isLight
          ? "bg-[#fafaf8]"
          : "bg-gradient-to-b from-[#1a4d4d] from-[23%] to-white"
      }`}
    >
      {!isLight && <div className="absolute inset-0 dot-matrix pointer-events-none" />}
      <div className="relative z-10 px-6 pt-24 pb-32 md:pt-32 md:pb-44">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-[1088px] mx-auto mb-12"
        >
          <h2 className={`text-[clamp(28px,5vw,60px)] font-medium leading-[1.2] tracking-[-1px] ${
            isLight ? "text-[#282c34]" : "text-white"
          }`}>
            Bugün Yukato&apos;ya Geçin!
          </h2>
          <p className={`mt-4 text-[clamp(16px,3vw,32px)] font-medium leading-[1.5] tracking-[-1px] ${
            isLight ? "text-[#596173]" : "text-white/80"
          }`}>
            Yukato Nexus™ &amp; Lighthouse™&apos;ın gücüyle lojistik
            operasyonlarınızı dönüştürün.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="max-w-[620px] mx-auto"
        >
          {submitted ? (
            <div className="bg-[#003735] rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#008582] flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[18px] font-semibold text-white">
                  Teşekkürler!
                </p>
                <p className="mt-2 text-[14px] text-white/60">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#003735] rounded-xl p-5 md:p-8 flex flex-col gap-4 md:gap-5"
            >
              {/* Row 1: İsim / Soyisim */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                  <label className="block text-[13px] md:text-[16px] font-semibold text-white mb-2 md:mb-3">
                    İsim*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[#ced3d3] text-white text-[14px] md:text-[15px] pb-2 focus:border-[#21beba] transition-colors duration-200 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[13px] md:text-[16px] font-semibold text-white mb-2 md:mb-3">
                    Soyisim*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[#ced3d3] text-white text-[14px] md:text-[15px] pb-2 focus:border-[#21beba] transition-colors duration-200 outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Email / Telefon */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                  <label className="block text-[13px] md:text-[16px] font-semibold text-white mb-2 md:mb-3">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-[#ced3d3] text-white text-[14px] md:text-[15px] pb-2 focus:border-[#21beba] transition-colors duration-200 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[13px] md:text-[16px] font-semibold text-white mb-2 md:mb-3">
                    Telefon Numarası*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-transparent border-b border-[#ced3d3] text-white text-[14px] md:text-[15px] pb-2 focus:border-[#21beba] transition-colors duration-200 outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Şirket Tipi */}
              <div>
                <label className="block text-[13px] md:text-[16px] font-semibold text-white mb-2 md:mb-3">
                  Şirket Tipi*
                </label>
                <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:items-center">
                  {["Tedarikçi", "Perakendeci", "Nakliyeci"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-1.5 cursor-pointer"
                    >
                      <div
                        className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 shrink-0 ${
                          companyType === type
                            ? "border-[#21beba]"
                            : "border-[#ced3d3]"
                        }`}
                        onClick={() => setCompanyType(type)}
                      >
                        {companyType === type && (
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#21beba]" />
                        )}
                      </div>
                      <span className="text-[14px] md:text-[16px] font-medium text-white tracking-[0.17px]">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Açıklama */}
              <div>
                <label className="block text-[13px] md:text-[16px] font-semibold text-white mb-2 md:mb-3">
                  Açıklama*
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-[#eafbfa] rounded-xl p-3 md:p-4 text-[14px] md:text-[15px] text-[#003735] resize-none outline-none focus:ring-2 focus:ring-[#21beba] transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#008582] text-white text-[14px] md:text-[16px] font-bold p-3.5 md:p-4 rounded-xl hover:bg-[#006d6a] transition-colors duration-200 uppercase tracking-wide"
              >
                GÖNDER
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
