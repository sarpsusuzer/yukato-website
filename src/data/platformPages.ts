export type PlatformPageData = {
  label: string;
  title: string;
  problemsLabel: string;
  problemsTitle: string;
  problems: { title: string; desc: string }[];
  featuresLabel: string;
  featuresTitle: string;
  features: { title: string; desc: string; image?: string; bullets?: string[] }[];
};

export const platformPages: Record<string, PlatformPageData> = {
  tedarikci: {
    label: "Tedarikçiler için Yukato",
    title: "Sürecinizi dijitalleştirin, ürünlerinizi güvenle sevk edin.",
    problemsLabel: "Tedarik Yönetiminin Günlük Zorlukları",
    problemsTitle: "Geciken Teslimatlar, Kopuk İletişim, Görünmez Maliyetler",
    problems: [
      { title: "Zaman Kayıpları", desc: "Tedarikçiler için en büyük maliyet kalemi zaman kaybıdır. Deponun ne zaman müsait olduğunu bilmeyen sürücüler, depo kapısında saatlerce \"boş rampa\" beklemek zorunda kalır. Bu durum, tedarikçinin araç rotasyonunu bozar." },
      { title: "Sevkiyat Takipsizliği", desc: "Ürün yola çıktıktan sonra tedarikçi, sevkiyatının kabul edilip edilmediğini veya bir sorun olup olmadığını çok geç öğrenebilir. Gerçek zamanlı veri akışı olmadığı için gecikmelere anında müdahale etme şansı kaybolur." },
      { title: "İletişim Trafiği", desc: "Sipariş revizeleri, eksik ürün bildirimleri veya randevu değişiklikleri telefon ve e-posta trafiğinde kaybolur. Tedarikçi, hangi bilginin güncel olduğunu anlamaya çalışırken hatalı sevkiyat yapma riskiyle karşı karşıya kalır." },
      { title: "Belge Karmaşası", desc: "İrsaliye, fatura gibi belgelerin fiziksel olarak taşınması; kaybolmasına veya yanlış eşleşmesine neden olur. Tedarikçi için bu durum, ödeme süreçlerinin aksaması ve mutabakat aşamasında ciddi iş yükü anlamına gelir." },
      { title: "Manuel Veri Girişleri", desc: "Tedarikçi ekiplerinin her bir sevkiyat bilgisini manuel olarak sistemlere girmesi, Excel tabloları arasında boğulması demektir. İnsan hatasına çok açık olan bu süreç, operasyonun hızını keser ve personelin vakit kaybetmesine yol açar." },
      { title: "Veri Eksikliği", desc: "Tedarikçi, kendi hizmet kalitesini ölçemediği takdirde gelişim gösteremez. Veriye dayalı olmayan performans değerlendirmeleri, tedarikçi ile alıcı arasındaki güven ilişkisini zedeler ve \"hata kimde?\" tartışmalarına yol açar." },
    ],
    featuresLabel: "Problem Çözümü",
    featuresTitle:
      "Tedarik Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Anlık Teslimat Onayı Görüntüleme", desc: "Teslimatlarınızın durumunu gerçek zamanlı takip edin, her siparişin başarıyla tamamlanıp tamamlanmadığını anında görün.", image: "/images/platform/tedarikci-01.jpg", bullets: ["Teslimatlarınızın durumu gerçek zamanlı takip edilir.", "Araç depoya gelmeden önce, irsaliyelerin ve siparişlerin doğruluğu burada kontrol edilir."] },
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

export const productPages: Record<string, PlatformPageData> = {
  nexus: {
    label: "Nexus",
    title: "Sipariş, sevkiyat ve teslimat süreçlerini uçtan uca yönetin.",
    problemsLabel: "Sipariş ve Sevkiyat Yönetiminin Günlük Zorlukları",
    problemsTitle: "Dağınık Siparişler, Takipsiz Sevkiyatlar, Gecikmeli Teslimatlar",
    problems: [
      { title: "Sipariş Karmaşası", desc: "Farklı kanallardan gelen siparişlerin tek bir merkezde toplanamaması." },
      { title: "Sevkiyat Planlaması", desc: "Siparişlerin sevkiyata dönüştürülmesinde yaşanan gecikmeler ve hatalar." },
      { title: "Teslimat Takibi", desc: "Sevkiyatların teslimat noktasına kadar izlenememesi." },
      { title: "Belge Uyumsuzluğu", desc: "Sipariş, irsaliye ve fatura arasındaki tutarsızlıklar." },
      { title: "İade Yönetimi", desc: "Hatalı veya hasarlı teslimatların iade süreçlerindeki belirsizlikler." },
      { title: "Performans Görünürlüğü", desc: "Uçtan uca süreç performansını ölçememe ve raporlayamama." },
    ],
    featuresLabel: "Çözüm Yaklaşımı",
    featuresTitle:
      "Sipariş ve Sevkiyat Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Merkezi Sipariş Yönetimi", desc: "Tüm kanallardan gelen siparişleri tek platformda toplayın ve yönetin." },
      { title: "Otomatik Sevkiyat Oluşturma", desc: "Siparişleri otomatik olarak sevkiyata dönüştürün, manuel süreçleri ortadan kaldırın." },
      { title: "Uçtan Uca Takip", desc: "Siparişten teslimata kadar tüm süreci anlık olarak izleyin." },
      { title: "E-İrsaliye Entegrasyonu", desc: "Dijital irsaliye ile sevkiyat belgelerinizi otomatik oluşturun." },
      { title: "Teslimat Onay Sistemi", desc: "Dijital teslimat kanıtları ile teslimatları doğrulayın ve onaylayın." },
      { title: "İade ve İstisna Yönetimi", desc: "Hatalı teslimatları anında raporlayın ve iade süreçlerini hızlandırın." },
      { title: "Sipariş Eşleştirme", desc: "Siparişleri sevkiyat ve teslimat verileriyle otomatik eşleştirin." },
      { title: "Performans Raporları", desc: "Zamanında teslimat oranı, sipariş doğruluğu ve süreç verimliliği metriklerini takip edin." },
      { title: "Çoklu Depo Desteği", desc: "Birden fazla depo ve teslimat noktasını tek platformdan koordine edin." },
      { title: "Bildirim ve Uyarılar", desc: "Gecikme, eksik teslimat veya istisna durumlarında anlık bildirim alın." },
    ],
  },
  lighthouse: {
    label: "Lighthouse",
    title: "Sevkiyatlarınızı anlık takip edin, görünürlüğü artırın.",
    problemsLabel: "Sevkiyat Görünürlüğünün Günlük Zorlukları",
    problemsTitle: "Kör Noktalar, Gecikmeli Bilgi, Reaktif Yönetim",
    problems: [
      { title: "Konum Belirsizliği", desc: "Sevkiyatların anlık konumunun bilinmemesi ve tahmini varış sürelerindeki sapmalar." },
      { title: "Gecikmeli Bilgi Akışı", desc: "Sevkiyat durumu değişikliklerinin geç öğrenilmesi." },
      { title: "Proaktif Müdahale Eksikliği", desc: "Sorunları ancak müşteri şikayet ettikten sonra fark edebilme." },
      { title: "Çoklu Platform Takibi", desc: "Farklı nakliyecilerin farklı sistemlerinde ayrı ayrı takip yapma zorunluluğu." },
      { title: "Raporlama Zorluğu", desc: "Geçmiş sevkiyat verilerini analiz edecek merkezi bir yapının olmaması." },
      { title: "Müşteri Bilgilendirme", desc: "Müşterilere teslimat durumu hakkında zamanında bilgi verememe." },
    ],
    featuresLabel: "Çözüm Yaklaşımı",
    featuresTitle:
      "Sevkiyat Görünürlüğündeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Canlı Sevkiyat Haritası", desc: "Tüm sevkiyatlarınızın anlık konumunu harita üzerinde görüntüleyin." },
      { title: "Tahmini Varış Süreleri", desc: "Yapay zeka destekli ETA hesaplamaları ile teslimat zamanını doğru tahmin edin." },
      { title: "Otomatik Durum Güncellemeleri", desc: "Sevkiyat durumu değişikliklerinde anlık bildirim alın." },
      { title: "İstisna Yönetimi", desc: "Gecikme, rota sapması veya hasar durumlarını otomatik tespit edin." },
      { title: "Çoklu Nakliyeci Takibi", desc: "Farklı nakliyecilerin sevkiyatlarını tek platformda izleyin." },
      { title: "Müşteri Bilgilendirme Portalı", desc: "Müşterilerinize otomatik sevkiyat takip linkleri gönderin." },
      { title: "Performans Analitiği", desc: "Zamanında teslimat oranı, ortalama transit süre gibi KPI'ları takip edin." },
      { title: "Geçmiş Veri Analizi", desc: "Geçmiş sevkiyat verilerini analiz ederek süreçlerinizi optimize edin." },
      { title: "Coğrafi Uyarılar", desc: "Belirli bölgelerdeki trafik, hava durumu veya kısıtlamalar için uyarı alın." },
      { title: "Entegrasyon Desteği", desc: "ERP ve TMS sistemlerinizle sorunsuz entegrasyon sağlayın." },
    ],
  },
  "yard-management": {
    label: "Yard Management",
    title: "Depo sahası, rampa ve randevu süreçlerini optimize edin.",
    problemsLabel: "Saha Yönetiminin Günlük Zorlukları",
    problemsTitle: "Rampa Kaosları, Uzun Bekleme Süreleri, Plansız Operasyonlar",
    problems: [
      { title: "Rampa Yoğunluğu", desc: "Yükleme ve boşaltma rampalarındaki kontrolsüz araç trafiği." },
      { title: "Araç Bekleme Süreleri", desc: "Sürücülerin rampa tahsisi için saatlerce beklemesi." },
      { title: "Randevu Yönetimi", desc: "Telefon ve e-posta ile yapılan randevu süreçlerindeki karmaşa." },
      { title: "Saha Görünürlüğü", desc: "Depo sahasında hangi aracın nerede olduğunun bilinmemesi." },
      { title: "Rampa Kullanım Verimliliği", desc: "Rampaların boş kalması veya aşırı yüklenmesi." },
      { title: "Operasyonel Planlama", desc: "Gün içi depo operasyonlarının öngörülememesi." },
    ],
    featuresLabel: "Çözüm Yaklaşımı",
    featuresTitle:
      "Saha Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Dijital Randevu Sistemi", desc: "Yükleme ve boşaltma randevularını çevrimiçi olarak planlayın ve yönetin." },
      { title: "Rampa Tahsis Optimizasyonu", desc: "Rampaları araç tipi ve operasyon türüne göre otomatik tahsis edin." },
      { title: "Saha Haritası", desc: "Depo sahasındaki tüm araçların konumunu dijital harita üzerinde izleyin." },
      { title: "Check-in / Check-out", desc: "Araç giriş-çıkışlarını dijital olarak kayıt altına alın." },
      { title: "Bekleme Süresi Takibi", desc: "Araç bekleme sürelerini ölçün ve raporlayın." },
      { title: "Kapasite Planlaması", desc: "Rampa ve saha kapasitesini saatlik bazda planlayın." },
      { title: "Sürücü Bilgilendirme", desc: "Sürücülere randevu ve rampa bilgilerini mobil uygulama ile iletin." },
      { title: "Operasyonel Dashboard", desc: "Anlık saha durumunu, doluluk oranlarını ve performans metriklerini görüntüleyin." },
      { title: "Otomatik Bildirimler", desc: "Randevu değişiklikleri, gecikmeler ve rampa hazırlığı için anlık uyarı alın." },
      { title: "Raporlama ve Analiz", desc: "Ortalama bekleme süreleri, rampa kullanım oranları ve verimlilik metriklerini analiz edin." },
    ],
  },
};
