import type { Metadata, Viewport } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { AudioPlayer } from '@/components/music/AudioPlayer';
import { siteMetadata } from '@/lib/metadata';

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0d0b0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: siteMetadata.name,
    template: `%s — ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    title: siteMetadata.name,
    description: siteMetadata.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.name,
    description: siteMetadata.description,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="flex flex-col min-h-dvh">
        <a href="#main-content" className="skip-link">
          İçeriğe geç
        </a>
        <SiteNav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <AudioPlayer />
        <SiteFooter />
      </body>
    </html>
  );
}
