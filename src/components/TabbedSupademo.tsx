"use client";

import { useState, useRef, useEffect } from "react";

export type SupademoTab = { label: string; id: string };
export type SupademoSection = { label: string; tabs: SupademoTab[] };

const ASPECT_RATIO = "1.75";
const SCROLL_AMOUNT = 240;

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none"
      className={`transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Props =
  | { sections: SupademoSection[]; tabs?: never; variant?: "dark" | "light" }
  | { tabs: SupademoTab[]; sections?: never; variant?: "dark" | "light" };

export default function TabbedSupademo({ tabs, sections, variant = "dark" }: Props) {
  const resolvedSections: SupademoSection[] = sections ?? [{ label: "", tabs: tabs ?? [] }];
  const hasSections = !!sections && sections.length > 1;

  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLight = variant === "light";

  const currentTabs = resolvedSections[activeSection]?.tabs ?? [];

  const scrollRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    setActiveTab(0);
    setDropdownOpen(false);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    setTimeout(updateScrollState, 50);
  }, [activeSection]);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", updateScrollState); ro.disconnect(); };
  }, [currentTabs]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const btn = el.children[activeTab] as HTMLElement | undefined;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [activeTab]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  const scrollBy = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" });
  };

  const dropdownBg = isLight ? "bg-white border-black/15 shadow-md" : "bg-[#0f3d3d] border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]";
  const dropdownItemActive = isLight ? "bg-[#21beba]/10 text-[#008582] font-bold" : "bg-[#21beba]/20 text-[#21beba] font-bold";
  const dropdownItemHover = isLight ? "hover:bg-black/5 text-[#003735]" : "hover:bg-white/10 text-white";

  const pillBase = "shrink-0 transition-all duration-200 whitespace-nowrap";
  const tabActive = "text-[#21beba] font-bold";
  const tabInactive = isLight
    ? "text-[#003735]/50 hover:text-[#003735]/80 font-semibold"
    : "text-white/40 hover:text-white/70 font-semibold";

  const chevronCls = isLight
    ? "text-[#003735]/40 hover:enabled:text-[#003735] disabled:opacity-20 disabled:cursor-not-allowed"
    : "text-white/40 hover:enabled:text-white disabled:opacity-20 disabled:cursor-not-allowed";

  const divider = isLight ? "bg-black/10" : "bg-white/15";

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Single row: dropdown + divider + tabs + chevrons */}
      <div className="flex items-center gap-1 w-full min-w-0">

        {/* Section dropdown */}
        {hasSections && (
          <>
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
                  isLight
                    ? "bg-[#21beba] text-white hover:bg-[#1aaba8]"
                    : "bg-[#21beba] text-white hover:bg-[#1aaba8]"
                }`}
              >
                {resolvedSections[activeSection].label}
                <ChevronDown open={dropdownOpen} />
              </button>

              {dropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 min-w-[160px] rounded-2xl border overflow-hidden z-50 py-1 ${dropdownBg}`}>
                  {resolvedSections.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveSection(i); setDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors duration-150 ${
                        activeSection === i ? dropdownItemActive : dropdownItemHover
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vertical divider */}
            <div className={`shrink-0 w-px h-5 mx-1 ${divider}`} />
          </>
        )}

        {/* Left chevron */}
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className={`shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-150 ${chevronCls}`}
          aria-label="Sola kaydır"
        >
          <ChevronLeft />
        </button>

        {/* Tab bar */}
        <div
          ref={scrollRef}
          className="flex gap-1 overflow-x-auto flex-1 min-w-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {currentTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`${pillBase} px-3 py-2 text-[13px] rounded-full ${
                activeTab === i ? tabActive : tabInactive
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right chevron */}
        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className={`shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-150 ${chevronCls}`}
          aria-label="Sağa kaydır"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Iframe */}
      <div style={{ position: "relative", boxSizing: "content-box", aspectRatio: ASPECT_RATIO, maxHeight: "80vh" }}>
        <iframe
          key={currentTabs[activeTab]?.id}
          src={`https://app.supademo.com/embed/${currentTabs[activeTab]?.id}?embed_v=2&utm_source=embed`}
          loading="lazy"
          title={currentTabs[activeTab]?.label}
          allow="clipboard-write"
          frameBorder="0"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "16px" }}
        />
      </div>
    </div>
  );
}
