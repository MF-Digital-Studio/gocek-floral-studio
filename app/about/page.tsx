import { PageHero, RouteFrame, imageSet } from '@/components/site-shell'

export default function AboutPage() {
  return (
    <RouteFrame>
      <PageHero
        eyebrow="Göcek Marine Flowers · Göcek"
        title={<>Hakkımızda</>}
        image={imageSet.garden}
        alt="Göcek Marine Flowers"
      />

      {/* Main Intro Narrative Section */}
      <section className="section-shell route-about">
        <div className="about-intro-grid">
          <div>
            <span className="section-kicker">Mağazamız Hakkında</span>
            <h2 className="section-title">
              Göcek’te Taze ve Özenli Çiçek Tasarımları
            </h2>
          </div>
          <div className="route-copy">
            <p className="lead">
              Göcek merkezdeki çiçek mağazamızda sevdikleriniz, eviniz, villanız veya tekneniz için her gün taze çiçek tasarımları hazırlıyoruz.
            </p>
            <p>
              Göcek Marine Flowers olarak, bireysel hediye siparişlerinden tekne ve villa masa düzenlemelerine, özel gün ve etkinlik süslemelerine kadar geniş bir yelpazede hizmet veriyoruz.
            </p>
            <p>
              İster özel bir gün için taze bir buket, ister davetleriniz için masa dekorasyonu olsun; mevsime uygun en kaliteli taze çiçeklerle isteğinize ve zevkinize göre özenle hazırlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Photos Section: Founder & Store */}
      <section className="about-photos-section">
        <div className="about-photos-grid">
          <div className="about-photo-card">
            <img
              src="/hakkımızda_firma_sahibi.png"
              alt="Göcek Marine Flowers"
              className="about-photo-img"
            />
          </div>
          <div className="about-photo-card">
            <img
              src="/mağaza.png"
              alt="Göcek Marine Flowers Çiçek Mağazası"
              className="about-photo-img"
            />
          </div>
        </div>
      </section>

      {/* Unified Bottom CTA */}
      <section className="services-cta-section">
        <div className="services-cta-card">
          <span className="section-kicker" style={{ color: 'rgba(28, 40, 51, 0.7)' }}>Göcek Marine Flowers</span>
          <h2 className="services-cta-title">Çiçek Siparişiniz İçin Bize Ulaşın</h2>
          <p className="services-cta-copy">
            Bireysel hediye buketleriniz, villa ve tekne siparişleriniz için WhatsApp'tan yazabilir veya atölyemize uğrayabilirsiniz.
          </p>
          <div className="services-cta-buttons">
            <a href="https://wa.me/905352153000" target="_blank" rel="noreferrer" className="services-cta-btn services-cta-wa">
              WhatsApp'tan Yazın ↗
            </a>
            <a href="/contact" className="services-cta-btn services-cta-call">
              İletişim & Konum ↗
            </a>
          </div>
        </div>
      </section>
    </RouteFrame>
  )
}
