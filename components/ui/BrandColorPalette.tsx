'use client';

import { useState } from 'react';

const brandColors = [
  { hex: '#0D0B0B', name: 'Gece Karası', use: 'Arka Plan', textColor: 'text-white' },
  { hex: '#EDE5DB', name: 'Kemik Beyazı', use: 'Ana Tipografi', textColor: 'text-black' },
  { hex: '#A35252', name: 'Kayıp Bordo', use: 'Vurgu / Accent', textColor: 'text-white' },
  { hex: '#1C1717', name: 'Karanlık Yüzey', use: 'Kart Zeminleri', textColor: 'text-white' },
];

export function BrandColorPalette() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex).catch(() => {});
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {brandColors.map((color) => (
        <button
          key={color.hex}
          type="button"
          onClick={() => copyToClipboard(color.hex)}
          aria-label={`${color.name} renk kodunu kopyala: ${color.hex}`}
          className="flex flex-col gap-3 cursor-pointer group text-left"
        >
          <div
            className="w-full aspect-square border border-[var(--ks-border)] group-hover:border-[var(--ks-accent)] transition-colors duration-200"
            style={{ backgroundColor: color.hex }}
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium" style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-ui)' }}>
              {color.name}
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--ks-subtle)' }}>
              {copiedHex === color.hex ? '✓ Kopyalandı' : color.hex}
            </span>
            <span className="text-[0.6875rem]" style={{ color: 'var(--ks-subtle)' }}>
              {color.use}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
