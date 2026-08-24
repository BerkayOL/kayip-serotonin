import Link from 'next/link';
import { impactCampaign } from '@/data/social-impact';

export function ImpactSection() {
  const { percentage, period, beneficiary, description, basis } =
    impactCampaign;

  return (
    <section
      aria-labelledby="impact-heading"
      className="ks-section border-t border-[var(--ks-border)]"
    >
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Label */}
          <div className="md:col-span-3 lg:col-span-2">
            <span
              id="impact-heading"
              className="text-label"
              style={{ color: 'var(--ks-subtle)' }}
            >
              Sosyal Etki
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9 lg:col-span-8 flex flex-col gap-10">
            {/* Big number */}
            <div
              className="flex items-baseline gap-5"
              aria-label={`Net sanatçı gelirinin yüzde ${percentage}'si bağış`}
            >
              <span
                className="text-display-xl tabular-nums"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
                aria-hidden="true"
              >
                %{percentage}
              </span>
              <span
                className="text-lg leading-snug max-w-[22ch]"
                style={{ color: 'var(--ks-muted)' }}
              >
                net sanatçı geliri
                <br />
                bağış olarak aktarılıyor
              </span>
            </div>

            {/* Description */}
            <p
              className="leading-relaxed max-w-[58ch]"
              style={{ color: 'var(--ks-muted)' }}
            >
              {description}
            </p>

            {/* Campaign period */}
            <div
              className="flex flex-col gap-2 border-l-2 pl-5"
              style={{ borderColor: 'var(--ks-accent)' }}
            >
              <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                Kampanya Dönemi
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--ks-fg)' }}
              >
                {period.start} — {period.end}
              </span>
            </div>

            {/* Beneficiary */}
            <div className="flex flex-col gap-2">
              <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                Bağış Yapılan Kurum
              </span>
              {beneficiary ? (
                <span className="text-sm font-medium" style={{ color: 'var(--ks-fg)' }}>
                  {beneficiary}
                </span>
              ) : (
                <span className="text-sm italic" style={{ color: 'var(--ks-subtle)' }}>
                  Kurum onaylandıktan sonra buraya eklenecek.
                </span>
              )}
            </div>

            {/* Calculation basis */}
            <p
              className="text-meta max-w-[52ch]"
              style={{ color: 'var(--ks-subtle)' }}
            >
              {basis}
            </p>

            {/* Link to detail page */}
            <Link
              href="/social-impact"
              className="inline-flex items-center gap-2 group w-fit focus-visible:outline-[var(--ks-accent)]"
            >
              <span
                className="text-label transition-colors duration-200"
                style={{ color: 'var(--ks-muted)' }}
              >
                Detaylar ve şeffaflık
              </span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--ks-subtle)' }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
