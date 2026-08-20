# SEO Strategy – Göcek Marine Flowers

**Hedef:** "Göcek çiçekçi" ve ilgili yerel aramalarda Google organik + Google Maps/Local sonuçlarında güçlü konumlanma.

---

## 1. Keyword → Sayfa Mapping (Cannibalization Önleme)

| Keyword | Hedef Sayfa | Öncelik |
|---|---|---|
| Göcek çiçekçi | `/gocek-cicekci` | Primary |
| Göcek çiçekçi | `/` (destekleyici) | Secondary |
| Göcek çiçek | `/gocek-cicekci` | Primary |
| Göcek buket | `/gocek-cicekci` | Primary |
| Göcek çiçek aranjmanı | `/gocek-cicekci` | Primary |
| Göcek çiçek siparişi | `/gocek-cicekci` | Primary |
| Göcek çiçek hizmetleri | `/services` | Primary |
| Göcek gelin çiçeği | `/services` | Secondary |
| Göcek yat marina çiçek | `/services` | Secondary |
| Göcek düğün çiçek | `/services` | Secondary |
| Göcek çiçek koleksiyon | `/works` | Primary |
| Göcek Marine Flowers iletişim | `/contact` | Primary |

> **Önemli:** Aynı keyword için birden fazla sayfa yarışmaması için internal linking ile otorite `/gocek-cicekci` sayfasına yönlendirilmiştir.

---

## 2. URL Stratejisi

| Sayfa | URL |
|---|---|
| Ana Sayfa | `/` |
| Göcek Çiçekçi LP | `/gocek-cicekci` |
| Hizmetler | `/services` |
| Koleksiyon | `/works` |
| Hakkımızda | `/about` |
| İletişim | `/contact` |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |

**Kural:** URL'ler küçük harf, tire (-) ile ayrılmış, Türkçe karakter içermeyen yapıda.

---

## 3. Internal Linking Yapısı

```
Ana Sayfa (/)
├── → /gocek-cicekci (Göcek'teki çiçek seçeneklerimiz)
├── → /services (Tüm hizmetlerimizi inceleyin)
├── → /works (Tüm Koleksiyonu İncele)
└── → /contact (Bize Ulaşın)

/gocek-cicekci
├── → /services (Tüm hizmetlerimizi inceleyin)
├── → /works (Koleksiyon için her kart)
├── → /about (Hakkımızda)
└── → /contact (İletişim CTA)

/about
└── → /gocek-cicekci (Göcek'teki çiçek seçeneklerimizi keşfedin)

/works
└── → /gocek-cicekci (Göcek'teki çiçek seçeneklerimizi keşfedin)

/services
└── → /contact (CTA)
```

**Anchor Text Çeşitliliği (Doğal):**
- "Göcek'teki çiçek seçeneklerimizi keşfedin"
- "Tüm hizmetlerimizi inceleyin"
- "Çiçekleri inceleyin"
- "Bize Ulaşın"
- "Mağazamızı görün"

---

## 4. Structured Data Stratejisi

| Schema Türü | Sayfa | Amaç |
|---|---|---|
| `Organization` | Global (layout) | Marka entity |
| `WebSite` | Global (layout) | Site adı sinyali |
| `Florist` (LocalBusiness) | `/`, `/gocek-cicekci` | Google Maps sinyali |
| `BreadcrumbList` | Tüm alt sayfalar | Navigasyon hiyerarşisi |
| `FAQPage` | `/gocek-cicekci` | Rich result (SSS) |

---

## 5. Local SEO Stratejisi

### Temel Prensipler

1. **NAP Tutarlılığı:** İşletme adı, adres ve telefon sitede, Google Business Profile'da ve tüm dizinlerde birebir aynı olmalı.

   ```
   Göcek Marine Flowers
   Turgut Özal Cd. No:7, 48310 Göcek, Fethiye / Muğla
   0535 215 30 00
   ```

