// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Vos subventions en un clic.</h1>
        <p className="muted">
          Démarrez en quelques secondes, trouvez vos aides et suivez un parcours clair pour le dossier.
        </p>
        <div className="ctaRow" role="group" aria-label="Appels à l’action">
          <Link className="btn btnPrimary" href="/aides">Tester mes aides</Link>
          <Link className="btn btnGhost" href="/dossier">Créer mon dossier</Link>
        </div>
      </section>

      <section className="grid" aria-label="Avantages">
        <div className="card">
          <h3>Simple</h3>
          <p className="muted">Un parcours guidé, sans jargon administratif.</p>
        </div>
        <div className="card">
          <h3>Rapide</h3>
          <p className="muted">Simulation immédiate, étapes et pièces toujours visibles.</p>
        </div>
        <div className="card">
          <h3>Conforme</h3>
          <p className="muted">Respect de la vie privée et des exigences réglementaires.</p>
        </div>
      </section>
    </>
  );
}
