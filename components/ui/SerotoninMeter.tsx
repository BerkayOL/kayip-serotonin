'use client';

import { useState, useEffect } from 'react';

export function SerotoninMeter() {
  const [time, setTime] = useState('');
  const [level, setLevel] = useState(24);
  const [status, setStatus] = useState('Gece Kuşağı');

  useEffect(() => {
    const updateMetrics = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      setTime(formatted);

      // Creative serotonin level based on natural circadian & emotional night rhythms
      if (hours >= 0 && hours < 6) {
        setLevel(10 + Math.floor(hours * 2.5));
        setStatus('Karanlık / Melankoli');
      } else if (hours >= 6 && hours < 12) {
        setLevel(40 + Math.floor((hours - 6) * 4));
        setStatus('Uyanış / Sessizlik');
      } else if (hours >= 12 && hours < 18) {
        setLevel(65 - Math.floor((hours - 12) * 3));
        setStatus('Gün Işığı / Hatıralar');
      } else {
        setLevel(45 - Math.floor((hours - 18) * 5));
        setStatus('Akşam / İçe Dönüş');
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div
      className="hidden sm:inline-flex items-center gap-2.5 px-3 py-1.5 border border-[var(--ks-border)] bg-[var(--ks-surface)] rounded text-xs select-none"
      title={`Şu anki saat: ${time} — Duygusal Serotonin Endeksi: %${level}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--ks-accent)] animate-pulse" aria-hidden="true" />
      <span className="font-mono text-[var(--ks-subtle)]">{time}</span>
      <span className="text-[var(--ks-border-strong)]">|</span>
      <span className="font-medium" style={{ color: 'var(--ks-fg)' }}>
        Serotonin: %{level}
      </span>
      <span className="text-[var(--ks-subtle)] text-[0.6875rem] hidden lg:inline">
        ({status})
      </span>
    </div>
  );
}
