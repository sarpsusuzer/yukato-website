"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useT } from "@/i18n/LocaleContext";

function ChevronRight({ open }: { open: boolean }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20" fill="none"
      className={`transition-transform duration-300 shrink-0 ${open ? "rotate-90" : ""}`}
    >
      <path d="M7 5L13 10L7 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PolicyItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors duration-200"
      >
        <span className="text-[16px] md:text-[17px] font-bold text-neutral-900">{title}</span>
        <ChevronRight open={open} />
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-neutral-100">
          <div className="pt-5 prose prose-neutral max-w-none text-[15px] leading-[1.8]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-neutral-600">{children}</p>;
}

function PB({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-neutral-800 font-semibold">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-2 list-disc list-outside pl-5 text-neutral-600">{children}</ul>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-neutral-800">{children}</strong>;
}

export default function PolitikalarPage() {
  const t = useT();
  const isTr = t.locale === "tr";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="pt-36 pb-24 px-6 md:px-[60px]">
          <div className="max-w-[860px] mx-auto">
            <h1 className="text-[clamp(36px,5vw,64px)] font-bold text-neutral-900 text-center mb-16">
              {isTr ? "Politikalar" : "Policies"}
            </h1>

            <div className="space-y-4">

              {/* ISMS / BGYS */}
              <PolicyItem title={isTr
                ? "Bilgi Güvenliği Yönetim Sistemi (BGYS) Politikası"
                : "Information Security Management System (ISMS) Policy"}>
                {isTr ? (
                  <>
                    <P>Yukato, tüm bilgi varlıklarının gizliliğini, bütünlüğünü ve erişilebilirliğini korumayı kurumsal bir zorunluluk olarak benimsemiştir. Bu doğrultuda ISO/IEC 27001 standardına uygun olarak yapılandırılmış Bilgi Güvenliği Yönetim Sistemi (BGYS), bilgi güvenliği risklerini sistematik şekilde yönetmek, olası tehditlere karşı proaktif önlemler almak ve sürekli iyileştirme sağlamak amacıyla uygulanmaktadır. BGYS politikası çerçevesinde Yukato:</P>
                    <UL>
                      <LI>Bilgi güvenliği yönetimini üst yönetim seviyesinde sahiplenir ve sürdürülebilir kaynak tahsisi sağlar</LI>
                      <LI>Tüm bilgi varlıkları için sınıflandırma, risk değerlendirme ve kontrol uygulamalarını yürütür</LI>
                      <LI>Fiziksel, teknik ve yönetsel güvenlik kontrollerini ISO/IEC 27002 ve ilgili uygulama rehberlerine uygun şekilde uygular</LI>
                      <LI>Bilgi güvenliği olaylarını zamanında tespit etmek, müdahale etmek ve raporlamak üzere sistematik süreçler kurar</LI>
                      <LI>Kritik süreç ve sistemlerde sürekliliği sağlamak için yedeklilik, erişim kontrolü, şifreleme, kayıt tutma ve izleme mekanizmalarını uygular</LI>
                      <LI>İç ve dış denetimlerle sistem etkinliğini kontrol eder, uygunsuzluklara karşı düzeltici/önleyici faaliyetler yürütür</LI>
                      <LI>Tüm çalışanların bilgi güvenliği farkındalığını artırmak amacıyla periyodik eğitimler düzenler</LI>
                      <LI>Uygulanabilir yasal, sözleşmesel ve düzenleyici gerekliliklere tam uyum sağlar</LI>
                      <LI>ISO/IEC 27001 kapsamında tanımlı Ek A kontrollerini, risk değerlendirme sonuçlarına dayalı olarak benimser veya hariç tutar; bu durum Uygulanabilirlik Beyanı (SoA) dokümanında ayrıntılı olarak beyan edilir</LI>
                    </UL>
                    <P>Bu politika, bilgi güvenliğinin yalnızca bir BT sorumluluğu değil, kurumsal bütünlüğün bir parçası olduğu anlayışıyla tüm birimlerde uygulanır. BGYS'nin başarısı, tüm çalışanların katılımı ve kararlılığıyla mümkündür.</P>
                  </>
                ) : (
                  <>
                    <P>Yukato has adopted the protection of confidentiality, integrity, and accessibility of all information assets as a corporate obligation. Accordingly, the Information Security Management System (ISMS), structured in compliance with ISO/IEC 27001, is implemented to systematically manage information security risks, take proactive measures against potential threats, and ensure continuous improvement. Within the framework of the ISMS policy, Yukato:</P>
                    <UL>
                      <LI>Takes ownership of information security management at the top management level and ensures sustainable resource allocation</LI>
                      <LI>Carries out classification, risk assessment, and control practices for all information assets</LI>
                      <LI>Implements physical, technical, and managerial security controls in accordance with ISO/IEC 27002 and relevant implementation guidelines</LI>
                      <LI>Establishes systematic processes to detect, respond to, and report information security incidents in a timely manner</LI>
                      <LI>Implements redundancy, access control, encryption, record keeping, and monitoring mechanisms to ensure continuity in critical processes and systems</LI>
                      <LI>Monitors system effectiveness through internal and external audits and undertakes corrective/preventive actions against nonconformities</LI>
                      <LI>Organizes periodic training sessions in order to increase the information security awareness of all employees</LI>
                      <LI>Ensures full compliance with applicable legal, contractual, and regulatory requirements</LI>
                      <LI>Adopts or excludes Annex A controls defined under ISO/IEC 27001 based on risk assessment results; such cases are stated in detail in the Statement of Applicability (SoA) document</LI>
                    </UL>
                    <P>This policy is applied across all departments with the understanding that information security is not only an IT responsibility but a component of corporate integrity. The success of the ISMS depends on the participation and commitment of all employees.</P>
                  </>
                )}
              </PolicyItem>

              {/* PDPMS / KVYS */}
              <PolicyItem title={isTr
                ? "Kişisel Veri Gizliliği Yönetim Sistemi (KVYS) Politikası"
                : "Personal Data Privacy Management System (PDPMS) Policy"}>
                {isTr ? (
                  <>
                    <P>Yukato, kişisel verilerin güvenli, yasalara uygun ve şeffaf bir şekilde işlenmesini kurumsal bir sorumluluk olarak kabul eder. ISO/IEC 27701 standardına dayalı olarak yapılandırılan Kişisel Veri Gizliliği Yönetim Sistemi (KVYS), Yukato'nun veri işleyen ve/veya veri sorumlusu sıfatıyla faaliyet gösterdiği tüm süreçlerde, <B>gizlilik risklerini sistematik şekilde yönetmesini, veri sahiplerinin haklarını korumasını ve ilgili düzenlemelere tam uyum sağlamasını</B> hedefler.</P>
                    <P>KVYS politikası kapsamında Yukato:</P>
                    <UL>
                      <LI><B>Kişisel olarak tanımlanabilir bilgilerin (PII)</B> işlenmesini yalnızca açık ve yasal amaçlarla yürütür, gereksiz veri işlemeden kaçınır</LI>
                      <LI>Tüm veri işleme faaliyetlerini; <B>KVKK, GDPR, ISO/IEC 27701</B> gibi geçerli ulusal ve uluslararası mevzuatlara uyumlu hale getirir</LI>
                      <LI><B>Veri sorumlusu ve veri işleyen rollerini</B> açıkça tanımlar, yükümlülükleri dokümante eder</LI>
                      <LI>Açık rıza, aydınlatma metinleri ve veri sahibi haklarına yanıt süreçlerini oluşturur ve etkin bir şekilde işletir</LI>
                      <LI>Tüm kişisel veri işleme süreçlerinde <B>gizlilik risk değerlendirmesi (Privacy Impact Assessment – PIA)</B> uygulamalarını benimser</LI>
                      <LI>Kişisel verilerin işlenmesine ilişkin tüm kayıtları güncel tutar ve <B>veri yaşam döngüsü yönetimini</B> kurumsal düzeyde uygular</LI>
                      <LI><B>Veri güvenliği olaylarının kişisel veri ihlali içermesi durumunda,</B> ilgili veri koruma otoritelerine ve veri sahiplerine yasal sürelerde bildirim yapar</LI>
                      <LI>Bulut ortamında işlenen kişisel veriler için <B>ISO/IEC 27018</B> rehberine uygun kontrol önlemlerini uygular</LI>
                      <LI>Tüm çalışanlara, kişisel veri işleme farkındalığına yönelik periyodik eğitimler verir</LI>
                      <LI>Alt yüklenici ve hizmet sağlayıcıları ile imzalanan tüm sözleşmelere <B>gizlilik taahhütleri, veri işleme şartları ve denetim hakkı maddeleri</B> ekler</LI>
                      <LI>KVYS'nin etkinliğini yönetim gözden geçirme süreçleri ve iç denetimlerle periyodik olarak değerlendirir</LI>
                      <LI>Veri koruma ilkelerinin iş kültürüne yerleşmesi için <B>Veri Koruma Görevlisi (DPO)</B> rolünü sistem içinde görevlendirmiştir</LI>
                    </UL>
                    <P>Yukato, kişisel verilerin yalnızca teknik güvenlikle değil, aynı zamanda <B>etik, şeffaf ve hesap verebilir</B> bir anlayışla yönetilmesi gerektiğine inanır. KVYS politikası, veri sahiplerinin güvenini kazanmak ve sürdürmek için stratejik bir öneme sahiptir.</P>
                  </>
                ) : (
                  <>
                    <P>Yukato accepts the secure, lawful, and transparent processing of personal data as a corporate responsibility. Based on ISO/IEC 27701, the Personal Data Privacy Management System (PDPMS) aims to <B>systematically manage privacy risks, protect the rights of data subjects, and ensure full compliance with applicable regulations in all processes where Yukato acts as a data processor and/or data controller.</B></P>
                    <P>Within the framework of the PDPMS policy, Yukato:</P>
                    <UL>
                      <LI>Processes <B>personally identifiable information (PII)</B> only for explicit and lawful purposes and avoids unnecessary data processing</LI>
                      <LI>Aligns all data processing activities with applicable national and international legislations such as <B>KVKK, GDPR, ISO/IEC 27701</B></LI>
                      <LI>Clearly defines <B>the roles of data controller and data processor</B> and documents their obligations</LI>
                      <LI>Establishes and effectively operates processes for explicit consent, privacy notices, and responses to data subject rights</LI>
                      <LI>Adopts <B>Privacy Impact Assessment (PIA)</B> practices in all personal data processing activities</LI>
                      <LI>Keeps all records regarding personal data processing up to date and applies <B>data lifecycle management</B> at the corporate level</LI>
                      <LI><B>In the event that information security incidents involve personal data breaches,</B> it notifies the relevant data protection authorities and data subjects within the legal timeframes</LI>
                      <LI>Applies control measures in line with <B>ISO/IEC 27018</B> guidelines for personal data processed in cloud environments</LI>
                      <LI>Provides periodic training to all employees on personal data processing awareness</LI>
                      <LI>Includes <B>confidentiality commitments, data processing clauses, and audit rights</B> in all contracts with subcontractors and service providers</LI>
                      <LI>Periodically evaluates the effectiveness of the PDPMS through management reviews and internal audits</LI>
                      <LI>Has appointed a <B>Data Protection Officer (DPO)</B> role to embed data protection principles into the corporate culture</LI>
                    </UL>
                    <P>Yukato believes that personal data should be managed not only with technical security but also with <B>an ethical, transparent, and accountable</B> approach. The PDPMS policy is of strategic importance in gaining and maintaining the trust of data subjects.</P>
                  </>
                )}
              </PolicyItem>

              {/* BCMS / İSYS */}
              <PolicyItem title={isTr
                ? "İş Sürekliliği Yönetim Sistemi (İSYS) Politikası"
                : "Business Continuity Management System (BCMS) Policy"}>
                {isTr ? (
                  <>
                    <P>Yukato, müşterilerine, iş ortaklarına ve tüm paydaşlarına karşı hizmetlerini kesintisiz, güvenilir ve planlı bir şekilde sürdürebilmek için ISO 22301 standardına uygun bir <B>İş Sürekliliği Yönetim Sistemi (İSYS)</B> kurmuş ve devreye almıştır. Bu sistemin temel amacı, kritik faaliyetlerin sürekliliğini sağlamak, aksama durumlarına karşı dayanıklılık oluşturmak ve olağanüstü hâllerde hızlı toparlanmayı garanti altına almaktır.</P>
                    <P>İSYS politikası kapsamında Yukato:</P>
                    <UL>
                      <LI>İş sürekliliği kapsamındaki <B>kritik faaliyetleri, kaynakları, bağımlılıkları ve hizmet seviyelerini</B> belirler ve periyodik olarak gözden geçirir</LI>
                      <LI><B>Risk ve iş etki analizleri (BIA)</B> yoluyla olası kesinti senaryolarını değerlendirir ve toparlanma önceliklerini belirler</LI>
                      <LI>Her bir kritik süreç için <B>İş Sürekliliği Planları (BCP), Kurtarma Zaman Hedefleri (RTO) ve Kabul Edilebilir Veri Kayıpları (RPO)</B> oluşturur</LI>
                      <LI>Olağanüstü durumlar karşısında müdahale, iletişim, operasyonel devamlılık ve kurtarma süreçlerini yönetecek <B>olay müdahale ekiplerini ve kriz yönetim yapısını</B> tanımlar</LI>
                      <LI>İş sürekliliği senaryoları için düzenli olarak <B>masa başı ve tam uygulamalı tatbikatlar</B> gerçekleştirir, sonuçları analiz ederek iyileştirme faaliyetleri başlatır</LI>
                      <LI>Tüm personelin kriz durumlarındaki rol ve sorumluluklarını içeren <B>farkındalık ve eğitim programlarını</B> uygular</LI>
                      <LI>Tedarikçi, hizmet sağlayıcı ve dış kaynak kullanımına bağlı süreklilik risklerini değerlendirir ve gereken kontrol önlemlerini alır</LI>
                      <LI>Süreklilik planlarını <B>teknoloji altyapıları (sunucu, ağ, veri yedekleme), insan kaynağı ve lokasyon</B> bazlı senaryoları dikkate alarak bütünsel şekilde hazırlar</LI>
                      <LI>Süreçlerin, sistemlerin ve hizmetlerin yeniden devreye alınmasını sağlayacak <B>toparlanma stratejileri ve alternatif çalışma yöntemleri</B> tanımlar</LI>
                      <LI>Yönetim gözden geçirme toplantılarında iş sürekliliği performansını değerlendirir ve gerektiğinde stratejik iyileştirmeler önerir</LI>
                      <LI>ISO 22301'e uygun olarak tüm iş sürekliliği süreçlerini belgeleyerek denetlenebilir ve sürdürülebilir bir yapı kurar</LI>
                    </UL>
                    <PB>Yukato için iş sürekliliği yalnızca operasyonel bir gereklilik değil, <B>kurumsal güvenilirliğin ve müşteri memnuniyetinin temel dayanaklarından biridir.</B> İSYS, yalnızca kriz anlarında değil, günlük operasyonel risklerin de etkili bir şekilde yönetilmesini sağlayan bütünleşik bir yapı olarak işletilir.</PB>
                  </>
                ) : (
                  <>
                    <P>Yukato has established and implemented a <B>Business Continuity Management System (BCMS)</B> in line with ISO 22301 to ensure the uninterrupted, reliable, and planned delivery of services to its customers, partners, and stakeholders. The main goal of this system is to guarantee the continuity of critical activities, build resilience against disruptions, and ensure rapid recovery during emergencies.</P>
                    <P>Within the framework of the BCMS policy, Yukato:</P>
                    <UL>
                      <LI>Identifies and periodically reviews <B>critical activities, resources, dependencies, and service levels</B> within the scope of business continuity</LI>
                      <LI>Evaluates potential disruption scenarios through <B>risk and Business Impact Analyses (BIA)</B> and determines recovery priorities</LI>
                      <LI>Creates <B>Business Continuity Plans (BCP), Recovery Time Objectives (RTO), and Recovery Point Objectives (RPO)</B> for each critical process</LI>
                      <LI>Defines <B>incident response teams and crisis management structures</B> to handle emergency intervention, communication, operational continuity, and recovery processes</LI>
                      <LI>Regularly conducts <B>tabletop and full-scale exercises</B> for business continuity scenarios, analyzes results, and initiates improvement actions</LI>
                      <LI>Implements <B>awareness and training programs</B> covering roles and responsibilities of all personnel in crisis situations</LI>
                      <LI>Evaluates continuity risks arising from suppliers, service providers, and outsourcing, and applies necessary control measures</LI>
                      <LI>Prepares sustainability plans in a holistic manner, <B>considering technology infrastructure (servers, networks, data backups), human resources, and location-based</B> scenarios</LI>
                      <LI>Defines <B>recovery strategies and alternative working methods</B> to ensure the reinstatement of processes, systems, and services</LI>
                      <LI>Assesses business continuity performance in management review meetings and proposes strategic improvements when necessary</LI>
                      <LI>Documents all business continuity processes in compliance with ISO 22301, establishing an auditable and sustainable structure</LI>
                    </UL>
                    <PB>For Yukato, business continuity is not merely an operational requirement but one of <B>the fundamental pillars of corporate reliability and customer satisfaction.</B> The BCMS functions as an integrated structure that effectively manages not only crisis situations but also day-to-day operational risks.</PB>
                  </>
                )}
              </PolicyItem>

              {/* ITSMS / HYS */}
              <PolicyItem title={isTr
                ? "BT Hizmet Yönetim Sistemi (HYS) Politikası"
                : "IT Service Management System (ITSMS) Policy"}>
                {isTr ? (
                  <>
                    <P>Yukato, sunduğu dijital ürün ve hizmetlerin kesintisiz, tutarlı, güvenilir ve müşteri ihtiyaçlarına uygun şekilde yürütülmesini sağlamak amacıyla <B>ISO/IEC 20000-1</B> standardına dayalı bir <B>BT Hizmet Yönetim Sistemi (HYS)</B> kurmuş ve uygulamaya almıştır. Bu sistemin amacı, BT hizmetlerinin kalite güvencesi altında planlanması, sunulması, kontrol edilmesi ve sürekli iyileştirilmesidir.</P>
                    <UL>
                      <LI>Sunulan tüm BT hizmetlerini tanımlar, hizmet kataloğunu oluşturur ve ilgili servis seviyelerini (SLA) açıkça belirler</LI>
                      <LI>Hizmetlerin tasarımı, geçişi, teslimi ve sürekli iyileştirilmesini kapsayan yaşam döngüsünü sistematik olarak yönetir</LI>
                      <LI>Olay yönetimi, sorun yönetimi, değişiklik yönetimi ve yapılandırma yönetimi süreçlerini kurumsal düzeyde işletir</LI>
                      <LI>BT hizmetlerine ilişkin performans hedeflerini belirler, izler ve ölçülebilir hizmet kalite göstergeleri (KPI'lar) ile değerlendirir</LI>
                      <LI>Müşteri taleplerine hızlı, tutarlı ve belgelenmiş süreçlerle yanıt verir</LI>
                      <LI>BT altyapısındaki riskleri proaktif şekilde tanımlar ve hizmet sürekliliği ile entegre olacak şekilde azaltıcı tedbirler alır</LI>
                      <LI>Hizmet erişilebilirliği, kapasite yönetimi ve bilgi güvenliği gibi alanlarda teknik kontrolleri ve destekleyici prosedürleri uygular</LI>
                      <LI>Tedarikçi ve dış hizmet sağlayıcılarla yapılan tüm sözleşmelerde BT hizmet sürekliliği ve hizmet seviyesi şartlarını açıkça tanımlar</LI>
                      <LI>BT hizmet kalitesini artırmaya yönelik çalışan geri bildirimlerini, müşteri şikâyetlerini ve dış tetkik sonuçlarını kullanarak sürekli iyileştirme faaliyetleri yürütür</LI>
                      <LI>Tüm BT personelinin görevlerine uygun yeterlilikte olduğunu güvence altına alır ve periyodik eğitimlerle destekler</LI>
                      <LI>ISO/IEC 20000-1 standardına uygun iç denetim, yönetim gözden geçirme ve iyileştirme mekanizmalarını sürdürülebilir şekilde uygular</LI>
                    </UL>
                    <PB>Yukato, BT hizmetlerini sadece teknik altyapı değil, aynı zamanda <B>müşteri memnuniyeti, hizmet kalitesi ve süreç verimliliği</B> ile bütünleşik bir yönetim anlayışıyla ele alır. HYS; kullanıcı deneyimini artıran, sorunları hızla çözen ve değer odaklı hizmet sunumunu mümkün kılan stratejik bir yapı olarak konumlandırılmıştır.</PB>
                  </>
                ) : (
                  <>
                    <P>Yukato has established and implemented an <B>IT Service Management System (ITSMS)</B> based on <B>ISO/IEC 20000-1</B> to ensure that its digital products and services are delivered continuously, consistently, reliably, and in line with customer needs. The system aims to plan, deliver, control, and continuously improve IT services under quality assurance.</P>
                    <P>Within the framework of the ITSMS policy, Yukato:</P>
                    <UL>
                      <LI>Defines all IT services provided, creates a service catalog, and clearly states related Service Level Agreements (SLAs)</LI>
                      <LI>Systematically manages the lifecycle covering the design, transition, delivery, and continuous improvement of services</LI>
                      <LI>Operates incident management, problem management, change management, and configuration management processes at the corporate level</LI>
                      <LI>Sets performance objectives for IT services, monitors them, and evaluates them with measurable Key Performance Indicators (KPIs)</LI>
                      <LI>Responds to customer requests quickly, consistently, and through documented processes</LI>
                      <LI>Proactively identifies risks in the IT infrastructure and takes mitigating measures integrated with service continuity</LI>
                      <LI>Applies technical controls and supporting procedures in areas such as service availability, capacity management, and information security</LI>
                      <LI>Clearly defines IT service continuity and service level requirements in all contracts with suppliers and external service providers</LI>
                      <LI>Conducts continuous improvement activities by utilizing employee feedback, customer complaints, and external audit results to enhance IT service quality</LI>
                      <LI>Ensures that all IT personnel are adequately competent for their roles and supports them with periodic training</LI>
                      <LI>Implements internal audits, management reviews, and improvement mechanisms in a sustainable way in compliance with ISO/IEC 20000-1</LI>
                    </UL>
                    <PB>Yukato approaches IT services not only as technical infrastructure but also with a management philosophy integrating <B>customer satisfaction, service quality, and process efficiency.</B> ITSMS is positioned as a strategic structure that enhances user experience, resolves problems quickly, and enables value-oriented service delivery.</PB>
                  </>
                )}
              </PolicyItem>

              {/* AIMS */}
              <PolicyItem title={isTr
                ? "Yapay Zekâ Yönetim Sistemi (AIMS) Politikası"
                : "Artificial Intelligence Management System (AIMS) Policy"}>
                {isTr ? (
                  <>
                    <P><B>(ISO/IEC 42001 Temelli Politika)</B><br />
                    Yukato, yapay zekâ teknolojilerinin kurumsal süreçlerde kullanımı sırasında etik ilkelere, güvenlik gerekliliklerine ve insan haklarına saygılı bir yaklaşım benimsemeyi temel ilke olarak kabul eder. ISO/IEC 42001 standardına uygun olarak kurulan <B>Yapay Zekâ Yönetim Sistemi (AIMS)</B>, yapay zekâ çözümlerinin açıklanabilir, izlenebilir, hesap verebilir ve güvenli biçimde tasarlanmasını, geliştirilmesini, işletilmesini ve denetlenmesini sağlar.</P>
                    <UL>
                      <LI>Yapay zekâ sistemlerinin geliştirilmesi ve kullanımı sırasında <B>etik ilkeleri, insan gözetimini, ayrımcılık karşıtlığını, adil işlemeyi ve karar alma süreçlerinde şeffaflığı</B> esas alır</LI>
                      <LI>AI projelerinde kullanılan verilerin <B>gizlilik, güvenlik, yasal uygunluk ve önyargıdan arındırılmışlık</B> ilkelerine göre değerlendirildiğinden emin olur</LI>
                      <LI>AI modellerinin <B>açıklanabilirliğini ve yorumlanabilirliğini</B> güvence altına alacak teknik yöntemleri ve kullanıcı arayüzlerini uygular</LI>
                      <LI>AI sistemlerine ilişkin tüm karar süreçlerini ve veri akışlarını belgeleyerek <B>tam izlenebilirlik</B> sağlar</LI>
                      <LI>AI sistemleri için sorumlulukların açıkça tanımlandığı bir yönetişim yapısı kurar (etik sorumlular, teknik sorumlular, ürün yöneticileri)</LI>
                      <LI><B>Model eğitimi, validasyon, test ve izleme süreçlerini</B> kontrollü ve belgelenmiş prosedürler ile yönetir</LI>
                      <LI>Yapay zekâ çıktılarının, kurumsal karar alma süreçlerine etkisini izler, hatalı veya riskli sonuçlara karşı düzeltici mekanizmalar tanımlar</LI>
                      <LI>AI sistemlerinde oluşabilecek <B>yanıltıcı içerik üretimi, otomatik karar alma riskleri, gizlilik ihlalleri ve siber tehditlere karşı</B> güvenlik önlemleri alır</LI>
                      <LI>İnsan haklarına aykırı sonuçlar üretme potansiyeli olan uygulamaları yasaklar; insan denetiminin dışlandığı yapıları reddeder</LI>
                      <LI>AI projelerinde görev alan tüm personelin etik farkındalık, güvenlik, yasal çerçeve ve teknik yeterlilik alanlarında sürekli gelişimini sağlar</LI>
                      <LI>ISO/IEC 42001 standardı doğrultusunda <B>risk değerlendirmesi, etki analizi ve etik denetim</B> süreçlerini entegre biçimde uygular</LI>
                      <LI>AI sistemleriyle ilgili tüm politika, prosedür ve teknik belgeleri sistematik şekilde yönetir, günceller ve denetime hazır halde tutar</LI>
                    </UL>
                    <PB>Yukato, yapay zekâ teknolojisinin sunduğu fırsatları insan yararına kullanmayı ve bunu yaparken <B>güvenlik, etik, şeffaflık ve sorumluluk ilkelerini</B> merkeze almayı kurumsal sorumluluk kabul eder. AIMS, yalnızca teknoloji odaklı değil, aynı zamanda <B>değer odaklı</B> bir yapay zekâ kullanım modelinin temel taşıdır.</PB>
                  </>
                ) : (
                  <>
                    <P><B>(Based on ISO/IEC 42001)</B><br />
                    Yukato has adopted the principle of maintaining an ethical, secure, and human rights–respecting approach in the use of artificial intelligence technologies within corporate processes. The Artificial Intelligence Management System (AIMS), established in compliance with ISO/IEC 42001, ensures that AI solutions are designed, developed, operated, and monitored in an explainable, traceable, accountable, and secure manner.</P>
                    <P>Within the framework of the AIMS policy, Yukato:</P>
                    <UL>
                      <LI>Bases the development and use of AI systems on ethical principles, human oversight, <B>non-discrimination, fair processing, and transparency in decision-making</B></LI>
                      <LI>Ensures that data used in AI projects is evaluated according to principles of <B>privacy, security, legal compliance, and absence of bias</B></LI>
                      <LI>Applies technical methods and user interfaces that guarantee <B>the explainability and interpretability</B> of AI models</LI>
                      <LI>Documents all decision-making processes and data flows related to AI systems to ensure <B>full traceability</B></LI>
                      <LI>Establishes a governance structure with clearly defined responsibilities for AI systems (ethical officers, technical leads, product managers)</LI>
                      <LI>Manages <B>model training, validation, testing, and monitoring processes</B> with controlled and documented procedures</LI>
                      <LI>Monitors the impact of AI outputs on corporate decision-making and defines corrective mechanisms against faulty or risky outcomes</LI>
                      <LI>Implements security measures against misleading content generation, <B>automated decision-making risks, privacy violations, and cyber threats</B> in AI systems</LI>
                      <LI>Prohibits applications that may produce outcomes contrary to human rights and rejects structures that exclude human oversight</LI>
                      <LI>Ensures the continuous development of all personnel involved in AI projects in areas such as ethics, security, legal frameworks, and technical competencies</LI>
                      <LI>Integrates <B>risk assessment, impact analysis, and ethical audit</B> processes in line with ISO/IEC 42001</LI>
                      <LI>Systematically manages, updates, and keeps ready for audit all policies, procedures, and technical documents related to AI systems</LI>
                    </UL>
                    <PB>Yukato accepts as a corporate responsibility the use of AI technologies for the benefit of humanity while placing <B>security, ethics, transparency, and accountability</B> at the center. AIMS is the cornerstone of a value-driven, not just technology-driven, AI usage model.</PB>
                  </>
                )}
              </PolicyItem>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
