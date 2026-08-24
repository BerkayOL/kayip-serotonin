import type { Release } from '@/types';

export const releases: Release[] = [
  {
    slug: 'sinirlariastin',
    title: 'Sınırları Aştın',
    type: 'single',
    releaseDate: null,
    artwork: '/artwork/sinirlariastin.jpg',
    artworkAlt:
      'Sınırları Aştın — Kırık bir camın önünde İstanbul siluetine bakan siluet. Galata Kulesi ve Boğaz ışıkları arka planda.',
    description:
      "Sınırları Aştın, Kayıp Serotonin'in bağımsız müzik yolculuğundaki ilk single. Gece geç saatlerde içimizde yankılanan kırgınlıkların ve aşk acılarının notalara döküldüğü melankolik bir manifesto.",
    audioPreview: '/audio/sinirlariastin.mp3',
    lyrics: [
      {
        text: 'Kırık camlar ardından baktım bu şehre,',
        note: 'Sabaha karşı 04:12 — Galata ve Boğaz ışıkları altında yazıldı.',
      },
      {
        text: 'Işıklar sönmüş, gölgeler kalmış geriye.',
        note: 'Yarım kalmış bir cümlenin bıraktığı sessizlik hissi.',
      },
      {
        text: 'Sözlerin yankılanır hala gecenin koynunda,',
        note: 'Unutulmak istenen ama zihinden silinmeyen anılar.',
      },
      {
        text: 'Bütün sınırları aştın, beni darmadağın bıraktın.',
        note: 'Parçanın ana duygu omurgası — kırılma noktası.',
      },
      {
        text: 'Kaybolan bir serotonin gibi çekildin içimden,',
        note: 'Projenin adını taşıyan o derin biyokimyasal ve duygusal boşluk.',
      },
      {
        text: 'Şimdi ne bu sokaklar beni anlar, ne de sen.',
        note: 'Yalnızlığın ve kabullenişin son perdesi.',
      },
    ],
    credits: {
      production: 'Berkay Ay & Halim Parlak',
      lyrics: 'Kayıp Serotonin',
      vocals: 'Kayıp Serotonin',
      mixMaster: 'Kayıp Serotonin Studio',
    },
    links: {
      spotify:      'https://open.spotify.com/intl-tr/track/6dbjnpu3QlEgg1WIWj059L?si=a3cc5c169ed84ef9',
      appleMusic:   'https://music.apple.com/tr/song/s%C4%B1n%C4%B1rlar%C4%B1-a%C5%9Ft%C4%B1n/6803368744',
      youtubeMusic: 'https://music.youtube.com/watch?v=9SgmFspXhbM&si=lFzbKMpwUdkVUak1',
      youtube:      'https://www.youtube.com/watch?v=9SgmFspXhbM',
      tidal:        'https://tidal.com/track/554229616/u',
    },
    isCurrent: true,
  },
];

export const currentRelease = releases.find((r) => r.isCurrent) ?? releases[0];
