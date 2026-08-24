import { artist } from '@/data/artist';
import { currentRelease, releases } from '@/data/releases';
import { siteMetadata } from '@/lib/metadata';

interface JsonLdProps {
  type?: 'website' | 'musicGroup' | 'musicRecording' | 'breadcrumb';
  pagePath?: string;
  pageTitle?: string;
}

export function JsonLd({
  type = 'musicGroup',
  pagePath = '',
  pageTitle = '',
}: JsonLdProps) {
  const baseUrl = siteMetadata.url;

  // Social & Streaming Profile URLs for sameAs
  const sameAs = [
    artist.social.spotify,
    artist.social.instagram,
    artist.social.tiktok,
    artist.social.youtube,
    currentRelease.links.appleMusic,
    currentRelease.links.tidal,
  ].filter(Boolean);

  // 1. MusicGroup / Artist Schema
  const musicGroupSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    '@id': `${baseUrl}/#artist`,
    name: artist.name,
    description: artist.description,
    url: baseUrl,
    logo: `${baseUrl}${artist.logo}`,
    image: `${baseUrl}${currentRelease.artwork || artist.logo}`,
    genre: ['Alternative', 'Indie Trap', 'Emotional Rap', 'Melancholic Indie'],
    member: artist.members.map((member) => ({
      '@type': 'Person',
      name: member,
    })),
    sameAs,
    track: releases.map((rel) => ({
      '@type': 'MusicRecording',
      name: rel.title,
      url: `${baseUrl}/releases/${rel.slug}`,
      image: `${baseUrl}${rel.artwork}`,
      audio: rel.audioPreview ? `${baseUrl}${rel.audioPreview}` : undefined,
      byArtist: {
        '@type': 'MusicGroup',
        name: artist.name,
      },
    })),
  };

  // 2. MusicRecording Schema for Sınırları Aştın
  const musicRecordingSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: currentRelease.title,
    url: `${baseUrl}/releases/${currentRelease.slug}`,
    image: `${baseUrl}${currentRelease.artwork}`,
    audio: currentRelease.audioPreview ? `${baseUrl}${currentRelease.audioPreview}` : undefined,
    duration: 'PT2M34S',
    genre: 'Alternative',
    inLanguage: 'tr',
    byArtist: {
      '@type': 'MusicGroup',
      name: artist.name,
      url: baseUrl,
      sameAs,
    },
    recordingOf: {
      '@type': 'MusicComposition',
      name: currentRelease.title,
      composer: artist.members.map((m) => ({ '@type': 'Person', name: m })),
      lyricist: artist.members.map((m) => ({ '@type': 'Person', name: m })),
      lyrics: currentRelease.lyrics
        ? {
            '@type': 'MusicLyrics',
            text: currentRelease.lyrics.map((l) => l.text).join('\n'),
          }
        : undefined,
    },
  };

  // 3. WebSite Schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: siteMetadata.name,
    description: siteMetadata.description,
    publisher: {
      '@type': 'MusicGroup',
      name: artist.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${artist.logo}`,
      },
    },
    inLanguage: 'tr-TR',
  };

  // 4. Breadcrumb Schema
  const breadcrumbSchema = pagePath
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: pageTitle || pagePath.replace('/', ''),
            item: `${baseUrl}${pagePath}`,
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
      />
      {type === 'musicRecording' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicRecordingSchema),
          }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
}
