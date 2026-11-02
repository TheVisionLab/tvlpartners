import type { Metadata } from "next";
import { Featured, Cards } from "@/components/ArticleCards";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = { title: "Insights", description: "Notes on selling AI to large organizations: pipeline, proof of concept and enterprise deals.", alternates: { canonical: "insights" } };

export default function Page() {
  return (
<><section style={{ padding: "72px 64px 40px", display: "flex", flexDirection: "column", gap: 24, maxWidth: 960 }}>
<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>INSIGHTS</div>
<h1 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 64, lineHeight: "1.04", fontWeight: "600", letterSpacing: "-0.03em" }}>Notes on selling AI to large organizations.</h1>
<p style={{ margin: "0", fontSize: 19, lineHeight: "1.55", color: "#3A3A3A" }}>Practical writing on pipeline, proof of concept and enterprise deals.</p>
</section>

<section style={{ padding: "0 64px 24px" }}>
<Featured />
</section>

<section style={{ padding: "0 64px 88px" }}>
<Cards items={ARTICLES.slice(1)} />
</section>

<section style={{ background: "#C23B14", padding: "72px 64px", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
<h2 style={{ margin: "0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: "1.06", fontWeight: "600", letterSpacing: "-0.025em", color: "#fff", maxWidth: "18em" }}>Tell us where your deals stall.</h2>
<a href="https://calendly.com/trevormadigan" target="_blank" rel="noopener noreferrer" style={{ background: "#111111", color: "#fff", fontSize: 16, fontWeight: "600", padding: "16px 30px" }}>Book a call</a>
</section></>
  );
}
