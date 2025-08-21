// pages/dossier.js
export default function Dossier() {
  return (
    <section className="page">
      <h1>Mon dossier</h1>
      <p className="muted">Étapes, pièces et suivi — tout est centralisé.</p>

      <ol className="steps">
        <li><strong>Étape 1 :</strong> Profil & éligibilité</li>
        <li><strong>Étape 2 :</strong> Sélection de l’aide</li>
        <li><strong>Étape 3 :</strong> Pièces à fournir</li>
        <li><strong>Étape 4 :</strong> Vérification & dépôt</li>
      </ol>
    </section>
  );
}
