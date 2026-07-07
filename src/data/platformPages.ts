export type PlatformPageData = {
  label: string;
  title: string;
  problemsLabel: string;
  problemsTitle: string;
  problems: { title: string; desc: string }[];
  featuresLabel: string;
  featuresTitle: string;
  features: { title: string; desc: string; image?: string; bullets?: string[] }[];
  supademoTabs?: { label: string; id: string }[];
};

const platformPagesTr: Record<string, PlatformPageData> = {
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
    featuresTitle: "Tedarik Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "İrsaliye ile Sevkiyat Oluşturma", desc: "Tedarikçiler, irsaliyeleri kullanarak hızlı bir şekilde sevkiyat oluşturabilirler. Bu yöntem, manuel işlem yapmadan belgeler üzerinden sevkiyat planlaması yapılmasını sağlar.", image: "/images/platform/tedarikci-01.jpg", bullets: ["Tedarikçi, oluşturacağı sevkiyata ait irsaliyeleri toplu şekilde irsaliye alanına yükler.", "Sistem, yüklenen tüm irsaliyeleri otomatik olarak işler.", "Bu bilgiler doğrultusunda belgeler otomatik olarak eşleştirilir."] },
      { title: "Teslimat Randevusu Atama", desc: "Depo süreçlerini randevu ile planlayarak bekleme sürelerini azaltın, saha trafiğini düzenleyin.", image: "/web-gorseller/Tedarikçi/tedarikçi2.png", bullets: ["Sevkiyat kartları üzerinden Rampa Ata butonunu ile kolaylıkla randevu atanabilir.", "Yapılan rampa ve randevu ataması, sürücünün mobil uygulamasına bildirim olarak gönderilir."] },
      { title: "Sürücü Portföyü Oluşturma", desc: "Sevk emirlerinin taşıma sürecinin yürütülmesini sağlayan kullanıcılardır.", image: "/web-gorseller/Tedarikçi/tedarikçi3.png", bullets: ["Firmanızın personeli", "Nakliye iş ortağınızın personeli", "Serbest çalışan olabilir"] },
      { title: "Gelen Sevkiyatları Anlık Görüntüleme", desc: "Siparişlerinizi ve tahmini varış zamanlarını anlık olarak takip edin, gecikmelere karşı önden aksiyon alın.", image: "/web-gorseller/Tedarikçi/tedarikçi4.png", bullets: ["Kullanıcı, sevkiyatın genel durumunu buradan takip eder ve gerekli güncellemeleri yapabilir.", "Teslimatlarınızın durumu gerçek zamanlı takip edilir."] },
      { title: "Sipariş Kontrol Sistemi", desc: "Her siparişi tek ekrandan yönetin, yanlış veya eksik sevkiyat riskini ortadan kaldırın.", image: "/web-gorseller/Tedarikçi/tedarikçi5.png", bullets: ["Araç depoya gelmeden önce, irsaliyelerin ve siparişlerin doğruluğu burada kontrol edilir."] },
      { title: "Anlık Teslimat Onayı Görüntüleme", desc: "Teslimatlarınızın durumunu gerçek zamanlı takip edin, her siparişin başarıyla tamamlanıp tamamlanmadığını anında görün.", image: "/web-gorseller/Tedarikçi/tedarikçi6.png", bullets: ["Teslimatlarınızın durumu gerçek zamanlı takip edilir.", "Araç depoya gelmeden önce, irsaliyelerin ve siparişlerin doğruluğu burada kontrol edilir."] },
      { title: "Yüklemeye Gelen Araca Randevu Atama", desc: "Araç girişlerini randevu sistemiyle planlayın, saha trafiğini düzenleyip bekleme sürelerini minimuma indirin.", image: "/web-gorseller/Tedarikçi/tedarikçi7.png", bullets: ["Tüm yükleme sevkiyatları burada listelenir.", "Kullanıcı, sevkiyatın genel durumunu buradan takip eder ve gerekli güncellemeleri yapabilir.", "Yapılan rampa ve zaman ataması, sürücünün mobil uygulamasına bildirim olarak gönderilir.", "Kullanıcı, rampaları ve zaman planlamasını gerektiği takdirde güncelleyebilir."] },
    ],
    supademoTabs: [{ label: "Gönderici - Kullanıcı Yaratma", id: "cmlp598dc0v65egrdu4tmjd68" }],
  },
  perakendeci: {
    label: "Perakendeciler için Yukato",
    title: "Tedarik zincirinizi kesintisiz yönetin.",
    problemsLabel: "Mal Kabul Sürecindeki Zorluklar",
    problemsTitle: "Belirsiz Stoklar, Aksayan Raf Yönetimi, Kayıp Satışlar",
    problems: [
      { title: "Belirsiz Teslimatlar", desc: "Teslimatların tam olarak ne zaman yapılacağı net değildir. Operasyon ekipleri günü tahminlerle planlamak zorundadır." },
      { title: "Geç Fark Edilen Gecikmeler", desc: "Gecikmeler çoğu zaman mal kabul anında ortaya çıkar. Bu da önceden aksiyon almayı imkânsız hale getirir." },
      { title: "Kopuk İletişim", desc: "Tedarikçi, nakliyeci ve perakendeci farklı kanallardan ilerler. Bilgi dağınıktır ve herkes sürecin sadece bir parçasını görür." },
      { title: "Evrak Problemleri", desc: "Eksik veya hatalı evraklar sahada zaman kaybına neden olur. Mal kabul süreçleri gereksiz şekilde uzar." },
      { title: "Manuel Takip Yükü", desc: "Telefonlar, e-postalar ve tablolar üzerinden takip yapılır. Operasyon ekipleri gerçek işine odaklanamaz." },
      { title: "Ölçülemeyen Performans", desc: "Teslimatlar gerçekleşir ama neden geç kaldığı bilinmez. Performans veriye değil, hissiyata dayanır." },
    ],
    featuresLabel: "Problem Çözümü",
    featuresTitle: "Raf Performansındaki Engellere, Yukato'dan Yeni Bir Bakış Açısı",
    features: [
      { title: "Gerçek Zamanlı Teslimat Takibi", desc: "Tüm sevkiyat süreçlerinizi uçtan uca görünür kılarak operasyonel kontrolü elinize alın. Gecikme risklerini ve planlama belirsizliklerini proaktif bir şekilde yöneterek kusursuz bir teslimat deneyimi sunun.", image: "/web-gorseller/Perakendeci/perakendeci1.png", bullets: ["Sevklerin anlık durumunu tek ekrandan takip edersiniz: yolda, gecikmeli veya teslim edilmiş.", "Tahmini varış zamanları sürekli güncellenir, planlama belirsizliği ortadan kalkar.", "Riskli teslimatlar önceden işaretlenir, ekipler geç kalmadan aksiyon alabilir."] },
      { title: "PO & Sevk Bazlı İzlenebilirlik", desc: "Karmaşık tedarik operasyonlarını yalınlaştırın. Gelişmiş izlenebilirlik sayesinde sipariş durumlarını anlık takip edin, otomatik eşleştirmelerle güvenilir ve eksiksiz bir mal kabul süreci deneyimleyin.", image: "/web-gorseller/Perakendeci/perakendeci 2.png", bullets: ["Her mal kabul işlemi ilgili satın alma siparişi (PO) ve sevk ile otomatik olarak eşleşir.", "Hangi siparişin nerede olduğu, kim tarafından gönderildiği net şekilde görünür.", "Karışıklık, manuel kontrol ve yanlış kabul riski azalır."] },
      { title: "Merkezi Dashboard", desc: "Operasyonel performansınızı büyük resimde görün. Tedarikçi analizlerinden teslimat trendlerine kadar tüm kritik metrikleri tek merkezden izleyerek stratejik ve güvenilir kararlar alın.", image: "/web-gorseller/Perakendeci/perakendeci3.png", bullets: ["Günlük, haftalık ve dönemsel mal kabul özetlerine tek yerden erişirsiniz.", "Zamanında teslimat oranları ve gecikme trendleri net şekilde izlenir.", "Tedarikçi bazlı performans görünürlüğü ile kararlar veriye dayanır."] },
      { title: "Gecikme ve Anomali Tespiti", desc: "Planlanan ve gerçekleşen verileri sürekli analiz eden erken uyarı sistemimiz, olası gecikmeleri anında tespit ederek ekiplerinize hızlı müdahale şansı sunar.", image: "/web-gorseller/Perakendeci/perakendeci4.png", bullets: ["Planlanan teslimat tarihi ile gerçekleşen teslimat otomatik olarak karşılaştırılır.", "Gecikmeler, olağan dışı durumlar ve sapmalar sistem tarafından tespit edilir.", "Operasyon ekipleri sorunu teslim anında değil, öncesinde görür."] },
      { title: "Bildirim ve Bilgilendirme", desc: "Süreçlerinizdeki iletişim karmaşasına son verin. Kritik anlarda doğru ekipleri anında bilgilendiren akıllı altyapımızla manuel takip yükünü ortadan kaldırın ve koordinasyonu güçlendirin.", image: "/web-gorseller/Perakendeci/perakendeci5.png", bullets: ["Kritik durumlarda ilgili ekipler otomatik olarak bilgilendirilir.", "Manuel takip ihtiyacı azalır, bilgi herkes için aynı anda ve aynı kaynaktan gelir.", "Operasyonel iletişim sadeleşir, telefon ve e-posta trafiği düşer."] },
    ],
  },
  nakliyeci: {
    label: "Nakliyeciler için Yukato",
    title: "Taşıma operasyonlarınızda verimliliğinizi artırın.",
    problemsLabel: "Nakliyeciler İçin Operasyonel Zorluklar",
    problemsTitle: "Uzun Bekleme Süreleri, Plansız Rotalar, Düşük Araç Verimliliği",
    problems: [
      { title: "Uzun Yükleme/Boşaltma Süreleri", desc: "Depo önlerinde yaşanan belirsiz beklemeler, araçların bir sonraki rotaya geç kalmasına ve toplam operasyonel kapasitenin düşmesine neden olur." },
      { title: "Plansız Rota Değişimleri", desc: "Anlık rota değişiklikleri veya güncellenmeyen teslimat bilgileri, sürücülerin zaman ve yakıt kaybetmesine, planlamanın bozulmasına yol açar." },
      { title: "Kopuk İletişim Hattı", desc: "Tedarikçi, depo ve nakliye ekibi arasında ortak bir dil yoktur. Bilgi akışı şifahi ilerler, bu da operasyonel hataları kaçınılmaz kılar." },
      { title: "Evrak ve Belge Karmaşası", desc: "İrsaliye ve teslimat belgelerinin fiziksel olarak yönetilmesi, sahada onay süreçlerini yavaşlatır ve ödeme döngülerini geciktirir." },
      { title: "Manuel Takip Yükü", desc: "Aracın konumunun ve yük durumunun sürekli telefon ve mesaj trafiğiyle takip edilmesi, lojistik operasyon ekiplerinin iş verimini ciddi oranda düşürür." },
      { title: "Ölçülemeyen Saha Performansı", desc: "Teslimat süreci tamamlanır ama nerede ve neden zaman kaybedildiği veriye dökülemez; iyileştirme için gerekli olan görünürlük sağlanamaz." },
    ],
    featuresLabel: "Problem Çözümü",
    featuresTitle: "Filo Yönetimindeki Zorluklara, Yukato ile Yeni Bir Bakış Açısı",
    features: [
      { title: "Boş Kilometrelerde Düşüş", desc: "Teslimat sonrası dönüşe geçen araçların, rotaları üzerindeki tedarikçi alımlarıyla eşleştirilerek sistem genelinde boş yapılan kilometre oranlarında %30 azalma sağlanabilir.", image: "/web-gorseller/Nakliyeci/nakliyeci1.png", bullets: ["Boş yapılan kilometre oranlarında %30 azalma sağlanır.", "Gereksiz seferlerin önlenmesiyle karbon emisyonlarının (CO2) düşürülerek çevresel sürdürülebilirliğe katkı sağlar.", "Sürücülerin ve filonun yolda geçirdiği atıl zamanı en aza indirerek kapasite kullanımını maksimum seviyeye çıkarır."] },
      { title: "Sevkiyat Birleştirme", desc: "Farklı şirketlere ait ve ayrı ayrı oluşturulmuş ancak aynı arabada taşınacak olan gönderileri seçerek, tek bir sevkiyat altında birleştirilebilir.", image: "/web-gorseller/Nakliyeci/nakliyeci2.png", bullets: ["Gönderici firmalara doğru bilgi akışı sağlanır.", "Perakende firmalarının mal kabulcülerinin işlemlerini doğru bir şekilde yapabilmesini mümkün kılar."] },
      { title: "Verimli Rota Planlaması", desc: "Araçların daha dolu çalışması sağlanarak daha iyi rota verimliliği elde edilir. Ek olarak, dışarıdan kiralanan araç ihtiyacında haftalık ortalama %20 düşüş görülür.", image: "/web-gorseller/Nakliyeci/nakliyeci3.png", bullets: ["Mevcut araçların boş kapasitelerinin değerlendirilerek her seferde maksimum doluluk oranıyla çalışmasını sağlar.", "Dışarıdan kiralanan ek araçlara olan operasyonel bağımlılığı düşürerek doğrudan maliyet tasarrufu elde edilir.", "Daha az sayıda araçla daha fazla nakliye işlemini yöneterek genel lojistik süreçlerinde zaman ve kaynak verimliliğini artırır."] },
    ],
  },
  surucu: {
    label: "Sürücüler için Yukato",
    title: "Teslimatları güvenle ve zamanında tamamlayın.",
    problemsLabel: "Sürücüler İçin Sahadaki Zorluklar",
    problemsTitle: "Bitmeyen Bekleyişler, Telefon Trafiği, Fiziksel Evrak Yükü",
    problems: [
      { title: "Kapılarda Bitmeyen Bekleyişler", desc: "Depo önlerindeki belirsiz bekleme süreleri, yolda olmanız gereken zamanı çalar ve günlük mesainizi gereksiz yere uzatır." },
      { title: "Anlık Değişen Rotalar", desc: "Siz yoldayken planların aniden değişmesi veya adres bilgilerinin eksik iletilmesi, fazladan kilometre yapmanıza ve zaman kaybetmenize yol açar." },
      { title: "Sürekli Çalan Telefonlar", desc: '"Neredesin?" veya "Ne zaman varırsın?" gibi bitmeyen durum sorma aramaları dikkatinizi dağıtır, sürüş güvenliğini ve konforunu olumsuz etkiler.' },
      { title: "Fiziksel Evrak Yükü", desc: "Basılı irsaliyeler, kaybolan belgeler ve uzayan imza süreçleri, yükü teslim etseniz bile teslimat noktasından hızlıca ayrılmanızı engeller." },
      { title: "Anında Muhatap Bulamama", desc: "Sahada veya teslimat anında bir problem yaşadığınızda, hızlıca iletişim kurup anlık onay alabileceğiniz bir kanalın olmaması işleri kilitler." },
      { title: "Görünmeyen Efor ve Performans", desc: "Zorlu şartlarda, zamanında ve eksiksiz yaptığınız teslimatların net bir veriyle kayıt altına alınamaması, sahadaki yoğun emeğinizin görünmez kalmasına neden olur." },
    ],
    featuresLabel: "Problem Çözümü",
    featuresTitle: "Direksiyon Başındaki Stresli Süreçlere, Yukato ile Son Verin",
    features: [
      { title: "Atıl Zaman Optimizasyonu", desc: "Mevcut yüklerin, konum olarak en yakındaki uygun ve doğrulanmış sürücülerle anında eşleştirilerek bekleme sürelerinin en aza indirilmesidir.", image: "/web-gorseller/Sürücü/sürücü1.png", bullets: ["Sürücülerin yük beklerken geçirdikleri atıl saatleri minimum seviyeye düşürerek zaman verimliliğini artırır.", "Yakın konumdaki doğrulanmış sürücülere otomatik görev ataması yapılarak operasyonel sevkiyat süreçlerinin hızlandırır.", "Kesintisiz iş akışı sayesinde sürücülerin günlük çalışma sürelerinin daha verimli kullanılmasını ve genel kapasitenin en üst düzeye çıkarılmasını sağlar."] },
      { title: "Dijital Dokümantasyon Yönetimi", desc: "Tüm sevkiyat evraklarının dijital ortama taşınarak eksik veya hatalı belge kaynaklı zaman kayıplarının önlenmesi ve operasyonel süreçlerin baştan uca hızlandırılmasıdır.", image: "/web-gorseller/Sürücü/sürücü2.png", bullets: ["Fiziksel evrak takibini ortadan kaldırarak mal kabul ve teslimat işlemlerinin daha hızlı ve hatasız gerçekleştirilebilir.", "Eksik belge onaylarından kaynaklanan depo bekleme sürelerinin önüne geçerek kesintisiz bir iş akışı sağlar.", "Gerekli tüm dokümanları sistem üzerinde toplayarak sürücülerin ve diğer paydaşların evraklara anında erişimini mümkün kılar."] },
    ],
  },
};

