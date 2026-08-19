'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const nav = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Works', '/works'],
  ['Contact', '/contact'],
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
      <Link className="wordmark" href="/" onClick={close}>LUME <span>Floral Studio</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-contact" href="/contact">Start a conversation <span>↗</span></Link>
      <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><i /><i /></button>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
      <p className="eyebrow">Floral design studio · Göcek</p>
      <nav aria-label="Mobile navigation"><Link href="/" onClick={close}>Home</Link>{nav.map(([label, href], index) => <Link style={{ transitionDelay: `${(index + 1) * 60}ms` }} key={href} href={href} onClick={close}>{label}</Link>)}</nav>
      <div className="mobile-menu-footer"><span>Muğla, Turkey</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
    </div>
  </>
}

export function SiteFooter() {
  return <footer><Link className="wordmark" href="/">LUME <span>Floral Studio</span></Link><p>Flowers, designed as moments.</p><div><Link href="/services">Services</Link><Link href="/works">Works</Link><Link href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</Link></div><small>© {new Date().getFullYear()} Lume Floral Studio · Göcek, Turkey</small></footer>
}

export function RouteFrame({ children }: { children: React.ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>
}

export const imageSet = {
  studio: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=88',
  garden: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1800&q=88',
  ceremony: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=88',
  white: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=88',
}

export function PageHero({ eyebrow, title, image, alt }: { eyebrow: string; title: React.ReactNode; image: string; alt: string }) {
  return <section className="route-hero"><img src={image} alt={alt} /><div className="hero-wash" /><div className="route-hero-content"><p className="eyebrow">{eyebrow}</p><h1 className="display-title">{title}</h1></div></section>
}
