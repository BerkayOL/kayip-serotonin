import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { artist } from '@/data/artist';
import { currentRelease } from '@/data/releases';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Hikaye',
  description:
    'Kayıp Serotonin — Berkay Ay ve Halim Parlak tarafından kurulan bağımsız müzik oluşumunun felsefesi ve manifestosu.',
  path: '/story',
});

export default function StoryPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Page header */}
      <div className="ks-container mb-16 md:mb-24">
        <div className="flex flex-col gap-4 border-b border-[var(--ks-border)] pb-10">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Manifesto & Kökenler
          </span>
          <h1
            className="text-display-lg"
            style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
          >
            Hikaye
          </h1>
        </div>
      </div>

      {/* Main Grid */}
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left sticky label column */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="md:sticky md:top-32 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Oluşum
                </span>
                <span
                  className="text-lg font-medium"
                  style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
                >
                  Kayıp Serotonin
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Kurucular & Üretim
                </span>
                <ul className="list-none m-0 p-0 flex flex-col gap-1">
                  {artist.members.map((member) => (
                    <li
                      key={member}
                      className="text-base font-medium"
                      style={{ color: 'var(--ks-fg)' }}
                    >
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  İlk Eser
                </span>
                <Link
                  href={`/releases/${currentRelease.slug}`}
                  className="text-sm font-medium hover:underline flex items-center gap-1 group"
                  style={{ color: 'var(--ks-accent)' }}
                >
                  <span>{currentRelease.title}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="md:col-span-9 lg:col-span-8 flex flex-col gap-14">
            {/* Bold Headline */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-display-md leading-tight"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                &ldquo;Duygusal bir iz bırakmak, aşkın ve ayrılığın bıraktığı boşluğu sesle doldurmak için buradayız.&rdquo;
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--ks-muted)', fontFamily: 'var(--ks-font-ui)' }}
              >
                Kayıp Serotonin; Berkay Ay ve Halim Parlak&apos;ın ortak his dünyasından doğan iki kişilik bağımsız bir müzik projesidir.
              </p>
            </div>

            <div className="ks-rule" aria-hidden="true" />

            {/* In-depth narrative paragraphs */}
            <div
              className="flex flex-col gap-8 leading-relaxed text-base md:text-lg"
              style={{ color: 'var(--ks-muted)', fontFamily: 'var(--ks-font-ui)' }}
            >
              <div className="flex flex-col gap-3">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  01 — Arayış & Duygu
                </span>
                <p>
                  Hayatın koşturmacası ve dijitalleşen dünyada en çok unuttuğumuz şey derin duygularımız. Kayıp Serotonin, özellikle kalp kırıklıklarını, aşk acılarını ve içimizde çözülmemiş düğümleri melankolik ama güçlü bir müzikal dile döker. Amacımız sadece dinlenen değil, dinleyenin kendi hikayesinden bir parça bulduğu samimi bir atmosfer yaratmaktır.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  02 — Teknoloji ile İnsan Dokunuşunun Kesişimi
                </span>
                <p>
                  Modern çağın sunduğu yeni nesil üretim olanaklarını ve dijital ses estetiğini, insanın en saf acısıyla harmanlıyoruz. Teknoloji bizim için bir amaç değil; göğsümüzdeki sıkışmayı, gece geç saatlerde zihnimize üşüşen hatıraları notalara ve frekanslara dönüştüren bir tuvaldir.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  03 — Yolculuk
                </span>
                <p>
                  İlk yayınımız olan <strong style={{ color: 'var(--ks-fg)' }}>&ldquo;Sınırları Aştın&rdquo;</strong> ile başlayan bu serüven, sadece bir şarkı değil, dinleyicilerimizle birlikte hissedeceğimiz ortak bir duygu manifestosudur.
                </p>
              </div>
            </div>

            {/* Key Manifesto Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div
                className="p-6 border flex flex-col gap-3"
                style={{ borderColor: 'var(--ks-border)', background: 'var(--ks-surface)' }}
              >
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Odak Noktası
                </span>
                <p className="text-base font-medium m-0" style={{ color: 'var(--ks-fg)' }}>
                  İçsel çatışmalar, aşk acıları ve dinleyicide derin duygusal yankı uyandıran samimi kompozisyonlar.
                </p>
              </div>

              <div
                className="p-6 border flex flex-col gap-3"
                style={{ borderColor: 'var(--ks-border)', background: 'var(--ks-surface)' }}
              >
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Vizyon
                </span>
                <p className="text-base font-medium m-0" style={{ color: 'var(--ks-fg)' }}>
                  İki bağımsız sanatçının ellerinden çıkan, kalıplara sığmayan çağdaş alternatif müzik dili.
                </p>
              </div>
            </div>

            {/* Release Card & CTA */}
            <div
              className="p-8 border flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ borderColor: 'var(--ks-border-strong)', background: 'var(--ks-surface-raised)' }}
            >
              <div className="flex items-center gap-5">
                <div
                  className="relative w-16 h-16 shrink-0 overflow-hidden"
                  style={{ background: 'var(--ks-surface)' }}
                >
                  {currentRelease.artwork && (
                    <Image
                      src={currentRelease.artwork}
                      alt={currentRelease.artworkAlt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                    İlk Single
                  </span>
                  <span
                    className="text-lg font-medium"
                    style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
                  >
                    {currentRelease.title}
                  </span>
                </div>
              </div>

              <Link
                href={`/releases/${currentRelease.slug}`}
                className="px-6 py-3 border border-[var(--ks-fg)] bg-[var(--ks-fg)] text-[var(--ks-bg)] text-label font-medium hover:bg-transparent hover:text-[var(--ks-fg)] transition-colors duration-200"
              >
                Parçayı Dinle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
