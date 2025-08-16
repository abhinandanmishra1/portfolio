'use client';

import { TranslationsProvider } from '../src/i18n';
import Header from '../src/components/Header';

export default function Providers({ children }) {
  return (
    <TranslationsProvider>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        {children}
      </div>
    </TranslationsProvider>
  );
}
