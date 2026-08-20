import { Analytics } from '@vercel/analytics/next'
import { Bebas_Neue, Cormorant_Garamond, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { BUSINESS, SITE_URL } from '@/lib/seo-config'
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '@/lib/structured-data'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-editorial',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif-italic',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `Göcek Çiçekçi | ${BUSINESS.name} – Göcek Çiçek & Çiçek Siparişi`,
    template: `%s | ${BUSINESS.name}`,
  },

  description: BUSINESS.description,

  keywords: [
    'Göcek çiçekçi',
    'Göcek çiçek',
    'Göcek çiçek siparişi',
    'Göcek çiçek gönderimi',
    'Göcek buket',
    'Göcek çiçek aranjmanı',
    'Göcek Marine Flowers',
    'Fethiye çiçekçi',
    'Muğla çiçekçi',
  ],

  authors: [{ name: BUSINESS.name, url: SITE_URL }],

  creator: BUSINESS.name,
  publisher: BUSINESS.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: BUSINESS.name,
    images: [
      {
        url: '/about.png',
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} – Göcek Çiçekçi`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@gocekmarineflowers',
    creator: '@gocekmarineflowers',
    images: ['/about.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon.png' },
    ],
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#edd4cc',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = buildOrganizationSchema()
  const webSiteSchema = buildWebSiteSchema()

  return (
    <html lang="tr" className="bg-background" suppressHydrationWarning>
      <head>
        {/* Global Organization + WebSite JSON-LD */}
        <script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body
        className={`${bebas.variable} ${cormorant.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
