import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Yukato — Logistics Operations Platform",
  description: "We have rebuilt the way logistics operations move.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-manrope)]">
        <SmoothScroll />
        {children}
        <div className="fixed bottom-2 right-3 text-[10px] text-black/20 z-[9999] pointer-events-none">
          v58
        </div>
      </body>
    </html>
  );
}
