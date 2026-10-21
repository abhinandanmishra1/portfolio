'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { navLinks, portfolio } from '@/data/portfolio';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-[15px] italic tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span className="hidden sm:inline">{portfolio.name}</span>
          <span className="sm:hidden font-serif italic text-base">Abhinandan</span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1.5">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-0.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:py-1.5 sm:text-[13px]"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:py-1.5 sm:text-[13px]"
              >
                {link.label}
              </Link>
            ),
          )}
          <span className="mx-0.5 hidden h-4 w-px bg-border sm:mx-1 sm:block" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
