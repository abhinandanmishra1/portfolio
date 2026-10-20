import { experience } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';
import { cn } from '@/lib/utils';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="pt-20 scroll-mt-20">
      <SectionHeading index="04" title="Experience" />
      <ol className="mt-8 space-y-0">
        {experience.map((item, i) => (
          <li
            key={item.company}
            className="relative grid grid-cols-1 gap-2 border-l border-border py-5 pl-6 sm:grid-cols-[1fr_auto] sm:gap-6 sm:pl-8"
          >
            <span
              className={cn(
                'absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-foreground/80 ring-4 ring-background',
                i === 0 && 'bg-blue-600 dark:bg-blue-400',
              )}
            />
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-[17px] italic text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="font-serif text-[17px] italic text-foreground">
                    {item.company}
                  </span>
                )}
                <span className="text-[13px] text-muted-foreground">
                  · {item.role}
                </span>
              </div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.highlights ? (
                <ul className="mt-2 space-y-1">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="sm:text-right">
              <p className="font-mono text-[11.5px] text-muted-foreground">
                {item.period}
              </p>
              <p className="font-mono text-[11px] text-muted-foreground/70">
                {item.location}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
