import { ExternalLink } from '@/components/ui/ExternalLink';
import {
  platformIcons,
  platformLabels,
  type PlatformKey,
} from '@/components/ui/PlatformIcon';
import type { ReleaseLinks } from '@/types';

const platformOrder: PlatformKey[] = [
  'spotify',
  'appleMusic',
  'youtubeMusic',
  'youtube',
  'tidal',
];

interface PlatformLinksProps {
  links: ReleaseLinks;
  releaseTitle: string;
}

// P4 Fix: removed useState hover state from each PlatformRow.
// Pure CSS group hover -- zero JS state updates on mouse events.
function PlatformRow({
  platformKey,
  href,
  releaseTitle,
}: {
  platformKey: PlatformKey;
  href?: string;
  releaseTitle: string;
}) {
  const Icon = platformIcons[platformKey];
  const label = platformLabels[platformKey];

  if (href) {
    return (
      <ExternalLink
        href={href}
        aria-label={`${releaseTitle} — ${label}'da dinle (yeni sekmede açılır)`}
        className="group flex items-center justify-between gap-4 py-4 border-b border-[var(--ks-border)] transition-colors duration-200 focus-visible:outline-[var(--ks-accent)] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="transition-colors duration-200" style={{ color: 'var(--ks-muted)' }}>
            <Icon />
          </span>
          <span
            className="text-sm font-medium tracking-wide transition-colors duration-200 group-hover:text-[var(--ks-fg)]"
            style={{ color: 'var(--ks-muted)', fontFamily: 'var(--ks-font-ui)' }}
          >
            {label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-label transition-colors duration-200" style={{ color: 'var(--ks-subtle)' }}>
            Dinle
          </span>
          <span
            className="text-xs transition-transform duration-200 group-hover:translate-x-0.5"
            style={{ color: 'var(--ks-subtle)' }}
            aria-hidden="true"
          >
            {'↗'}
          </span>
        </div>
      </ExternalLink>
    );
  }

  return (
    <div
      className="flex items-center justify-between gap-4 py-4 border-b border-[var(--ks-border)] opacity-35"
      aria-label={`${label} — yakında`}
      title={`${label} yakında eklenecek`}
    >
      <div className="flex items-center gap-3">
        <span style={{ color: 'var(--ks-subtle)' }}><Icon /></span>
        <span
          className="text-sm font-medium tracking-wide"
          style={{ color: 'var(--ks-subtle)', fontFamily: 'var(--ks-font-ui)' }}
        >
          {label}
        </span>
      </div>
      <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>Yakında</span>
    </div>
  );
}

export function PlatformLinks({ links, releaseTitle }: PlatformLinksProps) {
  return (
    <div className="flex flex-col">
      <span className="text-label mb-4" style={{ color: 'var(--ks-subtle)' }}>
        Platformlar
      </span>
      <div className="flex flex-col">
        {platformOrder.map((key) => (
          <PlatformRow
            key={key}
            platformKey={key}
            href={links[key]}
            releaseTitle={releaseTitle}
          />
        ))}
      </div>
    </div>
  );
}