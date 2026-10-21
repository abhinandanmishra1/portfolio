'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, portfolio } from '@/data/portfolio';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on resize to desktop breakpoint
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300',
        scrolled || mobileMenuOpen
          ? 'border-b border-border/70 bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-serif text-[15px] sm:text-[16px] italic tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {portfolio.name}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex sm:items-center sm:gap-1.5">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));

            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-0.5 rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors hover:text-foreground',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="mx-1 h-4 w-px bg-border" />
          <ThemeToggle />
        </div>

        {/* Mobile controls: Theme toggle + Hamburger button */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border/80 bg-background/95 px-4 py-3 backdrop-blur-xl sm:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));

              return link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors hover:bg-muted/50',
                    isActive
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
