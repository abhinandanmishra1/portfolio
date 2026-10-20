import { cn } from '@/lib/utils';

export function SectionHeading({
  index,
  title,
  hint,
  className,
}: {
  index: string;
  title: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-baseline justify-between gap-4', className)}>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted-foreground/70">
          {index}
        </span>
        <h2 className="font-serif text-2xl italic font-normal tracking-tight text-foreground sm:text-[26px]">
          {title}
        </h2>
      </div>
      {hint ? (
        <span className="font-mono text-xs text-muted-foreground">{hint}</span>
      ) : null}
    </div>
  );
}
