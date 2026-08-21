/**
 * Merkezi SEO & Site Konfigürasyonu
 * Tüm sayfalarda tutarlı NAP (Name, Address, Phone) ve metadata için tek kaynak.
 *
 * Domain: www.gocekmarineflowers.com
 *
 * Canonical, sitemap ve schema URL'lerinde Türkçe karakter içermeyen
 * www.gocekmarineflowers.com alan adını kullanıyoruz.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gocekmarineflowers.com'

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

  // Geo Koordinatları (Göcek Merkez / Turgut Özal Cd.)
  geo: {
    latitude: 36.7533,
    longitude: 28.9431,
  },

  // Fiyat Aralığı
  priceRange: '₺₺',

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
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gocekmarineflowers.com'}/logo.webp`,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.gocekmarineflowers.com'}/about.webp`,
} as const
