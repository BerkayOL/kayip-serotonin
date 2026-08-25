'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { currentRelease } from '@/data/releases';
import { AudioVisualizer } from '@/components/music/AudioVisualizer';

// Professional preview cap: 45 seconds preview
const MAX_PREVIEW_SECONDS = 45;

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  // P2 Fix: start hidden — AudioPlayer only becomes visible when a play CTA
  // or ks-play-audio / ks-show-audio event fires. This prevents a fixed
  // backdrop-blur element from occupying a GPU compositing layer on every page.
  const [isVisible, setIsVisible] = useState(false);
  const [previewEnded, setPreviewEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // P1 Fix: useRef values for isMuted and currentTime so the ks-play-audio
  // useEffect doesn't need them in its dependency array. Without this,
  // currentTime changing every ~250ms causes listener detach+reattach 4x/sec.
  const isMutedRef = useRef(false);
  const currentTimeRef = useRef(0);

  const audioSrc = currentRelease.audioPreview;

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (currentTimeRef.current >= MAX_PREVIEW_SECONDS) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
        currentTimeRef.current = 0;
        setPreviewEnded(false);
      }
      audioRef.current.volume = isMutedRef.current ? 0 : 1;
      audioRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      const next = !isMutedRef.current;
      audioRef.current.muted = next;
      isMutedRef.current = next;
      setIsMuted(next);
    }
  }, []);

  // Global Keyboard Shortcuts (Space: Play/Pause, M: Mute)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleMute]);

  // Global event triggers (e.g. from Hero, Release cards, or Header)
  // P1 Fix: zero dependencies — isMuted and currentTime accessed via refs.
  // Previously [currentTime, isMuted] caused detach+reattach every ~250ms
  // while audio was playing, creating event listener churn.
  useEffect(() => {
    const handleTriggerPlay = () => {
      setIsVisible(true);
      if (audioRef.current) {
        if (currentTimeRef.current >= MAX_PREVIEW_SECONDS) {
          audioRef.current.currentTime = 0;
          setCurrentTime(0);
          currentTimeRef.current = 0;
          setPreviewEnded(false);
        }
        audioRef.current.volume = isMutedRef.current ? 0 : 1;
        audioRef.current.play().catch(() => {});
      }
    };

    const handleTriggerShow = () => {
      setIsVisible(true);
    };

    window.addEventListener('ks-play-audio', handleTriggerPlay);
    window.addEventListener('ks-show-audio', handleTriggerShow);
    return () => {
      window.removeEventListener('ks-play-audio', handleTriggerPlay);
      window.removeEventListener('ks-show-audio', handleTriggerShow);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    // Keep ref in sync so the ks-play-audio handler can read it without deps
    currentTimeRef.current = cur;

    // Smooth studio fade-out in last 3 seconds of preview
    if (cur >= MAX_PREVIEW_SECONDS - 3 && cur < MAX_PREVIEW_SECONDS) {
      const remaining = MAX_PREVIEW_SECONDS - cur;
      const volumeFade = Math.max(0, remaining / 3);
      if (!isMutedRef.current) {
        audioRef.current.volume = volumeFade;
      }
    }

    // Cut off at MAX_PREVIEW_SECONDS
    if (cur >= MAX_PREVIEW_SECONDS) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(MAX_PREVIEW_SECONDS);
      currentTimeRef.current = MAX_PREVIEW_SECONDS;
      setIsPlaying(false);
      setPreviewEnded(true);
      if (!isMutedRef.current) audioRef.current.volume = 1;
      return;
    }

    setCurrentTime(cur);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Math.min(parseFloat(e.target.value), MAX_PREVIEW_SECONDS);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      if (previewEnded && newTime < MAX_PREVIEW_SECONDS) {
        setPreviewEnded(false);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const clamped = Math.min(time, MAX_PREVIEW_SECONDS);
    const minutes = Math.floor(clamped / 60);
    const seconds = Math.floor(clamped % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!audioSrc || !isVisible) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        onPlay={() => {
          setIsPlaying(true);
          setPreviewEnded(false);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setPreviewEnded(true);
        }}
        onTimeUpdate={handleTimeUpdate}
        preload="metadata"
      />

      {/* Floating Bottom Music Bar — only mounted when user starts playback */}
      <aside
        aria-label="Ses Oynatıcısı"
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-2xl transition-[transform,opacity] duration-300 animate-fade-up"
      >
        <div
          className="flex flex-col gap-2 p-3 sm:p-4 rounded-lg border shadow-lg transition-colors duration-200"
          style={{
            background: 'rgba(13, 11, 11, 0.96)',
            borderColor: isPlaying ? 'var(--ks-accent)' : 'var(--ks-border-strong)',
          }}
        >
          {/* Main Controls Row */}
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Artwork & Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden rounded border"
                style={{ borderColor: 'var(--ks-border)' }}
              >
                {currentRelease.artwork && (
                  <Image
                    src={currentRelease.artwork}
                    alt={currentRelease.title}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                )}
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
                    <span className="w-0.5 h-3 bg-[var(--ks-accent)] animate-pulse" />
                    <span className="w-0.5 h-4 bg-[var(--ks-fg)] animate-pulse delay-75" />
                    <span className="w-0.5 h-2 bg-[var(--ks-accent)] animate-pulse delay-150" />
                  </div>
                )}
              </div>

              <div className="flex flex-col min-w-0">
                <span
                  className="text-sm font-medium truncate"
                  style={{ color: 'var(--ks-fg)', fontFamily: 'var(--ks-font-ui)' }}
                >
                  {currentRelease.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs truncate" style={{ color: 'var(--ks-subtle)' }}>
                    Kayıp Serotonin
                  </span>
                  <span className="text-[var(--ks-accent)] font-medium text-[0.6875rem] hidden xs:inline">
                    • 45sn
                  </span>
                </div>
              </div>
            </div>

            {/* Center Spectrum Visualizer */}
            <div className="hidden sm:flex items-center justify-center px-2">
              <AudioVisualizer isPlaying={isPlaying} barCount={14} variant="compact" />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Keyboard Shortcut Hint badge */}
              <span
                className="hidden lg:inline text-[0.625rem] font-mono px-2 py-1 rounded border border-[var(--ks-border)] text-[var(--ks-subtle)]"
                title="Boşluk tuşuna basarak durdurup başlatabilirsiniz"
              >
                Boşluk: {isPlaying ? 'Durdur' : 'Çal'}
              </span>

              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Durdur' : 'Çal'}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-[background-color,transform] duration-200 focus-visible:outline-[var(--ks-accent)] hover:scale-105 cursor-pointer shrink-0"
                style={{
                  background: 'var(--ks-fg)',
                  color: 'var(--ks-bg)',
                }}
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              {/* Mute Button */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Sesi Aç' : 'Sessize Al'}
                className="p-2 transition-colors duration-200 hidden sm:block focus-visible:outline-[var(--ks-accent)] cursor-pointer"
                style={{ color: isMuted ? 'var(--ks-accent)' : 'var(--ks-muted)' }}
              >
                {isMuted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0a7 7 0 0 1-.11 1.23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              {/* Dismiss button */}
              <button
                type="button"
                onClick={() => {
                  if (audioRef.current) audioRef.current.pause();
                  setIsPlaying(false);
                  setIsVisible(false);
                }}
                aria-label="Oynatıcıyı Kapat"
                title="Oynatıcıyı kapat"
                className="p-2 transition-colors duration-200 hover:text-[var(--ks-fg)] focus-visible:outline-[var(--ks-accent)] cursor-pointer"
                style={{ color: 'var(--ks-subtle)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Bar & Timestamps */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-[0.6875rem] tabular-nums font-mono" style={{ color: 'var(--ks-subtle)' }}>
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-1 flex items-center">
              <input
                type="range"
                min="0"
                max={MAX_PREVIEW_SECONDS}
                value={currentTime}
                onChange={handleSeek}
                aria-label="Müzik Önizleme Konumu"
                className="w-full h-1 bg-[var(--ks-border-strong)] rounded-lg appearance-none cursor-pointer accent-[var(--ks-accent)] focus-visible:outline-[var(--ks-accent)]"
              />
            </div>
            <span className="text-[0.6875rem] tabular-nums font-mono" style={{ color: 'var(--ks-subtle)' }}>
              {formatTime(MAX_PREVIEW_SECONDS)}
            </span>
          </div>

          {/* End of Preview Notification with Direct Streaming Links */}
          {previewEnded && (
            <div className="mt-1 pt-2 border-t border-[var(--ks-border)] flex flex-col sm:flex-row items-center justify-between gap-2 animate-fade-in">
              <span className="text-xs" style={{ color: 'var(--ks-muted)' }}>
                Önizleme bitti. Şarkının tamamı için:
              </span>
              <div className="flex items-center gap-3">
                {currentRelease.links.spotify && (
                  <a
                    href={currentRelease.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline text-[#1DB954]"
                  >
                    Spotify ↗
                  </a>
                )}
                {currentRelease.links.appleMusic && (
                  <a
                    href={currentRelease.links.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline text-[#fc3c44]"
                  >
                    Apple Music ↗
                  </a>
                )}
                {currentRelease.links.youtube && (
                  <a
                    href={currentRelease.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline text-[#FF0000]"
                  >
                    YouTube ↗
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
