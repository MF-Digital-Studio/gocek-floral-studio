import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-editorial' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Lume Floral Studio — Göcek',
  description: 'A boutique floral design studio creating thoughtful arrangements and floral experiences on the Aegean coast.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f2eb',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
