export default function Prose({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: "88px 64px", maxWidth: 880, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", color: "#A8330F" }}>{eyebrow}</div>
      <h1 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 56, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.03em" }}>{title}</h1>
      <p style={{ margin: 0, fontSize: 14, color: "#4A4A4A" }}>Last updated {updated}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 16, lineHeight: 1.7, color: "#3A3A3A" }}>{children}</div>
    </section>
  );
}
