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
    <div className="my-6 rounded-xl border border-border bg-card/40 p-4">
      <div className="border-b border-border">
        <nav className="-mb-px flex space-x-6 overflow-x-auto">
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
export function YouTube({ id, title }: { id: string; title?: string }) {
  return (
    <div className="my-6 aspect-video overflow-hidden rounded-xl border border-border">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title || 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
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
export function CodeSandbox({ id, title }: { id: string; title?: string }) {
  return (
    <div className="my-6 h-[500px] overflow-hidden rounded-xl border border-border">
      <iframe
        src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark`}
        title={title || 'CodeSandbox'}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        className="h-full w-full border-0"
      />
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
