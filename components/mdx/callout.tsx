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
      wrapper: 'border-blue-500/20 bg-blue-500/5 text-blue-950 dark:text-blue-200',
      iconColor: 'text-blue-500 dark:text-blue-400',
    },
    warning: {
      icon: AlertCircle,
      wrapper: 'border-amber-500/20 bg-amber-500/5 text-amber-950 dark:text-amber-200',
      iconColor: 'text-amber-500 dark:text-amber-400',
    },
    error: {
      icon: XCircle,
      wrapper: 'border-red-500/20 bg-red-500/5 text-red-950 dark:text-red-200',
      iconColor: 'text-red-500 dark:text-red-400',
    },
    success: {
      icon: CheckCircle,
      wrapper: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-950 dark:text-emerald-200',
      iconColor: 'text-emerald-500 dark:text-emerald-400',
    },
  };

  const { icon: Icon, wrapper, iconColor } = config[type] || config.info;

  return (
    <div className={cn('my-6 rounded-lg border p-4.5', wrapper)}>
      <div className="flex items-start gap-3">
        <Icon className={cn('mt-0.5 h-4.5 w-4.5 shrink-0', iconColor)} />
        <div className="flex-1 space-y-1.5 text-[14.5px] leading-relaxed">
          {title && <h5 className="font-semibold text-foreground">{title}</h5>}
          <div className="prose-p:my-1 text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
