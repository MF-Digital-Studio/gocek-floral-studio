import type { Metadata } from 'next'
import { RouteFrame } from '@/components/site-shell'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildFAQSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: `Göcek Çiçekçi | ${BUSINESS.name}`,
  description:
    'Göcek\'te taze çiçekler, buketler ve özel tasarım aranjmanlar. Göcek Marine Flowers ile Göcek\'teki çiçek seçeneklerini keşfedin. Turgut Özal Cd. No:7 – 0535 215 30 00.',
  alternates: {
    canonical: `${SITE_URL}/gocek-cicekci`,
  },
  openGraph: {
    title: `Göcek Çiçekçi | ${BUSINESS.name}`,
    description:
      'Göcek\'te taze buket, gelin çiçeği, villa & yat aranjmanı, düğün organizasyonu. Göcek Marine Flowers – 0535 215 30 00.',
    url: `${SITE_URL}/gocek-cicekci`,
    images: [
      {
        url: '/about.png',
        width: 1200,
        height: 630,
        alt: `Göcek Çiçekçi – ${BUSINESS.name}`,
      },
    ],
  },
}

const highlights = [
  {
    number: '01',
    title: 'Özel Buketler',
    desc: 'Doğum günleri, yıldönümleri ve sevdikleriniz için günlük taze hazırlanan buketler.',
    image: '/flower-1.png',
    alt: 'Göcek\'te özel sipariş gül buketi',
    href: '/services',
  },
  {
    number: '02',
    title: 'Gelin Çiçekleri',
    desc: 'Düğün temanıza ve gelinliğinize özel taze gelin el çiçeği tasarımları.',
    image: '/gelin_çiçeği.jpg',
    alt: 'Göcek düğünü için gelin el çiçeği',
    href: '/services',
  },
  {
    number: '03',
    title: 'Yat & Marina',
    desc: 'Göcek marinalarına doğrudan teslim edilen deniz konseptli çiçek aranjmanları.',
    image: '/yat_süsleme.jpg',
    alt: 'Göcek marinasındaki yata çiçek aranjmanı teslimatı',
    href: '/services',
  },
  {
    number: '04',
    title: 'Ev & Villa',
    desc: 'Göcek ve çevresindeki villalar için taze masa çiçekleri ve botanik düzenlemeler.',
    image: '/ev_çiçeği.jpg',
    alt: 'Göcek villası için ev çiçeği ve orkide aranjmanı',
    href: '/services',
  },
  {
    number: '05',
    title: 'Düğün & Davet',
    desc: 'Kumsal düğünleri ve tekne partileri dahil tüm organizasyonlar için konsept dekorasyon.',
    image: '/düğün_süsleme.jpg',
    alt: 'Göcek\'te düğün organizasyonu çiçek dekorasyonu',
    href: '/services',
  },
  {
    number: '06',
    title: 'Koleksiyon',
    desc: 'Orkide, şakayık, ortanca ve mevsim çiçeklerinden oluşan geniş tasarım koleksiyonumuz.',
    image: '/flower-8.png',
    alt: 'Göcek Marine Flowers çiçek koleksiyonu – taze şakayık',
    href: '/works',
  },
]

const faqs = [
  {
    question: 'Göcek\'te çiçek siparişi nasıl verebilirim?',
    answer:
      'Göcek Marine Flowers\'a 0535 215 30 00 numaralı telefondan arayarak veya WhatsApp üzerinden yazarak sipariş verebilirsiniz. Ayrıca Turgut Özal Cd. No:7 adresindeki mağazamıza bizzat uğrayabilirsiniz.',
  },
  {
    question: 'Çiçekleri mağazadan teslim alabilir miyim?',
    answer:
      'Evet. Göcek merkezdeki mağazamızdan Pazartesi–Cumartesi 09:00–18:00 saatleri arasında siparişlerinizi teslim alabilirsiniz.',
  },
  {
    question: 'Yat ve teknelere çiçek teslimatı yapıyor musunuz?',
    answer:
      'Evet. Göcek marinalarındaki tekne ve motoryatlara doğrudan marina ve güverteye teslim çiçek servisi sunuyoruz. Deniz koşullarına dayanıklı özel vazolar kullanıyoruz.',
  },
  {
    question: 'Düğün ve özel etkinlikler için çiçek tasarımı yapıyor musunuz?',
    answer:
      'Evet. Kumsal düğünleri, tekne partileri, gala yemekleri ve butik davetler için mekana özel konsept çiçek dekorasyonu, gelin el çiçeği ve araç süsleme hizmetleri sunuyoruz.',
  },
]