const platformPagesEn: Record<string, PlatformPageData> = {
  tedarikci: {
    label: "Yukato for Suppliers",
    title: "Digitize your process, ship your products with confidence.",
    problemsLabel: "Daily Challenges of Supply Management",
    problemsTitle: "Delayed Deliveries, Broken Communication, Invisible Costs",
    problems: [
      { title: "Time Losses", desc: "The biggest cost item for suppliers is lost time. Drivers who don't know when the warehouse is available are forced to wait hours at the warehouse gate for an empty dock. This disrupts the supplier's vehicle rotation." },
      { title: "Shipment Tracking Gaps", desc: "After the product is dispatched, the supplier can only find out very late whether the shipment was accepted or if there was a problem. Without real-time data flow, the chance to respond immediately to delays is lost." },
      { title: "Communication Traffic", desc: "Order revisions, missing product notifications, or appointment changes get lost in phone and email traffic. The supplier faces the risk of incorrect shipment while trying to figure out which information is current." },
      { title: "Document Confusion", desc: "Physically transporting documents like waybills and invoices causes them to get lost or mismatched. For the supplier, this means disrupted payment processes and a significant workload during reconciliation." },
      { title: "Manual Data Entry", desc: "Having supplier teams manually enter each shipment's information into systems means drowning in spreadsheets. This process, highly prone to human error, slows operational speed and wastes staff time." },
      { title: "Data Deficiency", desc: "A supplier who cannot measure the quality of their own service cannot improve. Performance evaluations not based on data undermine the trust relationship between supplier and buyer, leading to 'who's at fault?' disputes." },
    ],
    featuresLabel: "Solution",
    featuresTitle: "A Fresh Perspective from Yukato on the Challenges of Supply Management",
    features: [
      { title: "Shipment Creation via Waybill", desc: "Suppliers can quickly create shipments using waybills. This method allows shipment planning through documents without manual processing.", image: "/images/platform/tedarikci-01.jpg", bullets: ["The supplier uploads the waybills for the shipment in bulk to the waybill section.", "The system automatically processes all uploaded waybills.", "Documents are automatically matched based on this information."] },
      { title: "Delivery Appointment Assignment", desc: "Reduce waiting times and organize yard traffic by planning warehouse processes with appointments.", image: "/web-gorseller/Tedarikçi/tedarikçi2.png", bullets: ["Appointments can easily be assigned via the Assign Dock button on shipment cards.", "The assigned dock and appointment notification is sent to the driver's mobile application."] },
      { title: "Building a Driver Portfolio", desc: "These are the users responsible for executing the transportation process of dispatch orders.", image: "/web-gorseller/Tedarikçi/tedarikçi3.png", bullets: ["Your company's own personnel", "Your logistics partner's personnel", "Can be a freelancer"] },
      { title: "Real-Time View of Incoming Shipments", desc: "Track your orders and estimated arrival times in real time, take proactive action against delays.", image: "/web-gorseller/Tedarikçi/tedarikçi4.png", bullets: ["The user monitors the general status of the shipment here and can make necessary updates.", "The status of your deliveries is tracked in real time."] },
      { title: "Order Control System", desc: "Manage every order from a single screen, eliminate the risk of incorrect or missing shipments.", image: "/web-gorseller/Tedarikçi/tedarikçi5.png", bullets: ["Before the vehicle arrives at the warehouse, the accuracy of waybills and orders is verified here."] },
      { title: "Real-Time Delivery Confirmation View", desc: "Track the status of your deliveries in real time, instantly see whether each order has been successfully completed.", image: "/web-gorseller/Tedarikçi/tedarikçi6.png", bullets: ["The status of your deliveries is tracked in real time.", "Before the vehicle arrives at the warehouse, the accuracy of waybills and orders is verified here."] },
      { title: "Appointment Assignment for Loading Vehicles", desc: "Plan vehicle entries with an appointment system, organize yard traffic and minimize waiting times.", image: "/web-gorseller/Tedarikçi/tedarikçi7.png", bullets: ["All outbound shipments are listed here.", "The user monitors the general status of the shipment and can make necessary updates.", "The assigned dock and time notification is sent to the driver's mobile application.", "The user can update the docks and time schedule when necessary."] },
    ],
  },
  perakendeci: {
    label: "Yukato for Retailers",
    title: "Manage your supply chain without interruption.",
    problemsLabel: "Challenges in the Goods Receipt Process",
    problemsTitle: "Unclear Inventory, Disrupted Shelf Management, Lost Sales",
    problems: [
      { title: "Uncertain Deliveries", desc: "It's unclear exactly when deliveries will be made. Operations teams are forced to plan their day based on estimates." },
      { title: "Late-Detected Delays", desc: "Delays often only appear at the time of goods receipt. This makes it impossible to take proactive action in advance." },
      { title: "Broken Communication", desc: "Supplier, carrier, and retailer work through different channels. Information is scattered and everyone only sees one part of the process." },
      { title: "Documentation Problems", desc: "Incomplete or incorrect documents cause time loss in the field. Goods receipt processes are unnecessarily prolonged." },
      { title: "Manual Tracking Burden", desc: "Tracking is done via phones, emails, and spreadsheets. Operations teams cannot focus on their actual work." },
      { title: "Unmeasurable Performance", desc: "Deliveries happen but the reason for delays is unknown. Performance is based on gut feeling, not data." },
    ],
    featuresLabel: "Solution",
    featuresTitle: "A Fresh Perspective from Yukato on the Barriers to Shelf Performance",
    features: [
      { title: "Real-Time Delivery Tracking", desc: "Take operational control by making all shipment processes visible end-to-end. Manage delay risks and planning uncertainties proactively.", image: "/web-gorseller/Perakendeci/perakendeci1.png", bullets: ["Track the real-time status of shipments from a single screen: on the way, delayed, or delivered.", "Estimated arrival times are continuously updated, eliminating planning uncertainty.", "Risky deliveries are flagged in advance, allowing teams to take action before it's too late."] },
      { title: "PO & Shipment-Based Traceability", desc: "Simplify complex supply operations. Track order statuses in real time and experience a reliable goods receipt process with automatic matching.", image: "/web-gorseller/Perakendeci/perakendeci 2.png", bullets: ["Each goods receipt operation is automatically matched with the relevant purchase order (PO) and shipment.", "Which order is where and who sent it is clearly visible.", "Confusion, manual control, and the risk of incorrect acceptance are reduced."] },
      { title: "Centralized Dashboard", desc: "See your operational performance in the big picture. Monitor all critical metrics from supplier analytics to delivery trends from a single center.", image: "/web-gorseller/Perakendeci/perakendeci3.png", bullets: ["Access daily, weekly, and periodic goods receipt summaries from one place.", "On-time delivery rates and delay trends are clearly tracked.", "Decisions are based on data with supplier-based performance visibility."] },
      { title: "Delay and Anomaly Detection", desc: "Our early warning system continuously analyzes planned and actual data, instantly detecting possible delays and giving your teams a chance to respond quickly.", image: "/web-gorseller/Perakendeci/perakendeci4.png", bullets: ["Planned delivery dates are automatically compared with actual deliveries.", "Delays, unusual situations, and deviations are detected by the system.", "Operations teams see the problem in advance, not at the time of delivery."] },
      { title: "Notifications and Alerts", desc: "End the communication chaos in your processes. Eliminate the manual tracking burden with our smart infrastructure that instantly notifies the right teams at critical moments.", image: "/web-gorseller/Perakendeci/perakendeci5.png", bullets: ["Relevant teams are automatically notified in critical situations.", "The need for manual follow-up is reduced; information reaches everyone simultaneously from the same source.", "Operational communication is simplified, reducing phone and email traffic."] },
    ],
  },
  nakliyeci: {
    label: "Yukato for Carriers",
    title: "Increase your efficiency in transportation operations.",
    problemsLabel: "Operational Challenges for Carriers",
    problemsTitle: "Long Wait Times, Unplanned Routes, Low Vehicle Efficiency",
    problems: [
      { title: "Long Loading/Unloading Times", desc: "Uncertain waiting at warehouse entrances causes vehicles to be late for the next route and reduces total operational capacity." },
      { title: "Unplanned Route Changes", desc: "Last-minute route changes or outdated delivery information cause drivers to waste time and fuel, disrupting planning." },
      { title: "Disconnected Communication", desc: "There is no common language between the supplier, warehouse, and transport team. Information flows verbally, making operational errors inevitable." },
      { title: "Document Confusion", desc: "Physically managing waybills and delivery documents slows down approval processes in the field and delays payment cycles." },
      { title: "Manual Tracking Burden", desc: "Constantly tracking a vehicle's location and cargo status via phone and messages significantly reduces the efficiency of logistics operations teams." },
      { title: "Unmeasurable Field Performance", desc: "The delivery process is completed but where and why time was lost cannot be turned into data; the visibility needed for improvement cannot be achieved." },
    ],
    featuresLabel: "Solution",
    featuresTitle: "A Fresh Perspective from Yukato on Fleet Management Challenges",
    features: [
      { title: "Reduction in Empty Kilometers", desc: "By matching vehicles returning after delivery with supplier pickups along their routes, a 30% reduction in empty kilometer rates can be achieved system-wide.", image: "/web-gorseller/Nakliyeci/nakliyeci1.png", bullets: ["30% reduction in empty kilometer rates.", "Contributes to environmental sustainability by reducing CO2 emissions by preventing unnecessary trips.", "Maximizes capacity utilization by minimizing idle time for drivers and the fleet on the road."] },
      { title: "Shipment Consolidation", desc: "Shipments belonging to different companies that were created separately but will be transported in the same vehicle can be consolidated under a single shipment.", image: "/web-gorseller/Nakliyeci/nakliyeci2.png", bullets: ["Accurate information flow is provided to the sending companies.", "Enables retail companies' goods receivers to perform their operations correctly."] },
      { title: "Efficient Route Planning", desc: "Better route efficiency is achieved by ensuring vehicles work fuller. Additionally, a weekly average reduction of 20% is seen in the need for externally rented vehicles.", image: "/web-gorseller/Nakliyeci/nakliyeci3.png", bullets: ["Enables maximum occupancy rates on each trip by utilizing the empty capacities of existing vehicles.", "Achieves direct cost savings by reducing operational dependency on additional externally rented vehicles.", "Increases time and resource efficiency in overall logistics processes by managing more transport operations with fewer vehicles."] },
    ],
  },
  surucu: {
    label: "Yukato for Drivers",
    title: "Complete deliveries safely and on time.",
    problemsLabel: "Field Challenges for Drivers",
    problemsTitle: "Endless Waits, Phone Traffic, Physical Document Burden",
    problems: [
      { title: "Endless Waits at Doors", desc: "Uncertain waiting times at warehouse entrances steal the time you should be on the road and unnecessarily extend your working day." },
      { title: "Suddenly Changing Routes", desc: "Plans suddenly changing while you are on the road or address information being passed on incompletely leads to extra mileage and wasted time." },
      { title: "Constantly Ringing Phones", desc: "Endless status calls asking \"Where are you?\" or \"When will you arrive?\" distract your attention and negatively affect driving safety and comfort." },
      { title: "Physical Document Burden", desc: "Printed waybills, lost documents, and extended signature processes prevent you from quickly leaving the delivery point even after you have delivered the load." },
      { title: "Unable to Reach the Right Person Instantly", desc: "When you have a problem in the field or at the time of delivery, not having a channel where you can quickly communicate and get instant approval locks things up." },
      { title: "Invisible Effort and Performance", desc: "Under difficult conditions, not being able to record your on-time and complete deliveries with clear data causes your intense field effort to remain invisible." },
    ],
    featuresLabel: "Solution",
    featuresTitle: "Put an End to Stressful Processes Behind the Wheel with Yukato",
    features: [
      { title: "Idle Time Optimization", desc: "Available loads are instantly matched with the nearest available and verified drivers by location, minimizing waiting times.", image: "/web-gorseller/Sürücü/sürücü1.png", bullets: ["Increases time efficiency by minimizing idle hours drivers spend waiting for loads.", "Speeds up operational shipment processes by automatically assigning tasks to verified nearby drivers.", "Ensures that drivers' daily working hours are used more efficiently and overall capacity is maximized through uninterrupted workflow."] },
      { title: "Digital Documentation Management", desc: "All shipment documents are transferred to digital media to prevent time losses caused by missing or incorrect documents and to accelerate operational processes end-to-end.", image: "/web-gorseller/Sürücü/sürücü2.png", bullets: ["Eliminates physical document tracking, allowing goods receipt and delivery operations to be performed faster and more accurately.", "Prevents warehouse waiting times caused by missing document approvals, ensuring an uninterrupted workflow.", "Makes it possible for drivers and other stakeholders to instantly access documents by collecting all required documents on the system."] },
    ],
  },
};

