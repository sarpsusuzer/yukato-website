"use client";

import { useState, useRef, useEffect } from "react";

export type SupademoTab = { label: string; id: string };
export type SupademoSection = { label: string; tabs: SupademoTab[] };

const ASPECT_RATIO = "1.75";
const SCROLL_AMOUNT = 240;

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
  const isLight = variant === "light";

  const currentTabs = resolvedSections[activeSection]?.tabs ?? [];

  const scrollRef = useRef<HTMLDivElement>(null);
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

  const scrollBy = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const btn = el.children[activeTab] as HTMLElement | undefined;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [activeTab]);

  const sectionInactive = isLight
    ? "bg-black/5 border-black/15 text-[#003735]/70 hover:bg-black/10 hover:text-[#003735]"
    : "bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white";

  const chevronCls = isLight
    ? "border-black/20 text-[#003735] hover:enabled:bg-black/5"
    : "border-white/20 text-white hover:enabled:bg-white/15";

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Section pills */}
      {hasSections && (
        <div className="flex gap-2 flex-wrap">
          {resolvedSections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-200 border ${
                activeSection === i
                  ? "bg-[#21beba] border-[#21beba] text-white shadow-sm"
                  : sectionInactive
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Sub-tab bar with chevrons */}
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-150 disabled:opacity-20 disabled:cursor-not-allowed ${chevronCls}`}
          aria-label="Sola kaydır"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {currentTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 whitespace-nowrap border ${
                activeTab === i
                  ? "bg-[#21beba] border-[#21beba] text-white shadow-sm"
                  : sectionInactive
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-150 disabled:opacity-20 disabled:cursor-not-allowed ${chevronCls}`}
          aria-label="Sağa kaydır"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Embed */}
      <div className="flex gap-2 items-start w-full">
        <div className="shrink-0 w-8" />
        <div className="flex-1 min-w-0" style={{ position: "relative", boxSizing: "content-box", aspectRatio: ASPECT_RATIO, maxHeight: "80vh" }}>
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
        <div className="shrink-0 w-8" />
      </div>
    </div>
  );
}
