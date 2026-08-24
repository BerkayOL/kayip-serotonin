import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kayipserotonin.com.tr';

export const siteMetadata = {
  name: 'Kayıp Serotonin',
  url: siteUrl,
  description:
    'Kayıp Serotonin bağımsız bir müzik projesidir. Şu an: Sınırları Aştın.',
  locale: 'tr_TR',
  ogImage: `${siteUrl}/images/og-default.jpg`,
} as const;

export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} — ${siteMetadata.name}`
    : siteMetadata.name;

  const pageDescription = description ?? siteMetadata.description;
  const canonical = `${siteMetadata.url}${path}`;
  const image = ogImage ?? siteMetadata.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteMetadata.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
  };
}
