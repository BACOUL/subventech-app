// pages/_app.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const title = 'SubvenTech — Vos subventions. En un clic.';
  const desc  = 'Assistant IA pour trouver et monter vos dossiers d’aides (perso & PME). Simple, preuve-first, RGPD.';
  const url   = 'https://subventech-app.vercel.app'; // remplace par ton domaine final si besoin
  const ogImg = '/brand/og-default.png';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={desc}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={url}/>
        {ogImg && <meta property="og:image" content={ogImg}/>}
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>

      <header className="header">
        <div className="container nav" role="navigation" aria-label="Navigation principale">
          <Link href="/" className="brand">
            <Image src="/brand/subventech-logo.svg" alt="SubvenTech" width={26} height={26} priority />
            <b>SubvenTech</b>
          </Link>
          <nav className="menu">
            <Link href="/aides">Aides</Link>
            <Link href="/dossier">Dossier</Link>
            <Link href="/profil">Profil</Link>
            <Link href="/brand">Brand</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Component {...pageProps} />
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} SubvenTech — <span className="muted">Vos subventions. En un clic.</span>
        </div>
      </footer>
    </>
  );
    }
