import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { getAllResearch } from '@/lib/mdx';
import { papers as fallbackPapers } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function Papershelf() {
  const dynamicPapers = getAllResearch();
  const papers = dynamicPapers.length > 0
    ? dynamicPapers
    : fallbackPapers.map((p) => ({
        ...p,
        slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      }));

  return (
    <section id="research" className="pt-20 scroll-mt-20">
      <SectionHeading index="03" title="Architectural papershelf" hint="reading notes" />
      <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {papers.map((paper) => {
          const hasSlug = 'slug' in paper && paper.slug;
          return (
            <li key={paper.title} className="bg-background p-5 hover:bg-card/40 transition-colors">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="flex-1">
                  {hasSlug ? (
                    <Link
                      href={`/research/${paper.slug}`}
                      className="font-serif text-[16px] italic leading-snug text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {paper.title}
                    </Link>
                  ) : (
                    <p className="font-serif text-[16px] italic leading-snug text-foreground">
                      {paper.title}
                    </p>
                  )}
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {paper.authors}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                    {paper.note}
                  </p>
                  {hasSlug && (
                    <div className="mt-3">
                      <Link
                        href={`/research/${paper.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Read Breakdown →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-4">
        <Link
          href="/research"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-foreground/80 transition-all hover:gap-2 hover:text-foreground"
        >
          View Full Papershelf
          <span className="font-mono text-xs text-muted-foreground">→</span>
        </Link>
      </div>
    </section>
  );
}
