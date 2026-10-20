import { portfolio } from '@/data/portfolio';
import { GitHubIcon, MailIcon } from '@/components/icons';

interface FooterProps {
  className?: string;
  maxWidth?: '4xl' | '3xl';
}

export function Footer({ className, maxWidth = '4xl' }: FooterProps) {
  const year = new Date().getFullYear();
  const maxWClass = maxWidth === '3xl' ? 'max-w-3xl' : 'max-w-4xl';

  return (
    <footer className={`mt-24 border-t border-border/70 ${className || ''}`}>
      <div className={`mx-auto ${maxWClass} px-6 pt-10 pb-16`}>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-base italic text-foreground">
              {portfolio.name}
            </p>
            <p className="mt-1 text-[13px] text-muted-foreground">
              {portfolio.tagline}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abhinandanmishra1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/60 pt-6 font-mono text-[11px] text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {portfolio.name}
          </p>
          <p>Built with Next.js & Tailwind CSS</p>
          <a
            href={`mailto:${portfolio.email}`}
            className="transition-colors hover:text-foreground"
          >
            {portfolio.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
