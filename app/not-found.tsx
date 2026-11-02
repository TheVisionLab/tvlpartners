import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section style={{ padding: "120px 64px", display: "flex", flexDirection: "column", gap: 20, maxWidth: 720 }}>
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", color: "#A8330F" }}>404</div>
      <h1 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 56, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.03em" }}>That page is not here.</h1>
      <Link href="/" style={{ fontSize: 15, fontWeight: 600, borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Back to the home page</Link>
    </section>
  );
}
