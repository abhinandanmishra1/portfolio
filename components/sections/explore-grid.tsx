import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { exploreCards } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/section-heading';

export function ExploreGrid() {
  return (
    <section className="pt-20">
      <SectionHeading index="01" title="Explore work & writings" />
      <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {exploreCards.map((card) => (
          <Link
            key={card.label}
            href={card.target}
            className={cn(
              'group relative flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-muted/40',
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  'font-mono text-[11px] uppercase tracking-wider',
                  card.tone === 'accent'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-muted-foreground',
                )}
              >
                {card.label}
              </span>
              <span
                className={cn(
                  'font-mono text-xs',
                  card.tone === 'accent'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-muted-foreground',
                )}
              >
                {card.count}
              </span>
            </div>

            <p className="font-serif text-[17px] italic font-normal leading-snug text-foreground text-balance">
              {card.title}
            </p>
            <p className="text-[13.5px] leading-relaxed text-muted-foreground">
              {card.description}
            </p>

            <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-medium text-foreground/80 transition-all group-hover:gap-2 group-hover:text-foreground">
              Explore
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
