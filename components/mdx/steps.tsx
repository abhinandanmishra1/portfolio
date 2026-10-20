import * as React from 'react';

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="my-8 space-y-6">{children}</div>;
}

export function Step({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
      <div className="absolute left-2 top-5 h-[calc(100%-0.5rem)] w-px bg-border" />
      <div>
        {title && (
          <h4 className="mb-2 font-serif text-base font-semibold text-foreground">
            {title}
          </h4>
        )}
        <div className="text-[14.5px] leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
