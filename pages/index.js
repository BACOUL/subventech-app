export const config = { runtime: 'edge' }; // ultra rapide sur Vercel

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <img src="/brand/logo-subventech.svg" alt="SubvenTech" width="28" height="28" />
            <span>SubvenTech</span>
          </a>
          <nav className="nav">
            <a className="ghost" href="/brand">Brand</a>
            <a className="cta" href="/demander">Tester mes aides</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1 className="h1">
            Vos subventions. <span style={{color:'var(--primary)'}}>En un clic.</span>
          </h1>
          <p className="lead">
            Assistant intelligent pour les entreprises, associations et créateurs — parcours simple,
            résultats clairs, confidentialité respectée.
          </p>
          <div style={{marginTop:16}}>
            <a className="cta" href="/demander" style={{padding:'12px 16px', borderRadius:12, background:'var(--primary)', color:'#fff'}}>Tester mes aides</a>
          </div>
        </section>

        <section className="section">
          <div className="container grid">
            <div className="card">
              <h3>Parcours ultra-simple</h3>
              <p style={{color:'var(--muted)'}}>4 étapes max, adapté aux entreprises & associations.</p>
            </div>
            <div className="card">
              <h3>Rapide & clair</h3>
              <p style={{color:'var(--muted)'}}>Comprenez en 5 secondes ce que vous pouvez obtenir.</p>
            </div>
            <div className="card">
              <h3>Confiance & confidentialité</h3>
              <p style={{color:'var(--muted)'}}>Données minimisées, hébergement UE, RGPD.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} SubvenTech — Tous droits réservés</div>
      </footer>
    </>
  );
    }
