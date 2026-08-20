import { RouteFrame, PageHero, imageSet } from '@/components/site-shell'

interface ServiceDetail {
  number: string
  title: string
  lead: string
  description: string
  image: string
}

const detailedServices: ServiceDetail[] = [
  {
    number: '01',
    title: 'Özel Çiçek Buketleri',
    lead: 'Sevdikleriniz için özenle seçilmiş mevsimin en taze ithal ve yerli çiçekleri.',
    description:
      'Doğum günleri, yıldönümleri, evlilik teklifleri ve sevdiklerinize özel anlar için Göcek merkezdeki atölyemizde günlük hazırlanan seçkin buketler. İthal güller, şakayıklar, ortancalar ve egzotik botanik yapraklar ile kişiye özel renk paletlerinde tasarlanır. Göcek içi ve çevresine aynı gün güvenilir teslimat seçeneği sunulmaktadır.',
    image: '/flower-1.png',
  },
  {
    number: '02',
    title: 'Gelin El Çiçeği & Aksesuarları',
    lead: 'En özel gününüzün zarafetini tamamlayan kişiye özel tasarlanmış gelin buketleri.',
    description:
      'Gelinliğinizin kesimi, düğün temanız ve mevsime uygun taze çiçeklerle hazırlanan kusursuz gelin buketleri. Damat yaka çiçeği, nedime bileklikleri ve saç aksesuarları ile bütüncül bir estetik sunuyoruz. Akdeniz sahil ikliminde gün boyu formunu ve canlılığını koruyan özel dayanıklı çiçekler tercih edilir.',
    image: '/gelin_çiçeği.jpg',
  },
  {
    number: '03',
    title: 'Ev & Villa Çiçekleri',
    lead: 'Yaşam alanlarınıza ferahlık ve doğal lüks katan botanik masa ve vazo düzenlemeleri.',
    description:
      'Göcek ve çevresindeki villalar ile yaşam alanları için ferahlık katan mimari çiçek düzenlemeleri. Salon konsol aranjmanları, yemek masası çiçekleri, teras düzenlemeleri ve özel saksılı orkideler ile mekanınıza doğal bir lüks dokunuş kazandırıyoruz. İsteğe bağlı olarak haftalık veya periyodik taze çiçek değişim servisi sağlanmaktadır.',
    image: '/ev_çiçeği.jpg',
  },
  {
    number: '04',
    title: 'Yat & Tekne Çiçek Servisi',
    lead: 'Göcek marinalarına ve teknenize doğrudan teslim edilen marin konseptli çiçekler.',
    description:
      'D-Marin Göcek, Skopea Marina, Club Marina ve Göcek koylarındaki tüm özel tekne ve motoryatlar için doğrudan marina ve güverteye teslim çiçek servisi. Deniz koşullarına, rüzgara ve tuzlu hava nemine dayanıklı, devrilmeyen özel tabanlı vazolarda hazırlanan kokteyl, salon ve flybridge çiçek aranjmanları.',
    image: '/yat_süsleme.jpg',
  },
  {
    number: '05',
    title: 'Düğün & Davet Tasarımı',
    lead: 'Kutlamalar, partiler ve özel günler için mekana özel konsept çiçek dekorasyonu.',
    description:
      'Kumsal düğünleri, tekne partileri, gala yemekleri ve butik davetler için mekana özel konsept çiçek dekorasyonu. Giriş kemerleri (arch), nikah seremonisi arka planları, şamdan ve masa çiçekleri ile unutulmaz bir atmosfer yaratıyoruz. Mekanın mimari dokusuna ve davet temanıza uygun uçtan uca anahtar teslim çiçek enstalasyonu.',
    image: '/düğün_süsleme.jpg',
  },
  {
    number: '06',
    title: 'Gelin Arabası Süsleme',
    lead: 'Düğün ve özel günleriniz için aracınıza özel taze çiçek ve zarif tül süslemeleri.',
    description:
      'Klasik, üstü açık ya da modern araçlarınıza uygun şık ve estetik araç süsleme hizmeti. Aracın boyasına zarar vermeyen özel vantuz ve sabitleme aparatları kullanılarak, sürüş esnasında formunu koruyan taze gül, okaliptüs ve saten tül detaylarıyla hazırlanır.',
    image: '/araba_süsleme.jpg',
  },
  {
    number: '07',
    title: 'Helyum Gazlı Balon',
    lead: 'Kutlama, doğum günü ve özel sürprizler için kaliteli helyum gazlı balon tasarımları.',
    description:
      'Doğum günleri, evlilik teklifleri, cinsiyet partileri, baby shower ve özel kutlamalar için yüksek kaliteli helyum gazlı balon tasarımları. Çiçek detaylı balon kemerleri, pastel ve krom renk seçenekleri, kişiye özel harf ve rakam balon buketleri ile mekanlara neşeli ve büyüleyici bir görsellik katıyoruz.',
    image: '/balon_süsleme.jpg',
  },
]

