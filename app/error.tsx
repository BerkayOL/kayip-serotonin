'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client runtime error silently without breaking UI
    console.error('[Kayıp Serotonin Error Boundary]', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-24 animate-page-enter">
      <div className="flex flex-col items-center max-w-lg gap-6">
        <span className="text-label" style={{ color: 'var(--ks-accent)' }}>
          Bağlantı Kopukluğu
        </span>

        <h1
          className="text-display-md m-0"
          style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
        >
          Bir şeyler yarım kaldı.
        </h1>

        <p
          className="text-sm md:text-base leading-relaxed m-0"
          style={{ color: 'var(--ks-muted)' }}
        >
          Beklenmeyen bir durum oluştu. Sayfayı yeniden deneyebilir veya ana sayfaya dönerek müzik deneyimine devam edebilirsiniz.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="ks-btn ks-btn-primary"
          >
            <span>Yeniden Dene</span>
          </button>

          <Link href="/" className="ks-btn ks-btn-outline">
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
