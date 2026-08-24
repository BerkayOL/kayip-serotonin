'use client';

import { currentRelease } from '@/data/releases';

export function Hero() {
  const triggerAudio = () => {
    window.dispatchEvent(new CustomEvent('ks-play-audio'));
  };

  return (
    <section
      aria-label="Kayıp Serotonin — Hero"
      className="relative min-h-dvh flex flex-col justify-end pb-16 pt-28 overflow-hidden"
    >
      {/* Subtle background vertical line — editorial rhythm */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 bottom-0 left-[50%] w-px opacity-[0.035]"
          style={{ background: 'var(--ks-fg)' }}
        />
      </div>

      <div className="ks-container relative z-10">
        {/* Top label row */}
        <div className="animate-fade-up delay-100 flex items-center gap-4 mb-12 md:mb-16">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Yapay Zeka Müzik Projesi
          </span>
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            —
          </span>
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            {new Date().getFullYear()}
          </span>
        </div>

        {/* Main display title */}
        <div className="animate-fade-up delay-200">
          <h1
            className="text-display-xl leading-none"
            style={{ fontFamily: 'var(--ks-font-display)', color: 'var(--ks-fg)' }}
          >
            <span className="block">Kayıp</span>
            <span className="block" style={{ color: 'var(--ks-accent)' }}>
              Serotonin
            </span>
          </h1>
        </div>

        {/* Horizontal rule */}
        <div
          className="animate-fade-in delay-300 mt-10 md:mt-14 mb-10 md:mb-14 ks-rule"
          aria-hidden="true"
        />

        {/* Bottom: release info + CTA */}
        <div className="animate-fade-up delay-400 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Current release info */}
          <div className="flex flex-col gap-3">
            <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
              Şu an
            </span>
            <p
              className="text-display-md"
              style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
            >
              {currentRelease.title}
            </p>
            <span
              className="text-meta capitalize"
              style={{ color: 'var(--ks-muted)' }}
            >
              {currentRelease.type === 'single'
                ? 'Single'
                : currentRelease.type === 'ep'
                ? 'EP'
                : 'Albüm'}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={triggerAudio}
              className="ks-btn ks-btn-primary group focus-visible:outline-[var(--ks-accent)]"
              aria-label="Önizlemeyi Başlat"
            >
              <span>▶ Önizleme Dinle</span>
            </button>

            {currentRelease.links.spotify && (
              <a
                href={currentRelease.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="ks-btn ks-btn-outline group focus-visible:outline-[var(--ks-accent)]"
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

      {/* Scroll indicator — vertical line */}
      <div
        className="animate-fade-in delay-600 absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2"
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
