import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-20 px-6 md:px-[60px] bg-white">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900 mb-8">
              Hakkımızda
            </h1>
            <p className="text-[20px] leading-[1.7] text-neutral-600 mb-6">
              Yukato, lojistik operasyonlarını dijitalleştiren ve tedarik zinciri süreçlerini şeffaf hale getiren bir teknoloji platformudur.
            </p>
            <p className="text-[20px] leading-[1.7] text-neutral-600">
              Placeholder içerik — bu sayfa yakında güncellenecektir.
            </p>
          </div>
        </section>
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
