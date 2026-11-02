import type { Metadata } from "next";
import Link from "next/link";
import { Cards } from "@/components/ArticleCards";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = { description: "We help AI companies move from early traction to enterprise scale, with the sales systems large buyers expect.", alternates: { canonical: "/" } };

export default function Page() {
  return (
<><section style={{ display: "flex", flexWrap: "wrap", gap: 56, padding: "96px 64px 88px", alignItems: "center" }}>
<div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: 28 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>SALES EXECUTION FOR AI COMPANIES</div>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 72, lineHeight: "1.02", fontWeight: "600", letterSpacing: "-0.03em" }}>Turn pilots into enterprise contracts.</h1>
<p style={{ margin: "0", fontSize: 19, lineHeight: "1.55", color: "#3A3A3A", maxWidth: "34em" }}>We build the pipeline, the proof-of-concept path and the forecasting discipline that AI companies need to sell to large organizations.</p>
<div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
<a href="https://calendly.com/trevormadigan" target="_blank" rel="noopener noreferrer" style={{ background: "#C23B14", color: "#fff", fontSize: 16, fontWeight: "600", padding: "16px 28px" }}>Book a call</a>
<Link href="/how-we-work" style={{ border: "1.5px solid #111111", fontSize: 16, fontWeight: "600", padding: "14.5px 28px" }}>How we work</Link>
</div>
</div>
<div style={{ flex: "1 1 440px", minWidth: "0", background: "#111111", padding: 36, display: "flex", flexDirection: "column", gap: 14, color: "#fff" }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#FF8A6B" }}>AN ENTERPRISE AI DEAL, STAGE BY STAGE</div>
<div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 6 }}>
<div style={{ width: "100%", background: "#C23B14", height: 44, display: "flex", alignItems: "center", padding: "0 16px", color: "#fff", fontWeight: "600", fontSize: 15, boxSizing: "border-box" }}>Qualify the buyer</div>
<div style={{ width: "88%", background: "#E0623F", height: 44, display: "flex", alignItems: "center", padding: "0 16px", color: "#111", fontWeight: "600", fontSize: 15, boxSizing: "border-box" }}>Proof of concept</div>
<div style={{ width: "74%", background: "#EC8A6E", height: 44, display: "flex", alignItems: "center", padding: "0 16px", color: "#111", fontWeight: "600", fontSize: 15, boxSizing: "border-box" }}>Security and compliance review</div>
<div style={{ width: "60%", background: "#F4AD98", height: 44, display: "flex", alignItems: "center", padding: "0 16px", color: "#111", fontWeight: "600", fontSize: 15, boxSizing: "border-box" }}>Procurement</div>
<div style={{ width: "46%", background: "#F9CFC3", height: 44, display: "flex", alignItems: "center", padding: "0 16px", color: "#111", fontWeight: "600", fontSize: 15, boxSizing: "border-box" }}>Production contract</div>
</div>
<div style={{ fontSize: 14, color: "#D4D4D0", lineHeight: "1.5", marginTop: 6 }}>The stages we design so deals don&apos;t stall between pilot and production.</div>
</div>
</section>

<section style={{ padding: "36px 64px", background: "#F1F1EF", borderTop: "1px solid #111111", borderBottom: "1px solid #111111", display: "flex", flexWrap: "wrap", gap: "20px 48px", alignItems: "center" }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>LEADERSHIP EXPERIENCE ACROSS</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "500", color: "#3A3A3A" }}><span>Nokia</span><span>Mitsubishi Electric</span><span>Meta</span><span>Samsung Electronics America</span></div>
</section>

