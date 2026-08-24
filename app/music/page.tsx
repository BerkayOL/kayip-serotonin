import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { releases } from '@/data/releases';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Müzik',
  description: 'Kayıp Serotonin\'in tüm yayınları — single, EP ve albümler.',
  path: '/music',
});

export default function MusicPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Page header */}
      <div className="ks-container mb-16 md:mb-24">
        <div className="flex flex-col gap-4 border-b border-[var(--ks-border)] pb-10">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Diskografi
          </span>
          <h1
            className="text-display-lg"
            style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
          >
            Müzik
          </h1>
        </div>
      </div>

      {/* Release list */}
      <div className="ks-container">
        {releases.length === 0 ? (
          <p className="text-meta" style={{ color: 'var(--ks-muted)' }}>
            Henüz yayın yok.
          </p>
        ) : (
          <ul className="list-none m-0 p-0 flex flex-col gap-0">
            {releases.map((release, i) => (
              <li key={release.slug}>
                <Link
                  href={`/releases/${release.slug}`}
                  className="group flex flex-col gap-6 md:flex-row md:items-center md:gap-10 py-10 border-b border-[var(--ks-border)] hover:bg-[var(--ks-surface)] transition-colors duration-200 focus-visible:outline-[var(--ks-accent)] px-4 -mx-4 rounded"
                >
                  {/* Index number */}
                  <span
                    className="text-label hidden md:block tabular-nums w-8 shrink-0"
                    style={{ color: 'var(--ks-subtle)' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Artwork thumbnail */}
                  <div
                    className="relative w-20 h-20 shrink-0 overflow-hidden"
                    style={{ background: 'var(--ks-surface-raised)' }}
                  >
                    {release.artwork ? (
                      <Image
                        src={release.artwork}
                        alt={release.artworkAlt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <span
                      className="text-label capitalize"
                      style={{ color: 'var(--ks-subtle)' }}
                    >
                      {release.type === 'single' ? 'Single' : release.type === 'ep' ? 'EP' : 'Albüm'}
                      {release.releaseDate && <> &mdash; {release.releaseDate}</>}
                    </span>
                    <h2
                      className="text-display-md truncate"
                      style={{
                        color: 'var(--ks-fg)',
                        fontFamily: 'var(--ks-font-display)',
                      }}
                    >
                      {release.title}
                    </h2>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="text-label transition-colors duration-200"
                      style={{ color: 'var(--ks-subtle)' }}
                    >
                      Detay
                    </span>
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: 'var(--ks-subtle)' }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
