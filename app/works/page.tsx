import type { Metadata } from 'next'
import { OrderCta, RouteFrame, PageHero, imageSet } from '@/components/site-shell'
import { ArrowUpRight } from '@/components/icons'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'
import { buildBreadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: {
    absolute: `Çiçek Koleksiyonu & Tasarımlar | ${BUSINESS.name}`,
  },
  description:
    'Göcek Marine Flowers çiçek koleksiyonu. Gül buketleri, orkide aranjmanları, şakayık, ortanca ve egzotik çiçek tasarımları. Göcek, Muğla.',
  alternates: {
    canonical: `${SITE_URL}/works`,
  },
  openGraph: {
    title: `Çiçek Koleksiyonu | ${BUSINESS.name}`,
    description:
      'Göcek\'te hazırlanan gül, orkide, şakayık ve egzotik çiçek tasarımları koleksiyonu.',
    url: `${SITE_URL}/works`,
    images: [
      {
        url: '/flower-1.webp',
        width: 1200,
        height: 630,
        alt: 'Göcek Marine Flowers çiçek koleksiyonu',
      },
    ],
  },
}

const works: Array<{ title: string; meta: string; image: string; alt: string }> = [
  { title: 'Gül & Bahçe Buketi', meta: 'Renkli Kır Buketi · Göcek', image: '/flower-1.webp', alt: 'Göcek\'te hazırlanan renkli gül ve kır çiçeği buketi' },
  { title: 'Lilyum & Gerbera Aranjmanı', meta: 'Masa & Mekan Çiçeği · Göcek', image: '/flower-2.webp', alt: 'Göcek için lilyum ve gerbera masa aranjmanı' },
  { title: 'Pembe Ortanca Buketi', meta: 'Taze Ortanca · Göcek', image: '/flower-3.webp', alt: 'Taze pembe ortanca buketi – Göcek çiçekçi' },
  { title: 'Kırmızı Gül Buketi', meta: 'Özel Sipariş · Göcek', image: '/flower-4.webp', alt: 'Kırmızı gül buketi özel sipariş – Göcek' },
  { title: 'Orkide & Gerbera Vazo Tasarımı', meta: 'Vazo Aranjmanı · Göcek', image: '/flower-5.webp', alt: 'Orkide ve gerbera vazo aranjmanı – Göcek Marine Flowers' },
  { title: 'Şakayık Sepet Aranjmanı', meta: 'Özel Gün Tasarımı · Göcek', image: '/flower-6.webp', alt: 'Şakayık sepet aranjmanı – özel gün çiçeği Göcek' },
  { title: 'Özel Saksı Orkide Aranjmanı', meta: 'Botanik Mekan Tasarımı · Göcek', image: '/flower-7.webp', alt: 'Villa ve mekan için saksı orkide aranjmanı – Göcek' },
  { title: 'Taze Şakayık Buketi', meta: 'Mevsim Çiçekleri · Göcek', image: '/flower-8.webp', alt: 'Mevsim taze şakayık buketi – Göcek çiçekçi' },
  { title: 'Antoryum & Gül Buketi', meta: 'Egzotik Buket · Göcek', image: '/flower-9.webp', alt: 'Antoryum ve gül egzotik buketi – Göcek Marine Flowers' },
  { title: 'Beyaz Gül & Antoryum Buketi', meta: 'Özel Tasarım · Göcek', image: '/flower-10.webp', alt: 'Beyaz gül ve antoryum özel tasarım buketi – Göcek' },
  { title: 'Mor Orkide & Sukulent Buketi', meta: 'Özel Tasarım · Göcek', image: '/flower-11.webp', alt: 'Mor orkide ve sukulent buketi – özel tasarım' },
  { title: 'Beyaz Şakayık & Bambu Aranjmanı', meta: 'Masa & Vazo Tasarımı · Göcek', image: '/flower-12.webp', alt: 'Beyaz şakayık ve bambu vazo masa aranjmanı – Göcek' },
]

export default function WorksPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: SITE_URL },
    { name: 'Koleksiyon', url: `${SITE_URL}/works` },
  ])

  return (
    <RouteFrame>
      <script
        id="schema-breadcrumb-works"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Seçili Çalışmalar · Göcek"
        title={<>Koleksiyon</>}
        image={imageSet.ceremony}
        alt="Göcek'te özenle hazırlanmış çiçek aranjmanları"
      />

      <section className="section-shell route-works">
        <div className="route-intro">
          <div>
            <p className="eyebrow">Seçili Projeler</p>
            <h2 className="section-title">Özel Çiçek Koleksiyonumuz</h2>
          </div>
          <p>
            Ortamın karakterine göre şekillenen aranjmanlar, özel davetler ve
            botanik mekan tasarımları.
          </p>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <a className="work-item" href="/contact" key={work.title}>
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
        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <a className="text-link" href="/services">
            Hizmet Detaylarını İnceleyin <ArrowUpRight size={13} />
          </a>
          <a className="text-link" href="/contact">
            Bize Ulaşın &amp; Sipariş Verin <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
      <OrderCta />
    </RouteFrame>
  )
}
