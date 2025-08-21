import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SubvenTech — Vos subventions en un clic</title>
        <meta name="description" content="Assistant IA dédié aux subventions, aides et financements — simple, rapide et conforme RGPD." />
      </Head>

      <header className="sticky top-0 z-10 backdrop-blur bg-[color-mix(in_srgb,var(--surface)_85%,transparent)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">SubvenTech</div>
          <nav className="flex items-center gap-2 text-sm">
            <a className="navlink" href="/">Accueil</a>
            <a className="navlink" href="/aides">Aides</a>
            <a className="navlink" href="/dossier">Dossier</a>
            <a className="navlink" href="/profil">Profil</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Vos subventions en un clic. <span className="text-primary">Preuve à l’arrivée.</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Assistant IA focalisé subventions/aides/financements (perso & PME) — preuve-first, anticipation, simplicité, rigueur RGPD.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a className="btn" href="/aides">Tester vos aides</a>
            <a className="btn-outline" href="/dossier">Voir un dossier</a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mt-16">
          <div className="card">
            <h3 className="card-title">Preuve-first</h3>
            <p className="card-text">Chaque action génère une preuve vérifiable (PDF/JSON/EML/ICS).</p>
          </div>
          <div className="card">
            <h3 className="card-title">Simple & rapide</h3>
            <p className="card-text">Parcours en 3 étapes, 60 s pour la première preuve.</p>
          </div>
          <div className="card">
            <h3 className="card-title">RGPD by design</h3>
            <p className="card-text">Données minimisées, stockage UE, audit & rollback.</p>
          </div>
        </section>
      </main>

      <footer className="mt-14 border-t border-[var(--border)] text-muted">
        <div className="max-w-6xl mx-auto px-4 py-6">
          © {new Date().getFullYear()} SubvenTech
        </div>
      </footer>
    </>
  );
    }
