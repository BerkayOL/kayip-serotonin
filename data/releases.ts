import type { Release } from '@/types';

export const releases: Release[] = [
  {
    slug: 'sinirlariastin',
    title: 'Sınırları Aştın',
    type: 'single',
    releaseDate: null,
    artwork: '/artwork/sinirlariastin.jpg',
    artworkAlt:
      'Sınırları Aştın — Kırık bir camın önünde gece şehrine bakan yalnız bir siluet.',
    description:
      "Sınırları Aştın, Kayıp Serotonin'in Berkay Ay ve Halim Parlak imzalı ilk single çalışması. Ani bir ayrılığın ardından yaşanan şok, terk edilme hissi ve insanın iç dünyasında kalan derin kırgınlıkların melankolik bir dille dışa vurumu.",
    audioPreview: '/audio/sinirlariastin.mp3',
    lyrics: [
      // Verse 1
      {
        text: 'Kalbin nasıl değişti söyle bir anda?',
        note: 'En çok güvendiğin insanın gözlerinin önünde bir yabancıya dönüşmesi.',
      },
      {
        text: 'Dün her şeyindim, bugün yabancı aslında.',
        note: 'Aylar süren yakınlığın tek bir günde sıfırlanmasının verdiği acı gerçeklik.',
      },
      {
        text: 'Ben sana koşarken sen uzağa kaçtın,',
        note: 'Tek taraflı çabanın ve karşılıksız kalmanın yorgunluğu.',
      },
      {
        text: 'Sevda dediğin buysa baştan yandık!',
        note: 'Güvenin yıkıldığı ilk büyük hayal kırıklığı.',
      },

      // Pre-Chorus
      {
        text: 'Canımdan öteye koydum, hata bende.',
        note: 'Bütün suçu kendinde aradığın o çaresiz kabulleniş anı.',
      },
      {
        text: 'Ruhumdan eksildin... Kalmadı çare...',
        note: 'Bir insanın gidişiyle içindeki yaşama enerjisinin çekilmesi.',
      },
      {
        text: 'Şimdi dur... geri sar... bi\' bekle...',
        note: 'Zihnin yaşananları durdurup olan biteni anlama çabası.',
      },

      // Chorus
      {
        text: 'Kalbimde iz bırakan tek sendin!',
        note: 'Unutulmak istense de silinmeyen tek gerçek.',
      },
      {
        text: 'Sevdayı boşver, yokluğunu ezberledim!',
        note: 'Artık sevgi değil, sadece o kişinin yokluğuyla yaşamayı öğrenmek.',
      },
      {
        text: 'Ben seni içimde en derine yazdım,',
        note: 'Her şeye rağmen değer vermiş olmanın dürüst itirafı.',
      },
      {
        text: 'Sen beni bir gecede darmadağın bıraktın!',
        note: 'Parçanın ana kırılma noktası — aniden gelen ve geride enkaz bırakan son.',
      },

      // Verse 2
      {
        text: 'Ben sevdayla yürüdüm, sen yolunu şaştın,',
        note: 'İki insanın aynı yola çıkıp bambaşka niyetlerle ayrılması.',
      },
      {
        text: 'İçimde adını bin defa yankılattın.',
        note: 'Sessiz odalarda zihinden çıkmayan sesler ve anılar.',
      },
      {
        text: 'Karşıma geçip bana el gibi baktın,',
        note: 'Dün sarıldığın insanın bugün sana bir yabancı gibi bakmasının soğukluğu.',
      },
      {
        text: 'Aydınlık derken karanlıkta bıraktın.',
        note: 'Umut verip en karanlık günde yalnız bırakılmanın yarattığı öfke.',
      },

      // Bridge
      {
        text: 'Belki de aydınlığını beni yakıp yarattın...',
        note: 'Kendi mutluluğunu senin yıkımın ve gözyaşların üzerine kurması.',
      },
      {
        text: 'İçimde şehir yıkık, dalımı da kırdın.',
        note: 'Tutunacak hiçbir dalın, sığınacak hiçbir yerin kalmaması.',
      },

      // Outro
      {
        text: 'Darmadağın bıraktın... Bizi yaktın...',
        note: 'Biten bir hikayenin ardından geriye kalan son yorgun nefes.',
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
