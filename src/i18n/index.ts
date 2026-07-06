export { tr } from "./tr";
export { en } from "./en";
export type { Translations } from "./tr";

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

import { tr } from "./tr";
import { en } from "./en";
import type { Translations } from "./tr";

const translations: Record<string, Translations> = { tr, en };

export function getTranslations(locale: string): Translations {
  return translations[locale] ?? tr;
}
