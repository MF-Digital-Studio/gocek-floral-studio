import type { Metadata } from 'next'
import { OrderCta, PageHero, RouteFrame, imageSet } from '@/components/site-shell'
import { ArrowUpRight } from '@/components/icons'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: `Hakkımızda – ${BUSINESS.name} | Göcek Çiçekçi`,
  description:
    'Göcek Marine Flowers hakkında bilgi edinin. Göcek merkezdeki çiçek mağazamızda bireysel hediye siparişlerinden tekne ve villa düzenlemelerine kadar hizmet veriyoruz.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `Hakkımızda | ${BUSINESS.name}`,
    description:
      'Göcek\'te taze çiçek mağazası. Buket, gelin çiçeği, villa, yat ve düğün organizasyonu için özenli hizmet.',
    url: `${SITE_URL}/about`,
    images: [
      {
        url: '/about.png',
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} – Göcek Çiçek Mağazası`,
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <RouteFrame>
      <PageHero
        eyebrow="Göcek Marine Flowers · Göcek"
        title={<>Hakkımızda</>}
        image={imageSet.garden}
        alt="Göcek Marine Flowers çiçek mağazası bahçesi"
      />

      {/* Main Intro Narrative Section */}
      <section className="section-shell route-about">
        <div className="about-intro-grid">
          <div>
            <span className="section-kicker">Mağazamız Hakkında</span>
            <h2 className="section-title">
              Göcek&apos;te Taze ve Özenli Çiçek Tasarımları
            </h2>
          </div>
          <div className="route-copy">
            <p className="lead">
              Göcek merkezdeki çiçek mağazamızda sevdikleriniz, eviniz,
              villanız veya tekneniz için her gün taze çiçek tasarımları
              hazırlıyoruz.
            </p>
            <p>
              Göcek Marine Flowers olarak, bireysel hediye siparişlerinden
              tekne ve villa masa düzenlemelerine, özel gün ve etkinlik
              süslemelerine kadar geniş bir yelpazede hizmet veriyoruz.
            </p>
            <p>
              İster özel bir gün için taze bir buket, ister davetleriniz için
              masa dekorasyonu olsun; mevsime uygun en kaliteli taze
              çiçeklerle isteğinize ve zevkinize göre özenle hazırlıyoruz.
            </p>
            <a className="text-link" href="/gocek-cicekci" style={{ marginTop: '8px', display: 'inline-block' }}>
              Göcek&apos;teki çiçek seçeneklerimizi keşfedin <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Side-by-Side Photos Section: Founder & Store */}
      <section className="about-photos-section">
        <div className="about-photos-grid">
          <div className="about-photo-card">
            <img
              src="/hakkımızda_firma_sahibi.png"
              alt="Göcek Marine Flowers çiçekçi – Göcek'teki mağazamızdan"
              className="about-photo-img"
              width={600}
              height={750}
              loading="lazy"
            />
          </div>
          <div className="about-photo-card">
            <img
              src="/mağaza.png"
              alt="Göcek Marine Flowers çiçek mağazası – Turgut Özal Cd., Göcek"
              className="about-photo-img"
              width={600}
              height={750}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <OrderCta />
    </RouteFrame>
  )
}
