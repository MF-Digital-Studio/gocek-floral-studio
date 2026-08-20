'use client'

import { SiteFooter, SiteHeader, StickyQuickActions, useScrollReveal } from '@/components/site-shell'
import { FloralCornerTL, FloralCornerBR } from '@/components/floral-decorations'
import { ServicesSpotlight } from '@/components/services-spotlight'

const works = [
  { title: 'Gül & Bahçe Buketi', meta: 'Renkli Kır Buketi · Göcek', image: '/flower-1.png' },
  { title: 'Lilyum & Gerbera Aranjmanı', meta: 'Masa & Mekan Çiçeği · Göcek', image: '/flower-2.png' },
  { title: 'Pembe Ortanca Buketi', meta: 'Taze Ortanca · Göcek', image: '/flower-3.png' },
  { title: 'Kırmızı Gül Buketi', meta: 'Özel Sipariş · Göcek', image: '/flower-4.png' },
  { title: 'Orkide & Gerbera Vazo Tasarımı', meta: 'Vazo Aranjmanı · Göcek', image: '/flower-5.png' },
  { title: 'Şakayık Sepet Aranjmanı', meta: 'Özel Gün Tasarımı · Göcek', image: '/flower-6.png' },
  { title: 'Özel Saksı Orkide Aranjmanı', meta: 'Botanik Mekan Tasarımı · Göcek', image: '/flower-7.png' },
  { title: 'Taze Şakayık Buketi', meta: 'Mevsim Çiçekleri · Göcek', image: '/flower-8.png' },
  { title: 'Antoryum & Gül Buketi', meta: 'Egzotik Buket · Göcek', image: '/flower-9.png' },
  { title: 'Beyaz Gül & Antoryum Buketi', meta: 'Özel Tasarım · Göcek', image: '/flower-10.png' },
  { title: 'Mor Orkide & Sukulent Buketi', meta: 'Özel Tasarım · Göcek', image: '/flower-11.png' },
  { title: 'Beyaz Şakayık & Bambu Aranjmanı', meta: 'Masa & Vazo Tasarımı · Göcek', image: '/flower-12.png' },
]

const services = [
  {
    number: '01',
    title: 'Özel Çiçek Buketleri',
    desc: 'Doğum günleri, yıldönümleri, tebrikler ve sevdikleriniz için mağazamızda özenle hazırlanan günlük taze buketler.',
    image: '/flower-1.png',
    tag: 'Taze Buket',
  },
  {
    number: '02',
    title: 'Gelin El Çiçeği',
    desc: 'En özel gününüz için tarzınıza ve konseptinize uygun özenle tasarlanan taze gelin buketleri ve yaka çiçekleri.',
    image: '/service-bridal.jpg',
    tag: 'Düğün & Gelin',
  },
  {
    number: '03',
    title: 'Ev & Villa Çiçekleri',
    desc: 'Yaşam alanlarınıza canlılık katan vazo aranjmanları, orkide ve taze masa düzenlemeleri.',
    image: '/flower-5.png',
    tag: 'Mekan & Dekor',
  },
  {
    number: '04',
    title: 'Yat & Tekne Çiçekleri',
    desc: 'Deniz konseptine uygun, uzun süre formunu ve tazeliğini koruyan özel tekne ve yat aranjmanları.',
    image: '/flower-9.png',
    tag: 'Marina & Yat',
  },
  {
    number: '05',
    title: 'Düğün & Davet Tasarımı',
    desc: 'Kutlamalar, partiler ve özel günler için kişiye ve mekana özel konsept çiçek dekorasyonu.',
    image: '/flower-6.png',
    tag: 'Organizasyon',
  },
  {
    number: '06',
    title: 'Gelin Arabası Süsleme',
    desc: 'Düğün ve özel günleriniz için şık, estetik ve mevsime uygun taze çiçeklerle araç süsleme hizmeti.',
    image: '/service-car.jpg',
    tag: 'Araç Süsleme',
  },
  {
    number: '07',
    title: 'Helyum Gazlı Balon',
    desc: 'Kutlama, doğum günü ve özel sürprizler için renkli ve kaliteli helyum gazlı balon tasarımları.',
    image: '/service-balloon.jpg',
    tag: 'Balon & Sürpriz',
  },
]

const gallery = [
  '/flower-1.png',
  '/flower-3.png',
  '/flower-6.png',
  '/flower-9.png',
]

