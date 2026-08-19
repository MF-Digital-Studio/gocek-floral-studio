'use client'

import { SiteFooter, SiteHeader } from '@/components/site-shell'

const works = [
  { title: 'Aegean Light', meta: 'Private commission · Göcek', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=88', className: 'work-large' },
  { title: 'Soft Geometry', meta: 'Space florals · 2024', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=88', className: 'work-small' },
  { title: 'The Garden Table', meta: 'Event design · Dalaman', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=88', className: 'work-small work-offset' },
  { title: 'Wild Ceremony', meta: 'Wedding flowers · Kabak', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=88', className: 'work-wide' },
]

const services = [
  ['01', 'Floral Design', 'Custom bouquets, arrangements and floral compositions shaped around a feeling, a place, or a person.'],
  ['02', 'Weddings & Events', 'Floral styling with a point of view — from intimate celebrations to days that ask for more.'],
  ['03', 'Space Florals', 'Living compositions for hotels, restaurants, villas and private spaces across the coast.'],
  ['04', 'Bespoke Design', 'A considered floral language developed specifically for your occasion, client or space.'],
]

const gallery = [
  'https://images.unsplash.com/photo-1520763185298-1b434c919abe?auto=format&fit=crop&w=900&q=88',
  'https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=900&q=88',
  'https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&w=900&q=88',
  'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=88',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=88',
]

export default function Page() {
  return (
    <main>
      <SiteHeader />

      <section id="home" className="hero">
        <img className="hero-image" src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2200&q=90" alt="Sculptural white flowers in warm natural light" />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow reveal reveal-one">Floral design studio · Göcek</p>
          <h1 className="display-title reveal reveal-two">Flowers,<br /><em>designed</em><br />as moments.</h1>
          <div className="hero-bottom reveal reveal-three"><p>Thoughtful floral work for meaningful occasions and beautiful spaces along the Aegean coast.</p><a className="circle-link" href="/works" aria-label="Explore our work">↘</a></div>
        </div>
        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>

      <section id="about" className="intro section-shell">
        <div className="section-kicker"><span>01</span><span>Our philosophy</span></div>
        <div className="intro-grid"><h2 className="section-title">Flowers are<br /><em>more than</em><br />decoration.</h2><div className="intro-copy"><p className="lead">We create floral atmospheres that stay with you.</p><p>At Lume, every stem has a role. We look to the landscape, the light and the character of a space to make arrangements that feel effortless, personal and alive.</p><a className="text-link" href="/contact">Discover the studio <span>↗</span></a></div><div className="intro-image image-frame"><img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1100&q=88" alt="Pink flowers arranged in a simple glass vase" /></div></div>
      </section>

      <section id="works" className="works section-shell">
        <div className="section-heading"><div className="section-kicker"><span>02</span><span>Selected works</span></div><h2 className="section-title">A collection of<br /><em>quiet gestures.</em></h2><a className="text-link desktop-only" href="/contact">View all works <span>↗</span></a></div>
        <div className="works-grid">{works.map((work) => <a className={`work-item ${work.className}`} href="/contact" key={work.title}><div className="work-image image-frame"><img src={work.image} alt={work.title} /></div><div className="work-caption"><h3>{work.title}</h3><p>{work.meta}</p><span>↗</span></div></a>)}</div>
      </section>

      <section id="services" className="services section-shell"><div className="section-kicker"><span>03</span><span>What we do</span></div><div className="services-top"><h2 className="section-title">Designed for<br /><em>meaningful</em><br />occasions.</h2><p>From a single considered arrangement to an entire floral world, our work begins with listening.</p></div><div className="service-list">{services.map(([number, title, copy]) => <article className="service-row" key={title}><span className="service-number">{number}</span><h3>{title}</h3><p>{copy}</p><span className="service-arrow">↗</span></article>)}</div></section>

      <section className="statement"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2200&q=88" alt="Sunlit botanical leaves" /><div className="statement-overlay"><p className="eyebrow">The Lume approach</p><h2>Thoughtfully arranged.<br /><em>Naturally unforgettable.</em></h2></div></section>

      <section className="studio section-shell"><div className="studio-image image-frame"><img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=88" alt="Floral arrangement in a sunlit studio" /></div><div className="studio-copy"><div className="section-kicker"><span>04</span><span>The studio</span></div><h2 className="section-title">A small studio<br />with a love for<br /><em>beautiful details.</em></h2><p>We are a floral design studio rooted in Göcek and inspired by the Aegean. Our practice is slow, curious and led by a deep respect for the natural character of every flower.</p><a className="text-link" href="/contact">Meet the studio <span>↗</span></a></div></section>

      <section className="image-interlude"><img src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=2200&q=88" alt="Greenery and sunlight in a Mediterranean garden" /></section>

      <section className="gallery section-shell"><div className="gallery-heading"><div><div className="section-kicker"><span>05</span><span>Notes from the studio</span></div><h2 className="section-title">From the studio,<br /><em>in moments.</em></h2></div><a className="text-link" href="https://instagram.com" target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></div><div className="gallery-grid">{gallery.map((image, index) => <div className={`gallery-image image-frame gallery-${index + 1}`} key={image}><img src={image} alt={`Floral detail from the studio ${index + 1}`} /></div>)}</div></section>

      <section id="contact" className="contact"><div className="section-shell contact-inner"><div className="section-kicker"><span>06</span><span>Say hello</span></div><h2 className="section-title">Let&apos;s create<br /><em>something beautiful.</em></h2><div className="contact-details"><div><p className="eyebrow">Visit</p><p>Göcek, Muğla<br />Turkey</p></div><div><p className="eyebrow">Connect</p><a href="tel:+902524000000">+90 252 400 00 00</a><a href="https://wa.me/902524000000">WhatsApp ↗</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div><div><p className="eyebrow">Hours</p><p>Monday — Saturday<br />09:00 — 18:00</p></div></div><a className="contact-cta" href="mailto:hello@lumefloral.com">Get in touch <span>↗</span></a></div></section>

      <SiteFooter />
    </main>
  )
}
