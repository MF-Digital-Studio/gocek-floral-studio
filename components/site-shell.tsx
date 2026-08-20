'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const nav = [
  ['Hakkımızda', '/about'],
  ['Hizmetler', '/services'],
  ['Çalışmalar', '/works'],
  ['İletişim', '/contact'],
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
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
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
      <nav aria-label="Mobil menü"><Link href="/" onClick={close}>Ana Sayfa</Link>{nav.map(([label, href], index) => <Link style={{ transitionDelay: `${(index + 1) * 60}ms` }} key={href} href={href} onClick={close}>{label}</Link>)}</nav>
      <div className="mobile-menu-footer"><span>Muğla, Türkiye</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
    </div>
  </>
}

export function SiteFooter() {
  return <footer>
    <Link className="site-logo-link" href="/">
      <img className="site-logo-img" src="/logo.png" alt="Göcek Marine Flowers Logo" />
      <span className="wordmark">GÖCEK <span>Marine Flowers</span></span>
    </Link>
    <p>Doğal ve zamansız marin çiçek tasarımları.</p>
    <div><Link href="/services">Hizmetler</Link><Link href="/works">Çalışmalar</Link><Link href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</Link></div>
    <small>© {new Date().getFullYear()} Göcek Marine Flowers · Göcek, Türkiye</small>
  </footer>
}

export function RouteFrame({ children }: { children: React.ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>
}

export const imageSet = {
  studio: '/about.png',
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
