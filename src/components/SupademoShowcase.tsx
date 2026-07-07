import TabbedSupademo, { SupademoTab, SupademoSection } from "./TabbedSupademo";

const HOMEPAGE_SECTIONS: SupademoSection[] = [
  {
    label: "Tedarikçi",
    tabs: [
      { label: "Adres Oluşturma ve Düzenleme", id: "cmls17pzy1hmx11890pdwgwm1" },
      { label: "Manuel Sevkiyat Oluşturma", id: "cmls1aix21i221189k5j2oazm" },
      { label: "İrsaliye Yükleme ve Görüntüleme", id: "cmls1w7b71jhu1189mulkyut0" },
      { label: "Kapı Kayıt", id: "cmls2p9691m5h1189d20xeg0m" },
      { label: "Canlı İzleme", id: "cmlsj58ln2kj91189lzgtpkhd" },
      { label: "Yüklemeye Gelen Sevkiyatları Görüntüleme ve Randevu Atama", id: "cmlsjqbhp2lsw1189xb6vy36d" },
    ],
  },
  {
    label: "Nakliyeci",
    tabs: [
      { label: "Nakliyeci - Sürücü Atama", id: "cmltbx4jx0vc7d2ntkd66zwfa" },
      { label: "Nakliyeci - Araç Talep Saatine Göre Sürücü Ataması Yapmak", id: "cmltc0xd80vlld2nt8ppax1l2" },
    ],
  },
  {
    label: "Perakendeci",
    tabs: [
      { label: "Alıcı - Teslimat Randevusu Atama", id: "cmluk7eef2zzpd2nt74wltfq1" },
      { label: "Alıcı - Mal Kabul ve İrsaliye İşlemleri", id: "cmlukh8b130jad2ntxzzi14zl" },
      { label: "Alıcı - Canlı İzleme", id: "cmlukqosy31iod2ntr146m0ah" },
      { label: "Alıcı - Sipariş Kontrol", id: "cmlz2xktt1ob014352872u8tq" },
      { label: "Alıcı - Kapı Kayıt", id: "cmlukjs9m30uqd2nthjt78ffm" },
    ],
  },
];

export default function SupademoShowcase({ tabs, sections, variant }: { tabs?: SupademoTab[]; sections?: SupademoSection[]; variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  const notchFill = isLight ? "#fafaf8" : "#1a4d4d";

  const content = sections
    ? <TabbedSupademo sections={sections} variant={variant} />
    : tabs
      ? <TabbedSupademo tabs={tabs} variant={variant} />
      : <TabbedSupademo sections={HOMEPAGE_SECTIONS} variant={variant} />;

  return (
    <div className="relative">
      {/* Top notch */}
      <svg className="absolute top-0 left-0 w-full z-10" style={{ height: "36px" }} viewBox="0 0 1440 36" preserveAspectRatio="none" fill={notchFill} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
      </svg>

      <section
        className="w-full px-6 md:px-[60px] pt-[52px] pb-16"
        style={{ backgroundColor: isLight ? "#fafaf8" : "#1a4d4d" }}
      >
        <div className="max-w-[1160px] mx-auto flex flex-col gap-6">
          <h2 className={`text-[28px] md:text-[36px] font-bold text-center ${isLight ? "text-[#003735]" : "text-white"}`}>
            Yukato&apos;yu deneyimleyin
          </h2>
          {content}
        </div>
      </section>

      {/* Bottom notch */}
      <svg className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill={notchFill} xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
      </svg>
    </div>
  );
}
