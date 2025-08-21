import Image from 'next/image';

const Swatch = ({ name, varName }: { name: string; varName: string }) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-lg border" style={{ background: `var(${varName})` }} />
    <div className="text-sm">
      <strong>{name}</strong>
      <div className="text-muted">{varName}</div>
    </div>
  </div>
);

export default function BrandKit() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <h1 className="font-display text-3xl">Brand Kit — Subventec</h1>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Logo</h2>
        <div className="flex items-center gap-6">
          <Image src="/brand/logo-subventec.svg" alt="Logo Subventec" width={80} height={80} />
          <ul className="text-sm list-disc pl-5 text-muted">
            <li>Formats : SVG, PNG (carré & horizontal)</li>
            <li>Usages : fond clair recommandé, version inversée dispo</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Couleurs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Swatch name="Background" varName="--bg" />
          <Swatch name="Surface" varName="--surface" />
          <Swatch name="Text" varName="--text" />
          <Swatch name="Primary" varName="--primary" />
          <Swatch name="Muted" varName="--muted" />
          <Swatch name="Border" varName="--border" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Typographies</h2>
        <p className="text-sm text-muted">Titres : Sora — Texte : Inter</p>
        <div className="space-y-2">
          <h3 className="font-display text-2xl">Titre (Sora)</h3>
          <p>Paragraphe (Inter) — lisible, moderne, contrasté.</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Composants</h2>
        <p className="text-sm text-muted">
          Boutons, Cards et Header utilisent les tokens (couleurs, border, ring).
        </p>
      </section>
    </main>
  );
}
