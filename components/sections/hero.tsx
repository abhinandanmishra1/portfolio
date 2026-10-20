import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  heroBio,
  portfolio,
  socialLinks,
  type SocialLink,
} from '@/data/portfolio';
import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from '@/components/icons';

import * as React from 'react';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: XIcon,
  leetcode: LeetCodeIcon,
  mail: MailIcon,
} satisfies Record<SocialLink['icon'], (props: { className?: string }) => React.JSX.Element>;

export function Hero() {
  return (
    <section className="pt-28 sm:pt-32">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-12">
        <div className="sm:col-span-8">
          <p className="mb-5 font-mono text-xs tracking-wide text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-green-500" />{' '}
            {portfolio.availableFor}
          </p>

          <h1 className="font-serif text-4xl italic font-normal leading-tight tracking-tight text-balance sm:text-5xl">
            Hey, I am Abhinandan
          </h1>

          <p className="mt-4 font-serif text-lg italic font-normal leading-snug text-blue-600 dark:text-blue-400 text-balance sm:text-xl">
            systems, distributed platforms, and developer tools. always building.
          </p>

          <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-[1.65] text-neutral-600 dark:text-neutral-400">
            {heroBio.map((para, i) => (
              <p key={i}>
                {para.map((seg, j) => {
                  if (typeof seg === 'string') {
                    return <span key={j}>{seg}</span>;
                  }
                  return (
                    <a
                      key={j}
                      href={seg.href}
                      target={seg.external ? '_blank' : undefined}
                      rel={seg.external ? 'noopener noreferrer' : undefined}
                      className="font-medium text-foreground underline decoration-blue-500/40 underline-offset-4 transition-colors hover:decoration-blue-500"
                    >
                      {seg.text}
                    </a>
                  );
                })}
              </p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === 'mail' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-[12.5px] font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{social.handle}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sm:col-span-4">
          <div className="relative mx-auto aspect-square w-44 sm:w-full sm:max-w-[260px]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-border transition-shadow" />
            <Image
              src={portfolio.avatar}
              alt={`${portfolio.name} portrait`}
              fill
              priority
              sizes="(max-width: 640px) 176px, 260px"
              className="rounded-2xl border border-border object-cover"
            />
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
            {portfolio.location}
          </p>
        </div>
      </div>
    </section>
  );
}

export function HeroMeta() {
  return (
    <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border/70 py-5 font-mono text-xs text-muted-foreground">
      <span>SDE-II @ Project44</span>
      <span className="hidden h-3 w-px bg-border sm:block" />
      <span>Co-Founder · SDE Forge</span>
      <span className="hidden h-3 w-px bg-border sm:block" />
      <span>LeetCode Knight · 2026</span>
      <span className="hidden h-3 w-px bg-border sm:block" />
      <Link
        href="/articles"
        className="inline-flex items-center gap-1 text-foreground transition-opacity hover:opacity-70"
      >
        Read essays
        <ArrowUpRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
