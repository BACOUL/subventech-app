import Image from 'next/image';

function Swatch({name, varName}) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{height:40,width:40,borderRadius:8,border:'1px solid var(--border)',background:`var(${varName})`}} />
      <div><strong>{name}</strong><div className="muted">{varName}</div></div>
    </div>
  );
}

export default function Brand(){
  return (
    <>
      <h1>Brand Kit — SubvenTech</h1>
      <section className="card" style={{marginTop:16}}>
        <h3>Logo</h3>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Image src="/brand/subventech-logo.svg" alt="Logo SubvenTech" width={80} height={80}/>
          <ul className="muted">
            <li>Variantes : couleur, inversé, monochrome</li>
            <li>Usages : fond clair/sombre, pas de déformation</li>
          </ul>
        </div>
      </section>

      <section className="card" style={{marginTop:16}}>
        <h3>Couleurs</h3>
        <div className="grid">
          <Swatch name="Background" varName="--bg" />
          <Swatch name="Surface"    varName="--surface" />
          <Swatch name="Texte"      varName="--text" />
          <Swatch name="Primary"    varName="--primary" />
          <Swatch name="Accent"     varName="--accent" />
          <Swatch name="Border"     varName="--border" />
        </div>
      </section>

      <section className="card" style={{marginTop:16}}>
        <h3>Typographies</h3>
        <p className="muted">Titres : Sora — Texte : Inter</p>
      </section>
    </>
  );
}
