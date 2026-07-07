"use client";

import { useState, useRef, useEffect } from "react";

export type SupademoTab = { label: string; id: string };

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

export default function TabbedSupademo({ tabs }: { tabs: SupademoTab[] }) {
  const [active, setActive] = useState(0);
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
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", updateScrollState); ro.disconnect(); };
  }, [tabs]);

  const scrollBy = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" });
  };

  // Scroll active tab into view when changed
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const btn = el.children[active] as HTMLElement | undefined;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Tab bar with chevrons */}
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-white transition-all duration-150 disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:bg-white/15"
          aria-label="Sola kaydır"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 whitespace-nowrap border ${
                active === i
                  ? "bg-[#21beba] border-[#21beba] text-white shadow-sm"
                  : "bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/20 text-white transition-all duration-150 disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:bg-white/15"
          aria-label="Sağa kaydır"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Embed — same width as the flex-1 tab area between the chevrons */}
      <div className="flex gap-2 items-start w-full">
        {/* Spacer matching left chevron */}
        <div className="shrink-0 w-8" />

        <div className="flex-1" style={{ position: "relative", boxSizing: "content-box", aspectRatio: ASPECT_RATIO, maxHeight: "80vh", width: "100%" }}>
          <iframe
            key={tabs[active]?.id}
            src={`https://app.supademo.com/embed/${tabs[active]?.id}?embed_v=2&utm_source=embed`}
            loading="lazy"
            title={tabs[active]?.label}
            allow="clipboard-write"
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "16px" }}
          />
        </div>

        {/* Spacer matching right chevron */}
        <div className="shrink-0 w-8" />
      </div>
    </div>
  );
}