export default function ServicesPage() {
  return (
    <RouteFrame>
      <PageHero
        eyebrow="Hizmetlerimiz · Göcek"
        title={<>Çiçek Hizmetleri</>}
        image={imageSet.white}
        alt="Sıcak doğal ışıkta beyaz çiçekler"
      />

      <section className="section-shell route-services-detail">
        <div className="services-detail-intro">
          <h2 className="section-title">Ayrıcalıklı Çiçek Hizmetlerimiz</h2>
          <p className="services-lead">
            Göcek merkezdeki çiçek atölyemizde bireysel hediye siparişlerinden tekne, villa ve davet organizasyonlarına kadar her zevke özel profesyonel çiçek tasarımları hazırlıyoruz.
          </p>
        </div>

        <div className="service-detail-list">
          {detailedServices.map((service) => (
            <article className="service-detail-item" key={service.title}>
              <div className="service-detail-img-box">
                <img src={service.image} alt={service.title} className="service-detail-img" />
              </div>
              <div className="service-detail-content">
                <span className="service-detail-badge">{service.number} · Hizmet</span>
                <h3 className="service-detail-title">{service.title}</h3>
                <p className="service-detail-lead">{service.lead}</p>
                <p className="service-detail-desc">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Unified Luxury CTA Banner at bottom */}
      <section className="section-shell services-cta-section">
        <div className="services-cta-card">
          <p className="eyebrow">Göcek Marine Flowers</p>
          <h2 className="services-cta-title">Özel Bir Sipariş veya Proje Planlayalım</h2>
          <p className="services-cta-copy">
            İster sevdikleriniz için taze bir buket, ister yatınız ya da davetiniz için konsept çiçek tasarımı olsun; bize WhatsApp'tan yazabilir veya telefonla anında ulaşabilirsiniz.
          </p>
          <div className="services-cta-buttons">
            <a
              href="https://wa.me/905352153000?text=Merhaba,%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="services-cta-btn services-cta-wa"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.414 5.165 5.284-1.385c1.458.796 3.1 1.216 4.789 1.216 5.507 0 9.988-4.479 9.988-9.984 0-5.506-4.481-9.984-9.988-9.984zm5.823 14.174c-.244.688-1.432 1.313-1.986 1.369-.512.051-1.156.082-3.327-.812-2.775-1.144-4.54-3.952-4.68-4.137-.138-.184-1.121-1.492-1.121-2.846 0-1.354.708-2.02.96-2.284.244-.253.533-.316.711-.316.178 0 .356.002.511.01.164.008.386-.062.604.462.223.533.756 1.843.823 1.977.067.134.111.29.022.463-.089.174-.134.282-.267.437-.133.155-.28.347-.399.467-.133.133-.272.279-.117.546.156.267.69 1.139 1.482 1.844 1.018.907 1.876 1.189 2.143 1.323.267.133.423.111.578-.067.156-.178.667-.777.844-1.044.178-.267.356-.223.6-.133.244.089 1.556.734 1.823.867.267.133.444.2.511.311.067.111.067.644-.178 1.332z" />
              </svg>
              <span>WhatsApp ile İletişime Geçin</span>
            </a>
            <a href="tel:+905352153000" className="services-cta-btn services-cta-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Ara: 0535 215 30 00</span>
            </a>
          </div>
        </div>
      </section>
    </RouteFrame>
  )
}
