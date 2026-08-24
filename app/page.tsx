import type { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { ReleaseSection } from '@/components/releases/ReleaseSection';
import { ReleaseLyrics } from '@/components/releases/ReleaseLyrics';
import { ProjectStatement } from '@/components/story/ProjectStatement';
import { VisualArchive } from '@/components/releases/VisualArchive';
import { ImpactSection } from '@/components/social-impact/ImpactSection';
import { SocialFollow } from '@/components/social/SocialFollow';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  description:
    'Kayıp Serotonin — Berkay Ay ve Halim Parlak tarafından kurulan bağımsız yapay zeka müzik projesi. İlk Single: Sınırları Aştın.',
  ogImage: '/artwork/sinirlariastin.jpg',
});

export default function HomePage() {
  return (
    <>
      <JsonLd type="musicRecording" />
      <Hero />
      <ReleaseSection />
      <ReleaseLyrics />
      <ProjectStatement />
      <VisualArchive />
      <ImpactSection />
      <SocialFollow />
    </>
  );
}
