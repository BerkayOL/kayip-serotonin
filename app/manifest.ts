import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kayıp Serotonin — Resmi Web Sitesi',
    short_name: 'Kayıp Serotonin',
    description: 'Berkay Ay ve Halim Parlak tarafından kurulan bağımsız müzik projesi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0b0b',
    theme_color: '#0d0b0b',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
