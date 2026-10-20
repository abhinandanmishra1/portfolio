import { BookOpen } from 'lucide-react';
import { papers } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function Papershelf() {
  return (
    <section id="research" className="pt-20 scroll-mt-20">
      <SectionHeading index="03" title="Architectural papershelf" hint="reading notes" />
      <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {papers.map((paper) => (
          <li key={paper.title} className="bg-background p-5">
            <div className="flex items-start gap-3">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-serif text-[16px] italic leading-snug text-foreground">
                  {paper.title}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {paper.authors}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {paper.note}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
