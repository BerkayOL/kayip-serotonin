import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-32">
      <div className="ks-container max-w-xl flex flex-col items-center gap-6">
        <span className="text-label font-mono" style={{ color: 'var(--ks-accent)' }}>
          HATA 404
        </span>

        <h1
          className="text-display-lg"
          style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
        >
          Serotonin Bulunamadı
        </h1>

        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
          Aradığın sayfa veya aradığın hisler bu adreste bulunamadı.
          Ama müzik hala burada, seni bekliyor.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/" className="ks-btn ks-btn-primary">
            Ana Sayfaya Dön
          </Link>
          <Link href="/releases/sinirlariastin" className="ks-btn ks-btn-outline">
            Sınırları Aştın&apos;ı Dinle
          </Link>
        </div>
      </div>
    </div>
  );
}
