const localeConfigs: Record<string, { id: string; title: string; aspectRatio: string }> = {
  tr: { id: "cmlzay10h004hxa0idvb1cbk4", title: "Yukato Ürün Tanıtımı", aspectRatio: "1.75" },
  en: { id: "cmku6dlaw00dl2y0i0lz7gz84", title: "Yukato Product Tour", aspectRatio: "1.84" },
};

type Props =
  | { locale: string; id?: never; title?: never; aspectRatio?: never; variant?: "dark" | "light" }
  | { id: string; title: string; aspectRatio: string; locale?: never; variant?: "dark" | "light" };

export default function SupademoShowcase(props: Props) {
  const config = props.id
    ? { id: props.id, title: props.title, aspectRatio: props.aspectRatio }
    : (localeConfigs[props.locale!] ?? localeConfigs.tr);

  const isLight = props.variant === "light";
  const bg = isLight ? "#ffffff" : "#1a4d4d";
  // Notch fill matches the surrounding sections' background
  const notchFill = isLight ? "#fafaf8" : "#1a4d4d";

  return (
    <div className="relative">
      {/* Top notch */}
      <svg className="absolute top-0 left-0 w-full z-10" style={{ height: "36px" }} viewBox="0 0 1440 36" preserveAspectRatio="none" fill={notchFill} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 36H680C710 36 720 36 740 28C760 16 780 0 820 0H1408C1425.7 0 1440 14.3 1440 32V36H0Z" />
      </svg>

      <section style={{ backgroundColor: bg }} className="w-full px-6 md:px-[60px] pt-[52px] pb-16">
        <div className="max-w-[1160px] mx-auto">
          <div style={{ position: "relative", boxSizing: "content-box", aspectRatio: config.aspectRatio, maxHeight: "80vh", width: "100%", padding: "40px 0" }}>
            <iframe
              data-version="2"
              src={`https://app.supademo.com/showcase/embed/${config.id}?embed_v=2&utm_source=embed`}
              loading="lazy"
              title={config.title}
              allow="clipboard-write"
              frameBorder="0"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "32px" }}
            />
          </div>
        </div>
      </section>

      {/* Bottom notch */}
      <svg className="absolute bottom-0 left-0 w-full translate-y-[99%] z-10" viewBox="0 0 1440 36" preserveAspectRatio="none" fill={notchFill} xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H760C730 0 720 0 700 8C680 20 660 36 620 36H32C14.3 36 0 21.7 0 4V0H1440Z" />
      </svg>
    </div>
  );
}
