import type { ImpactCampaign } from '@/types';

export const impactCampaign: ImpactCampaign = {
  percentage: 50,
  period: {
    start: '20 Ağustos 2026',
    end: '20 Şubat 2027',
  },
  beneficiary: null, // [CONFIRM: Beneficiary institution name]
  description:
    'Müzik üretmek yetmez. Kayıp Serotonin olarak bu kampanya döneminde net sanatçı gelirinin %50\'sini, belirlediğimiz bir hayır kurumuna bağışlıyoruz.',
  basis:
    'Hesaplama, dağıtım ve platform kesintileri sonrası kalan net sanatçı geliri üzerinden yapılmaktadır.',
};
