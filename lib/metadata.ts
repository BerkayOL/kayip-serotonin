import type { Metadata } from 'next';
import { currentRelease } from '@/data/releases';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kayipserotonin.com.tr';

export const siteMetadata = {
  name: 'Kayıp Serotonin',
  url: siteUrl,
  description:
    'Kayıp Serotonin — Berkay Ay ve Halim Parlak tarafından kurulan bağımsız müzik projesi. İlk Single: Sınırları Aştın.',
  locale: 'tr_TR',
  ogImage: `${siteUrl}/artwork/sinirlariastin.jpg`,
  keywords: [
    'Kayıp Serotonin',
    'Sınırları Aştın',
    'Berkay Ay',
    'Halim Parlak',
    'Darmadağın Bıraktın',
    'Türkçe Alternatif Müzik',
    'Bağımsız Müzik Projesi',
    'Melankolik Müzik',
    'Emotional Trap',
    'Indie Müzik',
    'Spotify Kayıp Serotonin',
  ],
} as const;

export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage,
  type = 'website' as const,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: 'website' | 'music.song' | 'music.album';
}): Metadata {
  const pageTitle = title
    ? `${title} — ${siteMetadata.name}`
    : `${siteMetadata.name} — Bağımsız Müzik Projesi`;

  const pageDescription = description ?? siteMetadata.description;
  const canonical = `${siteMetadata.url}${path}`;
  const image = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteMetadata.url}${ogImage}`) : siteMetadata.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteMetadata.keywords],
    authors: [
      { name: 'Berkay Ay', url: 'https://www.instagram.com/kayipserotonin.music/' },
      { name: 'Halim Parlak', url: 'https://www.instagram.com/kayipserotonin.music/' },
    ],
    creator: 'Kayıp Serotonin',
    publisher: 'Kayıp Serotonin',
    metadataBase: new URL(siteMetadata.url),
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type: (type === 'website' ? 'website' : 'music.song') as 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${pageTitle} — Görsel`,
          type: 'image/jpeg',
        },
      ],
      audio: currentRelease.audioPreview ? [`${siteMetadata.url}${currentRelease.audioPreview}`] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
      creator: '@kayipserotonin',
    },
  };
}
