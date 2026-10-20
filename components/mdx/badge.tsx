import * as React from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}) {
  const variants = {
    default: 'bg-muted text-foreground border-border',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    error: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
    info: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs font-medium',
        variants[variant] || variants.default,
      )}
    >
      {children}
    </span>
  );
}
