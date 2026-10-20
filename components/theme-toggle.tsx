'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground',
        className,
      )}
    >
      {mounted ? (
        <span className="relative inline-flex h-4 w-4 items-center justify-center">
          <Sun
            className={cn(
              'absolute h-4 w-4 transition-all duration-200',
              isDark ? 'scale-0 rotate-12 opacity-0' : 'scale-100 rotate-0 opacity-100',
            )}
          />
          <Moon
            className={cn(
              'absolute h-4 w-4 transition-all duration-200',
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-12 opacity-0',
            )}
          />
        </span>
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