export default function Page() {
  useScrollReveal()
  return (
    <main>
      <SiteHeader />

      <section id="home" className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
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
            <p>Sevdikleriniz için özel hediye buketlerinden ev, villa ve tekneler için özenle hazırlanan taze çiçek tasarımları.</p>
            <a className="circle-link" href="/works" aria-label="Koleksiyonu inceleyin">↘</a>
          </div>
        </div>
      </section>

      <section id="about" className="intro section-shell">
        <FloralCornerTL />
        <FloralCornerBR />
        <div className="intro-grid">
          <div className="intro-copy">
            <h2 className="section-title">Hakkımızda</h2>
            <p className="lead">Göcek merkezdeki mağazamızda sevdikleriniz için özel buketler ve mekana uygun taze çiçek tasarımları hazırlıyoruz.</p>
            <p>Göcek Marine Flowers olarak; doğum günü, kutlama ve yıldönümü gibi özel anlar için şık hediye buketlerinden eviniz, tekneniz ya da davetleriniz için taze çiçeklere kadar her zevke ve ihtiyaca uygun aranjmanlar tasarlıyoruz.</p>
            <p>Her siparişte mevsimin en taze ve kaliteli çiçeklerini özenle seçiyor, siparişlerinizi Göcek merkezdeki mağazamızda tam vaktinde hazır ediyoruz.</p>
            <a className="text-link" href="/contact">Bize Ulaşın <span>↗</span></a>
          </div>
          <div className="intro-image image-frame">
            <img src="/about.png" alt="Göcek Marine Flowers" />
          </div>
        </div>
      </section>

      <section id="works" className="works section-shell">
        <div className="section-heading">
          <div>
            <h2 className="section-title">Koleksiyon</h2>
          </div>
          <a className="text-link desktop-only" href="/works">Tüm Çalışmalar <span>↗</span></a>
        </div>
        <div className="works-grid">
          {works.slice(0, 8).map((work) => (
            <a className="work-item" href="/works" key={work.title}>
              <div className="work-image image-frame">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="work-caption">
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.meta}</p>
                </div>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="works-bottom-action" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a className="text-link" href="/works">Tüm Koleksiyonu İncele (12) <span>↗</span></a>
        </div>
      </section>

      <section id="services" className="services section-shell">
        <div className="services-top">
          <div>
            <h2 className="section-title">Hizmetlerimiz</h2>
          </div>
          <p className="services-lead">Bireysel hediyelik buketlerden villa, tekne ve davet organizasyonlarına kadar mağazamızda hazırlanan taze çiçek tasarımları.</p>
        </div>
        <ServicesSpotlight />
      </section>

      <section className="statement">
        <video
          className="statement-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
            href="https://www.google.com/maps/dir//G%C3%B6cek,+Turgut+%C3%96zal+Cd.+No:7,+48310+Fethiye%2FMu%C4%9Fla"
            target="_blank"
            rel="noreferrer"
            className="studio-img-link"
            title="Google Maps'te Yol Tarifi Al"
          >
            <img src="/mağaza.png" alt="Göcek Marine Flowers Çiçek Mağazası" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <div className="studio-map-overlay-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Konum & Yol Tarifi ↗</span>
            </div>
          </a>
        </div>
        <div className="studio-copy">
          <h2 className="section-title">Mağazamız</h2>
          <p>Göcek merkezdeki çiçek mağazamızda günlük taze buketlerden marina ve villa düzenlemelerine kadar geniş bir yelpazede hizmet veriyoruz. Bireysel hediye siparişlerinizde ve tüm özel anlarınızda en taze çiçekleri özenle hazırlıyoruz.</p>
          <div className="studio-actions">
            <a className="text-link" href="/about">Hakkımızda Detaylı Bilgi <span>↗</span></a>
            <a
              className="text-link studio-map-link"
              href="https://www.google.com/maps/dir//G%C3%B6cek,+Turgut+%C3%96zal+Cd.+No:7,+48310+Fethiye%2FMu%C4%9Fla"
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
            <span>Instagram'da Takip Edin</span>
            <span>↗</span>
          </a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <div className="gallery-image image-frame" key={image}>
              <img src={image} alt={`Galeri fotoğrafı ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="contact-container">
          <div className="contact-info-side">
            <span className="section-kicker">Göcek · Muğla</span>
            <h2 className="section-title">İletişim & Konum</h2>
            <p className="contact-lead">
              Göcek merkezdeki çiçek atölyemize bekleriz. Taze çiçek siparişi, villa & tekne düzenlemeleri için doğrudan arayabilir veya WhatsApp'tan yazabilirsiniz.
            </p>

            <div className="contact-editorial-list">
              {/* Phone Hero Row */}
              <div className="contact-editorial-row">
                <span className="contact-label">Hızlı Sipariş & İletişim</span>
                <div className="contact-phone-group">
                  <a href="tel:+905352153000" className="contact-display-number">
                    0535 215 30 00
                  </a>
                  <div className="contact-action-pills">
                    <a href="tel:+905352153000" className="contact-pill contact-pill-call">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>Hemen Ara</span>
                    </a>
                    <a href="https://wa.me/905352153000" target="_blank" rel="noreferrer" className="contact-pill contact-pill-wa">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                      <span>WhatsApp ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Row */}
              <div className="contact-editorial-row">
                <span className="contact-label">Atölye Adresi</span>
                <div className="contact-address-block">
                  <p className="contact-address-text">
                    Göcek, Turgut Özal Cd. No:7, 48310 Fethiye / Muğla
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//G%C3%B6cek,+Turgut+%C3%96zal+Cd.+No:7,+48310+Fethiye%2FMu%C4%9Fla"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-underline-link"
                  >
                    Google Maps Yol Tarifi <span>↗</span>
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
                    <a href="https://www.instagram.com/gocekmarineflowers/" target="_blank" rel="noreferrer" className="contact-underline-link">
                      Instagram @gocekmarineflowers <span>↗</span>
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
