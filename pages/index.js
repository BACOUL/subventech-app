// pages/index.js
import Link from 'next/link';

export default function Home(){
  return (
    <>
      <section className="hero">
        <h1>Vos subventions. En un clic. <span style={{color:'var(--accent)'}}>Preuve à l’arrivée.</span></h1>
        <p className="muted">
          Assistant IA focalisé subventions/aides (perso & PME) — preuve-first, anticipation, simplicité, rigueur RGPD.
        </p>
        <div className="ctaRow" role="group" aria-label="Appels à l’action">
          <Link className="btn btnPrimary" href="/aides">Tester mes aides</Link>
          <Link className="btn btnGhost" href="/dossier">Voir une preuve</Link>
        </div>
      </section>

      <section className="grid" aria-label="Principes">
        <div className="card">
          <h3>Preuve-first</h3>
          <p className="muted">Chaque action génère une preuve vérifiable (PDF/JSON/EML/ICS).</p>
        </div>
        <div className="card">
          <h3>Simple & rapide</h3>
          <p className="muted">Parcours en 3 étapes, 60 s pour la première preuve.</p>
        </div>
        <div className="card">
          <h3>RGPD by design</h3>
          <p className="muted">Données minimisées, stockage UE, audit & rollback.</p>
        </div>
      </section>
    </>
  );
}
