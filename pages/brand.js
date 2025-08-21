export const config = { runtime: 'edge' };

const rows = [
  { name:'Background', var:'--bg', hex:'#F7F8FA / #0E1116' },
  { name:'Surface',    var:'--surface', hex:'#FFFFFF / #111827' },
  { name:'Texte',      var:'--text', hex:'#0B1320 / #E5F2F4' },
  { name:'Primary',    var:'--primary', hex:'#0B3B6B' },
  { name:'Accent',     var:'--accent', hex:'#16B978' },
  { name:'Muted',      var:'--muted', hex:'#64748B / #94A3B8' },
  { name:'Border',     var:'--border', hex:'#E5E7EB / #1F2937' },
];

export default function Brand() {
  return (
    <main className="container" style={{padding:'40px 0'}}>
      <h1 className="h1">Brand — SubvenTech</h1>

      <section className="section" style={{paddingTop:24}}>
        <h2>Logo</h2>
        <div style={{display:'flex', alignItems:'center', gap:16, marginTop:8}}>
          <img src="/brand/logo-subventech.svg" alt="Logo SubvenTech" width="80" height="80" />
          <ul style={{color:'var(--muted)'}}>
            <li>Formats : SVG (maître), PNG exports</li>
            <li>Usages : fond clair conseillé ; version inversée pour fond sombre</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <h2>Couleurs</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(1, minmax(0,1fr))', gap:12, marginTop:8}}>
          {rows.map((r)=>(
            <div key={r.var} className="card" style={{display:'flex', alignItems:'center', gap:12}}>
              <div style={{height:40, width:40, borderRadius:10, border:'1px solid var(--border)', background:`var(${r.var})`}} />
              <div>
                <strong>{r.name}</strong><div style={{color:'var(--muted)'}}>{r.var} · {r.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <h2>Typographies</h2>
        <p style={{color:'var(--muted)'}}>Titres : Sora (prévu) — Texte : Inter (prévu). Ici, fallback système pour aller vite.</p>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <h2>Composants</h2>
        <p style={{color:'var(--muted)'}}>Les boutons/cards utilisent les tokens ci-dessus. Les variantes viendront au Bloc 2.</p>
      </section>
    </main>
  );
                    }
