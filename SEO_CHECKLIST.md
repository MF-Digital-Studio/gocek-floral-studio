# SEO Checklist – Göcek Marine Flowers

Aşağıdaki maddeler **kod dışında**, manuel olarak yapılması gereken işlemleri içerir.
Tamamlananları `[x]` ile işaretleyin.

---

## 🌐 Domain & Teknik Altyapı

- [x] **Domain tanımlandı:** `www.gocekmarineflowers.com`
  - `lib/seo-config.ts` ve sitemap / canonical / schema yapıları bu domaine bağlandı.
- [x] `site.webmanifest` dosyasındaki `start_url`, `scope` ve `lang` alanları yapılandırıldı.
- [ ] Hosting panelinde HTTPS (SSL) sertifikasının aktif olduğunu doğrulayın
- [ ] Varsa `non-www` → `www` 301 yönlendirmesini hosting/DNS seviyesinde yapılandırın (tercih edilen format: `https://www.gocekmarineflowers.com`)

---

## 📊 Google Search Console

- [ ] [Google Search Console](https://search.google.com/search-console/) hesabı oluşturun veya giriş yapın
- [ ] Sitenizi ekleyin ve **domain doğrulamasını** yapın (DNS TXT kaydı veya HTML dosyası ile)
- [ ] `sitemap.xml` adresini Search Console'a gönderin: `https://www.gocekmarineflowers.com/sitemap.xml`
- [ ] İlk tarama raporunu inceleyin
- [ ] Kapsama (Coverage) raporu ile hangi sayfaların indekslendiğini kontrol edin

---

## 📍 Google Business Profile (En Önemli Local SEO Adımı)

- [ ] [Google Business Profile](https://business.google.com/) üzerinden işletmenizi **claim edin** (sahiplenin)
- [ ] **Ana kategori:** Çiçekçi (Florist) olarak ayarlayın
- [ ] **İşletme adı:** Göcek Marine Flowers (sitenizle birebir aynı olmalı)
- [ ] **Adres:** Turgut Özal Cd. No:7, 48310 Göcek, Fethiye / Muğla
- [ ] **Telefon:** 0535 215 30 00
- [ ] **Web sitesi URL:** https://DOMAIN
- [ ] **Çalışma saatleri:** Pazartesi–Cumartesi 09:00–18:00 olarak girin
- [ ] Gerçek **mağaza fotoğrafları** yükleyin (iç mekan, dış mekan, ürünler)
- [ ] **Mağaza özeti** kısmına Göcek, çiçekçi, buket gibi doğal ifadeler içeren kısa bir açıklama yazın
- [ ] **Ürün kataloğu** ekleyin (buket, gelin çiçeği, yat servisi vb.)

---

## ⭐ Müşteri Yorumları

- [ ] Mevcut müşterilerinizden **Google yorumu** bırakmalarını isteyin
  - İşletmenizin Google Maps sayfasındaki **"Yorum Bırak"** linkini paylaşabilirsiniz
- [ ] Gelen yorumlara **düzenli ve kısa** yanıtlar verin

---

## 🔍 Bing Webmaster Tools

- [ ] [Bing Webmaster Tools](https://www.bing.com/webmasters/) hesabı oluşturun
- [ ] Sitenizi ekleyin (Google Search Console import özelliğini kullanabilirsiniz)
- [ ] Sitemap gönderin

---

## 📱 Sosyal Medya Tutarlılığı

- [ ] Instagram profili (@gocekmarineflowers) açıklamasındaki adres ve telefon bilgilerinin sitedekilerle **birebir aynı** olduğunu kontrol edin
- [ ] Instagram profilinde web sitesi URL'si güncel mi kontrol edin

---

## 📋 Yerel İşletme Dizinleri (NAP Tutarlılığı)

İşletme adı, adres ve telefon (NAP) bilgilerini aşağıdaki dizinlerde tutarlı tutun:

- [ ] [Yandex Haritalar](https://yandex.com.tr/maps/) — işletme kaydı
- [ ] [Foursquare](https://foursquare.com/) — işletme profili
- [ ] [TripAdvisor](https://www.tripadvisor.com.tr/) — (Göcek turistik bölgesi için önemli)
- [ ] Varsa Türkiye'deki yerel rehber/sarıyla gibi dizinler

---

## 🛠 Performans Optimizasyonu

- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/) ile site hız skoru kontrol edin
  - LCP (Largest Contentful Paint) < 2.5s hedefleyin
  - CLS (Cumulative Layout Shift) < 0.1 hedefleyin
- [ ] `next.config.mjs` içindeki `images: { unoptimized: true }` ayarını production için
  kaldırmayı değerlendirin (Next.js image optimization aktif olur)
- [ ] Video dosyalarının boyutunu kontrol edin (`banner.mp4`: 20MB, `dar_section_video.mp4`: 87MB — büyük dosyalar)

---

## 🖼 Görsel Dosya İsimleri

Mevcut dosyalar Türkçe karakter içeriyor (`mağaza.png`, `düğün_süsleme.jpg` vb.).
SEO için bu dosyaları yeniden isimlendirmeyi değerlendirin:

- [ ] `mağaza.png` → `gocek-marine-flowers-magaza.png`
- [ ] `düğün_süsleme.jpg` → `gocek-dugun-cicek-susleme.jpg`
- [ ] `gelin_çiçeği.jpg` → `gocek-gelin-el-cicegi.jpg`
- [ ] `araba_süsleme.jpg` → `gocek-gelin-araba-susleme.jpg`
- [ ] `balon_süsleme.jpg` → `gocek-helyum-balon-susleme.jpg`
- [ ] `ev_çiçeği.jpg` → `gocek-ev-villa-cicegi.jpg`
- [ ] `yat_süsleme.jpg` → `gocek-yat-marina-cicek.jpg`
- [ ] `hakkımızda_firma_sahibi.png` → `gocek-marine-flowers-firma-sahibi.png`

(Dosya isimlerini değiştirirseniz ilgili `page.tsx` dosyalarındaki `src` yollarını da güncellemeyi unutmayın.)

---

## ✅ Son Kontrol Listesi

- [ ] Tüm önemli sayfalarda unique title var mı?
- [ ] Her sayfada unique meta description var mı?
- [ ] Sitemap `/sitemap.xml` adresi erişilebilir mi?
- [ ] robots.txt `/robots.txt` adresi doğru mu?
- [ ] Google Search Console'da kapsama hatası var mı?
- [ ] Google Business Profile onaylandı mı?
- [ ] İşletme bilgileri (NAP) her yerde tutarlı mı?
