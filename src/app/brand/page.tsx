const Swatch = ({ name, varName }:{name:string; varName:string}) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-lg border border-border" style={{ background: `var(${varName})` }} />
    <div className="text-sm"><strong>{name}</strong><div className="text-muted">{varName}</div></div>
  </div>
);

export default function BrandKit(){
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Brand Kit</h1>
      <section className="space-y-3">
        <h2 className="text-xl font-medium">Couleurs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Swatch name="Background" varName="--bg" />
          <Swatch name="Surface" varName="--surface" />
          <Swatch name="Texte" varName="--text" />
          <Swatch name="Primaire" varName="--primary" />
          <Swatch name="Muted" varName="--muted" />
          <Swatch name="Bordure" varName="--border" />
        </div>
      </section>
      <p className="text-sm text-muted">Titres et paragraphes utilisent les polices Inter & Sora. Les composants (Button, Card, Header) respectent les tokens ci-dessus.</p>
    </main>
  );
}
