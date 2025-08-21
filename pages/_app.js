// pages/_app.js
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

const TITLE = 'SubvenTech — Vos subventions en un clic.';
const DESC =
  'Assistant simple et fiable pour trouver vos aides et constituer vos dossiers (perso & PME).';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* OG / Twitter */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#0B3B6B" />
      </Head>

      <header className="header light">
        <div className="container headerRow">
          <Link href="/" className="brand">
            <span className="brandMark" aria-hidden="true">S</span>
            <span className="brandName">Subven<span className="brandAccent">Tech</span></span>
          </Link>
          <nav className="nav">
            <Link href="/">Accueil</Link>
            <Link href="/aides">Aides</Link>
            <Link href="/dossier">Dossier</Link>
            <Link href="/profil">Profil</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Component {...pageProps} />
      </main>

      <footer className="footer light">
        <div className="container">
          © {new Date().getFullYear()} SubvenTech — <span className="muted">Vos subventions en un clic.</span>
        </div>
      </footer>
    </>
  );
}
