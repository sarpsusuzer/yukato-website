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

export default function Footer() {
  return (
    <footer className="relative bg-[#1a4d4d] pt-16 pb-10 px-6">
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-icon.svg"
              alt=""
              width={44}
              height={45}
              className="h-[45px] w-auto"
            />
            <Image
              src="/logo-text.svg"
              alt="Yukato"
              width={155}
              height={33}
              className="h-[33px] w-auto"
            />
          </Link>

          {/* Nav links */}
          <div className="flex gap-8 text-[16px] text-white">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-[#6aded3] transition-colors duration-200">Platform</a>
              <a href="#" className="hover:text-[#6aded3] transition-colors duration-200">Yapay Zeka</a>
            </div>
            <div className="flex flex-col gap-4 text-right">
              <a href="#" className="hover:text-[#6aded3] transition-colors duration-200">Ürünler</a>
              <a href="#" className="hover:text-[#6aded3] transition-colors duration-200">Hakkımızda</a>
            </div>
          </div>
        </div>

        {/* Middle row: Addresses + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          {/* Addresses */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div className="text-[14px] text-white">
              <p className="font-bold mb-2">İngiltere</p>
              <p className="font-normal leading-normal">
                75 New Bond Street W1S 1RT<br />
                London United Kingdom
              </p>
            </div>
            <div className="text-[14px] text-white max-w-[427px]">
              <p className="font-bold mb-2">Türkiye</p>
              <p className="font-normal leading-normal">
                Brandium Rezidans, R1 Blok, D:17 Küçükbakkalköy Mahallesi,
                Dudullu Caddesi No:23-25A, 34750 Ataşehir İstanbul - Türkiye
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-6 items-center">
            {["Instagram", "Facebook", "X", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex items-center gap-1 text-[14px] text-[#6aded3] tracking-[-0.28px] hover:text-white transition-colors duration-200"
              >
                {name}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: Copyright + Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-[14px] font-bold text-white">
            © 2025 Yukato / her hakkı saklıdır.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[14px] font-bold text-white hover:text-[#6aded3] transition-colors duration-200">
              Güvenlik
            </a>
            <a href="#" className="text-[14px] font-bold text-white hover:text-[#6aded3] transition-colors duration-200">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
