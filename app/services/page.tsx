import { RouteFrame, PageHero, imageSet } from '@/components/site-shell'

const services = [
  ['01', 'Özel Çiçek Buketleri', 'Doğum günleri, yıldönümleri, tebrikler ve sevdikleriniz için özenle hazırlanan günlük taze buketler.'],
  ['02', 'Ev & Villa Çiçekleri', 'Yaşam alanlarınıza ferahlık katan vazo aranjmanları, orkide ve taze masa düzenlemeleri.'],
  ['03', 'Yat & Tekne Servisi', 'Göcek marinalarına doğrudan teslim edilen, uzun süre formunu koruyan deniz konseptli çiçekler.'],
  ['04', 'Düğün & Davet Tasarımı', 'Kutlamalar, partiler ve özel günler için kişiye ve mekana özel konsept çiçek dekorasyonu.'],
]

export default function ServicesPage() { return <RouteFrame><PageHero eyebrow="Çiçek Hizmetleri · Göcek" title={<>Hizmetlerimiz</>} image={imageSet.white} alt="Sıcak doğal ışıkta beyaz çiçekler" /><section className="services section-shell route-services"><div className="services-top"><div><p className="eyebrow">Çiçek Çözümlerimiz</p><h2 className="section-title">Hizmetlerimiz</h2></div><p>Bireysel hediyelik buketlerden tekne, villa ve davet organizasyonlarına kadar geniş çiçek hizmetleri.</p></div><div className="service-list">{services.map(([number, title, copy]) => <article className="service-row" key={title}><span className="service-number">{number}</span><h3>{title}</h3><p>{copy}</p><span className="service-arrow">↗</span></article>)}</div></section><section className="section-shell service-end"><h2 className="section-title">Özel Bir Çiçek Siparişi Mi Vermek İstiyorsunuz?</h2><a className="text-link" href="/contact">Bize Ulaşın <span>↗</span></a></section></RouteFrame> }
