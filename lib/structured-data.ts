/**
 * JSON-LD Structured Data Factory
 * Google'ın desteklediği schema.org formatlarına uygun, doğrulanmış işletme
 * bilgileriyle oluşturulan yapılandırılmış veri şablonları.
 * Bilinmeyen hiçbir alan uydurmadan bırakılmıştır.
 */

import { BUSINESS, SITE_URL } from './seo-config'

/**
 * LocalBusiness → Florist schema
 * Ana işletme entity'si. Ana sayfa ve Göcek Çiçekçi landing page'de kullanılır.
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    image: BUSINESS.ogImage,
    logo: BUSINESS.logo,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [BUSINESS.instagram],
    description: BUSINESS.description,
    servesCuisine: undefined, // Florist için geçerli değil
    priceRange: undefined, // TODO: Fiyat aralığı bilinmiyor
  }
}

/**
 * Organization schema
 * Marka entity'si. Layout'ta global olarak eklenir.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS.logo,
    },
    sameAs: [BUSINESS.instagram],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      availableLanguage: 'Turkish',
    },
  }
}

/**
 * WebSite schema
 * Site adı ve URL'si için. Google'ın sitelink sitelinkSearchBox'u desteklemez
 * artık – sadece temel WebSite kullanıyoruz.
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: 'tr-TR',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }
}

/**
 * BreadcrumbList schema
 * Alt sayfalarda navigasyon hiyerarşisini belirtmek için kullanılır.
 */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * FAQPage schema
 * Yalnızca sayfada gerçekten görünür olan SSS için kullanılır.
 */
export function buildFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
