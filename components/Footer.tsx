import Link from "next/link";
import { NAV, CONTACT_EMAIL, TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", color: "#D4D4D0", padding: "48px 64px", display: "flex", flexWrap: "wrap", gap: "24px 56px", justifyContent: "space-between", fontSize: 14 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 600, color: "#fff" }}>
          TVL<span style={{ color: "#FF8A6B" }}>/</span>Partners
        </div>
        <div>{TAGLINE}</div>
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>{CONTACT_EMAIL}</a>
      </div>
      <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", alignItems: "flex-start" }}>
        {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
    </footer>
  );
}
