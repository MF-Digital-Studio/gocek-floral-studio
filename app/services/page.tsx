import type { Metadata } from 'next'
import { OrderCta, RouteFrame, PageHero, imageSet } from '@/components/site-shell'
import { ArrowUpRight } from '@/components/icons'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: {
    absolute: `Çiçek Hizmetleri – Gelin, Villa, Yat & Düğün | ${BUSINESS.name}`,
  },
  description:
    'Göcek\'te buket, gelin el çiçeği, ev & villa aranjmanı, yat & tekne çiçek servisi, düğün tasarımı, araç süsleme ve balon hizmetleri. Göcek Marine Flowers.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Çiçek Hizmetleri | ${BUSINESS.name}`,
    description:
      'Göcek\'te 7 farklı çiçek hizmeti: buket, gelin, villa, yat, düğün, araç süsleme ve balon tasarımları.',
    url: `${SITE_URL}/services`,
    images: [
      {
        url: '/flower-5.png',
        width: 1200,
        height: 630,
        alt: 'Göcek Marine Flowers çiçek hizmetleri',
      },
    ],
  },
}

interface ServiceDetail {
  number: string
  title: string
  lead: string
  description: string
  image: string
  alt: string
}

const detailedServices: ServiceDetail[] = [
  {
    number: '01',
    title: 'Özel Çiçek Buketleri',
    lead: 'Sevdikleriniz için özenle seçilmiş mevsimin en taze ithal ve yerli çiçekleri.',
    description:
      'Doğum günleri, yıldönümleri, evlilik teklifleri ve sevdiklerinize özel anlar için Göcek merkezdeki atölyemizde günlük hazırlanan seçkin buketler. İthal güller, şakayıklar, ortancalar ve egzotik botanik yapraklar ile kişiye özel renk paletlerinde tasarlanır. Göcek içi ve çevresine aynı gün güvenilir teslimat seçeneği sunulmaktadır.',
    image: '/flower-1.png',
    alt: 'Göcek\'te hazırlanan özel gül ve kır çiçeği buketi',
  },
  {
    number: '02',
    title: 'Gelin El Çiçeği & Aksesuarları',
    lead: 'En özel gününüzün zarafetini tamamlayan kişiye özel tasarlanmış gelin buketleri.',
    description:
      'Gelinliğinizin kesimi, düğün temanız ve mevsime uygun taze çiçeklerle hazırlanan kusursuz gelin buketleri. Damat yaka çiçeği, nedime bileklikleri ve saç aksesuarları ile bütüncül bir estetik sunuyoruz. Akdeniz sahil ikliminde gün boyu formunu ve canlılığını koruyan özel dayanıklı çiçekler tercih edilir.',
    image: '/gocek-gelin-el-cicegi.jpg',
    alt: 'Göcek düğünü için hazırlanmış taze gelin el çiçeği',
  },
  {
    number: '03',
    title: 'Ev & Villa Çiçekleri',
    lead: 'Yaşam alanlarınıza ferahlık ve doğal lüks katan botanik masa ve vazo düzenlemeleri.',
    description:
      'Göcek ve çevresindeki villalar ile yaşam alanları için ferahlık katan mimari çiçek düzenlemeleri. Salon konsol aranjmanları, yemek masası çiçekleri, teras düzenlemeleri ve özel saksılı orkideler ile mekanınıza doğal bir lüks dokunuş kazandırıyoruz. İsteğe bağlı olarak haftalık veya periyodik taze çiçek değişim servisi sağlanmaktadır.',
    image: '/gocek-ev-villa-cicegi.jpg',
    alt: 'Göcek villası için ev çiçeği ve orkide aranjmanı',
  },
  {
    number: '04',
    title: 'Yat & Tekne Çiçek Servisi',
    lead: 'Göcek marinalarına ve teknenize doğrudan teslim edilen marin konseptli çiçekler.',
    description:
      'D-Marin Göcek, Skopea Marina, Club Marina ve Göcek koylarındaki tüm özel tekne ve motoryatlar için doğrudan marina ve güverteye teslim çiçek servisi. Deniz koşullarına, rüzgara ve tuzlu hava nemine dayanıklı, devrilmeyen özel tabanlı vazolarda hazırlanan kokteyl, salon ve flybridge çiçek aranjmanları.',
    image: '/gocek-yat-marina-cicek.jpg',
    alt: 'Göcek marinasındaki yat için çiçek aranjmanı',
  },
  {
    number: '05',
    title: 'Düğün & Davet Tasarımı',
    lead: 'Kutlamalar, partiler ve özel günler için mekana özel konsept çiçek dekorasyonu.',
    description:
      'Kumsal düğünleri, tekne partileri, gala yemekleri ve butik davetler için mekana özel konsept çiçek dekorasyonu. Giriş kemerleri (arch), nikah seremonisi arka planları, şamdan ve masa çiçekleri ile unutulmaz bir atmosfer yaratıyoruz. Mekanın mimari dokusuna ve davet temanıza uygun uçtan uca anahtar teslim çiçek enstalasyonu.',
    image: '/gocek-dugun-cicek-susleme.jpg',
    alt: 'Göcek düğün organizasyonu için çiçek dekorasyonu',
  },
  {
    number: '06',
    title: 'Gelin Arabası Süsleme',
    lead: 'Düğün ve özel günleriniz için aracınıza özel taze çiçek ve zarif tül süslemeleri.',
    description:
      'Klasik, üstü açık ya da modern araçlarınıza uygun şık ve estetik araç süsleme hizmeti. Aracın boyasına zarar vermeyen özel vantuz ve sabitleme aparatları kullanılarak, sürüş esnasında formunu koruyan taze gül, okaliptüs ve saten tül detaylarıyla hazırlanır.',
    image: '/gocek-gelin-araba-susleme.jpg',
    alt: 'Göcek düğünü için gelin arabası çiçek süslemesi',
  },
  {
    number: '07',
    title: 'Helyum Gazlı Balon',
    lead: 'Kutlama, doğum günü ve özel sürprizler için kaliteli helyum gazlı balon tasarımları.',
    description:
      'Doğum günleri, evlilik teklifleri, cinsiyet partileri, baby shower ve özel kutlamalar için yüksek kaliteli helyum gazlı balon tasarımları. Çiçek detaylı balon kemerleri, pastel ve krom renk seçenekleri, kişiye özel harf ve rakam balon buketleri ile mekanlara neşeli ve büyüleyici bir görsellik katıyoruz.',
    image: '/gocek-helyum-balon-susleme.jpg',
    alt: 'Özel kutlama için helyum gazlı balon aranjmanı – Göcek',
  },
]

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: SITE_URL },
    { name: 'Hizmetler', url: `${SITE_URL}/services` },
  ])

  return (
    <RouteFrame>
      <script
        id="schema-breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Hizmetlerimiz · Göcek"
        title={<>Çiçek Hizmetleri</>}
        image={imageSet.white}
        alt="Sıcak doğal ışıkta beyaz çiçekler – Göcek Marine Flowers"
      />

      <section className="section-shell route-services-detail">
        <div className="services-detail-intro-wrap">
          <div className="services-detail-intro">
            <h2 className="section-title">Ayrıcalıklı Çiçek Hizmetlerimiz</h2>
            <p className="services-lead">
              Göcek merkezdeki çiçek atölyemizde bireysel hediye
              siparişlerinden tekne, villa ve davet organizasyonlarına kadar
              her zevke özel profesyonel çiçek tasarımları hazırlıyoruz.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a className="text-link" href="/works">
                Tüm Çiçek Koleksiyonunu İnceleyin <ArrowUpRight size={13} />
              </a>
              <a className="text-link" href="/gocek-cicekci">
                Göcek&apos;te Çiçek Siparişi <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="services-intro-brand">
            <img
              src="/logo.png"
              alt="Göcek Marine Flowers Logo"
              className="services-intro-logo-img"
              width={120}
              height={120}
            />
          </div>
        </div>

        <div className="service-detail-list">
          {detailedServices.map((service) => (
            <article className="service-detail-item" key={service.title}>
              <div className="service-detail-img-box">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-detail-img"
                  width={600}
                  height={450}
                  loading="lazy"
                />
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
