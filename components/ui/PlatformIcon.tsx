/**
 * Platform icon SVGs — minimal, monochrome, editorial
 * All icons use currentColor to inherit text color
 */

interface IconProps {
  className?: string;
}

/** Spotify — 3 concentric arc marks inside a circle */
export function SpotifyIcon({ className = '' }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.72a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.779.779 0 01-.452-1.49c3.633-1.102 8.147-.568 11.233 1.329a.78.78 0 01.256 1.07zm.105-2.833C14.692 9.15 9.375 8.975 6.297 9.91a.937.937 0 11-.543-1.794c3.533-1.072 9.404-.865 13.115 1.338a.936.936 0 01-.459 1.754z" />
    </svg>
  );
}

/** Apple Music — quarter note (stem + filled notehead), their universal mark */
export function AppleMusicIcon({ className = '' }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* Stem + flag: thin vertical line from top-right */}
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

/** YouTube Music — play triangle inside circle */
export function YouTubeMusicIcon({ className = '' }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

/** YouTube — classic rounded-rect with play triangle */
export function YouTubeIcon({ className = '' }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
    </svg>
  );
}

/** TIDAL — overlapping diamond/chevron rows (their iconic mark) */
export function TidalIcon({ className = '' }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.004 3.56L8.337 7.225 4.671 3.56 1 7.229 4.671 10.9l3.666-3.671 3.667 3.671 3.667-3.671L16.337 10.9 20 7.229l-3.663-3.669-3.663 3.669-3.666-3.669-.004.001zM8.337 13.1L4.671 9.43 1 13.1l3.671 3.67 3.666-3.67 3.667 3.67 3.667-3.67-3.667-3.67L8.337 13.1zm7.996 0l-3.663 3.67L16.337 20.44 20 16.77l-3.667-3.67z" />
    </svg>
  );
}

export type PlatformKey = 'spotify' | 'appleMusic' | 'youtubeMusic' | 'youtube' | 'tidal';

export const platformIcons: Record<PlatformKey, React.FC<IconProps>> = {
  spotify:      SpotifyIcon,
  appleMusic:   AppleMusicIcon,
  youtubeMusic: YouTubeMusicIcon,
  youtube:      YouTubeIcon,
  tidal:        TidalIcon,
};

export const platformLabels: Record<PlatformKey, string> = {
  spotify:      'Spotify',
  appleMusic:   'Apple Music',
  youtubeMusic: 'YouTube Music',
  youtube:      'YouTube',
  tidal:        'TIDAL',
};

/** Brand accent colors on hover */
export const platformHoverColors: Record<PlatformKey, string> = {
  spotify:      '#1DB954',
  appleMusic:   '#fc3c44',
  youtubeMusic: '#FF0000',
  youtube:      '#FF0000',
  tidal:        '#00FFFF',
};
