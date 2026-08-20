import { OrderCta, RouteFrame, PageHero, imageSet } from '@/components/site-shell'

const works = [
  ['Gül & Bahçe Buketi', 'Renkli Kır Buketi · Göcek', '/flower-1.png'],
  ['Lilyum & Gerbera Aranjmanı', 'Masa & Mekan Çiçeği · Göcek', '/flower-2.png'],
  ['Pembe Ortanca Buketi', 'Taze Ortanca · Göcek', '/flower-3.png'],
  ['Kırmızı Gül Buketi', 'Özel Sipariş · Göcek', '/flower-4.png'],
  ['Orkide & Gerbera Vazo Tasarımı', 'Vazo Aranjmanı · Göcek', '/flower-5.png'],
  ['Şakayık Sepet Aranjmanı', 'Özel Gün Tasarımı · Göcek', '/flower-6.png'],
  ['Özel Saksı Orkide Aranjmanı', 'Botanik Mekan Tasarımı · Göcek', '/flower-7.png'],
  ['Taze Şakayık Buketi', 'Mevsim Çiçekleri · Göcek', '/flower-8.png'],
  ['Antoryum & Gül Buketi', 'Egzotik Buket · Göcek', '/flower-9.png'],
  ['Beyaz Gül & Antoryum Buketi', 'Özel Tasarım · Göcek', '/flower-10.png'],
  ['Mor Orkide & Sukulent Buketi', 'Özel Tasarım · Göcek', '/flower-11.png'],
  ['Beyaz Şakayık & Bambu Aranjmanı', 'Masa & Vazo Tasarımı · Göcek', '/flower-12.png'],
]

export default function WorksPage() {
  return (
    <RouteFrame>
      <PageHero eyebrow="Seçili Çalışmalar · Göcek" title={<>Koleksiyon</>} image={imageSet.ceremony} alt="Çiçekli tören enstalasyonu" />
      <section className="section-shell route-works">
        <div className="route-intro">
          <p className="eyebrow">Seçili Projeler</p>
          <p>Ortamın karakterine göre şekillenen aranjmanlar, özel davetler ve botanik mekan tasarımları.</p>
        </div>
        <div className="works-grid">
          {works.map(([title, meta, image]) => (
            <a className="work-item" href="/contact" key={title}>
              <div className="work-image image-frame">
                <img src={image} alt={title} />
              </div>
              <div className="work-caption">
                <div>
                  <h3>{title}</h3>
                  <p>{meta}</p>
                </div>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <OrderCta />
    </RouteFrame>
  )
}
