import type { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { ReleaseSection } from '@/components/releases/ReleaseSection';
import { ReleaseLyrics } from '@/components/releases/ReleaseLyrics';
import { ProjectStatement } from '@/components/story/ProjectStatement';
import { HeartbreakWall } from '@/components/community/HeartbreakWall';
import { VisualArchive } from '@/components/releases/VisualArchive';
import { ImpactSection } from '@/components/social-impact/ImpactSection';
import { SocialFollow } from '@/components/social/SocialFollow';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  description:
    'Kayıp Serotonin — Berkay Ay ve Halim Parlak tarafından kurulan bağımsız müzik projesi. İlk Single: Sınırları Aştın.',
  ogImage: '/artwork/sinirlariastin.jpg',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReleaseSection />
      <ReleaseLyrics />
      <ProjectStatement />
      <HeartbreakWall />
      <VisualArchive />
      <ImpactSection />
      <SocialFollow />
    </>
  );
}