export default function GocekCicekciPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: SITE_URL },
    { name: 'Göcek Çiçekçi', url: `${SITE_URL}/gocek-cicekci` },
  ])
  const localBusinessSchema = buildLocalBusinessSchema()
  const faqSchema = buildFAQSchema(faqs)

  return (
    <RouteFrame>
      {/* JSON-LD Schemas */}
      <script
        id="schema-breadcrumb-gocek"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="schema-local-business-gocek"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        id="schema-faq-gocek"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="route-hero">
        <img
          src="/about.png"
          alt="Göcek Marine Flowers – Göcek Çiçekçi"
          width={1600}
          height={900}
        />
        <div className="hero-wash" />
        <div className="route-hero-content">
          <p className="eyebrow">Göcek · Muğla</p>
          <h1 className="display-title">Göcek Çiçekçi</h1>
        </div>
      </section>

      {/* ─── Giriş ────────────────────────────────────────────────────── */}
      <section className="section-shell">
        <div className="about-intro-grid">
          <div>
            <span className="section-kicker">Göcek Marine Flowers</span>
            <h2 className="section-title">
              Göcek&apos;in Çiçek Mağazası
            </h2>
          </div>
          <div className="route-copy">
            <p className="lead">
              Göcek merkezdeki mağazamızda sevdikleriniz için özel buketlerden
              ev, villa ve yat aranjmanlarına kadar her ihtiyaca uygun taze
              çiçek tasarımları hazırlıyoruz.
            </p>
            <p>
              Doğum günü hediyesinden gelin el çiçeğine, düğün
              organizasyonundan marina teslimatına kadar Göcek&apos;teki her
              özel ana eşlik ediyoruz. Mevsimin en kaliteli çiçeklerini
              özenle seçiyor, siparişlerinizi tam vaktinde hazır ediyoruz.
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a className="text-link" href="/contact">
                Bize Ulaşın <span>↗</span>
              </a>
              <a className="text-link" href="/services">
                Tüm hizmetlerimizi inceleyin <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Hizmet Öne Çıkanlar ──────────────────────────────────────── */}
      <section className="section-shell">
        <div className="section-heading">
          <div>
            <h2 className="section-title">Çiçek Hizmetlerimiz</h2>
          </div>
          <a className="text-link desktop-only" href="/services">
            Tüm Hizmetler <span>↗</span>
          </a>
        </div>

        <div className="works-grid">
          {highlights.map((item) => (
            <a className="work-item" href={item.href} key={item.title}>
              <div className="work-image image-frame">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="work-caption">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Mağazamız ────────────────────────────────────────────────── */}
      <section className="studio section-shell">
        <div className="studio-image image-frame">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="studio-img-link"
            title="Göcek Marine Flowers – Google Maps Yol Tarifi"
          >
            <img
              src="/mağaza.png"
              alt="Göcek Marine Flowers çiçek mağazası – Turgut Özal Cd. No:7, Göcek"
              width={800}
              height={600}
              loading="lazy"
            />
            <div className="studio-map-overlay-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Konum &amp; Yol Tarifi ↗</span>
            </div>
          </a>
        </div>
        <div className="studio-copy">
          <h2 className="section-title">Mağazamız</h2>
          <p>
            Göcek merkezdeki çiçek mağazamız günlük taze buketler, orkideler
            ve mevsim çiçekleriyle sizi bekliyor. Turgut Özal Cd. No:7
            adresimize uğrayabilir veya bizi arayarak siparişinizi
            hazırlatabilirsiniz.
          </p>
          <div className="studio-actions">
            <a className="text-link" href="/about">
              Hakkımızda <span>↗</span>
            </a>
            <a
              className="text-link studio-map-link"
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Haritada Yol Tarifi Al</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SSS / FAQ ────────────────────────────────────────────────── */}
      <section className="section-shell route-about">
        <div className="about-intro-grid">
          <div>
            <span className="section-kicker">Sık Sorulan Sorular</span>
            <h2 className="section-title">Göcek&apos;te Çiçek Siparişi</h2>
          </div>
          <div className="route-copy">
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <p style={{ fontWeight: 600, marginBottom: '8px' }}>{faq.question}</p>
                <p style={{ opacity: 0.75 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── İletişim CTA ─────────────────────────────────────────────── */}
      <section className="section-shell services-cta-section">
        <div className="services-cta-card">
          <p className="eyebrow">Göcek Marine Flowers</p>
          <h2 className="services-cta-title">Çiçek Siparişi Vermek İster misiniz?</h2>
          <p className="services-cta-copy">
            WhatsApp&apos;tan yazabilir veya telefonla ulaşabilirsiniz.
            Mağazamız Göcek merkezdedir — Turgut Özal Cd. No:7.
          </p>
          <div className="services-cta-buttons">
            <a
              href={`${BUSINESS.whatsapp}?text=Merhaba,%20Göcek'te%20çiçek%20siparişi%20vermek%20istiyorum.`}
              target="_blank"
              rel="noreferrer"
              className="services-cta-btn services-cta-wa"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.414 5.165 5.284-1.385c1.458.796 3.1 1.216 4.789 1.216 5.507 0 9.988-4.479 9.988-9.984 0-5.506-4.481-9.984-9.988-9.984zm5.823 14.174c-.244.688-1.432 1.313-1.986 1.369-.512.051-1.156.082-3.327-.812-2.775-1.144-4.54-3.952-4.68-4.137-.138-.184-1.121-1.492-1.121-2.846 0-1.354.708-2.02.96-2.284.244-.253.533-.316.711-.316.178 0 .356.002.511.01.164.008.386-.062.604.462.223.533.756 1.843.823 1.977.067.134.111.29.022.463-.089.174-.134.282-.267.437-.133.155-.28.347-.399.467-.133.133-.272.279-.117.546.156.267.69 1.139 1.482 1.844 1.018.907 1.876 1.189 2.143 1.323.267.133.423.111.578-.067.156-.178.667-.777.844-1.044.178-.267.356-.223.6-.133.244.089 1.556.734 1.823.867.267.133.444.2.511.311.067.111.067.644-.178 1.332z"/>
              </svg>
              <span>WhatsApp&apos;tan Sipariş Ver</span>
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="services-cta-btn services-cta-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Ara: {BUSINESS.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </RouteFrame>
  )
}
