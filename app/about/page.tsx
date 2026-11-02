import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "Twenty years of selling to large organizations. Experience across enterprise AI, SaaS, financial services and partner-led growth.", alternates: { canonical: "about" } };

export default function Page() {
  return (
<><section style={{ display: "flex", flexWrap: "wrap", gap: 56, padding: "88px 64px 72px", alignItems: "flex-start" }}>
<div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 24 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>ABOUT</div>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 64, lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.03em" }}>Twenty years of selling to large organizations.</h1>
<p style={{ margin: "0", fontSize: 19, lineHeight: "1.55", color: "#3A3A3A" }}>We help AI companies move from early traction to enterprise scale, with the sales systems large buyers expect.</p>
<div style={{ borderLeft: "3px solid #C23B14", padding: "4px 0 4px 20px", fontSize: 17, lineHeight: "1.65", color: "#3A3A3A", display: "flex", flexDirection: "column", gap: 14 }}><p style={{ margin: "0" }}>Our team has led multi-million-dollar global deals and C-suite relationships in enterprise AI and mobility, across companies selling into the world&apos;s largest buyers.</p><p style={{ margin: "0" }}>TVL Partners brings that experience to AI companies, helping them build the pipeline, proof-of-concept and forecasting systems that large buyers expect.</p></div>
</div>
</section>

<section style={{ background: "#111111", color: "#fff", padding: "88px 64px", display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
<div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: 14 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#FF8A6B" }}>EXPERIENCE</div>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.025em" }}>Our team has led enterprise sales at four global companies.</h2>
</div>
<div style={{ flex: "1 1 360px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "0", borderTop: "1px solid #4A4A4A", borderLeft: "1px solid #4A4A4A" }}><div style={{ background: "#fff", borderRight: "1px solid #4A4A4A", borderBottom: "1px solid #4A4A4A", display: "flex", alignItems: "center", justifyContent: "center", padding: 12, height: 140, boxSizing: "border-box" }}><img src="/logos/nokia.png" alt="Nokia" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", mixBlendMode: "multiply" }} /></div><div style={{ background: "#fff", borderRight: "1px solid #4A4A4A", borderBottom: "1px solid #4A4A4A", display: "flex", alignItems: "center", justifyContent: "center", padding: 12, height: 140, boxSizing: "border-box" }}><img src="/logos/mitsubishi-electric.png" alt="Mitsubishi Electric" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", mixBlendMode: "multiply" }} /></div><div style={{ background: "#fff", borderRight: "1px solid #4A4A4A", borderBottom: "1px solid #4A4A4A", display: "flex", alignItems: "center", justifyContent: "center", padding: 12, height: 140, boxSizing: "border-box" }}><img src="/logos/meta.jpg" alt="Meta" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", mixBlendMode: "multiply" }} /></div><div style={{ background: "#fff", borderRight: "1px solid #4A4A4A", borderBottom: "1px solid #4A4A4A", display: "flex", alignItems: "center", justifyContent: "center", padding: 12, height: 140, boxSizing: "border-box" }}><img src="/logos/samsung.png" alt="Samsung" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", mixBlendMode: "multiply" }} /></div></div>
</section>

<section style={{ padding: "88px 64px", display: "flex", flexDirection: "column", gap: 44 }}>
<div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "40em" }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>WHAT WE KNOW</div>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em" }}>Where our experience runs deepest.</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "0", borderTop: "1px solid #111111", borderLeft: "1px solid #111111" }}>
<div style={{ padding: 28, borderRight: "1px solid #111111", borderBottom: "1px solid #111111", display: "flex", flexDirection: "column", gap: 8 }}><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>Financial services</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Selling into banks, insurers and other regulated buyers.</p></div>
<div style={{ padding: 28, borderRight: "1px solid #111111", borderBottom: "1px solid #111111", display: "flex", flexDirection: "column", gap: 8 }}><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>Agentic AI</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Taking AI products from pilot to production contract.</p></div>
<div style={{ padding: 28, borderRight: "1px solid #111111", borderBottom: "1px solid #111111", display: "flex", flexDirection: "column", gap: 8 }}><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>SaaS</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Enterprise subscription sales and the pipeline behind them.</p></div>
<div style={{ padding: 28, borderRight: "1px solid #111111", borderBottom: "1px solid #111111", display: "flex", flexDirection: "column", gap: 8 }}><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>Partner-led growth</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Growing through channel and technology partners.</p></div>
</div>
</section>

<section style={{ background: "#C23B14", padding: "72px 64px", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em", color: "#fff", maxWidth: "18em" }}>Let&apos;s talk about your enterprise pipeline.</h2>
<a href="https://calendly.com/trevormadigan" target="_blank" rel="noopener noreferrer" style={{ background: "#111111", color: "#fff", fontSize: 16, fontWeight: "600", padding: "16px 30px" }}>Book a call</a>
</section></>
  );
}