<section style={{ padding: "96px 64px", display: "flex", flexDirection: "column", gap: 44 }}>
<div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "40em" }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>WHAT WE DO</div>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em" }}>Six ways we help AI companies sell to the enterprise.</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "0", borderTop: "1px solid #111111", borderLeft: "1px solid #111111" }}>
<div style={{ borderRight: "1px solid #111111", borderBottom: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>01</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, lineHeight: "1.15", fontWeight: "600" }}>Sales pipeline architecture</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Pipeline stages built around how enterprise buyers evaluate AI: procurement, compliance, data access and security.</p></div>
<div style={{ borderRight: "1px solid #111111", borderBottom: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>02</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, lineHeight: "1.15", fontWeight: "600" }}>Proof of concept to production</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Clear success criteria, mutual action plans and technical milestones that turn pilots into contracts.</p></div>
<div style={{ borderRight: "1px solid #111111", borderBottom: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>03</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, lineHeight: "1.15", fontWeight: "600" }}>Pipeline hygiene and forecasting</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Repeatable systems for clean data, visible stalled deals and forecasts you can defend.</p></div>
<div style={{ borderRight: "1px solid #111111", borderBottom: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>04</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, lineHeight: "1.15", fontWeight: "600" }}>Playbooks and coaching</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Qualification tools, objection handling and training so your team sells with consistency.</p></div>
<div style={{ borderRight: "1px solid #111111", borderBottom: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>05</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, lineHeight: "1.15", fontWeight: "600" }}>Sales tooling setup</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Salesforce, Gong, HubSpot and Outreach configured so reps sell instead of updating fields.</p></div>
<div style={{ borderRight: "1px solid #111111", borderBottom: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>06</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, lineHeight: "1.15", fontWeight: "600" }}>Stakeholder mapping</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>Reach the right people early and keep multi-threaded deals moving.</p></div>
</div>
</section>

<section style={{ background: "#111111", color: "#fff", padding: "96px 64px", display: "flex", flexDirection: "column", gap: 44 }}>
<div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "40em" }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#FF8A6B" }}>HOW WE WORK</div>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em" }}>Diagnose, design, embed.</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 32 }}>
<div style={{ borderTop: "2px solid #C23B14", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, color: "#FF8A6B", fontWeight: "600" }}>1</div><h3 style={{ margin: "0", fontSize: 20, fontWeight: "600" }}>Diagnose</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#D4D4D0" }}>We review your pipeline, deals and buyer conversations to find where deals stall.</p></div>
<div style={{ borderTop: "2px solid #C23B14", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, color: "#FF8A6B", fontWeight: "600" }}>2</div><h3 style={{ margin: "0", fontSize: 20, fontWeight: "600" }}>Design</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#D4D4D0" }}>We design the stages, plans and playbooks your team will use.</p></div>
<div style={{ borderTop: "2px solid #C23B14", paddingTop: 20, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, color: "#FF8A6B", fontWeight: "600" }}>3</div><h3 style={{ margin: "0", fontSize: 20, fontWeight: "600" }}>Embed</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#D4D4D0" }}>We work alongside your team until the system runs without us.</p></div>
</div>
</section>

<section style={{ padding: "96px 64px", display: "flex", flexDirection: "column", gap: 44 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
<div style={{ display: "flex", flexDirection: "column", gap: 12 }}><div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>INSIGHTS</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 48, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em" }}>Notes on selling AI to the enterprise.</h2></div>
<Link href="/insights" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2 }}>All insights</Link>
</div>
<Cards items={ARTICLES.slice(0, 3)} min={300} bordered={false} headingSize={26} />
</section>

<section style={{ padding: "0 64px 96px", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
<div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: 18 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>ABOUT</div>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 42, lineHeight: "1.08", fontWeight: "600", letterSpacing: "-0.025em" }}>Twenty years of selling to large organizations.</h2>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>Our team has led enterprise sales at global companies. We bring that experience to AI companies moving from early traction to enterprise scale.</p>
<Link href="/about" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>More about us</Link>
</div>
</section>

<section style={{ background: "#C23B14", padding: "72px 64px", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em", color: "#fff", maxWidth: "18em" }}>Talk to us about your enterprise pipeline.</h2>
<a href="https://calendly.com/trevormadigan" target="_blank" rel="noopener noreferrer" style={{ background: "#111111", color: "#fff", fontSize: 16, fontWeight: "600", padding: "16px 30px" }}>Book a call</a>
</section></>
  );
}
