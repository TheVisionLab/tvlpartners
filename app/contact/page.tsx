import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Tell us where your enterprise deals stall. Send a note or book a 30-minute call.", alternates: { canonical: "contact" } };

export default function Page() {
  return (
<><section style={{ display: "flex", flexWrap: "wrap", gap: 64, padding: "88px 64px", alignItems: "stretch" }}>

<div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: 28, justifyContent: "space-between" }}>
<div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>CONTACT</div>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 64, lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.03em" }}>Tell us where your deals stall.</h1>
<p style={{ margin: "0", fontSize: 19, lineHeight: "1.55", color: "#3A3A3A" }}>A short note is enough. We&apos;ll tell you honestly whether we can help.</p>
</div>

<div style={{ display: "flex", flexDirection: "column", borderTop: "2px solid #111111" }}>
<div style={{ padding: "20px 0", borderBottom: "1px solid #D4D4D0", display: "flex", flexDirection: "column", gap: 4 }}><div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>EMAIL</div><div style={{ fontSize: 17 }}><a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>{CONTACT_EMAIL}</a></div></div>
<div style={{ padding: "20px 0", borderBottom: "1px solid #D4D4D0", display: "flex", flexDirection: "column", gap: 4 }}><div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>BOOK A CALL</div><div style={{ fontSize: 17 }}><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Book a 30-minute call</a></div></div>
<div style={{ padding: "20px 0", borderBottom: "1px solid #D4D4D0", display: "flex", flexDirection: "column", gap: 4 }}><div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>LOCATION</div><div style={{ fontSize: 17 }}>New York area. Working with teams worldwide.</div></div>
</div>
</div>

<ContactForm />
</section>

<section style={{ background: "#F1F1EF", borderTop: "1px solid #111111", borderBottom: "1px solid #111111", padding: "88px 64px", display: "flex", flexDirection: "column", gap: 44 }}>
<div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: "40em" }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>WHAT HAPPENS NEXT</div>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em" }}>No pitch. A conversation first.</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 24 }}>
<div style={{ background: "#fff", border: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ width: 40, height: 40, background: "#C23B14", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: "600" }}>1</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>We read your note</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>A senior member of our team replies personally.</p></div>
<div style={{ background: "#fff", border: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ width: 40, height: 40, background: "#C23B14", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: "600" }}>2</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>A 30-minute call</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>We talk through your pipeline and where deals stall.</p></div>
<div style={{ background: "#fff", border: "1px solid #111111", padding: 28, display: "flex", flexDirection: "column", gap: 10 }}><div style={{ width: 40, height: 40, background: "#C23B14", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: "600" }}>3</div><h3 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: "600" }}>An honest answer</h3><p style={{ margin: "0", fontSize: 15, lineHeight: "1.55", color: "#3A3A3A" }}>If we&apos;re a fit, we propose a Diagnostic. If not, we say so.</p></div>
</div>
</section></>
  );
}
