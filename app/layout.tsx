import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { portfolio } from '@/data/portfolio';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhinandanmishra.in'),
  title: {
    default: `${portfolio.name} — ${portfolio.tagline}`,
    template: `%s — ${portfolio.name}`,
  },
  description: portfolio.summary,
  keywords: [
    'Abhinandan Mishra',
    'Software Engineer',
    'Distributed Systems',
    'System Design',
    'Project44',
    'SDE Forge',
    'Competitive Programming',
  ],
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandanmishra.in',
    title: `${portfolio.name} — ${portfolio.tagline}`,
    description: portfolio.summary,
    siteName: `${portfolio.name} — Personal Site`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.name} — ${portfolio.tagline}`,
    description: portfolio.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
