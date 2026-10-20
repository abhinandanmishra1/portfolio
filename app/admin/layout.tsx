import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>back to portfolio</span>
          </Link>
          <div className="flex items-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400">
            <Shield className="h-3.5 w-3.5" />
            <span>Admin Studio</span>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
