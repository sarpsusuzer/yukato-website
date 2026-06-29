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
            <h1 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900 mb-4">
              Hakkımızda
            </h1>
            <p className="text-[24px] leading-[1.5] font-medium text-[#21beba] mb-12">
              Lojistik operasyonlarında görünmeyeni görünür kılmak için buradayız.
            </p>

            <div className="space-y-6 text-[18px] leading-[1.8] text-neutral-600 mb-20">
              <p>
                Yukato, tedarik zinciri ve lojistik operasyonlarında yaşanan belirsizliği azaltmak için geliştirilmiş bir görünürlük platformudur.
              </p>
              <p>
                Günümüzde şirketler yalnızca ürün taşımıyor; zaman, kapasite, stok, iş gücü ve müşteri beklentisi yönetiyor. Ancak birçok operasyonda hâlâ sevkiyatın nerede olduğu, ne zaman geleceği, boşaltmanın ne kadar süreceği ya da teslimatın nasıl kanıtlanacağı farklı kanallar, manuel kontroller ve dağınık bilgiler üzerinden takip ediliyor.
              </p>
              <p>
                Bu belirsizlik; gereksiz stok seviyelerine, artan personel maliyetlerine, bekleyen araçlara, hatalı mal kabul süreçlerine ve operasyonel aksaklıklara dönüşüyor.
              </p>
              <p className="text-neutral-900 font-semibold text-[20px]">
                Yukato, bu karmaşayı tek bir görünürlük katmanında toplar.
              </p>
            </div>

            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900 mb-6">
              Neden varız?
            </h2>
            <div className="space-y-6 text-[18px] leading-[1.8] text-neutral-600 mb-20">
              <p>
                Lojistik operasyonları çoğu zaman sorun çıktığında fark edilir. Bir sevkiyat geciktiğinde, bir araç rampada beklediğinde, bir teslimat belgesi kaybolduğunda ya da sipariş ile gelen ürün arasında uyumsuzluk olduğunda operasyon ekipleri hızla reaksiyon almak zorunda kalır.
              </p>
              <p className="text-neutral-900 font-semibold text-[20px]">
                Bizce lojistik yönetimi yalnızca sorunlara müdahale etmekten ibaret olmamalı.
              </p>
              <p>
                Yukato, şirketlerin neyin geldiğini, ne zaman geleceğini, nerede beklediğini, hangi aşamada olduğunu ve teslimatın nasıl tamamlandığını önceden görebilmesini sağlar.
              </p>
              <p>
                Böylece ekipler daha az telefon ve e-posta trafiğiyle çalışır, araçlar daha verimli planlanır, mal kabul süreçleri hızlanır ve teslimat operasyonları uçtan uca izlenebilir hale gelir.
              </p>
            </div>

            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900 mb-6">
              Ne yapıyoruz?
            </h2>
            <div className="space-y-6 text-[18px] leading-[1.8] text-neutral-600 mb-20">
              <p>
                Yukato; tedarikçiler, taşıyıcılar, operasyon ekipleri ve teslimat noktaları arasındaki bilgi akışını dijitalleştirir.
              </p>
              <p>
                Sevkiyat planlamasından randevulu rampaya, mal kabulden dijital teslimat kanıtına kadar lojistik operasyonlarının kritik adımlarını tek bir platformda birleştirir.
              </p>
              <p>
                Platformumuz; manuel takip süreçlerini azaltır, operasyonel veriyi anlamlı hale getirir ve ekiplerin karar almasını kolaylaştırır.
              </p>
            </div>

            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900 mb-6">
              Yaklaşımımız
            </h2>
            <div className="space-y-6 text-[18px] leading-[1.8] text-neutral-600 mb-8">
              <p>
                Biz teknolojiyi sadece süreçleri dijitalleştirmek için değil, operasyonları daha öngörülebilir hale getirmek için kullanıyoruz.
              </p>
              <p>
                Yukato&apos;da her özellik gerçek bir operasyonel probleme karşılık gelir:
              </p>
            </div>
            <ul className="space-y-3 text-[18px] leading-[1.8] text-neutral-600 mb-8 list-none">
              <li className="pl-4 border-l-[3px] border-[#21beba]">Neyin geleceğini bilmemek stok maliyetine dönüşür.</li>
              <li className="pl-4 border-l-[3px] border-[#21beba]">Sevkiyat takibini telefonla yapmak zaman kaybettirir.</li>
              <li className="pl-4 border-l-[3px] border-[#21beba]">Sipariş ve sevkiyat uyumsuzluğu mal kabulde kontrol yükü yaratır.</li>
              <li className="pl-4 border-l-[3px] border-[#21beba]">Boşaltma zamanının belirsizliği araç planlamasını bozar.</li>
              <li className="pl-4 border-l-[3px] border-[#21beba]">Fiziksel teslimat belgeleri operasyonun hızını düşürür.</li>
            </ul>
            <p className="text-[18px] leading-[1.8] text-neutral-900 font-semibold mb-20">
              Biz bu problemleri görünürlük, otomasyon ve entegrasyon ile çözüyoruz.
            </p>

            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900 mb-6">
              Vizyonumuz
            </h2>
            <div className="space-y-6 text-[18px] leading-[1.8] text-neutral-600 mb-20">
              <p>
                Lojistik operasyonlarının geleceğinde daha fazla manuel takip, daha fazla e-posta ya da daha fazla kontrol listesi olmayacak.
              </p>
              <p>
                Gelecekte şirketler, tedarik zincirlerini anlık, güvenilir ve aksiyon alınabilir veriyle yönetecek.
              </p>
              <p>
                Yukato olarak hedefimiz, lojistik operasyonlarında görünürlüğü yeni standart haline getirmek.
              </p>
              <p>
                Şirketlerin yalnızca bugünkü sevkiyatlarını değil, yarının operasyonlarını da daha güvenle planlayabildiği bir altyapı sunmak için çalışıyoruz.
              </p>
            </div>

            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-neutral-900 mb-8">
              Yukato ile
            </h2>
            <ul className="space-y-4 text-[20px] leading-[1.6] font-medium text-neutral-900 mb-8 list-none">
              <li className="pl-5 border-l-[3px] border-[#21beba]">Daha az belirsizlik.</li>
              <li className="pl-5 border-l-[3px] border-[#21beba]">Daha az manuel takip.</li>
              <li className="pl-5 border-l-[3px] border-[#21beba]">Daha az bekleme.</li>
              <li className="pl-5 border-l-[3px] border-[#21beba]">Daha hızlı mal kabul.</li>
              <li className="pl-5 border-l-[3px] border-[#21beba]">Daha izlenebilir teslimat.</li>
              <li className="pl-5 border-l-[3px] border-[#21beba]">Daha güçlü operasyonel kontrol.</li>
            </ul>
            <p className="text-[20px] leading-[1.6] font-semibold text-[#21beba]">
              Yukato, lojistik operasyonlarınızı görünür, ölçülebilir ve yönetilebilir hale getirir.
            </p>
          </div>
        </section>
        <Contact variant="light" />
      </main>
      <Footer />
    </>
  );
}
