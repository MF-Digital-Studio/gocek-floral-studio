'use client'

import { useScrollReveal } from '@/components/site-shell'
import { useEffect, useRef, useState } from 'react'

/**
 * Ana sayfa için scroll-reveal hook'unu çalıştıran minimal client wrapper.
 * Bu bileşen yalnızca side-effect üretir; render çıktısı yoktur.
 */
export function HomeScrollReveal() {
  useScrollReveal()
  return null
}

/**
 * Hero videosunu yüklenene kadar gizler.
 * Video oynatmaya hazır olduğunda kademeli geçişle gösterir.
 */
export function HeroVideoReveal() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>('.hero-video')
    if (!video) return

    const reveal = () => setReady(true)

    // canplay = yeterli veri yüklendi, oynatılabilir
    video.addEventListener('canplay', reveal, { once: true })

    // Eğer video zaten hazırsa hemen göster
    if (video.readyState >= 3) reveal()

    return () => video.removeEventListener('canplay', reveal)
  }, [])

  return (
    <style>{`
      .hero-video {
        opacity: ${ready ? 1 : 0};
        transition: opacity 0.6s ease;
      }
    `}</style>
  )
}
