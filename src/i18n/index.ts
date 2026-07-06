import { tr } from "./tr";
import { en } from "./en";

export type { Translations } from "./tr";
export { tr, en };

export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

const translations: Record<string, typeof tr> = { tr, en };

export function getTranslations(locale: string): typeof tr {
  return translations[locale] ?? tr;
}
