"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      href: "/platform/tedarikci/",
    },
    {
      title: "Perakendeciler için Yukato",
      desc: "Tedarik zincirinizi kesintisiz yönetin.",
      href: "/platform/perakendeci/",
    },
    {
      title: "Nakliyeciler için Yukato",
      desc: "Taşıma operasyonlarınızda verimliliğinizi artırın.",
      href: "/platform/nakliyeci/",
    },
    {
      title: "Sürücüler için Yukato",
      desc: "Teslimatları güvenle ve zamanında tamamlayın.",
      href: "/platform/surucu/",
    },
  ],
  Ürünler: [
    {
      title: "Nexus",
      desc: "Sipariş, sevkiyat ve teslimat süreçlerini uçtan uca yönetin.",
      href: "/products/nexus/",
    },
    {
      title: "Lighthouse",
      desc: "Sevkiyatlarınızı anlık takip edin, görünürlüğü artırın.",
      href: "/products/lighthouse/",
    },
    {
      title: "Yard Management",
      desc: "Depo sahası, rampa ve randevu süreçlerini optimize edin.",
      href: "/products/yard-management/",
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
        <Link
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
        </Link>
      ))}
    </motion.div>
  );
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <motion.path
        d="M3 5H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open ? { d: "M4 4L16 16" } : { d: "M3 5H17" }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        d="M3 10H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.path
        d="M3 15H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={open ? { d: "M4 16L16 4" } : { d: "M3 15H17" }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease }}
      className="md:hidden mt-2 bg-[rgba(40,40,40,0.97)] backdrop-blur-xl rounded-3xl shadow-lg p-4 max-h-[75vh] overflow-y-auto"
    >
      {Object.entries(dropdownMenus).map(([key, items]) => (
        <div key={key} className="border-b border-white/10 last:border-b-0">
          <button
            onClick={() => setOpenSection(openSection === key ? null : key)}
            className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-bold text-white"
          >
            {key}
            <ChevronDown flipped={openSection === key} />
          </button>
          <AnimatePresence>
            {openSection === key && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-2 mb-1 rounded-xl hover:bg-white/10 transition-colors duration-150"
                  >
                    <span className="text-[14px] font-bold text-[#21beba] block">
                      {item.title}
                    </span>
                    <p className="text-[13px] text-white/60 leading-[1.4] mt-0.5">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      {[{ label: "Yapay Zeka", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/lumina` }, { label: "Hakkımızda", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hakkimizda` }].map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onClose}
          className="block px-3 py-3 text-[15px] font-bold text-white border-b border-white/10 last:border-b-0"
        >
          {item.label}
        </a>
      ))}
      <a
        href="#"
        onClick={onClose}
        className="block px-3 py-3 text-[15px] font-bold text-[#21beba]"
      >
        Giriş Yap
      </a>
    </motion.div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-3 animate-[headerIn_0.8s_0.2s_both_cubic-bezier(0.16,1,0.3,1)]"
    >
      <nav
        className={`relative flex w-full max-w-[1320px] items-center justify-between rounded-full px-6 py-2 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(40,40,40,0.85)] backdrop-blur-xl shadow-lg"
            : "bg-[rgba(68,68,68,0.5)] backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-icon.svg`}
            alt=""
            width={30}
            height={31}
            className="h-[31px] w-auto"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-text.svg`}
            alt="Yukato"
            width={105}
            height={22}
            className="h-[22px] w-auto"
          />
        </Link>

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
            {[{ label: "Yapay Zeka", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/lumina` }, { label: "Hakkımızda", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hakkimizda` }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-[14px] font-bold text-white hover:text-white/80 transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
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
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/15 transition-colors duration-200"
            aria-label="Menü"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <div className="w-full max-w-[1320px]">
            <MobileMenu onClose={() => setMobileOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
