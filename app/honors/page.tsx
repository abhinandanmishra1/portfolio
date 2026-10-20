import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Award, Trophy, Code2, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { LinkedInIcon } from '@/components/icons';
import { honors, recognitions, socialLinks } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Honors, Hackathon Wins & Contest Rankings',
  description:
    'Hackathon victories at Google DeepMind, 2x AI hackathon winner & judge at project44, Google Cloud Run summit, and global competitive programming rankings (Google Kickstart, CodeChef, ICPC, LeetCode) by Abhinandan Mishra.',
  openGraph: {
    title: 'Honors, Hackathons & Industry Recognitions | Abhinandan Mishra',
    description:
      'Hackathon victories at Google DeepMind, 2x AI hackathon winner & judge at project44, Google Cloud Run summit, and global competitive programming rankings.',
  },
};

export default function HonorsPage() {
  const leetcodeLink = socialLinks.find((s) => s.icon === 'leetcode')?.href;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-28 pb-20">
        {/* Page Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to overview</span>
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Trophy className="h-3.5 w-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            Awards, Hackathon Victories & Algorithmic Rankings
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            A chronicle of high-impact hackathon victories, enterprise engineering milestones, and international competitive programming rankings.
          </p>
        </div>

        {/* SECTION 1: HACKATHON WINS & INDUSTRY RECOGNITION */}
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between border-b border-border/70 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-foreground">
                Featured Recognitions & Hackathons
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              03 Milestones
            </span>
          </div>

          <div className="space-y-10">
            {recognitions.map((item, idx) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card/40 transition-colors hover:border-border/90"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
                  {/* Visual Preview */}
                  <div className="md:col-span-5 flex flex-col justify-between">
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/80 bg-muted/40">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="mt-4 hidden md:block">
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/80 py-2.5 font-mono text-xs font-medium text-foreground transition-all hover:border-blue-500/40 hover:bg-accent"
                      >
                        <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
                        <span>View Verified Post on LinkedIn</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>

                  {/* Content & Context */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Badge Row */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400">
                          {item.badge}
                        </span>
                        <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                          {item.organization}
                        </span>
                        <span className="ml-auto font-mono text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 font-serif text-2xl italic font-medium leading-snug text-foreground">
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/85">
                        {item.summary}
                      </p>

                      {/* Story / Takeaways list */}
                      <div className="mt-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                        <ul className="space-y-2 text-[13.5px] leading-relaxed text-muted-foreground">
                          {item.story.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mobile LinkedIn Link */}
                    <div className="mt-5 block md:hidden">
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
                        <span>View Verified Post on LinkedIn</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 2: COMPETITIVE PROGRAMMING RANKINGS */}
        <section className="mb-14">
          <div className="mb-6 flex items-center justify-between border-b border-border/70 pb-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-foreground">
                Competitive Programming Rankings
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              04 Contests
            </span>
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

                <h3 className="mt-4 font-serif text-xl italic font-medium text-foreground">
                  {honor.contest}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {honor.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: ALGORITHMIC FOUNDATION */}
        <section className="rounded-2xl border border-border bg-card/30 p-6 sm:p-8">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
