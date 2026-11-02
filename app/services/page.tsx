import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services", description: "Pipeline architecture, proof of concept to production, forecasting and sales systems for AI companies selling to large organizations.", alternates: { canonical: "services" } };

export default function Page() {
  return (
<><section style={{ padding: "88px 64px 64px", display: "flex", flexDirection: "column", gap: 24, maxWidth: 1200 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>SERVICES</div>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 64, lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.03em" }}>Six ways we help AI companies<br className="dbr" /> sell to the enterprise.</h1>
<p style={{ margin: "0", fontSize: 19, lineHeight: "1.55", color: "#3A3A3A" }}>Most AI deals stall between pilot and production. Each service targets one reason they do. Use one, or combine them.</p>
</section>

<section style={{ padding: "0 64px 32px", display: "flex", flexDirection: "column" }}>

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", padding: "44px 0", borderTop: "1px solid #111111" }}>
<div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>01</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }}>Sales pipeline architecture</h2></div>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 16 }}>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>We design pipeline stages around how enterprise buyers evaluate AI solutions, including procurement, compliance, data access and security reviews. You get clarity and control from lead to close, not guesswork in the CRM.</p>
<ul style={{ margin: "0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: "1.5", color: "#111111" }}><li>Stage definitions with entry and exit criteria</li><li>A pipeline map matched to your buyers&apos; review steps</li><li>CRM set up to match</li></ul>
<Link href="/contact" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Talk to us about this</Link>
</div></div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", padding: "44px 0", borderTop: "1px solid #111111" }}>
<div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>02</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }}>Proof of concept to production</h2></div>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 16 }}>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>Most AI deals stall in pilot purgatory. We help your team define clear success criteria, mutual action plans and technical milestones that convert proofs of concept into long-term contracts.</p>
<ul style={{ margin: "0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: "1.5", color: "#111111" }}><li>Success criteria agreed with the buyer before the pilot starts</li><li>A mutual action plan for each pilot</li><li>Technical milestones tied to the commercial decision</li></ul>
<Link href="/contact" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Talk to us about this</Link>
</div></div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", padding: "44px 0", borderTop: "1px solid #111111" }}>
<div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>03</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }}>Pipeline hygiene and forecasting</h2></div>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 16 }}>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>We put repeatable systems in place to improve data quality, spotlight stalled deals and refine forecasts, so quarter-end holds no surprises.</p>
<ul style={{ margin: "0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: "1.5", color: "#111111" }}><li>Data standards and deal-inspection routines</li><li>A forecast method your leadership can defend</li><li>Cleaner dashboards that show what is stuck</li></ul>
<Link href="/contact" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Talk to us about this</Link>
</div></div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", padding: "44px 0", borderTop: "1px solid #111111" }}>
<div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>04</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }}>Playbooks and coaching</h2></div>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 16 }}>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>We deliver tailored playbooks, qualification tools such as MEDDPICC adapted for AI, objection-handling scripts and training that give your team the confidence and consistency to close enterprise AI deals.</p>
<ul style={{ margin: "0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: "1.5", color: "#111111" }}><li>Sales playbooks for your product and buyers</li><li>Qualification and objection-handling tools</li><li>Team training and coaching</li></ul>
<Link href="/contact" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Talk to us about this</Link>
</div></div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", padding: "44px 0", borderTop: "1px solid #111111" }}>
<div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>05</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }}>Sales tooling setup</h2></div>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 16 }}>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>We set up your sales stack, such as Salesforce, Gong, HubSpot and Outreach, to support growth, with dashboards, automations and integrations that keep your team selling instead of updating fields.</p>
<ul style={{ margin: "0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: "1.5", color: "#111111" }}><li>Dashboards for pipeline and forecast</li><li>Automations that remove manual updates</li><li>Integrations across your sales tools</li></ul>
<Link href="/contact" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Talk to us about this</Link>
</div></div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", padding: "44px 0", borderTop: "1px solid #111111", borderBottom: "1px solid #111111" }}>
<div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: 10 }}><div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "#A8330F", fontWeight: "600" }}>06</div><h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, lineHeight: "1.1", fontWeight: "600", letterSpacing: "-0.02em" }}>Stakeholder mapping and multi-threaded deals</h2></div>
<div style={{ flex: "2 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: 16 }}>
<p style={{ margin: "0", fontSize: 17, lineHeight: "1.6", color: "#3A3A3A" }}>Enterprise AI deals are complex. We help your team engage the right stakeholders early, tailor messaging by persona and build deal strategies that keep momentum and prevent stalls.</p>
<ul style={{ margin: "0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: 15, lineHeight: "1.5", color: "#111111" }}><li>Stakeholder maps for each key account</li><li>Messaging by persona</li><li>Multi-threaded deal plans</li></ul>
<Link href="/contact" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Talk to us about this</Link>
</div></div>

</section>

<section style={{ background: "#C23B14", padding: "72px 64px", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em", color: "#fff", maxWidth: "18em" }}>Not sure which one you need? Start with a call.</h2>
<a href="https://calendly.com/trevormadigan" target="_blank" rel="noopener noreferrer" style={{ background: "#111111", color: "#fff", fontSize: 16, fontWeight: "600", padding: "16px 30px" }}>Book a call</a>
</section></>
  );
}
