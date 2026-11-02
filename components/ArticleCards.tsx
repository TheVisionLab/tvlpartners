import { ARTICLES } from "@/lib/articles";

const tagStyle = { fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", color: "#A8330F" } as const;
const h3Style = { margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, letterSpacing: "-0.02em" } as const;

export function Featured() {
  const a = ARTICLES[0];
  return (
    <a href={a.url} target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", flexWrap: "wrap", gap: 32, background: "#111111", color: "#fff", padding: 48, alignItems: "flex-end", justifyContent: "space-between" }}>
      <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ ...tagStyle, color: "#FF8A6B" }}>{a.tag} · {a.date}</div>
        <h2 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: 1.06, fontWeight: 600, letterSpacing: "-0.025em" }}>{a.title}</h2>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#D4D4D0", maxWidth: "38em" }}>{a.summary}</p>
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, borderBottom: "2px solid #FF8A6B", paddingBottom: 2 }}>Read on LinkedIn</div>
    </a>
  );
}

export function Cards({ items, min = 420, bordered = true, headingSize = 28 }: { items: typeof ARTICLES; min?: number; bordered?: boolean; headingSize?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`, gap: 24 }}>
      {items.map((a) => (
        <a key={a.title} href={a.url} target="_blank" rel="noopener noreferrer"
          style={{ background: "#F1F1EF", border: bordered ? "1px solid #111111" : undefined, padding: bordered ? 32 : 28, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={tagStyle}>{a.tag} · {a.date}</div>
          <h3 style={{ ...h3Style, fontSize: headingSize, lineHeight: 1.15 }}>{a.title}</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#3A3A3A" }}>{a.summary}</p>
          <div style={{ marginTop: "auto", fontSize: 15, fontWeight: 600, borderBottom: "2px solid #C23B14", paddingBottom: 2, alignSelf: "flex-start" }}>Read on LinkedIn</div>
        </a>
      ))}
    </div>
  );
}
