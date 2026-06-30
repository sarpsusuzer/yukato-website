"use client";

import Image from "next/image";
import Link from "next/link";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6aded3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const footerNavGroups = [
  {
    title: "Platform",
    links: [
      { label: "Tedarikçiler için Yukato", href: `${bp}/platform/tedarikci/` },
      { label: "Perakendeciler için Yukato", href: `${bp}/platform/perakendeci/` },
      { label: "Nakliyeciler için Yukato", href: `${bp}/platform/nakliyeci/` },
      { label: "Sürücüler için Yukato", href: `${bp}/platform/surucu/` },
    ],
  },
  {
    title: "Ürünler",
    links: [
      { label: "Nexus", href: `${bp}/products/nexus/` },
      { label: "Lighthouse", href: `${bp}/products/lighthouse/` },
      { label: "Yard Management", href: `${bp}/products/yard-management/` },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Yapay Zeka", href: `${bp}/lumina` },
      { label: "Hakkımızda", href: `${bp}/hakkimizda` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1a4d4d] pt-12 md:pt-16 pb-8 md:pb-10 px-6">
      <svg
        className="absolute top-0 left-0 w-full -translate-y-[99%]"
        viewBox="0 0 1440 68"
        preserveAspectRatio="none"
        fill="#1a4d4d"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 68V68C0 50.3 14.3 36 32 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V68H0Z" />
      </svg>
      <div className="max-w-[1160px] mx-auto">
        {/* Top row: Logo + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={`${bp}/logo-icon.svg`}
              alt=""
              width={44}
              height={45}
              className="h-[36px] md:h-[45px] w-auto"
            />
            <Image
              src={`${bp}/logo-text.svg`}
              alt="Yukato"
              width={155}
              height={33}
              className="h-[26px] md:h-[33px] w-auto"
            />
          </Link>

          {/* Nav links */}
          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:flex md:gap-12">
            {footerNavGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <p className="text-[13px] font-bold uppercase tracking-wide text-white/50">
                  {group.title}
                </p>
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[14px] md:text-[15px] text-white hover:text-[#6aded3] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Middle row: Addresses + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 md:mb-16">
          {/* Addresses */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 w-full md:w-auto">
            <div className="text-[13px] md:text-[14px] text-white">
              <p className="font-bold mb-2">İngiltere</p>
              <p className="font-normal leading-normal">
                75 New Bond Street W1S 1RT<br />
                London United Kingdom
              </p>
            </div>
            <div className="text-[13px] md:text-[14px] text-white max-w-[427px]">
              <p className="font-bold mb-2">Türkiye</p>
              <p className="font-normal leading-normal">
                Brandium Rezidans, R1 Blok, D:17 Küçükbakkalköy Mahallesi,
                Dudullu Caddesi No:23-25A, 34750 Ataşehir İstanbul - Türkiye
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            {["Instagram", "Facebook", "X", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex items-center gap-1 text-[13px] md:text-[14px] text-[#6aded3] tracking-[-0.28px] hover:text-white transition-colors duration-200"
              >
                {name}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: Copyright + Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-[13px] md:text-[14px] font-bold text-white text-center">
            © 2025 Yukato / her hakkı saklıdır.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[13px] md:text-[14px] font-bold text-white hover:text-[#6aded3] transition-colors duration-200">
              Güvenlik
            </a>
            <a href="#" className="text-[13px] md:text-[14px] font-bold text-white hover:text-[#6aded3] transition-colors duration-200">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
