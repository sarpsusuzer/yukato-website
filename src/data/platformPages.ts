export type PlatformPageData = {
  label: string;
  title: string;
  problemsLabel: string;
  problemsTitle: string;
  problems: { title: string; desc: string }[];
  featuresLabel: string;
  featuresTitle: string;
  features: { title: string; desc: string }[];
};

export const platformPages: Record<string, PlatformPageData> = {
  tedarikci: {
    label: "Tedarikçiler için Yukato",
    title: "Sürecinizi dijitalleştirin, ürünlerinizi güvenle sevk edin.",
    problemsLabel: "Tedarik Yönetiminin Günlük Zorlukları",
    problemsTitle: "Geciken Teslimatlar, Kopuk İletişim, Görünmez Maliyetler",
    problems: [
      { title: "Zaman Kayıpları", desc: "Sevkiyat süreçlerinde yaşanan gecikmeler ve verimsiz planlama nedeniyle kaybedilen iş saatleri." },
      { title: "Sevkiyat Takipsizliği", desc: "Ürünlerin nerede olduğunu bilememek ve teslimat süreçlerinde yaşanan belirsizlikler." },
      { title: "İletişim Trafiği", desc: "Tedarik zincirindeki paydaşlar arasında kopuk ve yavaş iletişim akışı." },
      { title: "Belge Karmaşası", desc: "Kağıt bazlı irsaliyeler, faturalar ve teslimat belgelerinin yönetim zorluğu." },
      { title: "Manuel Veri Girişleri", desc: "Tekrarlayan ve hataya açık manuel veri giriş süreçleri." },
      { title: "Veri Eksikliği", desc: "Operasyonel kararlar için gerekli verilere zamanında ulaşamama." },
    ],
    featuresLabel: "Problem Çözümü",
    featuresTitle:
      "Tedarik Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Anlık Teslimat Durum Görüntüleme", desc: "Sevkiyatlarınızın anlık durumunu tek ekrandan takip edin. Gecikmeleri önceden tespit edin." },
      { title: "Randevu Atama", desc: "Teslimat randevularını dijital olarak planlayın ve depo operasyonlarınızı optimize edin." },
      { title: "İrsaliye ile Sevkiyat Oluşturma", desc: "E-irsaliye entegrasyonu ile sevkiyatlarınızı anında oluşturun ve takibe alın." },
      { title: "Gelen Sevkiyatları Anlık Görüntüleme", desc: "Depoya yaklaşan tüm sevkiyatları canlı olarak izleyin ve hazırlıklarınızı planlayın." },
      { title: "Yüklemeye Gelen Araca Randevu Atama", desc: "Rampa yoğunluğunu azaltın, araç bekleme sürelerini minimize edin." },
      { title: "Teslimat Randevusu Atama", desc: "Teslimat noktalarına randevu vererek operasyonel verimliliği artırın." },
      { title: "Sipariş Kontrol Sistemi", desc: "Siparişlerinizi uçtan uca izleyin, eksik veya hatalı teslimatları anında tespit edin." },
      { title: "Teslimat Onaylarını Görüntüleme", desc: "Dijital teslimat kanıtlarını anlık olarak görüntüleyin ve doğrulayın." },
      { title: "Sürücü Portföyü Oluşturma", desc: "Sürücülerinizi sisteme tanımlayın, performanslarını takip edin." },
      { title: "Sevkiyat Birleştirme", desc: "Birden fazla siparişi tek sevkiyatta birleştirerek maliyetlerinizi optimize edin." },
    ],
  },
  perakendeci: {
    label: "Perakendeciler için Yukato",
    title: "Tedarik zincirinizi kesintisiz yönetin.",
    problemsLabel: "Perakende Operasyonlarının Günlük Zorlukları",
    problemsTitle: "Stok Belirsizliği, Geç Teslimatlar, Koordinasyon Eksikliği",
    problems: [
      { title: "Stok Görünürlüğü", desc: "Depo ve mağaza stok durumunu anlık takip edememe." },
      { title: "Teslimat Gecikmeleri", desc: "Tedarikçilerden gelen ürünlerin zamanında ulaşmaması." },
      { title: "Rampa Yoğunluğu", desc: "Depo girişlerinde oluşan araç kuyrukları ve bekleme süreleri." },
      { title: "Belge Takibi", desc: "İrsaliye, fatura ve teslimat belgelerinin manuel takibi." },
      { title: "Tedarikçi Koordinasyonu", desc: "Çok sayıda tedarikçi ile eş zamanlı iletişim zorluğu." },
      { title: "Performans Ölçümü", desc: "Tedarikçi performansını objektif olarak değerlendirememe." },
    ],
    featuresLabel: "Çözüm Yaklaşımı",
    featuresTitle:
      "Perakende Tedarik Zincirindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Gelen Sevkiyat Takibi", desc: "Tüm tedarikçilerden gelen sevkiyatları tek ekrandan anlık olarak izleyin." },
      { title: "Randevu Yönetimi", desc: "Depo rampa randevularını dijital olarak planlayın ve yoğunluğu dengeleyin." },
      { title: "Dijital Teslimat Onayı", desc: "Teslimat kanıtlarını dijital ortamda anlık olarak alın ve doğrulayın." },
      { title: "Tedarikçi Performans Paneli", desc: "Teslimat süreleri, hasar oranları ve doğruluk metriklerini takip edin." },
      { title: "Otomatik Bildirimler", desc: "Gecikme, hasar veya eksik teslimat durumlarında anında uyarı alın." },
      { title: "Sipariş Eşleştirme", desc: "Gelen ürünleri siparişlerle otomatik eşleştirin, farkları anında tespit edin." },
    ],
  },
  nakliyeci: {
    label: "Nakliyeciler için Yukato",
    title: "Taşıma operasyonlarınızda verimliliğinizi artırın.",
    problemsLabel: "Nakliye Operasyonlarının Günlük Zorlukları",
    problemsTitle: "Boş Dönüşler, Plansız Rotalar, Sürücü Yönetim Zorlukları",
    problems: [
      { title: "Boş Dönüşler", desc: "Araçların yüksüz geri dönmesi nedeniyle artan maliyetler." },
      { title: "Rota Optimizasyonu", desc: "En verimli rotaların belirlenememesi ve gereksiz kilometreler." },
      { title: "Sürücü Takibi", desc: "Sürücülerin anlık konumlarını ve durumlarını izleyememe." },
      { title: "Belge Yönetimi", desc: "Teslimat belgelerinin kağıt bazlı takibindeki zorluklar." },
      { title: "Müşteri İletişimi", desc: "Yükleyici ve alıcılarla koordinasyon eksikliği." },
      { title: "Kapasite Planlaması", desc: "Araç filonuzun kapasitesini verimli kullanamama." },
    ],
    featuresLabel: "Çözüm Yaklaşımı",
    featuresTitle:
      "Nakliye Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Filo Takip Paneli", desc: "Tüm araçlarınızın anlık konumunu ve durumunu tek ekrandan izleyin." },
      { title: "Dijital Teslimat Kanıtı", desc: "Sürücüler mobil uygulama ile teslimat kanıtını anında yüklesin." },
      { title: "Rota Optimizasyonu", desc: "Yapay zeka destekli rota planlaması ile yakıt ve zaman tasarrufu sağlayın." },
      { title: "Sürücü Yönetimi", desc: "Sürücü ataması, performans takibi ve iletişimi tek platformda yönetin." },
      { title: "Otomatik Belge Oluşturma", desc: "E-irsaliye ve teslimat belgeleri otomatik olarak oluşturulsun." },
      { title: "Boş Dönüş Eşleştirme", desc: "Geri dönüş rotalarında uygun yükleri eşleştirerek verimliliği artırın." },
    ],
  },
  surucu: {
    label: "Sürücüler için Yukato",
    title: "Teslimatları güvenle ve zamanında tamamlayın.",
    problemsLabel: "Sürücülerin Günlük Zorlukları",
    problemsTitle: "Belirsiz Rotalar, Kağıt Belgeler, İletişim Kopukluğu",
    problems: [
      { title: "Rota Belirsizliği", desc: "Teslimat noktalarına en verimli rotanın bilinmemesi." },
      { title: "Kağıt İş Yükü", desc: "Her teslimatta doldurulan formlar ve imza süreçleri." },
      { title: "Bekleme Süreleri", desc: "Depo ve teslimat noktalarında uzun bekleme süreleri." },
      { title: "İletişim Zorlukları", desc: "Merkez ofis ile anlık iletişim kuramamak." },
      { title: "Randevu Takibi", desc: "Hangi saatte nerede olunması gerektiğinin takibi." },
      { title: "Belge Kayıpları", desc: "Kağıt bazlı belgelerin kaybolma veya hasar görme riski." },
    ],
    featuresLabel: "Çözüm Yaklaşımı",
    featuresTitle:
      "Sürücü Deneyimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Mobil Teslimat Uygulaması", desc: "Tüm teslimat sürecini cebinizden yönetin." },
      { title: "Dijital İmza ve POD", desc: "Teslimat kanıtını dijital olarak alın, kağıda son verin." },
      { title: "Anlık Navigasyon", desc: "Optimize edilmiş rotalarla teslimat noktalarına hızla ulaşın." },
      { title: "Randevu Bildirimleri", desc: "Yaklaşan randevular ve değişiklikler için anlık bildirim alın." },
      { title: "Merkez İletişim", desc: "Uygulama üzerinden merkez ofis ile anlık mesajlaşın." },
      { title: "Görev Listesi", desc: "Günlük teslimatlarınızı önceliklendirin ve takip edin." },
    ],
  },
};