2. **Google Business Profile** en önemli Local SEO sinyalidir.
   - Güncel fotoğraflar → Tıklanma oranını artırır
   - Müşteri yorumları → Sıralamayı doğrudan etkiler
   - Kategori seçimi → "Çiçekçi (Florist)" ana kategori olmalı

3. **Yerel İçerik:** Göcek, Fethiye, Muğla coğrafi bağlamı sayfalarda doğal kullanım.

4. **Göcek Turizm Örtüşmesi:** Göcek yoğun marina ve turizm bölgesi.
   Yat, tekne, villa, otel teslimatı gibi nişler bu bölgede rakipsiz fırsatlar.

---

## 6. İçerik Stratejisi

### Mevcut İçerik
- Ana sayfa: Genel çiçekçi tanıtımı
- Hizmetler: 7 detaylı hizmet açıklaması
- Koleksiyon: 12 ürün görseli
- Göcek Çiçekçi LP: Yerel odaklı landing page (YENİ)

### Potansiyel Gelecek İçerikler (Öncelik Sırasıyla)

Eğer blog veya içerik sistemi eklenirse, aşağıdaki konular gerçek yerel kullanıcıya fayda sağlar:

1. "Göcek'te Yat Partisi İçin Çiçek Seçimi" → marina müşterilerine yönelik
2. "Düğün Çiçeği Nasıl Seçilir?" → gelin + damat aramaları
3. "Çiçek Buketi Daha Uzun Süre Taze Nasıl Kalır?" → kullanıcı sorusu
4. "Göcek'te Özel Gün İçin Çiçek Fikirleri" → yerel arama niyeti

> **Not:** Blog sistemi şu an projede mevcut değil. Eklenirse Next.js MDX veya CMS entegrasyonu ile yapılabilir.

---

## 7. Backlink Stratejisi

(Backlink'ler kod değişikliği gerektirmiyor, PR / outreach çalışmasıdır.)

### Öncelikli Hedefler

1. **Yerel Turizm Siteleri:** Göcek ve Fethiye bölgesi turizm rehberi siteleri
2. **Marina Ortaklıkları:** D-Marin Göcek, Skopea Marina gibi iş ortakları sitelerinden referans
3. **Düğün Platformları:** Türkiye'deki düğün rehberi siteleri (gelin.com.tr vb.)
4. **Otel Ortaklıkları:** Göcek'teki boutique otel ve resort siteleri

---

## 8. Google Business Profile Stratejisi

### Haftalık Rutin
- [ ] Haftada 1-2 kez yeni çiçek/aranjman fotoğrafı yükle
- [ ] Gelen yorumlara 24-48 saat içinde yanıt ver
- [ ] Google Posts özelliğini kullanarak mevsimlik kampanya veya yeni ürün duyurusu yap

### Aylık Rutin
- [ ] GBP Insights'tan (görüntüleme, tıklama, yön tarifi) istatistikleri incele
- [ ] Ürün kataloğunu güncelle

---

## 9. Core Web Vitals Notları

| Metrik | Mevcut Risk | Öneri |
|---|---|---|
| LCP | Yüksek – `banner.mp4` (20MB) ve `dar_section_video.mp4` (87MB) yavaş yükleyebilir | Videoları sıkıştırın veya poster image ekleyin |
| CLS | Orta – `<img>` etiketleri `width/height` eklenmiş (bu commit) | `next/image` kullanımına geçiş değerlendirin |
| INP | Düşük risk – Client JS minimal | Mevcut hali yeterli |

---

## 10. Takip Metrikleri

| Metrik | Araç | Hedef |
|---|---|---|
| Organik sıralama | Google Search Console | "Göcek çiçekçi" top 3 |
| Yerel görünürlük | Google Business Profile Insights | Görüntüleme artışı |
| Tıklama oranı (CTR) | Google Search Console | > %3 |
| Sayfa hızı | PageSpeed Insights | LCP < 2.5s |
| Telefon / WhatsApp tıklamaları | GA4 veya manuel takip | Artış trendi |