export const platformPages: Record<string, PlatformPageData> = platformPagesTr;

export function getPlatformPages(locale: string): Record<string, PlatformPageData> {
  return locale === "en" ? platformPagesEn : platformPagesTr;
}

const productPagesTr: Record<string, PlatformPageData> = {
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
    featuresTitle: "Sipariş ve Sevkiyat Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
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
    featuresTitle: "Sevkiyat Görünürlüğündeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
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
    featuresTitle: "Saha Yönetimindeki Zorluklara Yukato'dan Yeni Bir Bakış Açısı",
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

const productPagesEn: Record<string, PlatformPageData> = {
  nexus: {
    label: "Nexus",
    title: "Manage order, shipment, and delivery processes end-to-end.",
    problemsLabel: "Daily Challenges of Order and Shipment Management",
    problemsTitle: "Scattered Orders, Untracked Shipments, Delayed Deliveries",
    problems: [
      { title: "Order Chaos", desc: "The inability to consolidate orders from different channels in a single center." },
      { title: "Shipment Planning", desc: "Delays and errors in converting orders to shipments." },
      { title: "Delivery Tracking", desc: "The inability to track shipments all the way to the delivery point." },
      { title: "Document Mismatch", desc: "Inconsistencies between orders, waybills, and invoices." },
      { title: "Return Management", desc: "Uncertainties in return processes for incorrect or damaged deliveries." },
      { title: "Performance Visibility", desc: "The inability to measure and report end-to-end process performance." },
    ],
    featuresLabel: "Solution Approach",
    featuresTitle: "A Fresh Perspective from Yukato on Order and Shipment Management Challenges",
    features: [
      { title: "Centralized Order Management", desc: "Consolidate and manage orders from all channels on a single platform." },
      { title: "Automatic Shipment Creation", desc: "Convert orders automatically to shipments and eliminate manual processes." },
      { title: "End-to-End Tracking", desc: "Monitor the entire process from order to delivery in real time." },
      { title: "E-Waybill Integration", desc: "Automatically generate shipment documents with digital waybills." },
      { title: "Delivery Confirmation System", desc: "Verify and confirm deliveries with digital proof of delivery." },
      { title: "Return and Exception Management", desc: "Report incorrect deliveries instantly and speed up return processes." },
      { title: "Order Matching", desc: "Automatically match orders with shipment and delivery data." },
      { title: "Performance Reports", desc: "Track on-time delivery rates, order accuracy, and process efficiency metrics." },
      { title: "Multi-Warehouse Support", desc: "Coordinate multiple warehouses and delivery points from a single platform." },
      { title: "Notifications and Alerts", desc: "Receive instant notifications for delays, incomplete deliveries, or exception situations." },
    ],
  },
  lighthouse: {
    label: "Lighthouse",
    title: "Track your shipments in real time, increase visibility.",
    problemsLabel: "Daily Challenges of Shipment Visibility",
    problemsTitle: "Blind Spots, Delayed Information, Reactive Management",
    problems: [
      { title: "Location Uncertainty", desc: "Not knowing the real-time location of shipments and deviations in estimated arrival times." },
      { title: "Delayed Information Flow", desc: "Learning about shipment status changes late." },
      { title: "Lack of Proactive Response", desc: "Being able to notice problems only after the customer complains." },
      { title: "Multi-Platform Tracking", desc: "The requirement to track separately in different systems of different carriers." },
      { title: "Reporting Difficulty", desc: "The lack of a centralized structure to analyze historical shipment data." },
      { title: "Customer Communication", desc: "Unable to provide customers with timely information about delivery status." },
    ],
    featuresLabel: "Solution Approach",
    featuresTitle: "A Fresh Perspective from Yukato on Shipment Visibility Challenges",
    features: [
      { title: "Live Shipment Map", desc: "View the real-time location of all your shipments on a map." },
      { title: "Estimated Arrival Times", desc: "Accurately predict delivery times with AI-powered ETA calculations." },
      { title: "Automatic Status Updates", desc: "Receive instant notifications when shipment status changes." },
      { title: "Exception Management", desc: "Automatically detect delays, route deviations, or damage situations." },
      { title: "Multi-Carrier Tracking", desc: "Monitor shipments from different carriers on a single platform." },
      { title: "Customer Notification Portal", desc: "Send your customers automatic shipment tracking links." },
      { title: "Performance Analytics", desc: "Track KPIs such as on-time delivery rates and average transit times." },
      { title: "Historical Data Analysis", desc: "Optimize your processes by analyzing historical shipment data." },
      { title: "Geographical Alerts", desc: "Receive alerts for traffic, weather conditions, or restrictions in specific regions." },
      { title: "Integration Support", desc: "Achieve seamless integration with your ERP and TMS systems." },
    ],
  },
  "yard-management": {
    label: "Yard Management",
    title: "Optimize warehouse yard, dock, and appointment processes.",
    problemsLabel: "Daily Challenges of Yard Management",
    problemsTitle: "Dock Chaos, Long Wait Times, Unplanned Operations",
    problems: [
      { title: "Dock Congestion", desc: "Uncontrolled vehicle traffic at loading and unloading docks." },
      { title: "Vehicle Waiting Times", desc: "Drivers waiting hours for dock assignment." },
      { title: "Appointment Management", desc: "Chaos in appointment processes conducted by phone and email." },
      { title: "Yard Visibility", desc: "Not knowing which vehicle is where in the warehouse yard." },
      { title: "Dock Utilization Efficiency", desc: "Docks remaining idle or being overloaded." },
      { title: "Operational Planning", desc: "Inability to anticipate intraday warehouse operations." },
    ],
    featuresLabel: "Solution Approach",
    featuresTitle: "A Fresh Perspective from Yukato on Yard Management Challenges",
    features: [
      { title: "Digital Appointment System", desc: "Plan and manage loading and unloading appointments online." },
      { title: "Dock Allocation Optimization", desc: "Automatically allocate docks based on vehicle type and operation type." },
      { title: "Yard Map", desc: "Monitor the location of all vehicles in the warehouse yard on a digital map." },
      { title: "Check-in / Check-out", desc: "Digitally record vehicle entries and exits." },
      { title: "Waiting Time Tracking", desc: "Measure and report vehicle waiting times." },
      { title: "Capacity Planning", desc: "Plan dock and yard capacity on an hourly basis." },
      { title: "Driver Notifications", desc: "Communicate appointment and dock information to drivers via mobile application." },
      { title: "Operational Dashboard", desc: "View real-time yard status, occupancy rates, and performance metrics." },
      { title: "Automatic Notifications", desc: "Receive instant alerts for appointment changes, delays, and dock readiness." },
      { title: "Reporting and Analysis", desc: "Analyze average waiting times, dock utilization rates, and efficiency metrics." },
    ],
  },
};

export const productPages: Record<string, PlatformPageData> = productPagesTr;

export function getProductPages(locale: string): Record<string, PlatformPageData> {
  return locale === "en" ? productPagesEn : productPagesTr;
}
