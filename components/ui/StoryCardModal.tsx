'use client';

import { useState } from 'react';
import { currentRelease } from '@/data/releases';

export function StoryCardModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAndDownload = () => {
    setIsGenerating(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsGenerating(false);
      return;
    }

    // 1. Background
    ctx.fillStyle = '#0d0b0b';
    ctx.fillRect(0, 0, 1080, 1920);

    // 2. Subtle radial gradient
    const gradient = ctx.createRadialGradient(540, 700, 100, 540, 700, 800);
    gradient.addColorStop(0, 'rgba(163, 82, 82, 0.22)');
    gradient.addColorStop(1, 'rgba(13, 11, 11, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // 3. Load artwork
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = currentRelease.artwork || '/artwork/sinirlariastin.jpg';

    img.onload = () => {
      // Draw artwork in center (760x760)
      const size = 760;
      const x = (1080 - size) / 2;
      const y = 380;
      ctx.drawImage(img, x, y, size, size);

      // Artwork subtle border
      ctx.strokeStyle = 'rgba(232, 221, 208, 0.25)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, size, size);

      // 4. Header Top Text
      ctx.fillStyle = 'rgba(232, 221, 208, 0.65)';
      ctx.font = '500 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '6px';
      ctx.fillText('KAYIP SEROTONİN', 540, 220);

      ctx.fillStyle = 'rgba(232, 221, 208, 0.45)';
      ctx.font = '400 22px sans-serif';
      ctx.letterSpacing = '3px';
      ctx.fillText('BERKAY AY & HALİM PARLAK', 540, 270);

      // 5. Track Title
      ctx.fillStyle = '#ede5db';
      ctx.font = '600 70px serif';
      ctx.fillText(currentRelease.title, 540, 1260);

      // 6. Real Lyric Quote
      ctx.fillStyle = 'rgba(232, 221, 208, 0.88)';
      ctx.font = 'italic 34px serif';
      ctx.fillText('“Sen beni bir gecede darmadağın bıraktın!”', 540, 1370);

      // 7. Footer metadata & Spotify callout
      ctx.fillStyle = 'rgba(232, 221, 208, 0.45)';
      ctx.font = '400 24px sans-serif';
      ctx.letterSpacing = '4px';
      ctx.fillText('SPOTIFY & TÜM DİJİTAL PLATFORMLARDA', 540, 1680);

      ctx.fillStyle = '#a35252';
      ctx.font = '500 24px sans-serif';
      ctx.fillText('kayipserotonin.com.tr', 540, 1740);

      // Trigger download
      const link = document.createElement('a');
      link.download = `Kayip-Serotonin-${currentRelease.slug}-Story.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsGenerating(false);
      setIsOpen(false);
    };

    img.onerror = () => {
      setIsGenerating(false);
      console.error('[StoryCardModal] Canvas image could not be loaded.');
    };
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="ks-btn ks-btn-outline text-xs inline-flex items-center gap-2"
        aria-label="Story Kartı Oluştur"
      >
        <span>📱 Story Kartı İndir</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div
            className="w-full max-w-md p-6 sm:p-8 border border-[var(--ks-border-strong)] bg-[var(--ks-surface)] rounded flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
                Instagram &amp; TikTok Story
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-[var(--ks-subtle)] hover:text-[var(--ks-fg)]"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium m-0" style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}>
                9:16 Hikaye Kartı Oluştur
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                Instagram ve TikTok hikayelerinde paylaşmak için yüksek çözünürlüklü estetik parça kartını tek tıkla cihazına indir.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs text-[var(--ks-subtle)] hover:text-[var(--ks-fg)]"
              >
                Vazgeç
              </button>
              <button
                type="button"
                disabled={isGenerating}
                onClick={generateAndDownload}
                className="ks-btn ks-btn-primary text-xs"
              >
                {isGenerating ? 'Oluşturuluyor...' : 'Görseli İndir (PNG)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
