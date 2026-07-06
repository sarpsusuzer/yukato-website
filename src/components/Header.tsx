"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT, useLocale } from "@/i18n/LocaleContext";

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

function DropdownMenu({ items, locale }: { items: DropdownItem[]; locale: string }) {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
          href={`${bp}/${locale}${item.href}`}
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

function MobileMenu({ onClose, locale }: { onClose: () => void; locale: string }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const t = useT();
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease }}
      className="md:hidden mt-2 bg-[rgba(40,40,40,0.97)] backdrop-blur-xl rounded-3xl shadow-lg p-4 max-h-[75vh] overflow-y-auto"
    >
      <div className="border-b border-white/10">
        <button
          onClick={() => setOpenSection(openSection === "Platform" ? null : "Platform")}
          className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-bold text-white"
        >
          {t.nav.platform}
          <ChevronDown flipped={openSection === "Platform"} />
        </button>
        <AnimatePresence>
          {openSection === "Platform" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {t.platformDropdown.map((item) => (
                <Link
                  key={item.title}
                  href={`${bp}/${locale}${item.href}`}
                  onClick={onClose}
                  className="block px-3 py-2 mb-1 rounded-xl hover:bg-white/10 transition-colors duration-150"
                >
                  <span className="text-[14px] font-bold text-[#21beba] block">{item.title}</span>
                  <p className="text-[13px] text-white/60 leading-[1.4] mt-0.5">{item.desc}</p>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {[
        { label: t.nav.ai, href: `${bp}/${locale}/lumina` },
        { label: t.nav.about, href: `${bp}/${locale}/hakkimizda` },
      ].map((item) => (
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
        {t.nav.login}
      </a>
    </motion.div>
  );
}

function LocaleSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

  function getLocalePath(newLocale: string) {
    // Replace /[locale]/ segment with new locale
    const withoutBp = pathname.replace(bp, "") || "/";
    const parts = withoutBp.split("/").filter(Boolean);
    if (parts[0] === "tr" || parts[0] === "en") {
      parts[0] = newLocale;
    } else {
      parts.unshift(newLocale);
    }
    return `${bp}/${parts.join("/")}`;
  }

  const otherLocale = locale === "tr" ? "en" : "tr";
  const otherLabel = locale === "tr" ? "EN" : "TR";

  return (
    <div className="hidden md:flex items-center gap-1 text-[14px] font-semibold text-white whitespace-nowrap">
      <span className="text-white/50">{locale.toUpperCase()}</span>
      <span className="text-white/30">/</span>
      <Link
        href={getLocalePath(otherLocale)}
        className="text-[#21beba] hover:text-[#3bc6bd] transition-colors duration-200"
      >
        {otherLabel}
      </Link>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useT();
  const locale = useLocale();
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-3 animate-[headerIn_0.8s_0.2s_both_cubic-bezier(0.16,1,0.3,1)]">
      <nav
        className={`relative flex w-full max-w-[1320px] items-center justify-between rounded-full px-6 py-2 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(40,40,40,0.6)] backdrop-blur-xl shadow-lg"
            : "bg-[rgba(68,68,68,0.6)] backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <Link href={`${bp}/${locale}`} className="flex items-center gap-2 shrink-0">
          <Image
            src={`${bp}/logo-icon.svg`}
            alt=""
            width={30}
            height={31}
            className="h-[31px] w-auto"
          />
          <Image
            src={`${bp}/logo-text.svg`}
            alt="Yukato"
            width={105}
            height={22}
            className="h-[22px] w-auto"
          />
        </Link>

        {/* Nav links — absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
          <div className="flex items-center gap-4">
            <div
              className="relative"
              onMouseEnter={() => handleEnter("Platform")}
              onMouseLeave={handleLeave}
            >
              <button
                className={`flex items-center gap-0.5 px-3 py-2 text-[14px] font-bold text-white transition-all duration-200 rounded-full whitespace-nowrap ${
                  openDropdown === "Platform" ? "bg-white/15" : "hover:text-white/80"
                }`}
              >
                {t.nav.platform}
                <ChevronDown flipped={openDropdown === "Platform"} />
              </button>
              <AnimatePresence>
                {openDropdown === "Platform" && (
                  <DropdownMenu items={t.platformDropdown} locale={locale} />
                )}
              </AnimatePresence>
            </div>
            {[
              { label: t.nav.ai, href: `${bp}/${locale}/lumina` },
              { label: t.nav.about, href: `${bp}/${locale}/hakkimizda` },
            ].map((item) => (
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
            {t.nav.login}
          </a>
          <a
            href="#contact"
            className="bg-[#21beba] border border-[#3bc6bd] text-white text-[14px] font-bold px-4 py-2.5 rounded-full hover:bg-[#1aaba8] transition-colors duration-200 whitespace-nowrap"
          >
            {t.nav.demo}
          </a>
          <LocaleSwitcher locale={locale} />
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
            <MobileMenu onClose={() => setMobileOpen(false)} locale={locale} />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
