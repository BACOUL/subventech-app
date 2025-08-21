export default function Dossier(){
  return (
    <>
      <h1>Assistant Dossier</h1>
      <p className="muted">Étapes, pièces, suivi — preuve générée à chaque action. (à venir)</p>
      <div className="grid">
        <div className="card"><h3>Étapes</h3><p className="muted">Checklist guidée.</p></div>
        <div className="card"><h3>Pièces</h3><p className="muted">Rappels & validations.</p></div>
        <div className="card"><h3>Suivi</h3><p className="muted">Statut, délais, notifications.</p></div>
      </div>
    </>
  );
}
