'use client';

interface AudioVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  className?: string;
  variant?: 'compact' | 'expanded';
}

// CSS-animation-only visualizer — zero JS DOM writes during playback.
// Each bar uses a unique animation-delay to create staggered wave effect.
// animation-play-state is toggled via the data-playing attribute, which
// is compositor-friendly (no layout, no paint).
export function AudioVisualizer({
  isPlaying,
  barCount = 16,
  className = '',
  variant = 'compact',
}: AudioVisualizerProps) {
  const heightClass = variant === 'expanded' ? 'h-12' : 'h-5';

  return (
    <div
      className={`flex items-end gap-[3px] select-none ${heightClass} ${className}`}
      aria-hidden="true"
      data-playing={isPlaying ? 'true' : 'false'}
    >
      {Array.from({ length: barCount }).map((_, i) => {
        // Stagger delay creates wave-like motion across bars.
        // Delay range: 0ms – 700ms, distributed across barCount.
        const delayMs = Math.round((i / Math.max(barCount - 1, 1)) * 700);
        // Duration varies slightly per bar for organic feel.
        const durationMs = 600 + (i % 4) * 80;
        const isAccent = i % 3 === 0;

        return (
          <div
            key={i}
            className="ks-viz-bar w-[3px] rounded-full"
            style={{
              backgroundColor: isAccent ? 'var(--ks-accent)' : 'var(--ks-fg)',
              animationDelay: `${delayMs}ms`,
              animationDuration: `${durationMs}ms`,
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          />
        );
      })}
    </div>
  );
}
