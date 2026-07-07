import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformProblems from "@/components/platform/PlatformProblems";
import PlatformFeatures from "@/components/platform/PlatformFeatures";
import SupademoShowcase from "@/components/SupademoShowcase";
import { getPlatformPages } from "@/data/platformPages";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";

export function generateStaticParams() {
  const slugs = Object.keys(getPlatformPages("tr"));
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = getPlatformPages(locale)[slug];
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <PlatformHero label={page.label} title={page.title} variant="light" />
        <PlatformProblems
          sectionLabel={page.problemsLabel}
          sectionTitle={page.problemsTitle}
          problems={page.problems}
        />
        <PlatformFeatures
          sectionLabel={page.featuresLabel}
          sectionTitle={page.featuresTitle}
          features={page.features}
        />
        {page.supademoTabs && (
          <SupademoShowcase tabs={page.supademoTabs} variant="light" />
        )}
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
