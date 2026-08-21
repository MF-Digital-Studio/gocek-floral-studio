import type { Metadata } from 'next'
import { RouteFrame, PageHero, imageSet } from '@/components/site-shell'
import { ArrowUpRight } from '@/components/icons'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: {
    absolute: `İletişim & Konum | ${BUSINESS.name} – Göcek Çiçekçi`,
  },
  description:
    'Göcek Marine Flowers iletişim ve konum bilgileri. Turgut Özal Cd. No:7, Göcek / Muğla. Tel: 0535 215 30 00. Pazartesi–Cumartesi 09:00–18:00.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `İletişim & Konum | ${BUSINESS.name}`,
    description:
      'Göcek merkezdeki çiçek atölyemize ulaşın. Turgut Özal Cd. No:7, Göcek / Muğla. Tel: 0535 215 30 00.',
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: '/gocek-marine-flowers-magaza.webp',
        width: 1200,
        height: 630,
        alt: 'Göcek Marine Flowers çiçek mağazası – Turgut Özal Cd., Göcek',
      },
    ],
  },
}

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: SITE_URL },
    { name: 'İletişim', url: `${SITE_URL}/contact` },
  ])

  return (
    <RouteFrame>
      <script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Bize Ulaşın · Göcek"
        title={<>İletişim &amp; Konum</>}
        image={imageSet.garden}
        alt="Göcek Marine Flowers çiçek mağazası"
      />

      <section className="contact section-shell">
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
                  <p className="contact-row-text">
                    Pazartesi — Cumartesi: <strong>09:00 — 18:00</strong>
                  </p>
                </div>
                <div>
                  <span className="contact-label">Sosyal Medya</span>
                  <div style={{ marginTop: '4px' }}>
                    <a
                      href={BUSINESS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-underline-link"
                    >
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
                title="Göcek Marine Flowers Harita Konumu – Turgut Özal Cd. No:7, Göcek"
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
    </RouteFrame>
  )
}
