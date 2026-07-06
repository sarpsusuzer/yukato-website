import { notFound } from "next/navigation";
import { locales, getTranslations } from "@/i18n";
import LocaleProvider from "./LocaleProvider";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  const t = getTranslations(locale);

  return <LocaleProvider t={t}>{children}</LocaleProvider>;
}
