'use client'

import { SiteFooter, SiteHeader } from '@/components/site-shell'
import { FloralCornerTL, FloralCornerBR } from '@/components/floral-decorations'

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
  ['01', 'Özel Çiçek Buketleri', 'Doğum günleri, yıldönümleri, tebrikler ve sevdikleriniz için mağazamızda özenle hazırlanan günlük taze buketler.'],
  ['02', 'Ev & Villa Çiçekleri', 'Yaşam alanlarınıza canlılık katan vazo aranjmanları, orkide ve taze masa düzenlemeleri.'],
  ['03', 'Yat & Tekne Çiçekleri', 'Deniz konseptine uygun, uzun süre formunu ve tazeliğini koruyan özel tekne ve yat aranjmanları.'],
  ['04', 'Düğün & Davet Tasarımı', 'Kutlamalar, partiler ve özel günler için kişiye ve mekana özel konsept çiçek dekorasyonu.'],
]

const gallery = [
  '/flower-1.png',
  '/flower-3.png',
  '/flower-6.png',
  '/flower-9.png',
]

export default function Page() {
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
        <div className="section-kicker"><span>01</span><span>Hakkımızda</span></div>
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
            <div className="section-kicker"><span>02</span><span>Çalışmalarımız</span></div>
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
            <div className="section-kicker"><span>03</span><span>Hizmetler</span></div>
            <h2 className="section-title">Hizmetlerimiz</h2>
          </div>
          <p className="services-lead">Bireysel hediyelik buketlerden villa, tekne ve davet organizasyonlarına kadar mağazamızda hazırlanan taze çiçek tasarımları.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, copy]) => (
            <article className="service-row" key={title}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <img src="/flower-7.png" alt="Doğal botanik yapraklar" onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <div className="statement-overlay">
          <p className="eyebrow">Göcek Marine Flowers</p>
          <h2>Doğal ve Zamansız Çiçek Tasarımları</h2>
        </div>
      </section>

      <section className="studio section-shell">
        <div className="studio-image image-frame">
          <img src="/about.png" alt="Göcek Marine Flowers Çiçek Mağazası" onError={(e) => { e.currentTarget.style.display = 'none' }} />
        </div>
        <div className="studio-copy">
          <div className="section-kicker"><span>04</span><span>Mağazamız</span></div>
          <h2 className="section-title">Mağazamız</h2>
          <p>Göcek merkezdeki çiçek mağazamızda günlük taze buketlerden marina ve villa düzenlemelerine kadar geniş bir yelpazede hizmet veriyoruz. Bireysel hediye siparişlerinizde ve tüm özel anlarınızda en taze çiçekleri özenle hazırlıyoruz.</p>
          <a className="text-link" href="/about">Hakkımızda Detaylı Bilgi <span>↗</span></a>
        </div>
      </section>

      <section className="gallery section-shell">
        <div className="gallery-heading">
          <div>
            <div className="section-kicker"><span>05</span><span>Fotoğraflar</span></div>
            <h2 className="section-title">Galeri</h2>
          </div>
          <a className="text-link" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram'da Takip Edin <span>↗</span></a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <div className="gallery-image image-frame" key={image}>
              <img src={image} alt={`Galeri fotoğrafı ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-shell contact-inner">
          <div className="section-kicker"><span>06</span><span>Bize Ulaşın</span></div>
          <h2 className="section-title">İletişim</h2>
          <div className="contact-details">
            <div>
              <p className="eyebrow">Adres</p>
              <p>Göcek, Muğla<br />Türkiye</p>
            </div>
            <div>
              <p className="eyebrow">İletişim Bilgileri</p>
              <a href="tel:+902524000000">+90 252 400 00 00</a>
              <a href="https://wa.me/902524000000">WhatsApp ↗</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
            <div>
              <p className="eyebrow">Çalışma Saatleri</p>
              <p>Pazartesi — Cumartesi<br />09:00 — 18:00</p>
            </div>
          </div>
          <a className="contact-cta" href="mailto:info@gocekmarineflowers.com">İletişim <span>↗</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
