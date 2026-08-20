'use client'

import { useState } from 'react'

export interface ServiceItem {
  number: string
  title: string
  desc: string
  image: string
}

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Özel Çiçek Buketleri',
    desc: 'Doğum günleri, yıldönümleri, tebrikler ve sevdikleriniz için mağazamızda özenle hazırlanan günlük taze buketler.',
    image: '/flower-1.png',
  },
  {
    number: '02',
    title: 'Gelin El Çiçeği',
    desc: 'En özel gününüz için tarzınıza ve konseptinize uygun özenle tasarlanan taze gelin buketleri ve yaka çiçekleri.',
    image: '/gocek-gelin-el-cicegi.jpg',
  },
  {
    number: '03',
    title: 'Ev & Villa Çiçekleri',
    desc: 'Yaşam alanlarınıza canlılık katan vazo aranjmanları, orkide ve taze masa düzenlemeleri.',
    image: '/gocek-ev-villa-cicegi.jpg',
  },
  {
    number: '04',
    title: 'Yat & Tekne Çiçekleri',
    desc: 'Deniz konseptine uygun, uzun süre formunu ve tazeliğini koruyan özel tekne ve yat aranjmanları.',
    image: '/gocek-yat-marina-cicek.jpg',
  },
  {
    number: '05',
    title: 'Düğün & Davet Tasarımı',
    desc: 'Kutlamalar, partiler ve özel günler için kişiye ve mekana özel konsept çiçek dekorasyonu.',
    image: '/gocek-dugun-cicek-susleme.jpg',
  },
  {
    number: '06',
    title: 'Gelin Arabası Süsleme',
    desc: 'Düğün ve özel günleriniz için şık, estetik ve mevsime uygun taze çiçeklerle araç süsleme hizmeti.',
    image: '/gocek-gelin-araba-susleme.jpg',
  },
  {
    number: '07',
    title: 'Helyum Gazlı Balon',
    desc: 'Kutlama, doğum günü ve özel sürprizler için renkli ve kaliteli helyum gazlı balon tasarımları.',
    image: '/gocek-helyum-balon-susleme.jpg',
  },
]

export function ServicesSpotlight() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const toggleItem = (index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index))
  }

  return (
    <div className="services-spotlight-container">
      <div className="services-spotlight-list">
        {servicesData.map((service, index) => {
          const isActive = index === activeIndex
          const encodedTitle = encodeURIComponent(`Merhaba, ${service.title} hizmetiniz hakkında bilgi almak istiyorum.`)
          const waUrl = `https://wa.me/905352153000?text=${encodedTitle}`

          return (
            <div
              key={service.title}
              className={`spotlight-item ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => {
                if (typeof window !== 'undefined' && window.innerWidth > 960) {
                  setActiveIndex(index)
                }
              }}
              onClick={() => toggleItem(index)}
            >
              <div className="spotlight-item-header">
                <span className="spotlight-number">{service.number}</span>
                <h3 className="spotlight-title">{service.title}</h3>
                <span className="spotlight-arrow">{isActive ? '↓' : '→'}</span>
              </div>
              
              <div className="spotlight-body">
                <div className="spotlight-body-inner">
                  <p className="spotlight-desc">{service.desc}</p>
                  
                  {/* Mobile image preview inside accordion */}
                  <div className="spotlight-mobile-img-wrapper">
                    <img src={service.image} alt={service.title} className="spotlight-mobile-img" />
                  </div>

                  <div className="spotlight-actions">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="spotlight-btn spotlight-btn-wa"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.414 5.165 5.284-1.385c1.458.796 3.1 1.216 4.789 1.216 5.507 0 9.988-4.479 9.988-9.984 0-5.506-4.481-9.984-9.988-9.984zm5.823 14.174c-.244.688-1.432 1.313-1.986 1.369-.512.051-1.156.082-3.327-.812-2.775-1.144-4.54-3.952-4.68-4.137-.138-.184-1.121-1.492-1.121-2.846 0-1.354.708-2.02.96-2.284.244-.253.533-.316.711-.316.178 0 .356.002.511.01.164.008.386-.062.604.462.223.533.756 1.843.823 1.977.067.134.111.29.022.463-.089.174-.134.282-.267.437-.133.155-.28.347-.399.467-.133.133-.272.279-.117.546.156.267.69 1.139 1.482 1.844 1.018.907 1.876 1.189 2.143 1.323.267.133.423.111.578-.067.156-.178.667-.777.844-1.044.178-.267.356-.223.6-.133.244.089 1.556.734 1.823.867.267.133.444.2.511.311.067.111.067.644-.178 1.332z"/>
                      </svg>
                      <span>WhatsApp ile Bilgi Al</span>
                    </a>
                    <a
                      href="tel:+905352153000"
                      className="spotlight-btn spotlight-btn-call"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>Ara: 0535 215 30 00</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="services-spotlight-showcase">
        <div className="spotlight-frame">
          {servicesData.map((service, index) => (
            <img
              key={service.title}
              src={service.image}
              alt={service.title}
              className={`spotlight-frame-img ${index === activeIndex ? 'is-visible' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
