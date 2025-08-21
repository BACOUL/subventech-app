import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style global jsx>{`
        html, body { margin:0; padding:0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#111; }
        * { box-sizing: border-box; }
        .container { max-width: 1100px; margin: 0 auto; padding: 28px 20px; }
        h1 { font-size: 40px; margin: 0 0 8px; letter-spacing: -0.02em; }
        h2 { font-size: 24px; margin-top: 28px; }
        p, li { line-height: 1.6; font-size: 16px; color:#333; }
        .muted { color:#8a8a8a; }
        .card { border:1px solid #eee; border-radius: 14px; padding:20px; }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
