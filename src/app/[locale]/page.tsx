import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TextNarrative from "@/components/TextNarrative";
import FeatureShowcase from "@/components/FeatureShowcase";
import StickyNarrative from "@/components/StickyNarrative";
import HowItWorks from "@/components/HowItWorks";
import SupademoShowcase from "@/components/SupademoShowcase";
import Contact from "@/components/Contact";
import FaqCertificates from "@/components/FaqCertificates";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TextNarrative />
        <FeatureShowcase />
        <StickyNarrative />
        <HowItWorks />
        <SupademoShowcase locale={locale} />
        <Contact />
        <FaqCertificates />
      </main>
      <Footer />
    </>
  );
}
