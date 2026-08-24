import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'İletişim & İş Birliği',
  description:
    'Kayıp Serotonin resmi iletişim, menajerlik, lisanslama, prodüksiyon ve remix iş birliği kanalları.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <JsonLd type="website" pagePath="/contact" pageTitle="İletişim" />

      {/* Header */}
      <div className="ks-container mb-16 md:mb-20">
        <div className="flex flex-col gap-4 border-b border-[var(--ks-border)] pb-10">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Bağlantı &amp; İş Birliği
          </span>
          <h1
            className="text-display-lg"
            style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
          >
            İletişim
          </h1>
          <p className="text-base max-w-[60ch]" style={{ color: 'var(--ks-muted)' }}>
            Prodüksiyon, ortak projeler, etkinlikler ve lisanslama için doğrudan bizimle iletişime geçin.
          </p>
        </div>
      </div>

      <div className="ks-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Info */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
                Doğrudan E-Posta
              </span>
              <a
                href="mailto:iletisim@kayipserotonin.com.tr"
                className="text-xl md:text-2xl font-medium hover:underline break-all"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                iletisim@kayipserotonin.com.tr
              </a>
              <span className="text-xs" style={{ color: 'var(--ks-subtle)' }}>
                Tüm resmi taleplere en geç 48 saat içinde dönüş yapılır.
              </span>
            </div>

            <div className="ks-rule" />

            <div className="flex flex-col gap-4">
              <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                Konu Başlıkları
              </span>
              <ul className="list-none m-0 p-0 flex flex-col gap-3 text-sm" style={{ color: 'var(--ks-muted)' }}>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--ks-accent)' }}>●</span>
                  <span>Müzikal İş Birlikleri &amp; Feat Talepleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--ks-accent)' }}>●</span>
                  <span>Dizi, Film ve Dijital Proje Müzik Lisanslamaları</span>
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--ks-accent)' }}>●</span>
                  <span>Basın Röportajları &amp; Canlı Yayın Davetleri</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Direct Action Card */}
          <div className="md:col-span-7 p-8 md:p-12 border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
                Kayıp Serotonin Studio
              </span>
              <h2
                className="text-display-md"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                Birlikte Üretelim.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                Projeniz için orijinal soundtrack, vokalli alternatif kompozisyonlar veya remix çalışmaları hakkında konuşmak isterseniz bize bir mesaj bırakın.
              </p>
            </div>

            <a
              href="mailto:iletisim@kayipserotonin.com.tr?subject=Proje%20İş%20Birliği%20Talebi"
              className="ks-btn ks-btn-primary w-fit"
            >
              <span>E-Posta Gönder</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
