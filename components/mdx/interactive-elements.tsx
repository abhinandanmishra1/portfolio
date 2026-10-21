'use client';

import * as React from 'react';
import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Tabs & TabItem ---
export function Tabs({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue?: string;
}) {
  const tabItems = React.Children.toArray(children) as React.ReactElement<{
    value: string;
    label: string;
    children: React.ReactNode;
  }>[];
  const [activeTab, setActiveTab] = React.useState(defaultValue || tabItems[0]?.props?.value);

  return (
    <div className="my-6 rounded-xl border border-border bg-card/40 p-3 sm:p-4">
      <div className="border-b border-border">
        <nav className="-mb-px flex space-x-4 sm:space-x-6 overflow-x-auto">
          {tabItems.map((tab) => {
            const isSelected = activeTab === tab.props.value;
            return (
              <button
                key={tab.props.value}
                type="button"
                onClick={() => setActiveTab(tab.props.value)}
                className={cn(
                  'border-b-2 py-2 px-1 text-sm font-medium transition-colors',
                  isSelected
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {tab.props.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="mt-4">
        {tabItems.find((tab) => tab.props.value === activeTab)?.props.children}
      </div>
    </div>
  );
}

export function TabItem({ children }: { value: string; label: string; children: React.ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

// --- FileTree & FileTreeItem ---
export function FileTree({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card/50 p-4 font-mono text-xs">
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export function FileTreeItem({
  name,
  type = 'file',
  children,
  defaultOpen = false,
}: {
  name: string;
  type?: 'file' | 'folder';
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const hasChildren = Boolean(children);

  return (
    <div>
      <div
        className={cn(
          'flex items-center gap-2 rounded px-2 py-1 text-muted-foreground hover:bg-muted/40 hover:text-foreground',
          hasChildren && 'cursor-pointer',
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren ? (
          isOpen ? (
            <ChevronDown className="h-3.5 w-3.5" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5" />
          )
        ) : (
          <div className="h-3.5 w-3.5" />
        )}

        {type === 'folder' ? (
          <Folder className="h-3.5 w-3.5 text-blue-500" />
        ) : (
          <File className="h-3.5 w-3.5 text-muted-foreground" />
        )}

        <span className={type === 'folder' ? 'font-medium text-foreground' : ''}>
          {name}
        </span>
      </div>

      {hasChildren && isOpen && (
        <div className="ml-5 border-l border-border pl-2.5">{children}</div>
      )}
    </div>
  );
}

// --- YouTube Embed ---
export function YouTube({
  id,
  url,
  title = 'Demonstration Video',
}: {
  id?: string;
  url?: string;
  title?: string;
}) {
  let videoId = id;
  if (!videoId && url) {
    const match =
      url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/) ||
      url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (match) {
      videoId = match[1];
    }
  }

  if (!videoId) {
    return (
      <div className="my-6 rounded-xl border border-border bg-card/40 p-4 text-center font-mono text-xs text-muted-foreground">
        Unable to parse YouTube video.{' '}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-1"
          >
            Watch directly on YouTube ↗
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border/70 bg-muted/30 px-3 sm:px-4 py-2 font-mono text-xs text-muted-foreground">
        <span className="flex min-w-0 items-center gap-1.5 font-medium text-foreground">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-red-500" />
          <span className="truncate">{title}</span>
        </span>
        <a
          href={url || `https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          Watch on YouTube ↗
        </a>
      </div>
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}

// --- ImageComparison ---
export function ImageComparison({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border p-2">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {beforeLabel}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt={beforeLabel} className="rounded-lg object-cover" />
      </div>
      <div className="rounded-xl border border-border p-2">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {afterLabel}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={after} alt={afterLabel} className="rounded-lg object-cover" />
      </div>
    </div>
  );
}

// --- CodeSandbox ---
export function CodeSandbox({
  id,
  url,
  title = 'Interactive CodeSandbox',
}: {
  id?: string;
  url?: string;
  title?: string;
}) {
  let embedUrl = '';
  let externalUrl = url || '';

  if (url) {
    externalUrl = url;
    if (url.includes('codesandbox.io/s/')) {
      embedUrl = url.replace('codesandbox.io/s/', 'codesandbox.io/embed/');
    } else if (url.includes('codesandbox.io/p/sandbox/')) {
      embedUrl = url.replace('codesandbox.io/p/sandbox/', 'codesandbox.io/embed/');
    } else if (url.includes('codesandbox.io/embed/')) {
      embedUrl = url;
    } else {
      embedUrl = url;
    }

    if (!embedUrl.includes('fontsize=')) {
      const sep = embedUrl.includes('?') ? '&' : '?';
      embedUrl = `${embedUrl}${sep}fontsize=13&hidenavigation=1&theme=dark`;
    }
  } else if (id) {
    externalUrl = `https://codesandbox.io/s/${id}`;
    embedUrl = `https://codesandbox.io/embed/${id}?fontsize=13&hidenavigation=1&theme=dark`;
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border/70 bg-muted/30 px-3 sm:px-4 py-2 font-mono text-xs text-muted-foreground">
        <span className="flex min-w-0 items-center gap-1.5 font-medium text-foreground">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-blue-500" />
          <span className="truncate">{title}</span>
        </span>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            Open Sandbox ↗
          </a>
        )}
      </div>
      <div className="h-[360px] sm:h-[520px] w-full">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}

// --- Replit Embed ---
export function Replit({
  url,
  title = 'Interactive Replit Sandbox',
}: {
  url: string;
  title?: string;
}) {
  const embedUrl = url.includes('?') ? `${url}&embed=true` : `${url}?embed=true`;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border/70 bg-muted/30 px-3 sm:px-4 py-2 font-mono text-xs text-muted-foreground">
        <span className="flex min-w-0 items-center gap-1.5 font-medium text-foreground">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-amber-500" />
          <span className="truncate">{title}</span>
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        >
          Open Replit ↗
        </a>
      </div>
      <div className="h-[360px] sm:h-[520px] w-full">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}

// --- Demo & AnimatedBox ---
export function Demo({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card/30 p-6 text-center">
      {children}
    </div>
  );
}

export function AnimatedBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-border/80 bg-muted/20 p-4 transition-all hover:border-blue-500/50">
      {children}
    </div>
  );
}
