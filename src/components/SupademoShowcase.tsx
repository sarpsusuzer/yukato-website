const configs: Record<string, { id: string; title: string; aspectRatio: string }> = {
  tr: { id: "cmlzay10h004hxa0idvb1cbk4", title: "Yukato Ürün Tanıtımı", aspectRatio: "1.75" },
  en: { id: "cmku6dlaw00dl2y0i0lz7gz84", title: "Yukato Product Tour", aspectRatio: "1.84" },
};

export default function SupademoShowcase({ locale }: { locale: string }) {
  const { id, title, aspectRatio } = configs[locale] ?? configs.tr;
  return (
    <section className="w-full px-6 md:px-[60px] py-16 bg-[#1a4d4d]">
      <div className="max-w-[1160px] mx-auto">
        <div style={{ position: "relative", boxSizing: "content-box", aspectRatio, maxHeight: "80vh", width: "100%", padding: "40px 0" }}>
          <iframe
            data-version="2"
            src={`https://app.supademo.com/showcase/embed/${id}?embed_v=2&utm_source=embed`}
            loading="lazy"
            title={title}
            allow="clipboard-write"
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
