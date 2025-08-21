import Link from "next/link";

const linkStyle = {
  padding: "10px 14px",
  textDecoration: "none",
  color: "#111",
  borderRadius: "10px",
};
const activeStyle = { background: "#f2f2f2" };

export default function Navbar() {
  const nav = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "16px 20px",
  };
  const left = { display: "flex", alignItems: "center", gap: 8 };
  const right = { display: "flex", gap: 6, alignItems: "center" };

  return (
    <header style={{ borderBottom: "1px solid #eee", position:"sticky", top:0, background:"white", zIndex:10 }}>
      <nav style={nav}>
        <div style={left}>
          <div style={{width:10, height:10, background:"#111", borderRadius:2, marginRight:8}} />
          <Link href="/" style={{ fontWeight: 700, fontSize: 18, color:"#111", textDecoration:"none" }}>
            SubvenTech
          </Link>
        </div>
        <div style={right}>
          <Link href="/" style={linkStyle}>Accueil</Link>
          <Link href="/profil" style={linkStyle}>Profil</Link>
          <Link href="/aides" style={linkStyle}>Aides</Link>
          <Link href="/dossier" style={linkStyle}>Dossier</Link>
        </div>
      </nav>
    </header>
  );
              }
