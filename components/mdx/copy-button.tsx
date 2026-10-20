'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={onCopy}
      type="button"
      aria-label={copied ? 'Copied code' : 'Copy code to clipboard'}
      className={
        className ||
        'inline-flex h-7 w-7 items-center justify-center rounded-md border border-border/70 bg-background/70 text-muted-foreground backdrop-blur transition hover:border-foreground/40 hover:text-foreground hover:bg-muted/50'
      }
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}
