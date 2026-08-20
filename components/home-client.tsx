'use client'

import { useScrollReveal } from '@/components/site-shell'

/**
 * Ana sayfa için scroll-reveal hook'unu çalıştıran minimal client wrapper.
 * Bu bileşen yalnızca side-effect üretir; render çıktısı yoktur.
 */
export function HomeScrollReveal() {
  useScrollReveal()
  return null
}
