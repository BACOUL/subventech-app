import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon + PWA */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B3B6B" />

        {/* SEO de base */}
        <meta name="description" content="SubvenTech — Vos subventions en un clic." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OpenGraph (provisoirement en SVG, on passera en PNG plus tard) */}
        <meta property="og:title" content="SubvenTech — Vos subventions en un clic." />
        <meta property="og:description" content="Assistant intelligent pour trouver et gérer vos subventions (entreprises & associations)." />
        <meta property="og:image" content="/og/og-default.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
    }
