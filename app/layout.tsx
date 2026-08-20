import { Analytics } from '@vercel/analytics/next'
import { Bebas_Neue, Cormorant_Garamond, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

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
  title: 'Göcek Marine Flowers — Göcek',
  description: 'Göcek\'te özel buketler, yat ve mekanlar için tasarlanmış seçkin çiçek tasarımları.',
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
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#edd4cc',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="bg-background" suppressHydrationWarning>
      <body className={`${bebas.variable} ${cormorant.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
