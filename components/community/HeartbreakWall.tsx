'use client';

import { useState, useEffect } from 'react';

interface Note {
  id: string;
  text: string;
  timestamp: string;
  author: string;
}

const initialNotes: Note[] = [
  {
    id: '1',
    text: 'Söz vermiştin ama bazı sözler sadece rüzgarın geçişini bekliyormuş.',
    timestamp: 'Dün gece, 03:44',
    author: 'Anonim #074',
  },
  {
    id: '2',
    text: 'Aynı şarkıyı dinlerken birbirimizi unuttuğumuz o an.',
    timestamp: 'Sabaha karşı, 04:18',
    author: 'Anonim #091',
  },
  {
    id: '3',
    text: 'Bütün sokaklar sana çıkıyordu, ta ki sen sokakları değiştirene kadar.',
    timestamp: '2 gün önce',
    author: 'Anonim #012',
  },
  {
    id: '4',
    text: 'İçimdeki serotonin seninle birlikte çekildi bu şehirden.',
    timestamp: '3 gün önce',
    author: 'Anonim #049',
  },
];

export function HeartbreakWall() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [inputText, setInputText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ks_heartbreak_notes');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setNotes([...parsed, ...initialNotes]);
        }
      }
    } catch {
      // Ignore storage read error
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      text: inputText.trim(),
      timestamp: 'Az önce',
      author: `Anonim #${Math.floor(100 + Math.random() * 900)}`,
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    setInputText('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    try {
      const customNotes = updated.filter(
        (n) => !initialNotes.some((init) => init.id === n.id)
      );
      localStorage.setItem('ks_heartbreak_notes', JSON.stringify(customNotes));
    } catch {
      // Ignore storage write error
    }
  };

  return (
    <section
      aria-labelledby="wall-heading"
      className="ks-section border-t border-[var(--ks-border)] bg-[var(--ks-surface)]"
    >
      <div className="ks-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Section Header & Form */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span id="wall-heading" className="text-label" style={{ color: 'var(--ks-subtle)' }}>
                Anonim Duygu Duvarı
              </span>
              <h2
                className="text-display-md"
                style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-display)' }}
              >
                Bir Cümle Bırak
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ks-muted)' }}>
                İçinde kalan, kimseye söyleyemediğin o kırgınlığı veya aşk acısını anonim olarak buraya bırak. Yalnız değilsin.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  maxLength={160}
                  rows={3}
                  placeholder="İçinde kaybolan bir hissi anlat..."
                  className="w-full p-4 text-sm bg-[var(--ks-bg)] border border-[var(--ks-border-strong)] rounded text-[var(--ks-fg)] placeholder:text-[var(--ks-subtle)] focus:border-[var(--ks-accent)] focus:outline-none transition-colors resize-none"
                />
                <span
                  className="absolute bottom-3 right-3 text-[0.6875rem] font-mono"
                  style={{ color: 'var(--ks-subtle)' }}
                >
                  {160 - inputText.length}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs italic" style={{ color: 'var(--ks-subtle)' }}>
                  Tamamen anonim olarak kaydedilir.
                </span>
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="ks-btn ks-btn-outline disabled:opacity-40 disabled:cursor-not-allowed text-xs"
                >
                  <span>Duvara As</span>
                  <span>→</span>
                </button>
              </div>

              {isSubmitted && (
                <span className="text-xs text-[var(--ks-accent)] animate-fade-in">
                  ✓ Cümlen duvara asıldı.
                </span>
              )}
            </form>
          </div>

          {/* Right: Notes Wall Feed */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[460px] overflow-y-auto pr-2">
              {notes.map((note) => (
                <article
                  key={note.id}
                  className="p-5 border border-[var(--ks-border)] bg-[var(--ks-bg)] rounded-none flex flex-col justify-between gap-4 hover:border-[var(--ks-border-strong)] transition-colors"
                >
                  <p
                    className="text-base leading-relaxed m-0"
                    style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-ui)' }}
                  >
                    &ldquo;{note.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[var(--ks-border)]">
                    <span className="text-[0.6875rem] font-mono" style={{ color: 'var(--ks-subtle)' }}>
                      {note.author}
                    </span>
                    <span className="text-[0.6875rem]" style={{ color: 'var(--ks-subtle)' }}>
                      {note.timestamp}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
