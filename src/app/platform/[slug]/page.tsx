import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import PlatformProblems from "@/components/platform/PlatformProblems";
import PlatformFeatures from "@/components/platform/PlatformFeatures";
import { platformPages, type PlatformPageData } from "@/data/platformPages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(platformPages).map((slug) => ({ slug }));
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page: PlatformPageData | undefined = platformPages[slug];
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <PlatformHero
          label={page.label}
          title={page.title}
          variant="light"
        />
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
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
