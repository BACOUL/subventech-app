export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'
    }}>
      <div style={{maxWidth: 720, textAlign: 'center'}}>
        <h1 style={{fontSize: 36, margin: 0}}>SubvenTech</h1>
        <p style={{fontSize: 18, marginTop: 8, color: '#666'}}>
          Vos subventions en un clic.
        </p>

        <div style={{marginTop: 24, textAlign: 'left', lineHeight: 1.6}}>
          <h2 style={{fontSize: 22, marginBottom: 8}}>Ce que l’app fera</h2>
          <ul>
            <li>Profil entreprise & eligibility check</li>
            <li>Catalogue des aides (filtre par région, secteur…)</li>
            <li>Assistant dossier (étapes, pièces, suivi)</li>
          </ul>
        </div>

        <p style={{marginTop: 24, fontSize: 14, color: '#888'}}>
          Version de démarrage — déploiement de test sur Vercel.
        </p>
      </div>
    </main>
  );
                     }
