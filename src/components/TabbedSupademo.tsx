"use client";

import { useState, useRef } from "react";

export type SupademoTab = { label: string; id: string };

const ASPECT_RATIO = "1.84";

export default function TabbedSupademo({ tabs }: { tabs: SupademoTab[] }) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Tab bar */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
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

      {/* Embed */}
      <div
        style={{
          position: "relative",
          boxSizing: "content-box",
          aspectRatio: ASPECT_RATIO,
          maxHeight: "80vh",
          width: "100%",
          padding: "0",
        }}
      >
        <iframe
          key={tabs[active]?.id}
          src={`https://app.supademo.com/embed/${tabs[active]?.id}?embed_v=2&utm_source=embed`}
          loading="lazy"
          title={tabs[active]?.label}
          allow="clipboard-write"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
        />
      </div>
    </div>
  );
}
