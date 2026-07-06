"use client";

import { LocaleContext } from "@/i18n/LocaleContext";
import type { Translations } from "@/i18n/tr";

export default function LocaleProvider({
  children,
  t,
}: {
  children: React.ReactNode;
  t: Translations;
}) {
  return <LocaleContext.Provider value={t}>{children}</LocaleContext.Provider>;
}
