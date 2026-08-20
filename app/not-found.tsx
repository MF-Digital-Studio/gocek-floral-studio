import type { Metadata } from 'next'
import { SiteHeader, SiteFooter, StickyQuickActions } from '@/components/site-shell'
import { ArrowUpRight } from '@/components/icons'
import { BUSINESS } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: {
    absolute: `Sayfa Bulunamadı (404) | ${BUSINESS.name}`,
  },
  description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya çiçeklerimizi keşfedebilirsiniz.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main>
      <SiteHeader />

      <section
        className="section-shell"
        style={{
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '520px' }}>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>404</p>
          <h1
            className="display-title"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '24px' }}
          >
            Sayfa Bulunamadı
          </h1>
          <p
            className="lead"
            style={{ marginBottom: '40px', opacity: 0.75 }}
          >
            Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.
            Çiçeklerimizi keşfetmek veya bize ulaşmak için aşağıdaki
            bağlantıları kullanabilirsiniz.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a className="text-link" href="/">
              Ana Sayfaya Dön <ArrowUpRight size={13} />
            </a>
            <a className="text-link" href="/works">
              Çiçekleri İncele <ArrowUpRight size={13} />
            </a>
            <a className="text-link" href="/contact">
              İletişime Geç <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyQuickActions />
    </main>
  )
}
