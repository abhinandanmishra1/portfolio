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
    'Database Internals',
    'Low-Level Design',
    'Project44',
    'SDE Forge',
    'CodePad',
    'Competitive Programming',
    'LeetCode Knight',
  ],
  authors: [{ name: portfolio.name, url: 'https://abhinandanmishra.in' }],
  creator: portfolio.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandanmishra.in',
    title: `${portfolio.name} — ${portfolio.tagline}`,
    description: portfolio.summary,
    siteName: `${portfolio.name} — Personal Site`,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${portfolio.name} — ${portfolio.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.name} — ${portfolio.tagline}`,
    description: portfolio.summary,
    creator: '@abhinandan_0001',
    site: '@abhinandan_0001',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://abhinandanmishra.in/#person',
        name: portfolio.name,
        url: 'https://abhinandanmishra.in',
        image: portfolio.avatar,
        jobTitle: 'SDE-II',
        worksFor: {
          '@type': 'Organization',
          name: 'Project44',
          url: 'https://project44.com',
        },
        sameAs: [
          'https://github.com/abhinandanmishra1',
          'https://www.linkedin.com/in/abhinandanmishra1',
          'https://x.com/abhinandan_0001',
          'https://leetcode.com/u/abhinandanmishra1',
          'https://abhinandanmishra1.hashnode.dev',
          'https://sdeforge.com',
        ],
        knowsAbout: [
          'Distributed Systems',
          'Database Internals',
          'Transaction Isolation Levels',
          'Caching Topologies',
          'Low-Level Design',
          'Execution Engines',
          'System Design',
          'Algorithms',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://abhinandanmishra.in/#website',
        url: 'https://abhinandanmishra.in',
        name: `${portfolio.name} — Engineering & Systems`,
        description: portfolio.summary,
        publisher: {
          '@id': 'https://abhinandanmishra.in/#person',
        },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
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
