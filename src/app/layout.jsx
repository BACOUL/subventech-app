import './globals.css';
import { Inter, Sora } from 'next/font/google';
import type { Metadata } from 'next';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const sora  = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'Subventec — Vos aides. Sans paperasse.',
  description: 'Assistant IA subventions — preuve-first, simple, RGPD.',
  metadataBase: new URL('https://subventec.com'),
  openGraph: {
    title: 'Subventec — Vos aides. Sans paperasse. Preuve à l’arrivée.',
    description: 'Assistant IA focalisé subventions (perso & PME).',
    url: 'https://subventec.com',
    siteName: 'Subventec',
    images: [{ url: '/og/og-default.png', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@subventec' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>{children}</body>
    </html>
  );
}
