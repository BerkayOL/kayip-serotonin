'use client';

import { currentRelease } from '@/data/releases';

export function Hero() {
  const triggerAudio = () => {
    window.dispatchEvent(new CustomEvent('ks-play-audio'));
  };

  return (
    <section
      aria-label="Kayıp Serotonin — Hero"
      className="relative min-h-[85svh] sm:min-h-[90svh] md:min-h-dvh flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 overflow-hidden"
    >
      {/* Ambient background aura & editorial rhythm line */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.14] blur-[120px] pointer-events-none"
          style={{ background: 'var(--ks-accent)' }}
        />
        <div
          className="absolute top-0 bottom-0 left-[50%] w-px opacity-[0.035]"
          style={{ background: 'var(--ks-fg)' }}
        />
      </div>

      <div className="ks-container relative z-10 flex-1 flex flex-col justify-between">
        {/* Top block: Label + Display Title */}
        <div className="flex flex-col">
          {/* Top label row */}
          <div className="animate-fade-up delay-100 flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
            <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
              Yapay Zeka Müzik Projesi
            </span>
            <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
              —
            </span>
            <span className="text-label font-mono" style={{ color: 'var(--ks-subtle)' }}>
              {new Date().getFullYear()}
            </span>
          </div>

          {/* Main display title */}
          <div className="animate-fade-up delay-200">
            <h1
              className="text-[clamp(3.25rem,11.5vw,9.5rem)] leading-[0.92] tracking-tight"
              style={{ fontFamily: 'var(--ks-font-display)', color: 'var(--ks-fg)' }}
            >
              <span className="block">Kayıp</span>
              <span className="block" style={{ color: 'var(--ks-accent)' }}>
                Serotonin
              </span>
            </h1>
          </div>
        </div>

        {/* Lower block: Horizontal rule + release info + CTA */}
        <div className="flex flex-col mt-8 sm:mt-12 md:mt-16">
          {/* Horizontal rule */}
          <div
            className="animate-fade-in delay-300 mb-6 sm:mb-8 md:mb-10 ks-rule"
            aria-hidden="true"
          />

          {/* Bottom: release info + CTA */}
          <div className="animate-fade-up delay-400 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Current release info */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                Şu anki Yayın
              </span>
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-normal m-0"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                {currentRelease.title}
              </p>
              <span
                className="text-meta capitalize text-xs sm:text-sm"
                style={{ color: 'var(--ks-muted)' }}
              >
                {currentRelease.type === 'single'
                  ? 'Single'
                  : currentRelease.type === 'ep'
                  ? 'EP'
                  : 'Albüm'}
                {currentRelease.releaseDate && <> &mdash; {currentRelease.releaseDate}</>}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={triggerAudio}
                className="ks-btn ks-btn-primary justify-center group focus-visible:outline-[var(--ks-accent)] min-h-[46px]"
                aria-label="Önizlemeyi Başlat"
              >
                <span>▶ Önizleme Dinle</span>
              </button>

              {currentRelease.links.spotify && (
                <a
                  href={currentRelease.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ks-btn ks-btn-outline justify-center group focus-visible:outline-[var(--ks-accent)] min-h-[46px]"
                  aria-label={`${currentRelease.title} — Spotify'da dinle (yeni sekmede açılır)`}
                >
                  <span>Spotify</span>
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — vertical line */}
      <div
        className="animate-fade-in delay-600 absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-px h-16 origin-top"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--ks-border-strong))',
          }}
        />
      </div>
    </section>
  );
}
