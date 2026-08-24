import Link from 'next/link';
import { artist } from '@/data/artist';

export function ProjectStatement() {
  return (
    <section
      aria-labelledby="statement-heading"
      className="ks-section border-t border-[var(--ks-border)]"
    >
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Label column */}
          <div className="md:col-span-3 lg:col-span-2">
            <span
              id="statement-heading"
              className="text-label"
              style={{ color: 'var(--ks-subtle)' }}
            >
              Proje Hakkında
            </span>
          </div>

          {/* Statement column */}
          <div className="md:col-span-9 lg:col-span-8 flex flex-col gap-8">
            <h2
              className="text-display-md leading-snug"
              style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
            >
              Teknoloji ve insan duygusu arasındaki çizgide;
              <br />
              yarım kalan aşkların, kaybolan hislerin sesi.
            </h2>

            <p
              className="leading-relaxed max-w-[62ch] text-base md:text-lg"
              style={{ color: 'var(--ks-muted)', fontFamily: 'var(--ks-font-ui)' }}
            >
              Kayıp Serotonin, Berkay Ay ve Halim Parlak tarafından kurulan bağımsız bir müzik oluşumudur. 
              Modern dijital ses estetiğini samimi bir duygu yoğunluğuyla buluşturarak, iç dünyamızda yankılanan kırgınlıkları ve aşk acılarını eserlere dökmeyi amaçlar.
            </p>

            <div className="pt-2">
              <Link
                href="/story"
                className="inline-flex items-center gap-3 group focus-visible:outline-[var(--ks-accent)]"
              >
                <span
                  className="text-label group-hover:text-[var(--ks-fg)] transition-colors duration-200"
                  style={{ color: 'var(--ks-muted)' }}
                >
                  Hikayeyi Keşfet
                </span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: 'var(--ks-accent)' }}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
