export default function Dossier() {
  const Step = ({ n, title, desc }:{ n:number; title:string; desc:string }) => (
    <div className="rounded-2xl bg-surface border border-border p-5">
      <div className="text-xs text-muted">Étape {n}</div>
      <h3 className="mt-1 mb-2 font-medium">{title}</h3>
      <p className="text-sm text-muted">{desc}</p>
    </div>
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Assistant dossier</h1>
        <p className="text-muted mt-2">
          Suivez vos démarches pas à pas. Chaque action génère une <strong>preuve</strong> (PDF/JSON/EML) pour sécuriser le suivi.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-4">
        <Step
          n={1}
          title="Profil & éligibilité"
          desc="Renseignez l’entreprise (SIREN, région, secteur, effectif). On vérifie les critères d’accès aux aides."
        />
        <Step
          n={2}
          title="Pièces & formulaires"
          desc="Liste des justificatifs, gabarits générés, brouillons d’email prêts à l’envoi."
        />
        <Step
          n={3}
          title="Soumission & suivi"
          desc="Dates limites, relances automatiques, horodatage des échanges, export de la preuve."
        />
      </section>

      <section className="rounded-2xl bg-surface border border-border p-6">
        <h2 className="text-xl font-medium mb-2">Prochaines actions</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Compléter le profil entreprise (2 min)</li>
          <li>Téléverser KBIS / Attestation URSSAF</li>
          <li>Générer le PDF “Dossier de demande”</li>
        </ul>
        <p className="text-xs text-muted mt-3">
          Astuce : chaque upload déclenche une sauvegarde et une preuve horodatée.
        </p>
      </section>
    </main>
  );
    }
