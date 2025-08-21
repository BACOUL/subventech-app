export default function Profil(){
  return (
    <>
      <h1>Profil</h1>
      <p className="muted">Entreprise & éligibilité (création de compte bientôt).</p>
      <div className="grid">
        <div className="card"><h3>Entreprise</h3><p className="muted">SIREN, effectif, CA, secteur.</p></div>
        <div className="card"><h3>Préférences</h3><p className="muted">Région, montants, alertes.</p></div>
        <div className="card"><h3>Confidentialité</h3><p className="muted">RGPD, export, suppression.</p></div>
      </div>
    </>
  );
}
