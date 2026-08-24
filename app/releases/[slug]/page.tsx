import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { releases } from '@/data/releases';
import { PlatformLinks } from '@/components/releases/PlatformLinks';
import { ReleaseLyrics } from '@/components/releases/ReleaseLyrics';
import { StoryCardModal } from '@/components/ui/StoryCardModal';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);

  if (!release) {
    return generatePageMetadata({ title: 'Bulunamadı', path: '/releases' });
  }

  return generatePageMetadata({
    title: release.title,
    description: release.description ?? `${release.title} — Kayıp Serotonin`,
    path: `/releases/${release.slug}`,
    ogImage: release.artwork ?? undefined,
    type: 'music.song',
  });
}

export default async function ReleasePage({ params }: Props) {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);

  if (!release) notFound();

  return (
    <div className="pt-28 pb-24">
      <JsonLd
        type="musicRecording"
        pagePath={`/releases/${release.slug}`}
        pageTitle={release.title}
      />
      {/* Back link & Actions */}
      <div className="ks-container mb-10 flex items-center justify-between">
        <Link
          href="/music"
          className="inline-flex items-center gap-2 group focus-visible:outline-[var(--ks-accent)]"
        >
          <span
            className="transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
            style={{ color: 'var(--ks-subtle)' }}
          >
            ←
          </span>
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Tüm Yayınlar
          </span>
        </Link>

        <StoryCardModal />
      </div>

      {/* Main grid */}
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left — Artwork */}
          <div className="flex flex-col gap-6">
            <div
              className="relative w-full aspect-square overflow-hidden border border-[var(--ks-border)]"
              style={{ background: 'var(--ks-surface)' }}
            >
              {release.artwork ? (
                <Image
                  src={release.artwork}
                  alt={release.artworkAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : null}
            </div>

            {/* Caption */}
            <p className="text-meta" style={{ color: 'var(--ks-subtle)' }}>
              {release.artworkAlt}
            </p>
          </div>

          {/* Right — Metadata & actions */}
          <div className="flex flex-col gap-10 md:pt-4">
            {/* Type + date */}
            <div className="flex flex-col gap-2">
              <span className="text-label capitalize" style={{ color: 'var(--ks-subtle)' }}>
                {release.type === 'single' ? 'Single' : release.type === 'ep' ? 'EP' : 'Albüm'}
                {release.releaseDate && <> &mdash; {release.releaseDate}</>}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-display-lg"
              style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
            >
              {release.title}
            </h1>

            {/* Description */}
            {release.description && (
              <p className="leading-relaxed max-w-[48ch]" style={{ color: 'var(--ks-muted)' }}>
                {release.description}
              </p>
            )}

            {/* Divider */}
            <div className="ks-rule" aria-hidden="true" />

            {/* Platform links */}
            <PlatformLinks
              links={release.links}
              releaseTitle={release.title}
            />
          </div>
        </div>
      </div>

      {/* Lyrics & Behind the Lines section */}
      <div className="mt-20">
        <ReleaseLyrics />
      </div>
    </div>
  );
}
