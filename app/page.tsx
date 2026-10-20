import { Navbar } from '@/components/navbar';
import { Hero, HeroMeta } from '@/components/sections/hero';
import { ExploreGrid } from '@/components/sections/explore-grid';
import { DualStream } from '@/components/sections/dual-stream';
import { Papershelf } from '@/components/sections/papershelf';
import { ExperienceTimeline } from '@/components/sections/experience';
import { Honors } from '@/components/sections/honors';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-10">
        <Hero />
        <HeroMeta />
        <ExploreGrid />
        <DualStream />
        <Papershelf />
        <ExperienceTimeline />
        <Honors />
      </main>
      <Footer />
    </>
  );
}
