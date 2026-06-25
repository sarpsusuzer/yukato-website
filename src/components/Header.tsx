"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function ChevronDown({ flipped }: { flipped?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`transition-transform duration-200 ${flipped ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type DropdownItem = { title: string; desc: string; href: string };

const dropdownMenus: Record<string, DropdownItem[]> = {
  Platform: [
    {
      title: "Tedarikçiler için Yukato",
      desc: "Sürecinizi dijitalleştirin, ürünlerinizi güvenle sevk edin.",
      href: "/platform/tedarikci",
    },
    {
      title: "Perakendeciler için Yukato",
      desc: "Tedarik zincirinizi kesintisiz yönetin.",
      href: "/platform/perakendeci",
    },
    {
      title: "Nakliyeciler için Yukato",
      desc: "Taşıma operasyonlarınızda verimliliğinizi artırın.",
      href: "/platform/nakliyeci",
    },
    {
      title: "Sürücüler için Yukato",
      desc: "Teslimatları güvenle ve zamanında tamamlayın.",
      href: "/platform/surucu",
    },
  ],
  Ürünler: [
    {
      title: "Nexus",
      desc: "Sipariş, sevkiyat ve teslimat süreçlerini uçtan uca yönetin.",
      href: "#",
    },
    {
      title: "Lighthouse",
      desc: "Sevkiyatlarınızı anlık takip edin, görünürlüğü artırın.",
      href: "#",
    },
    {
      title: "Yard Management",
      desc: "Depo sahası, rampa ve randevu süreçlerini optimize edin.",
      href: "#",
    },
  ],
};

function DropdownMenu({ items }: { items: DropdownItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] border border-neutral-100 p-6 grid grid-cols-2 gap-4"
    >
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="p-4 rounded-xl hover:bg-[#faf8f6] transition-colors duration-150 group"
        >
          <span className="text-[16px] font-bold text-[#008582] group-hover:text-[#006d6a] transition-colors duration-150">
            {item.title}
          </span>
          <p className="text-[14px] text-neutral-500 leading-[1.5] mt-1">
            {item.desc}
          </p>
        </a>
      ))}
    </motion.div>
  );
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 animate-[headerIn_0.8s_0.2s_both_cubic-bezier(0.16,1,0.3,1)]"
    >
      <nav
        className={`flex w-full max-w-[1320px] items-center justify-between rounded-full px-6 py-2 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(40,40,40,0.85)] backdrop-blur-xl shadow-lg"
            : "bg-[rgba(68,68,68,0.5)] backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo-icon.svg"
            alt=""
            width={30}
            height={31}
            className="h-[31px] w-auto"
          />
          <Image
            src="/logo-text.svg"
            alt="Yukato"
            width={105}
            height={22}
            className="h-[22px] w-auto"
          />
        </a>

        {/* Nav links — center */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-4">
            {["Platform", "Ürünler"].map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleEnter(item)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-0.5 px-3 py-2 text-[14px] font-bold text-white transition-all duration-200 rounded-full whitespace-nowrap ${
                    openDropdown === item
                      ? "bg-white/15"
                      : "hover:text-white/80"
                  }`}
                >
                  {item}
                  <ChevronDown flipped={openDropdown === item} />
                </button>
                <AnimatePresence>
                  {openDropdown === item && dropdownMenus[item] && (
                    <DropdownMenu items={dropdownMenus[item]} />
                  )}
                </AnimatePresence>
              </div>
            ))}
            {["Yapay Zeka", "Hakkımızda"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-[14px] font-bold text-white hover:text-white/80 transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-block px-3 py-2 text-[14px] font-bold text-[#00a29d] hover:text-[#21beba] transition-colors duration-200 whitespace-nowrap"
          >
            Giriş Yap
          </a>
          <a
            href="#contact"
            className="bg-[#21beba] border border-[#3bc6bd] text-white text-[14px] font-bold px-4 py-2.5 rounded-full hover:bg-[#1aaba8] transition-colors duration-200 whitespace-nowrap"
          >
            Demo Talebi
          </a>
          <button className="hidden md:flex items-center gap-0.5 text-[14px] font-semibold text-white whitespace-nowrap">
            TR
            <ChevronDown />
          </button>
        </div>
      </nav>
    </header>
  );
}
