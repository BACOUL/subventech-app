// pages/profil.js
export default function Profil() {
  return (
    <section className="page">
      <h1>Mon profil</h1>
      <p className="muted">Renseignez vos informations pour personnaliser les aides proposées.</p>

      <div className="grid two">
        <div className="card">
          <h3>Particulier</h3>
          <p className="muted">Âge, situation, revenus, logement, localisation…</p>
        </div>
        <div className="card">
          <h3>PME / Indépendant</h3>
          <p className="muted">SIREN, effectif, CA, secteur, zone géographique…</p>
        </div>
      </div>
    </section>
  );
}
