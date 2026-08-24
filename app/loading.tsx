export default function Loading() {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center pointer-events-none select-none"
      aria-label="Yükleniyor..."
    >
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div
          className="w-8 h-8 rounded-full border border-[var(--ks-accent)] border-t-transparent animate-spin"
          style={{ animationDuration: '800ms' }}
        />
        <span className="text-label" style={{ color: 'var(--ks-subtle)' }}>
          Kayıp Serotonin
        </span>
      </div>
    </div>
  );
}
