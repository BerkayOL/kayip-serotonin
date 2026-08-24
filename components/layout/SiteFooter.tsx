import Link from 'next/link';
import Image from 'next/image';
import { artist } from '@/data/artist';
import { ExternalLink } from '@/components/ui/ExternalLink';

const footerLinks = [
  { href: '/music', label: 'Müzik' },
  { href: '/story', label: 'Hikaye' },
  { href: '/social-impact', label: 'Sosyal Etki' },
  { href: '/press', label: 'Basın Kiti (EPK)' },
  { href: '/contact', label: 'İletişim & İş Birliği' },
];

const socialPlatforms = [
  { key: 'spotify' as const, label: 'Spotify' },
  { key: 'instagram' as const, label: 'Instagram' },
  { key: 'tiktok' as const, label: 'TikTok' },
  { key: 'youtube' as const, label: 'YouTube' },
  { key: 'x' as const, label: 'X' },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--ks-border)] mt-auto bg-[var(--ks-bg)]"
    >
      <div className="ks-container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand & Founders */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 w-fit group focus-visible:outline-[var(--ks-accent)]"
              aria-label="Kayıp Serotonin — Ana sayfaya git"
            >
              <Image
                src={artist.logo}
                alt={artist.logoAlt}
                width={28}
                height={28}
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              />
              <span
                className="text-base tracking-wide"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                Kayıp Serotonin
              </span>
            </Link>
            <p className="text-meta max-w-[280px]" style={{ color: 'var(--ks-subtle)' }}>
              Berkay Ay &amp; Halim Parlak
              <br />
              Bağımsız müzik projesi.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigasyon">
            <span className="text-label block mb-3" style={{ color: 'var(--ks-subtle)' }}>
              Menü
            </span>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--ks-fg)] focus-visible:outline-[var(--ks-accent)]"
                    style={{ color: 'var(--ks-muted)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          {Object.values(artist.social).some(Boolean) && (
            <nav aria-label="Sosyal medya linkleri">
              <span className="text-label block mb-3" style={{ color: 'var(--ks-subtle)' }}>
                Bağlantılar
              </span>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {socialPlatforms.map(({ key, label }) => {
                  const href = artist.social[key];
                  if (!href) return null;
                  return (
                    <li key={key}>
                      <ExternalLink
                        href={href}
                        aria-label={`${label}'da takip et`}
                        className="text-sm transition-colors duration-200 hover:text-[var(--ks-fg)] focus-visible:outline-[var(--ks-accent)]"
                        style={{ color: 'var(--ks-muted)' }}
                        showIndicator
                      >
                        {label}
                      </ExternalLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--ks-border)] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-meta" style={{ color: 'var(--ks-subtle)' }}>
            © {currentYear} Kayıp Serotonin. Tüm hakları saklıdır.
          </p>
          <p className="text-meta" style={{ color: 'var(--ks-subtle)' }}>
            Teknoloji ve duygunun kesişimi.
          </p>
        </div>
      </div>
    </footer>
  );
}
