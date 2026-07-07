export default function SupademoShowcase() {
  return (
    <section className="w-full px-6 md:px-[60px] py-16">
      <div className="max-w-[1160px] mx-auto">
        <div style={{ position: "relative", boxSizing: "content-box", aspectRatio: "1.75", maxHeight: "80vh", width: "100%", padding: "40px 0" }}>
          <iframe
            data-version="2"
            src="https://app.supademo.com/showcase/embed/cmlzay10h004hxa0idvb1cbk4?embed_v=2&utm_source=embed"
            loading="lazy"
            title="Yukato Ürün Tanıtımı"
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
