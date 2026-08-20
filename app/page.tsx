import type { Metadata } from 'next'
import { SiteFooter, SiteHeader, StickyQuickActions } from '@/components/site-shell'
import { FloralCornerTL, FloralCornerBR } from '@/components/floral-decorations'
import { ServicesSpotlight } from '@/components/services-spotlight'
import { HomeScrollReveal } from '@/components/home-client'
import { ArrowUpRight, ArrowDownRight } from '@/components/icons'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'
import { buildLocalBusinessSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: {
    absolute: `Göcek Çiçekçi | ${BUSINESS.name} – Göcek Çiçek & Çiçek Siparişi`,
  },
  description:
    'Göcek\'te taze buket, gelin çiçeği, villa, yat ve düğün çiçek tasarımları. Göcek Marine Flowers – Turgut Özal Cd. No:7, Göcek / Muğla.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Göcek Çiçekçi | ${BUSINESS.name}`,
    description:
      'Göcek\'te özel günler, kutlamalar ve sevdikleriniz için özenle hazırlanan taze çiçek ve aranjmanlar.',
    url: SITE_URL,
    images: [
      {
        url: '/about.png',
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} – Göcek Çiçekçi`,
      },
    ],
  },
}

const works = [
  { title: 'Gül & Bahçe Buketi', meta: 'Renkli Kır Buketi · Göcek', image: '/flower-1.png', alt: 'Göcek\'te hazırlanan renkli gül ve kır çiçeği buketi' },
  { title: 'Lilyum & Gerbera Aranjmanı', meta: 'Masa & Mekan Çiçeği · Göcek', image: '/flower-2.png', alt: 'Göcek için lilyum ve gerbera masa aranjmanı' },
  { title: 'Pembe Ortanca Buketi', meta: 'Taze Ortanca · Göcek', image: '/flower-3.png', alt: 'Taze pembe ortanca buketi' },
  { title: 'Kırmızı Gül Buketi', meta: 'Özel Sipariş · Göcek', image: '/flower-4.png', alt: 'Özel sipariş kırmızı gül buketi – Göcek' },
  { title: 'Orkide & Gerbera Vazo Tasarımı', meta: 'Vazo Aranjmanı · Göcek', image: '/flower-5.png', alt: 'Orkide ve gerbera vazo aranjmanı' },
  { title: 'Şakayık Sepet Aranjmanı', meta: 'Özel Gün Tasarımı · Göcek', image: '/flower-6.png', alt: 'Özel gün için şakayık sepet aranjmanı' },
  { title: 'Özel Saksı Orkide Aranjmanı', meta: 'Botanik Mekan Tasarımı · Göcek', image: '/flower-7.png', alt: 'Villa ve mekan için saksı orkide aranjmanı – Göcek' },
  { title: 'Taze Şakayık Buketi', meta: 'Mevsim Çiçekleri · Göcek', image: '/flower-8.png', alt: 'Mevsim taze şakayık buketi – Göcek Marine Flowers' },
]

const gallery = [
  { src: '/flower-1.png', alt: 'Göcek\'te hazırlanan renkli çiçek buketi' },
  { src: '/flower-3.png', alt: 'Pembe ortanca buketi – Göcek çiçekçi' },
  { src: '/flower-6.png', alt: 'Şakayık sepet aranjmanı – özel gün tasarımı' },
  { src: '/flower-9.png', alt: 'Antoryum ve gül buketi – Göcek Marine Flowers' },
]

export default function Page() {
  const localBusinessSchema = buildLocalBusinessSchema()

  return (
    <main>
      {/* LocalBusiness JSON-LD */}
      <script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Client side-effect: scroll reveal */}
      <HomeScrollReveal />

      <SiteHeader />

      <section id="home" className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow reveal reveal-one">Çiçek Tasarımı · Göcek</p>
          <h1 className="display-title reveal reveal-two">
            <span className="title-brand">Göcek</span>
            <span className="title-sub">Marine Flowers</span>
          </h1>
          <div className="hero-bottom reveal reveal-three">
            <p>
              Göcek&apos;te özel günler, kutlamalar ve sevdikleriniz için
              özenle hazırlanan taze çiçek ve aranjmanlar.
            </p>
            <a className="circle-link" href="/works" aria-label="Koleksiyonu inceleyin">
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="intro section-shell">
        <FloralCornerTL />
        <FloralCornerBR />
        <div className="intro-grid">
          <div className="intro-copy">
            <h2 className="section-title">Hakkımızda</h2>
            <p className="lead">
              Göcek merkezdeki mağazamızda sevdikleriniz için özel buketler
              ve mekana uygun taze çiçek tasarımları hazırlıyoruz.
            </p>
            <p>
              Göcek Marine Flowers olarak; doğum günü, kutlama ve yıldönümü
              gibi özel anlar için şık hediye buketlerinden eviniz, tekneniz
              ya da davetleriniz için taze çiçeklere kadar her zevke ve
              ihtiyaca uygun aranjmanlar tasarlıyoruz.
            </p>
            <p>
              Her siparişte mevsimin en taze ve kaliteli çiçeklerini özenle
              seçiyor, siparişlerinizi Göcek merkezdeki mağazamızda tam
              vaktinde hazır ediyoruz.
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a className="text-link" href="/contact">Bize Ulaşın <ArrowUpRight size={13} /></a>
              <a className="text-link" href="/services">Tüm Hizmetlerimizi İnceleyin <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="intro-image image-frame">
            <img
              src="/about.png"
              alt="Göcek Marine Flowers çiçek mağazası – Göcek, Muğla"
              width={600}
              height={750}
            />
          </div>
        </div>
      </section>

      <section id="works" className="works section-shell">
        <div className="section-heading">
          <div>
            <h2 className="section-title">Koleksiyon</h2>
          </div>
          <a className="text-link desktop-only" href="/works">Tüm Çalışmalar <ArrowUpRight size={13} /></a>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <a className="work-item" href="/works" key={work.title}>
              <div className="work-image image-frame">
                <img
                  src={work.image}
                  alt={work.alt}
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="work-caption">
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.meta}</p>
                </div>
                <ArrowUpRight size={14} />
              </div>
            </a>
          ))}
        </div>
        <div className="works-bottom-action" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a className="text-link" href="/works">Tüm Koleksiyonu İncele (12) <ArrowUpRight size={13} /></a>
        </div>
      </section>

      <section id="services" className="services section-shell">
        <div className="services-top">
          <div>
            <h2 className="section-title">Hizmetlerimiz</h2>
          </div>
          <p className="services-lead">
            Bireysel hediyelik buketlerden villa, tekne ve davet
            organizasyonlarına kadar mağazamızda hazırlanan taze çiçek
            tasarımları.
          </p>
        </div>
        <ServicesSpotlight />
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a className="text-link" href="/services">
            Tüm hizmetlerimizi inceleyin <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <section className="statement">
        <video
          className="statement-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/gocek-marine-flowers-magaza.png"
        >
          <source src="/dar_section_video.mp4" type="video/mp4" />
        </video>
        <div className="statement-overlay">
          <p className="eyebrow">Göcek Marine Flowers</p>
          <h2>Doğal ve Zamansız Çiçek Tasarımları</h2>
        </div>
      </section>

      <section className="studio section-shell">
        <div className="studio-image image-frame">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="studio-img-link"
            title="Google Maps'te Yol Tarifi Al – Göcek Marine Flowers"
          >
            <img
              src="/gocek-marine-flowers-magaza.png"
              alt="Göcek Marine Flowers çiçek mağazası – Turgut Özal Cd., Göcek"
              width={800}
              height={600}
              loading="lazy"
            />
            <div className="studio-map-overlay-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Konum &amp; Yol Tarifi</span>
              <ArrowUpRight size={13} />
            </div>
          </a>
        </div>
        <div className="studio-copy">
          <h2 className="section-title">Mağazamız</h2>
          <p>
            Göcek merkezdeki çiçek mağazamızda günlük taze buketlerden marina
            ve villa düzenlemelerine kadar geniş bir yelpazede hizmet
            veriyoruz. Bireysel hediye siparişlerinizde ve tüm özel
            anlarınızda en taze çiçekleri özenle hazırlıyoruz.
          </p>
          <div className="studio-actions">
            <a className="text-link" href="/about">Hakkımızda Detaylı Bilgi <ArrowUpRight size={13} /></a>
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
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      <section className="gallery section-shell">
        <div className="gallery-heading">
          <div>
            <h2 className="section-title">Galeri</h2>
          </div>
          <a className="text-link" href="https://www.instagram.com/gocekmarineflowers/" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="instagram-icon">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram&apos;da Takip Edin</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-image image-frame" key={item.src}>
              <img
                src={item.src}
                alt={item.alt}
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="contact-container">
          <div className="contact-info-side">
            <span className="section-kicker">Göcek · Muğla</span>
            <h2 className="section-title">İletişim &amp; Konum</h2>
            <p className="contact-lead">
              Göcek merkezdeki çiçek atölyemize bekleriz. Taze çiçek siparişi,
              villa &amp; tekne düzenlemeleri için doğrudan arayabilir veya
              WhatsApp&apos;tan yazabilirsiniz.
            </p>

            <div className="contact-editorial-list">
              {/* Phone Hero Row */}
              <div className="contact-editorial-row">
                <span className="contact-label">Hızlı Sipariş &amp; İletişim</span>
                <div className="contact-phone-group">
                  <a href={`tel:${BUSINESS.phone}`} className="contact-display-number">
                    {BUSINESS.phoneFormatted}
                  </a>
                  <div className="contact-action-pills">
                    <a href={`tel:${BUSINESS.phone}`} className="contact-pill contact-pill-call">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>Hemen Ara</span>
                    </a>
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="contact-pill contact-pill-wa">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                      <span>WhatsApp</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Row */}
              <div className="contact-editorial-row">
                <span className="contact-label">Atölye Adresi</span>
                <div className="contact-address-block">
                  <p className="contact-address-text">
                    {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city} / {BUSINESS.region}
                  </p>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-underline-link"
                  >
                    Google Maps Yol Tarifi <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Hours & Social Row */}
              <div className="contact-editorial-row contact-split-row">
                <div>
                  <span className="contact-label">Çalışma Saatleri</span>
                  <p className="contact-row-text">Pazartesi — Cumartesi: <strong>09:00 — 18:00</strong></p>
                </div>
                <div>
                  <span className="contact-label">Sosyal Medya</span>
                  <div style={{ marginTop: '4px' }}>
                    <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="contact-underline-link">
                      Instagram @gocekmarineflowers <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map-side">
            <div className="contact-map-wrapper">
              <iframe
                title="Göcek Marine Flowers Harita Konumu"
                src="https://maps.google.com/maps?q=G%C3%B6cek,+Turgut+%C3%96zal+Cd.+No:7,+48310+Fethiye/Mu%C4%9Fla&t=&z=16&ie=UTF-8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-badge">
                <span className="contact-map-pin">📍</span>
                <div>
                  <strong>Göcek Marine Flowers</strong>
                  <small>Turgut Özal Cd. No:7, Göcek</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyQuickActions />
    </main>
  )
}
