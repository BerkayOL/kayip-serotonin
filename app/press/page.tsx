import type { Metadata } from 'next';
import Image from 'next/image';
import { artist } from '@/data/artist';
import { currentRelease } from '@/data/releases';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Basın & Medya Kiti (EPK)',
  description:
    'Kayıp Serotonin resmi basın bülteni, yüksek çözünürlüklü görseller, logo paketi ve röportaj materyalleri.',
  path: '/press',
});

export default function PressPage() {
  return (
    <div className="pt-32 pb-24">
      <JsonLd type="website" pagePath="/press" pageTitle="Basın Kiti" />

      {/* Header */}
      <div className="ks-container mb-16 md:mb-20">
        <div className="flex flex-col gap-4 border-b border-[var(--ks-border)] pb-10">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Electronic Press Kit (EPK)
          </span>
          <h1
            className="text-display-lg"
            style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
          >
            Basın Kiti
          </h1>
          <p className="text-base max-w-[60ch]" style={{ color: 'var(--ks-muted)' }}>
            Medya mensupları, müzik yazarları, radyo programcıları ve çalma listesi (playlist) küratörleri için resmi materyal arşivi.
          </p>
        </div>
      </div>

      <div className="ks-container flex flex-col gap-20">
        {/* Section 1: Official Bio & Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
              01 // Resmi Biyografi
            </span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="p-8 border border-[var(--ks-border)] bg-[var(--ks-surface)] flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-mono" style={{ color: 'var(--ks-subtle)' }}>
                Basın Bülteni Metni (Kopyalanabilir)
              </span>
              <p className="text-base leading-relaxed" style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-ui)' }}>
                &ldquo;Kayıp Serotonin, Berkay Ay ve Halim Parlak tarafından kurulan bağımsız bir müzik projesidir. Teknoloji ile insan duygusu arasındaki çizgide; kalp kırıklıklarını, ayrılık acılarını ve içsel melankoliyi çağdaş alternatif ses evrenine dönüştürür. İlk single çalışmaları &lsquo;Sınırları Aştın&rsquo; tüm dijital müzik platformlarında yayındadır.&rdquo;
              </p>
            </div>

            {/* Quick Facts Table */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>Kurucular</span>
                <span className="text-sm font-medium" style={{ color: 'var(--ks-fg)' }}>Berkay Ay &amp; Halim Parlak</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>Tür</span>
                <span className="text-sm font-medium" style={{ color: 'var(--ks-fg)' }}>Türkçe Alternatif / Indie</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>İlk Single</span>
                <span className="text-sm font-medium" style={{ color: 'var(--ks-fg)' }}>Sınırları Aştın</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Media Assets & High-Res Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-[var(--ks-border)]">
          <div className="md:col-span-4">
            <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
              02 // Medya Varlıkları
            </span>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Logo Asset Card */}
            <div className="p-6 border border-[var(--ks-border)] bg-[var(--ks-surface)] flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="relative w-20 h-20 bg-[var(--ks-bg)] p-3 border border-[var(--ks-border)]">
                  <Image
                    src={artist.logo}
                    alt={artist.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium" style={{ color: 'var(--ks-fg)' }}>
                    Resmi Logo Paketi
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--ks-muted)' }}>
                    Molekül ark tasarımı — PNG (Şeffaf zemin).
                  </p>
                </div>
              </div>
              <a
                href={artist.logo}
                download="Kayip-Serotonin-Logo.png"
                className="ks-btn ks-btn-outline text-xs w-fit"
              >
                <span>Logoyu İndir (PNG)</span>
                <span>↓</span>
              </a>
            </div>

            {/* Artwork Asset Card */}
            <div className="p-6 border border-[var(--ks-border)] bg-[var(--ks-surface)] flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="relative w-20 h-20 bg-[var(--ks-bg)] border border-[var(--ks-border)]">
                  {currentRelease.artwork && (
                    <Image
                      src={currentRelease.artwork}
                      alt={currentRelease.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-medium" style={{ color: 'var(--ks-fg)' }}>
                    Single Kapak Sanatı (3000x3000px)
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--ks-muted)' }}>
                    &ldquo;Sınırları Aştın&rdquo; yüksek çözünürlüklü orijinal kapak görseli.
                  </p>
                </div>
              </div>
              <a
                href={currentRelease.artwork || '#'}
                download="Kayip-Serotonin-Sinirlari-Astin-Cover.jpg"
                className="ks-btn ks-btn-outline text-xs w-fit"
              >
                <span>Kapağı İndir (HQ)</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Brand Identity & Palette */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-[var(--ks-border)]">
          <div className="md:col-span-4">
            <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
              03 // Renk Paleti
            </span>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 border border-[var(--ks-border)] bg-[#0d0b0b] flex flex-col justify-end h-28">
              <span className="text-xs font-mono font-bold text-white">#0D0B0B</span>
              <span className="text-[0.6875rem] text-white/60">Gece Karası (Zemin)</span>
            </div>
            <div className="p-4 border border-[var(--ks-border)] bg-[#ede5db] flex flex-col justify-end h-28">
              <span className="text-xs font-mono font-bold text-black">#EDE5DB</span>
              <span className="text-[0.6875rem] text-black/60">Kemik Beyazı (Yazı)</span>
            </div>
            <div className="p-4 border border-[var(--ks-border)] bg-[#a35252] flex flex-col justify-end h-28">
              <span className="text-xs font-mono font-bold text-white">#A35252</span>
              <span className="text-[0.6875rem] text-white/80">Vurgu / Bordo</span>
            </div>
            <div className="p-4 border border-[var(--ks-border)] bg-[#1c1717] flex flex-col justify-end h-28">
              <span className="text-xs font-mono font-bold text-white">#1C1717</span>
              <span className="text-[0.6875rem] text-white/60">Yüzey (Surface)</span>
            </div>
          </div>
        </div>

        {/* Section 4: Press Inquiries */}
        <div className="p-8 border border-[var(--ks-border-strong)] bg-[var(--ks-surface-raised)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium m-0" style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}>
              Röportaj &amp; Çalma Listesi İletişimi
            </h3>
            <p className="text-xs max-w-md m-0" style={{ color: 'var(--ks-muted)' }}>
              Röportaj talepleri, playlist eklemeleri ve basın bülteni gönderimleri için resmi iletişim kanalımız.
            </p>
          </div>
          <a
            href="mailto:iletisim@kayipserotonin.com.tr"
            className="ks-btn ks-btn-primary text-xs shrink-0"
          >
            <span>iletisim@kayipserotonin.com.tr</span>
            <span>✉</span>
          </a>
        </div>
      </div>
    </div>
  );
}
