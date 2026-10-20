import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinandan Mishra | Software Engineer II",
  description:
    "Portfolio of Abhinandan Mishra, Software Engineer II at Project44. Building scalable distributed systems, high-performance web applications, and developer tools.",
  keywords: [
    "Abhinandan Mishra",
    "Software Engineer",
    "Project44",
    "Full Stack Developer",
    "System Design",
    "Next.js",
    "React",
    "TypeScript",
    "SDE Forge",
    "CodePad",
  ],
  authors: [{ name: "Abhinandan Mishra" }],
  creator: "Abhinandan Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhinandanmishra.in",
    title: "Abhinandan Mishra | Software Engineer II",
    description:
      "Software Engineer II at Project44 building scalable distributed systems and delightful web applications.",
    siteName: "Abhinandan Mishra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinandan Mishra | Software Engineer II",
    description:
      "Software Engineer II at Project44 building scalable distributed systems and delightful web applications.",
    creator: "@abhinandan_0001",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
