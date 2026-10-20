import * as React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      wrapper: 'border-blue-500/25 bg-blue-500/10 text-blue-950 dark:text-blue-100',
      iconColor: 'text-blue-500 dark:text-blue-400',
    },
    warning: {
      icon: AlertCircle,
      wrapper: 'border-amber-500/25 bg-amber-500/10 text-amber-950 dark:text-amber-100',
      iconColor: 'text-amber-500 dark:text-amber-400',
    },
    error: {
      icon: XCircle,
      wrapper: 'border-red-500/25 bg-red-500/10 text-red-950 dark:text-red-100',
      iconColor: 'text-red-500 dark:text-red-400',
    },
    success: {
      icon: CheckCircle,
      wrapper: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100',
      iconColor: 'text-emerald-500 dark:text-emerald-400',
    },
  };

  const { icon: Icon, wrapper, iconColor } = config[type] || config.info;

  return (
    <div className={cn('my-6 rounded-xl border p-4 sm:p-5', wrapper)}>
      <div className="flex items-start gap-3.5">
        <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', iconColor)} />
        <div className="flex-1 min-w-0">
          {title && (
            <h5 className="font-mono text-sm font-semibold tracking-tight text-foreground">
              {title}
            </h5>
          )}
          <div
            className={cn(
              'text-[14.5px] leading-relaxed text-muted-foreground [&>p]:my-0 [&>p+p]:mt-2.5',
              title && 'mt-1.5',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
