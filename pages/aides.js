// pages/aides.js
export default function Aides() {
  return (
    <section className="page">
      <h1>Trouvez vos aides</h1>
      <p className="muted">
        Filtrez bientôt par région, secteur, statut (personne/PME) et montants.
      </p>

      <div className="card">
        <h3>Recherche (à venir)</h3>
        <ul className="list">
          <li>• Région / Département</li>
          <li>• Type d’aide (subvention, prêt, crédit d’impôt…)</li>
          <li>• Secteur d’activité</li>
          <li>• Montant minimum / maximum</li>
        </ul>
      </div>
    </section>
  );
}
