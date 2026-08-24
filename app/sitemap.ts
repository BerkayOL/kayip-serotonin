import type { MetadataRoute } from 'next';
import { releases } from '@/data/releases';
import { siteMetadata } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.url;

  const staticRoutes = ['', '/music', '/story', '/social-impact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const releaseRoutes = releases.map((release) => ({
    url: `${baseUrl}/releases/${release.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...releaseRoutes];
}
