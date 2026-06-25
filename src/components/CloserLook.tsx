"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function FloatingCard({
  children,
  className,
  delay = 0,
  speed = 1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      <motion.div
        animate={{ y: [-6, 6] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function CloserLook() {
  return (
    <section className="py-32 md:py-44 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-[clamp(28px,5vw,56px)] font-semibold tracking-[-0.03em] text-neutral-900 mb-16 md:mb-20 text-center"
        >
          Take a Closer Look
        </motion.h2>

        <div className="relative">
          {/* Main dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.07)] border border-black/[0.06] p-6 md:p-8"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
              </div>
              <div className="h-7 bg-neutral-50 rounded-lg flex-1 max-w-[300px] border border-neutral-100" />
            </div>

            {/* Dashboard layout */}
            <div className="grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:block space-y-3">
                {["Overview", "Shipments", "Documents", "Fleet", "Reports"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className={`h-9 rounded-lg px-3 flex items-center text-[12px] ${
                        i === 0
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-400"
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              {/* Main area */}
              <div className="col-span-12 md:col-span-9 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Shipments", value: "128" },
                    { label: "On-Time Rate", value: "96.4%" },
                    { label: "Documents Pending", value: "7" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-neutral-50 rounded-xl p-4 border border-neutral-100"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">
                        {stat.label}
                      </div>
                      <div className="text-[22px] font-semibold text-neutral-800 mt-1">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 h-[160px] flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-emerald-100 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>

                {/* Table rows */}
                <div className="bg-neutral-50 rounded-xl border border-neutral-100 overflow-hidden">
                  {[1, 2, 3].map((row) => (
                    <div
                      key={row}
                      className="flex items-center gap-4 px-4 py-3 border-b border-neutral-100 last:border-0"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div className="h-3 bg-neutral-200 rounded w-24" />
                      <div className="h-3 bg-neutral-100 rounded w-16" />
                      <div className="flex-1" />
                      <div className="h-3 bg-neutral-100 rounded w-20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating cards */}
          <FloatingCard
            className="absolute -top-6 -right-4 md:-right-12 z-10"
            delay={0.2}
            speed={1.3}
          >
            <div className="bg-white rounded-xl shadow-lg border border-neutral-100 p-4 w-[160px]">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                Live Status
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[13px] font-medium text-neutral-700">
                  All Systems Go
                </span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            className="absolute -bottom-4 -left-4 md:-left-10 z-10"
            delay={0.4}
            speed={0.8}
          >
            <div className="bg-white rounded-xl shadow-lg border border-neutral-100 p-4 w-[180px]">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2">
                Delivery Confirmed
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-emerald-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-neutral-700">
                  SHP-2847
                </span>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            className="absolute top-1/3 -left-4 md:-left-8 z-10 hidden md:block"
            delay={0.6}
            speed={1.1}
          >
            <div className="bg-white rounded-xl shadow-lg border border-neutral-100 p-3 w-[140px]">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-1">
                e-Waybill
              </div>
              <div className="text-[12px] text-emerald-600 font-medium">
                Verified ✓
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
