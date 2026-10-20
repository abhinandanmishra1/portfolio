import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Award, Trophy, Code2, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { honors, socialLinks } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Competitive Programming Honors & Awards',
  description:
    'Competitive programming rankings from Google Kickstart, Codechef, ICPC, and LeetCode by Abhinandan Mishra.',
};

export default function HonorsPage() {
  const leetcodeLink = socialLinks.find((s) => s.icon === 'leetcode')?.href;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        <div className="mb-10">
          <Link
            href="/"
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to overview</span>
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Trophy className="h-3.5 w-3.5" />
            <span>Competitive Programming</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            Contest Honors & Algorithmic Rankings
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            A track record of algorithmic problem-solving across world-class collegiate and open competitive programming contests.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {honors.map((honor) => (
            <div
              key={honor.contest}
              className="rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-border/90"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {honor.year}
                  </span>
                </div>
                <span className="font-mono text-base font-semibold text-blue-600 dark:text-blue-400">
                  {honor.rank}
                </span>
              </div>

              <h2 className="mt-4 font-serif text-xl italic font-medium text-foreground">
                {honor.contest}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {honor.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card/30 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-serif text-xl italic font-medium text-foreground">
              Algorithmic Foundation
            </h3>
          </div>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
            Extensive practice across dynamic programming, graph algorithms (SCC, Min-Cut, Shortest Path), advanced trees (Segment Trees with Lazy Propagation, Fenwick Trees, Treaps), and number theory. This rigorous foundation directly informs the low-latency distributed systems and memory engines I architect today.
          </p>
          {leetcodeLink && (
            <div className="mt-5">
              <a
                href={leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 font-mono text-xs font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                <span>View LeetCode Profile (Knight · 2026)</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
