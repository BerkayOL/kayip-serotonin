'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { currentRelease } from '@/data/releases';
import { PlatformLinks } from './PlatformLinks';
import { StoryCardModal } from '@/components/ui/StoryCardModal';
import { AudioVisualizer } from '@/components/music/AudioVisualizer';

export function ReleaseSection() {
  const release = currentRelease;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    window.addEventListener('ks-play-audio', handlePlay);
    return () => {
      window.removeEventListener('ks-play-audio', handlePlay);
    };
  }, []);

  const triggerPlay = () => {
    window.dispatchEvent(new CustomEvent('ks-play-audio'));
    setIsPlaying(true);
  };

  return (
    <section
      id="release"
      aria-labelledby="release-heading"
      className="ks-section border-t border-[var(--ks-border)]"
    >
      <div className="ks-container">
        {/* Section label */}
        <div className="mb-10 md:mb-16 flex items-center justify-between">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Şu Anki Yayın
          </span>
          <StoryCardModal />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 items-start">
          {/* Artwork Frame */}
          <div className="relative w-full aspect-square overflow-hidden bg-[var(--ks-surface)] border border-[var(--ks-border)] group rounded-sm">
            {release.artwork ? (
              <>
                <Image
                  src={release.artwork}
                  alt={release.artworkAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Overlay Play Button on hover */}
                <button
                  type="button"
                  onClick={triggerPlay}
                  aria-label="Önizlemeyi Başlat"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                >
                  <span className="w-16 h-16 rounded-full bg-[var(--ks-fg)] text-[var(--ks-bg)] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </span>
                </button>
              </>
            ) : (
              <div className="absolute inset-0 flex items-end p-8" aria-hidden="true">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  {release.title}
                </span>
              </div>
            )}
          </div>

          {/* Release metadata */}
          <div className="flex flex-col gap-8 md:pt-4">
            {/* Title & Type */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-label capitalize" style={{ color: 'var(--ks-subtle)' }}>
                  {release.type === 'single' ? 'Single' : release.type === 'ep' ? 'EP' : 'Albüm'}
                  {release.releaseDate && <> &mdash; {release.releaseDate}</>}
                </span>
                <AudioVisualizer isPlaying={isPlaying} barCount={12} variant="compact" />
              </div>
              <h2
                id="release-heading"
                className="text-display-lg"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                {release.title}
              </h2>
            </div>

            {/* Description */}
            {release.description && (
              <p
                className="leading-relaxed max-w-[48ch]"
                style={{ color: 'var(--ks-muted)' }}
              >
                {release.description}
              </p>
            )}

            {/* Direct preview trigger */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={triggerPlay}
                className="ks-btn ks-btn-primary text-xs"
              >
                <span>▶ Önizlemeyi Başlat</span>
              </button>
            </div>

            {/* Divider */}
            <div className="ks-rule" aria-hidden="true" />

            {/* Platform links */}
            <PlatformLinks
              links={release.links}
              releaseTitle={release.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
