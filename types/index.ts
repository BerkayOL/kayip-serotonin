// Domain types for Kayıp Serotonin

export type ReleaseType = 'single' | 'ep' | 'album';

export interface ReleaseLinks {
  spotify?: string;
  appleMusic?: string;
  youtubeMusic?: string;
  youtube?: string;
  tidal?: string;
}

export interface LyricLine {
  text: string;
  note?: string;
}

export interface Release {
  slug: string;
  title: string;
  type: ReleaseType;
  releaseDate: string | null; // null = unconfirmed
  artwork: string | null;     // null = no artwork yet
  artworkAlt: string;
  description?: string;
  audioPreview?: string;
  lyrics?: LyricLine[];
  credits?: {
    production?: string;
    lyrics?: string;
    vocals?: string;
    mixMaster?: string;
  };
  links: ReleaseLinks;
  isCurrent?: boolean;
}

export interface SocialLinks {
  spotify?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  x?: string;
}

export interface ArtistInfo {
  name: string;
  tagline: string;
  description: string;
  philosophy?: string;
  members: string[];
  email: string;
  logo: string;
  logoAlt: string;
  social: SocialLinks;
}

export interface ImpactCampaign {
  percentage: number;
  period: {
    start: string;
    end: string;
  };
  beneficiary: string | null; // null = unconfirmed
  description: string;
  basis: string;
}
