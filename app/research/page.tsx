import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookMarked, ExternalLink, Lightbulb } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { papers } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Architectural Papershelf & Reading Notes',
  description:
    'Deep architectural breakdowns of classic distributed systems papers, database isolation models, probabilistic caching algorithms, and modern agent protocols.',
};

export default function ResearchPage() {
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
            Seminal papers, textbooks, and RFCs distilled into actionable mental models for designing real-world distributed architectures.
          </p>
        </div>

        <div className="space-y-10">
          {papers.map((paper, idx) => (
            <article
              key={paper.title}
              className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8 transition-colors hover:border-border/90"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-border/60 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl italic font-medium text-foreground">
                      {paper.title}
                    </h2>
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {paper.authors}
                  </p>
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
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
