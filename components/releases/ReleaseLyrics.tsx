'use client';

import { useState } from 'react';
import { currentRelease } from '@/data/releases';

export function ReleaseLyrics() {
  const [activeNoteIndex, setActiveNoteIndex] = useState<number | null>(null);
  const lyrics = currentRelease.lyrics || [];

  const triggerPlay = () => {
    window.dispatchEvent(new CustomEvent('ks-play-audio'));
  };

  return (
    <section
      aria-labelledby="lyrics-heading"
      className="ks-section border-t border-[var(--ks-border)] bg-[var(--ks-bg)]"
    >
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left Column: Label & Controls */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="md:sticky md:top-32 flex flex-col gap-6">
              <span id="lyrics-heading" className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                Sözler &amp; Anılar
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                Dizelerin üzerine gelerek parçanın yazılış anındaki hisleri ve notları keşfedin.
              </p>
              <button
                type="button"
                onClick={triggerPlay}
                className="ks-btn ks-btn-outline w-fit group"
              >
                <span>Önizlemeyi Çal</span>
                <span className="text-xs transition-transform group-hover:scale-125" aria-hidden="true">▶</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lyrics Lines */}
          <div className="md:col-span-9 lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {lyrics.map((line, index) => {
                const isHovered = activeNoteIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveNoteIndex((prev) => (prev === index ? null : index))}
                    onMouseEnter={() => setActiveNoteIndex(index)}
                    onMouseLeave={() => setActiveNoteIndex(null)}
                    className="relative group p-4 -mx-4 rounded border border-transparent hover:border-[var(--ks-border)] hover:bg-[var(--ks-surface)] transition-[background-color,border-color] duration-200 cursor-pointer"
                  >
                    <p
                      className="text-xl sm:text-2xl md:text-3xl leading-snug transition-colors duration-200 m-0"
                      style={{
                        fontFamily: 'var(--ks-font-display)',
                        color: isHovered ? 'var(--ks-accent)' : 'var(--ks-fg)',
                      }}
                    >
                      {line.text}
                    </p>

                    {/* Behind the lines note */}
                    {line.note && (
                      <div
                        className={[
                          'overflow-hidden transition-[max-height,opacity,margin] duration-300',
                          isHovered ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0',
                        ].join(' ')}
                      >
                        <p
                          className="text-xs sm:text-sm italic flex items-center gap-2 m-0"
                          style={{ color: 'var(--ks-muted)' }}
                        >
                          <span style={{ color: 'var(--ks-accent)' }}>●</span>
                          {line.note}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Credits Footer */}
            {currentRelease.credits && (
              <div
                className="mt-8 pt-6 border-t border-[var(--ks-border)] grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                <div>
                  <span className="text-label block mb-1" style={{ color: 'var(--ks-subtle)' }}>
                    Prodüksiyon
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--ks-fg)' }}>
                    {currentRelease.credits.production}
                  </span>
                </div>
                <div>
                  <span className="text-label block mb-1" style={{ color: 'var(--ks-subtle)' }}>
                    Söz &amp; Beste
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--ks-fg)' }}>
                    {currentRelease.credits.lyrics}
                  </span>
                </div>
                <div>
                  <span className="text-label block mb-1" style={{ color: 'var(--ks-subtle)' }}>
                    Vokal
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--ks-fg)' }}>
                    {currentRelease.credits.vocals}
                  </span>
                </div>
                <div>
                  <span className="text-label block mb-1" style={{ color: 'var(--ks-subtle)' }}>
                    Mix &amp; Master
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'var(--ks-fg)' }}>
                    {currentRelease.credits.mixMaster}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
