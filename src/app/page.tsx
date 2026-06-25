import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TextNarrative from "@/components/TextNarrative";
import FeatureShowcase from "@/components/FeatureShowcase";
import StickyNarrative from "@/components/StickyNarrative";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import FaqCertificates from "@/components/FaqCertificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TextNarrative />
        <FeatureShowcase />
        <StickyNarrative />
        <HowItWorks />
        <Contact />
        <FaqCertificates />
      </main>
      <Footer />
    </>
  );
}
