'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

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
        <img className="site-logo-img" src="/logo.png" alt="Göcek Marine Flowers Logo" />
      </Link>
      <nav className="desktop-nav" aria-label="Ana menü">
        <Link href="/">Ana Sayfa</Link>
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-contact" href="/contact">İletişime geçin <span>↗</span></Link>
      <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen}><i /><i /></button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
      <p className="eyebrow">Göcek Marine Flowers · Göcek</p>
      <nav aria-label="Mobil menü">
        <Link href="/" onClick={close}>Ana Sayfa</Link>
        {nav.map(([label, href], index) => <Link style={{ transitionDelay: `${(index + 1) * 60}ms` }} key={href} href={href} onClick={close}>{label}</Link>)}
        <Link href="/contact" onClick={close}>İletişim</Link>
      </nav>
      <div className="mobile-menu-footer"><span>Muğla, Türkiye</span><a href="https://www.instagram.com/gocekmarineflowers/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
    </div>
  </>
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="site-logo-link" href="/">
        <img className="site-logo-img" src="/logo.png" alt="Göcek Marine Flowers Logo" />
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
          Instagram ↗
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
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        <span className="sticky-tooltip">WhatsApp'tan Yazın</span>
      </a>
    </div>
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
  studio: '/mağaza.png',
  garden: '/flower-8.png',
  ceremony: '/flower-1.png',
  white: '/flower-5.png',
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
