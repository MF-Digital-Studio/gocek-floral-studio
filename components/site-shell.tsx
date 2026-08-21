'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight } from './icons'

const nav = [
  ['Hakkımızda', '/about'],
  ['Hizmetler', '/services'],
  ['Çalışmalar', '/works'],
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'has-mobile-open' : ''}`}>
      <Link className="site-logo-link" href="/" onClick={close} aria-label="Göcek Marine Flowers Ana Sayfa">
        <img className="site-logo-img" src="/logo.webp" alt="Göcek Marine Flowers Logo" />
      </Link>
      <nav className="desktop-nav" aria-label="Ana menü">
        <Link href="/">Ana Sayfa</Link>
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-contact" href="/contact">İletişime geçin <ArrowUpRight size={13} /></Link>
      <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen}><i /><i /></button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
      <p className="eyebrow">Göcek Marine Flowers · Göcek</p>
      <nav aria-label="Mobil menü">
        <Link href="/" onClick={close}>Ana Sayfa</Link>
        {nav.map(([label, href], index) => <Link style={{ transitionDelay: `${(index + 1) * 60}ms` }} key={href} href={href} onClick={close}>{label}</Link>)}
        <Link href="/contact" onClick={close}>İletişim</Link>
      </nav>
      <div className="mobile-menu-footer"><span>Muğla, Türkiye</span><a href="https://www.instagram.com/gocekmarineflowers/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12} /></a></div>
    </div>
  </>
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="site-logo-link" href="/">
        <img className="site-logo-img" src="/logo.webp" alt="Göcek Marine Flowers Logo" />
        <span className="wordmark">GÖCEK <span>Marine Flowers</span></span>
      </Link>

      <div className="footer-credit">
        Designed by{' '}
        <a href="https://www.mfdigitalstudio.com/" target="_blank" rel="noreferrer">
          MF Digital Studio
        </a>
      </div>

      <div className="footer-links">
        <Link href="/services">Hizmetler</Link>
        <Link href="/works">Çalışmalar</Link>
        <a href="https://www.instagram.com/gocekmarineflowers/" target="_blank" rel="noreferrer">
          Instagram <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  )
}

export function StickyQuickActions() {
  return (
    <div className="sticky-quick-actions" aria-label="Hızlı İletişim">
      <a
        href="tel:+905352153000"
        className="sticky-action-btn sticky-call-btn"
        aria-label="Hemen Arayın"
        title="Hemen Arayın: 0535 215 30 00"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="sticky-tooltip">Hemen Ara: 0535 215 30 00</span>
      </a>

      <a
        href="https://wa.me/905352153000"
        target="_blank"
        rel="noreferrer"
        className="sticky-action-btn sticky-wa-btn"
        aria-label="WhatsApp'tan Yazın"
        title="WhatsApp'tan Yazın"
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.414 5.165 5.284-1.385c1.458.796 3.1 1.216 4.789 1.216 5.507 0 9.988-4.479 9.988-9.984 0-5.506-4.481-9.984-9.988-9.984zm5.823 14.174c-.244.688-1.432 1.313-1.986 1.369-.512.051-1.156.082-3.327-.812-2.775-1.144-4.54-3.952-4.68-4.137-.138-.184-1.121-1.492-1.121-2.846 0-1.354.708-2.02.96-2.284.244-.253.533-.316.711-.316.178 0 .356.002.511.01.164.008.386-.062.604.462.223.533.756 1.843.823 1.977.067.134.111.29.022.463-.089.174-.134.282-.267.437-.133.155-.28.347-.399.467-.133.133-.272.279-.117.546.156.267.69 1.139 1.482 1.844 1.018.907 1.876 1.189 2.143 1.323.267.133.423.111.578-.067.156-.178.667-.777.844-1.044.178-.267.356-.223.6-.133.244.089 1.556.734 1.823.867.267.133.444.2.511.311.067.111.067.644-.178 1.332z" />
        </svg>
        <span className="sticky-tooltip">WhatsApp'tan Yazın</span>
      </a>
    </div>
  )
}

export function OrderCta() {
  return (
    <section className="section-shell services-cta-section">
      <div className="services-cta-card">
        <p className="eyebrow">Göcek Marine Flowers</p>
        <h2 className="services-cta-title">Özel Bir Sipariş veya Proje Planlayalım</h2>
        <p className="services-cta-copy">
          İster sevdikleriniz için taze bir buket, ister yatınız ya da davetiniz için konsept çiçek tasarımı olsun; bize WhatsApp&apos;tan yazabilir veya telefonla anında ulaşabilirsiniz.
        </p>
        <div className="services-cta-buttons">
          <a
            href="https://wa.me/905352153000?text=Merhaba,%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="services-cta-btn services-cta-wa"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.414 5.165 5.284-1.385c1.458.796 3.1 1.216 4.789 1.216 5.507 0 9.988-4.479 9.988-9.984 0-5.506-4.481-9.984-9.988-9.984zm5.823 14.174c-.244.688-1.432 1.313-1.986 1.369-.512.051-1.156.082-3.327-.812-2.775-1.144-4.54-3.952-4.68-4.137-.138-.184-1.121-1.492-1.121-2.846 0-1.354.708-2.02.96-2.284.244-.253.533-.316.711-.316.178 0 .356.002.511.01.164.008.386-.062.604.462.223.533.756 1.843.823 1.977.067.134.111.29.022.463-.089.174-.134.282-.267.437-.133.155-.28.347-.399.467-.133.133-.272.279-.117.546.156.267.69 1.139 1.482 1.844 1.018.907 1.876 1.189 2.143 1.323.267.133.423.111.578-.067.156-.178.667-.777.844-1.044.178-.267.356-.223.6-.133.244.089 1.556.734 1.823.867.267.133.444.2.511.311.067.111.067.644-.178 1.332z" />
            </svg>
            <span>WhatsApp ile İletişime Geçin</span>
          </a>
          <a href="tel:+905352153000" className="services-cta-btn services-cta-call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Ara: 0535 215 30 00</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.02, rootMargin: '0px 0px 120px 0px' }
    )

    const selectors = '.section-shell, .studio, .gallery, .contact, .about-photo-card, .service-detail-item, .works-card, .services-cta-section'
    const elements = document.querySelectorAll(selectors)

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // If already in or near viewport on page load, make visible immediately
      if (rect.top < window.innerHeight + 120) {
        el.classList.add('is-visible')
      } else {
        el.classList.add('reveal-on-scroll')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])
}

export function RouteFrame({ children }: { children: React.ReactNode }) {
  useScrollReveal()
  return (
    <main>
      <SiteHeader />
      {children}
      <SiteFooter />
      <StickyQuickActions />
    </main>
  )
}

export const imageSet = {
  studio: '/gocek-marine-flowers-magaza.webp',
  garden: '/flower-8.webp',
  ceremony: '/flower-1.webp',
  white: '/flower-5.webp',
}

export function PageHero({ eyebrow, title, image, alt }: { eyebrow: string; title: React.ReactNode; image?: string; alt?: string }) {
  return (
    <section className="route-hero">
      {image && (
        <img
          src={image}
          alt={alt || ''}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <div className="hero-wash" />
      <div className="route-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title">{title}</h1>
      </div>
    </section>
  )
}
