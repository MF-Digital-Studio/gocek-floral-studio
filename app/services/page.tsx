import { OrderCta, RouteFrame, PageHero, imageSet } from '@/components/site-shell'

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
        <div className="services-detail-intro-wrap">
          <div className="services-detail-intro">
            <h2 className="section-title">Ayrıcalıklı Çiçek Hizmetlerimiz</h2>
            <p className="services-lead">
              Göcek merkezdeki çiçek atölyemizde bireysel hediye siparişlerinden tekne, villa ve davet organizasyonlarına kadar her zevke özel profesyonel çiçek tasarımları hazırlıyoruz.
            </p>
          </div>
          <div className="services-intro-brand">
            <img src="/logo.png" alt="Göcek Marine Flowers Logo" className="services-intro-logo-img" />
          </div>
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

      <OrderCta />
    </RouteFrame>
  )
}
