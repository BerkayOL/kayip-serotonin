'use client';

import { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  className?: string;
  variant?: 'compact' | 'expanded';
}

export function AudioVisualizer({
  isPlaying,
  barCount = 16,
  className = '',
  variant = 'compact',
}: AudioVisualizerProps) {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    let phase = 0;

    const animate = () => {
      phase += 0.08;

      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        if (isPlaying) {
          // Harmonic wave simulation representing 97 BPM trap bounce & acoustic harmonics
          const wave1 = Math.sin(phase + i * 0.4) * 0.5 + 0.5;
          const wave2 = Math.cos(phase * 1.5 + i * 0.7) * 0.3 + 0.3;
          const noise = (Math.sin(phase * 3 + i * 1.2) + 1) * 0.2;
          const heightPercent = Math.min(100, Math.max(15, (wave1 + wave2 + noise) * 60));
          bar.style.height = `${heightPercent}%`;
          bar.style.opacity = `${0.4 + (heightPercent / 100) * 0.6}`;
        } else {
          bar.style.height = '15%';
          bar.style.opacity = '0.25';
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, barCount]);

  const heightClass = variant === 'expanded' ? 'h-12' : 'h-5';

  return (
    <div
      className={`flex items-end gap-[3px] select-none ${heightClass} ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) barsRef.current[i] = el;
          }}
          className="w-[3px] rounded-full transition-all duration-75"
          style={{
            height: '15%',
            backgroundColor: i % 3 === 0 ? 'var(--ks-accent)' : 'var(--ks-fg)',
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}
