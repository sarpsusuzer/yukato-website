import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LuminaHero from "@/components/lumina/LuminaHero";
import LuminaBenefits from "@/components/lumina/LuminaBenefits";
import LuminaFeatures from "@/components/lumina/LuminaFeatures";

export default function LuminaPage() {
  return (
    <>
      <Header />
      <main>
        <LuminaHero />
        <LuminaBenefits />
        <LuminaFeatures />
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
