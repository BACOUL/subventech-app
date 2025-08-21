import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home(){
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <section className="text-center space-y-6">
          <h1 className="font-display text-4xl md:text-5xl">
            Vos aides. Sans paperasse. <span className="text-primary">Preuve à l’arrivée.</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Assistant IA focalisé subventions/aides/financements (perso & PME) — preuve-first, anticipation, simplicité, rigueur RGPD.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button>Tester vos aides</Button>
            <Button variant="outline">Voir une preuve</Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mt-16">
          <Card><h3 className="font-display mb-2">Preuve-first</h3><p className="text-sm text-muted">Chaque action génère une preuve vérifiable (PDF/JSON/EML/ICS).</p></Card>
          <Card><h3 className="font-display mb-2">Simple & rapide</h3><p className="text-sm text-muted">Parcours en 3 étapes, 60 s pour la première preuve.</p></Card>
          <Card><h3 className="font-display mb-2">RGPD by design</h3><p className="text-sm text-muted">Données minimisées, stockage UE, audit & rollback.</p></Card>
        </section>
      </main>
    </>
  );
}
