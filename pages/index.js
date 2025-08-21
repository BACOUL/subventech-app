// pages/index.js
import Link from 'next/link';

export default function Home(){
  return (
    <>
      <section className="hero">
        <h1>Vos subventions en un clic.</h1>
        <p className="muted">
          Assistant intelligent pour trouver vos aides et constituer vos dossiers (perso & PME) — simple, rapide, et conforme RGPD.
        </p>
        <div className="ctaRow" role="group" aria-label="Appels à l’action">
          <Link className="btn btnPrimary" href="/aides">Tester mes aides</Link>
          <Link className="btn btnGhost" href="/dossier">Créer mon dossier</Link>
        </div>
      </section>

      <section className="grid" aria-label="Avantages">
        <div className="card">
          <h3>Simple</h3>
          <p className="muted">Un parcours en quelques clics pour identifier et obtenir vos aides.</p>
        </div>
        <div className="card">
          <h3>Rapide</h3>
          <p className="muted">Simulation instantanée et dossiers guidés étape par étape.</p>
        </div>
        <div className="card">
          <h3>Conforme RGPD</h3>
          <p className="muted">Vos données sont protégées, stockées en Europe et supprimables à tout moment.</p>
        </div>
      </section>
    </>
  );
}
