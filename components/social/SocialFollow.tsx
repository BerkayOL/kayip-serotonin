import { artist } from '@/data/artist';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface SocialPlatform {
  key: keyof typeof artist.social;
  label: string;
  description: string;
}

const socialPlatforms: SocialPlatform[] = [
  { key: 'spotify', label: 'Spotify', description: 'Tüm Şarkılar' },
  { key: 'instagram', label: 'Instagram', description: 'Görsel & Hikaye' },
  { key: 'tiktok', label: 'TikTok', description: 'Kısa Videolar' },
  { key: 'youtube', label: 'YouTube', description: 'Müzik & Videolar' },
  { key: 'x', label: 'X', description: 'Güncellemeler' },
];

export function SocialFollow() {
  const confirmedPlatforms = socialPlatforms.filter(
    ({ key }) => artist.social[key]
  );

  // If no social links are confirmed yet, render nothing
  if (confirmedPlatforms.length === 0) return null;

  // Responsive column layout adapting perfectly to item count
  const gridCols =
    confirmedPlatforms.length === 1
      ? 'grid-cols-1 max-w-md'
      : confirmedPlatforms.length === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : confirmedPlatforms.length === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section
      aria-labelledby="social-heading"
      className="ks-section border-t border-[var(--ks-border)]"
    >
      <div className="ks-container">
        <div className="mb-10 md:mb-14">
          <h2
            id="social-heading"
            className="text-label"
            style={{ color: 'var(--ks-subtle)' }}
          >
            Takip Et & Dinle
          </h2>
        </div>

        <ul className={`grid ${gridCols} gap-6 list-none m-0 p-0`}>
          {confirmedPlatforms.map(({ key, label, description }) => {
            const href = artist.social[key];
            if (!href) return null;
            return (
              <li key={key} className="flex">
                <ExternalLink
                  href={href}
                  aria-label={`${label}'da takip et (yeni sekmede açılır)`}
                  className="w-full flex flex-col justify-between gap-10 p-8 border border-[var(--ks-border)] bg-[var(--ks-surface)] hover:border-[var(--ks-accent)] hover:bg-[var(--ks-surface-raised)] transition-[border-color,background-color] duration-300 focus-visible:outline-[var(--ks-accent)] rounded-none group"
                >
                  <span
                    className="text-label group-hover:text-[var(--ks-fg)] transition-colors duration-200"
                    style={{ color: 'var(--ks-subtle)' }}
                  >
                    {description}
                  </span>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-display-md group-hover:text-[var(--ks-accent)] transition-colors duration-200"
                      style={{
                        color: 'var(--ks-fg)',
                        fontFamily: 'var(--ks-font-display)',
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xl opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform] duration-200"
                      style={{ color: 'var(--ks-fg)' }}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </ExternalLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
