"use client";

import { createContext, useContext } from "react";
import type { Translations } from "./tr";
import { tr } from "./tr";

export const LocaleContext = createContext<Translations>(tr);

export function useT(): Translations {
  return useContext(LocaleContext);
}

export function useLocale(): string {
  return useContext(LocaleContext).locale;
}
