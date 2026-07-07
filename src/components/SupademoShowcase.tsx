import TabbedSupademo, { SupademoTab } from "./TabbedSupademo";

const HOMEPAGE_TABS: SupademoTab[] = [
  { label: "Gönderici - Adres Oluşturma ve Düzenleme", id: "cmls17pzy1hmx11890pdwgwm1" },
  { label: "Gönderici - Manuel Sevkiyat Oluşturma", id: "cmls1aix21i221189k5j2oazm" },
  { label: "Gönderici - İrsaliye Yükleme ve Görüntüleme", id: "cmls1w7b71jhu1189mulkyut0" },
  { label: "Gönderici - Kapı Kayıt", id: "cmls2p9691m5h1189d20xeg0m" },
  { label: "Gönderici - Canlı İzleme", id: "cmlsj58ln2kj91189lzgtpkhd" },
  { label: "Gönderici - Yüklemeye Gelen Sevkiyatları Görüntüleme ve Randevu Atama", id: "cmlsjqbhp2lsw1189xb6vy36d" },
];

type Props =
  | { locale: string; tabs?: SupademoTab[]; id?: never; title?: never; aspectRatio?: never; variant?: "dark" | "light" }
  | { id?: never; title?: never; aspectRatio?: never; locale?: never; tabs?: SupademoTab[]; variant?: "dark" | "light" };

export default function SupademoShowcase({ tabs, variant }: { tabs?: SupademoTab[]; variant?: "dark" | "light" }) {
  const resolvedTabs = tabs ?? HOMEPAGE_TABS;
  const isLight = variant === "light";
  const notchFill = isLight ? "#fafaf8" : "#1a4d4d";

  return (
    <div className="relative">
      {/* Top notch */}
      <svg className="absolute top-0 left-0 w-full z-10" style={{ height: "36px" }} viewBox="0 0 1440 36" preserveAspectRatio="none" fill={notchFill} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
      </svg>

      <section
        className="w-full px-6 md:px-[60px] pt-[52px] pb-16"
        style={{ backgroundColor: isLight ? "#ffffff" : "#1a4d4d" }}
      >
        <div className="max-w-[1160px] mx-auto">
          <TabbedSupademo tabs={resolvedTabs} />
        </div>
      </section>

      {/* Bottom notch */}
      <svg className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill={notchFill} xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
      </svg>
    </div>
  );
}
