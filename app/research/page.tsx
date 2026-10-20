import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookMarked, BookOpen, ExternalLink, Lightbulb } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { getAllResearch } from '@/lib/mdx';
import { papers as fallbackPapers } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Architectural Papershelf & Reading Notes',
  description:
    'Deep architectural breakdowns of classic distributed systems papers, database isolation models, probabilistic caching algorithms, and modern agent protocols.',
  openGraph: {
    title: 'Architectural Papershelf & Reading Notes | Abhinandan Mishra',
    description:
      'Deep architectural breakdowns of classic distributed systems papers, database isolation models, probabilistic caching algorithms, and modern agent protocols.',
  },
};

export default function ResearchPage() {
  const dynamicPapers = getAllResearch();
  
  // Use dynamic papers from content/researches or fallback to static data
  const papers = dynamicPapers.length > 0
    ? dynamicPapers
    : fallbackPapers.map((p) => ({
        ...p,
        slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        paperUrl: p.href,
        readTimeInMinutes: 8,
        date: 'Oct 2026',
        publishedAt: new Date().toISOString(),
        content: '',
      }));

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
            <BookMarked className="h-3.5 w-3.5" />
            <span>Systems Papershelf</span>
          </div>
          <h1 className="mt-2 font-serif text-3xl italic font-normal tracking-tight text-foreground sm:text-4xl">
            Architectural Papershelf & Reading Notes
          </h1>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            Seminal papers, textbooks, and RFCs distilled into actionable mental models for designing real-world distributed architectures. Powered dynamically from the open content repository.
          </p>
        </div>

        <div className="space-y-10">
          {papers.map((paper, idx) => {
            const hasDetail = 'slug' in paper && paper.slug;
            const paperUrl = 'paperUrl' in paper ? paper.paperUrl : undefined;

            return (
              <article
                key={paper.title}
                className="group rounded-2xl border border-border bg-card/40 p-6 sm:p-8 transition-colors hover:border-border/90"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border/60 pb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {hasDetail ? (
                        <Link
                          href={`/research/${paper.slug}`}
                          className="font-serif text-2xl italic font-medium text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {paper.title}
                        </Link>
                      ) : (
                        <h2 className="font-serif text-2xl italic font-medium text-foreground">
                          {paper.title}
                        </h2>
                      )}
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2.5 font-mono text-xs text-muted-foreground">
                      <span>{paper.authors}</span>
                      {'readTimeInMinutes' in paper && (
                        <>
                          <span>·</span>
                          <span>{paper.readTimeInMinutes} min read</span>
                        </>
                      )}
                    </div>
                  </div>
                  {paper.tag && (
                    <span className="self-start sm:self-auto rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400">
                      {paper.tag}
                    </span>
                  )}
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-[15px] leading-relaxed text-foreground/85">
                    {paper.note}
                  </p>

                  {paper.takeaways && paper.takeaways.length > 0 && (
                    <div className="rounded-xl border border-border/60 bg-muted/20 p-4.5">
                      <div className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        <Lightbulb className="h-3.5 w-3.5" />
                        <span>Key Architectural Insights</span>
                      </div>
                      <ul className="space-y-2 text-[14px] leading-relaxed text-muted-foreground">
                        {paper.takeaways.map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {hasDetail && (
                      <Link
                        href={`/research/${paper.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-foreground/30 hover:bg-accent"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-blue-500" />
                        <span>Read Full Breakdown</span>
                        <span className="text-muted-foreground">→</span>
                      </Link>
                    )}
                    {paperUrl && (
                      <a
                        href={paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Original Publication</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
