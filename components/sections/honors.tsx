import { honors } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function Honors() {
  return (
    <section id="honors" className="pt-20 scroll-mt-20">
      <SectionHeading index="05" title="Awards & contest honors" />
      <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {honors.map((honor) => (
          <div key={honor.contest} className="bg-background p-4 sm:p-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[14px] font-medium text-foreground">
                {honor.contest}
              </span>
              <span className="font-mono text-sm text-blue-600 dark:text-blue-400">
                {honor.rank}
              </span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {honor.detail}
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground/70">
              {honor.year}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <a
          href="/honors"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-foreground/80 transition-all hover:gap-2 hover:text-foreground"
        >
          View All Hackathon Wins & Honors
          <span className="font-mono text-xs text-muted-foreground">→</span>
        </a>
      </div>
    </section>
  );
}
