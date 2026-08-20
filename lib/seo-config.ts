/**
 * Merkezi SEO & Site Konfigürasyonu
 * Tüm sayfalarda tutarlı NAP (Name, Address, Phone) ve metadata için tek kaynak.
 *
 * Domain: www.göcekmarineflowers.com
 * Punycode (teknik SEO için): www.xn--gcekmarineflowers-dfb.com
 *
 * Canonical, sitemap ve schema URL'lerinde punycode kullanıyoruz çünkü
 * Google Search Console, Bing ve diğer araçlar punycode formunu daha güvenilir işler.
 * Ziyaretçiler tarayıcıda unicode (göcek…) formunu görür — bu otomatik dönüşümdür.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.xn--gcekmarineflowers-zzb.com'

export const BUSINESS = {
  name: 'Göcek Marine Flowers',
  shortName: 'Marine Flowers',
  legalName: 'Göcek Marine Flowers',

  // Adres
  street: 'Turgut Özal Cd. No:7',
  postalCode: '48310',
  city: 'Göcek',
  district: 'Fethiye',
  region: 'Muğla',
  country: 'TR',

  // İletişim
  phone: '+905352153000',
  phoneFormatted: '0535 215 30 00',
  whatsapp: 'https://wa.me/905352153000',

  // Çalışma Saatleri (Pazartesi – Cumartesi, 09:00 – 18:00)
  openingHours: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const, opens: '09:00', closes: '18:00' },
  ],

  // Sosyal medya
  instagram: 'https://www.instagram.com/gocekmarineflowers/',

  // Google Maps
  mapsUrl:
    'https://www.google.com/maps/dir//G%C3%B6cek,+Turgut+%C3%96zal+Cd.+No:7,+48310+Fethiye%2FMu%C4%9Fla',

  // Açıklama
  description:
    'Göcek\'te taze çiçek buketleri, gelin el çiçekleri, ev & villa aranjmanları, yat & tekne çiçek servisi ve düğün organizasyonu.',

  // Logo / OG resmi
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.xn--gcekmarineflowers-zzb.com'}/logo.png`,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.xn--gcekmarineflowers-zzb.com'}/about.png`,
} as const
