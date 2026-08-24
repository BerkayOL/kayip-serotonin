import { impactCampaign } from '@/data/social-impact';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sosyal Etki',
  description:
    'Kayıp Serotonin olarak net sanatçı gelirinin %50\'sini bağışlıyoruz. Kampanya detayları ve şeffaflık.',
  path: '/social-impact',
});

export default function SocialImpactPage() {
  const { percentage, period, beneficiary, description, basis } = impactCampaign;

  return (
    <div className="pt-32 pb-24">
      <JsonLd type="website" pagePath="/social-impact" pageTitle="Sosyal Etki" />
      {/* Page header */}
      <div className="ks-container mb-16 md:mb-24">
        <div className="flex flex-col gap-4 border-b border-[var(--ks-border)] pb-10">
          <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Şeffaflık & Sorumluluk
          </span>
          <h1
            className="text-display-lg"
            style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
          >
            Sosyal Etki
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left label */}
          <div className="md:col-span-3 lg:col-span-2">
            <span
              className="text-label sticky top-32"
              style={{ color: 'var(--ks-subtle)' }}
            >
              Taahhüt
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9 lg:col-span-8 flex flex-col gap-12">
            {/* Hero number */}
            <div className="flex items-baseline gap-6">
              <span
                className="text-display-xl tabular-nums"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
                aria-label={`Yüzde ${percentage}`}
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

            {/* Divider */}
            <div className="ks-rule" aria-hidden="true" />

            {/* Campaign details grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Period */}
              <div
                className="flex flex-col gap-3 border-l-2 pl-5"
                style={{ borderColor: 'var(--ks-accent)' }}
              >
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Kampanya Dönemi
                </span>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-base font-medium"
                    style={{ color: 'var(--ks-fg)' }}
                  >
                    {period.start}
                  </span>
                  <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                    —
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{ color: 'var(--ks-fg)' }}
                  >
                    {period.end}
                  </span>
                </div>
              </div>

              {/* Beneficiary */}
              <div className="flex flex-col gap-3">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Bağış Yapılan Kurum
                </span>
                {beneficiary ? (
                  <span
                    className="text-base font-medium"
                    style={{ color: 'var(--ks-fg)' }}
                  >
                    {beneficiary}
                  </span>
                ) : (
                  <span
                    className="text-sm italic"
                    style={{ color: 'var(--ks-subtle)' }}
                  >
                    Onaylandıktan sonra buraya eklenecek.
                  </span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="ks-rule" aria-hidden="true" />

            {/* Transparency section */}
            <div className="flex flex-col gap-8">
              <h2
                className="text-display-md"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                Şeffaflık
              </h2>

              {/* Calculation basis */}
              <div className="flex flex-col gap-3">
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Hesaplama Esası
                </span>
                <p
                  className="leading-relaxed max-w-[52ch]"
                  style={{ color: 'var(--ks-muted)' }}
                >
                  {basis}
                </p>
              </div>

              {/* Disclaimers */}
              <div
                className="flex flex-col gap-4 border border-[var(--ks-border)] p-6"
              >
                <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                  Önemli Notlar
                </span>
                <ul
                  className="flex flex-col gap-3 list-none m-0 p-0"
                  style={{ color: 'var(--ks-muted)' }}
                >
                  <li className="flex items-start gap-3 text-meta">
                    <span style={{ color: 'var(--ks-accent)' }} aria-hidden="true">—</span>
                    Bu bir resmi ortaklık değildir. Bağış gönüllülük esasına dayanır.
                  </li>
                  <li className="flex items-start gap-3 text-meta">
                    <span style={{ color: 'var(--ks-accent)' }} aria-hidden="true">—</span>
                    Bağış yapılan kurum, yalnızca onaylanan isimle açıklanacaktır.
                  </li>
                  <li className="flex items-start gap-3 text-meta">
                    <span style={{ color: 'var(--ks-accent)' }} aria-hidden="true">—</span>
                    Bağış gerçekleşmeden önce yapıldığı iddia edilmeyecektir.
                  </li>
                  <li className="flex items-start gap-3 text-meta">
                    <span style={{ color: 'var(--ks-accent)' }} aria-hidden="true">—</span>
                    Yüzde hesabı kampanya dönemi sonunda raporlanacaktır.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
