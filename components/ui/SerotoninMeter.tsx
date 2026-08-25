'use client';

import { useSyncExternalStore } from 'react';

interface MeterState {
  time: string;
  level: number;
  status: string;
}

function computeMetrics(): MeterState {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  let level: number;
  let status: string;

  if (hours >= 0 && hours < 6) {
    level = 10 + Math.floor(hours * 2.5);
    status = 'Karanlık / Melankoli';
  } else if (hours >= 6 && hours < 12) {
    level = 40 + Math.floor((hours - 6) * 4);
    status = 'Uyanış / Sessizlik';
  } else if (hours >= 12 && hours < 18) {
    level = 65 - Math.floor((hours - 12) * 3);
    status = 'Gün Işığı / Hatıralar';
  } else {
    level = 45 - Math.floor((hours - 18) * 5);
    status = 'Akşam / İçe Dönüş';
  }

  return { time, level, status };
}

let cachedMetrics: MeterState = computeMetrics();
let lastMinute = new Date().getMinutes();

function subscribe(callback: () => void) {
  const interval = setInterval(() => {
    const currentMin = new Date().getMinutes();
    if (currentMin !== lastMinute) {
      lastMinute = currentMin;
      cachedMetrics = computeMetrics();
      callback();
    }
  }, 1000);
  return () => clearInterval(interval);
}

function getSnapshot(): MeterState {
  return cachedMetrics;
}

function getServerSnapshot(): null {
  return null;
}

export function SerotoninMeter() {
  const metrics = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!metrics) return null;

  const { time, level, status } = metrics;

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

