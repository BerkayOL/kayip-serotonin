import Image from 'next/image';
import { currentRelease } from '@/data/releases';

const archiveItems = [
  {
    id: '01',
    title: 'Galata Silueti & Gece Kuşağı',
    category: 'Görsel Atmosfer',
    description: 'Parçanın ilhamını aldığı İstanbul gece manzarası ve kırık hatıraların silueti.',
    image: currentRelease.artwork || '/artwork/sinirlariastin.jpg',
  },
  {
    id: '02',
    title: 'Serotonin Molekül Geometrisi',
    category: 'Kimyasal Kimlik',
    description: 'Dairesel ark ve serotonin molekülünün minimalist vektörel çizimi.',
    image: '/images/logo.png',
  },
  {
    id: '03',
    title: 'Sınırları Aştın — Ana Sanat Eseri',
    category: 'Orijinal Kapak',
    description: 'Kırık cam ardında kaybolan şehir ve insanın içsel çatışması.',
    image: currentRelease.artwork || '/artwork/sinirlariastin.jpg',
  },
];

export function VisualArchive() {
  return (
    <section
      aria-labelledby="archive-heading"
      className="ks-section border-t border-[var(--ks-border)] bg-[var(--ks-bg)]"
    >
      <div className="ks-container">
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span id="archive-heading" className="text-label" style={{ color: 'var(--ks-subtle)' }}>
            Görsel Hafıza &amp; Sanat
          </span>
          <h2
            className="text-display-md"
            style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
          >
            Kayıp Arşiv
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archiveItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-4 group p-4 border border-[var(--ks-border)] bg-[var(--ks-surface)] hover:border-[var(--ks-accent)] transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-[var(--ks-bg)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-1.5 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6875rem] font-mono uppercase" style={{ color: 'var(--ks-accent)' }}>
                    ARCHIVE #{item.id}
                  </span>
                  <span className="text-[0.6875rem]" style={{ color: 'var(--ks-subtle)' }}>
                    {item.category}
                  </span>
                </div>
                <h3
                  className="text-lg font-medium m-0 truncate"
                  style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed m-0 line-clamp-2" style={{ color: 'var(--ks-muted)' }}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
