import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle, type Block } from "@/lib/articles";
import { Cards } from "@/components/ArticleCards";
import { CALENDLY_URL, SITE_NAME, SITE_URL } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.summary, publishedTime: a.iso, url: `/insights/${a.slug}` },
  };
}

const h2 = { margin: "20px 0 0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, lineHeight: 1.15, fontWeight: 600, letterSpacing: "-0.02em", color: "#111111" } as const;

function render(b: Block, i: number) {
  switch (b.t) {
    case "h":
      return <h2 key={i} style={h2}>{b.text}</h2>;
    case "p":
      return <p key={i} style={{ margin: 0 }}>{b.text}</p>;
    case "ul":
      return (
        <ul key={i} style={{ margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 10 }}>
          {b.items.map((t) => <li key={t}>{t}</li>)}
        </ul>
      );
    case "callout":
      return (
        <p key={i} style={{ margin: "12px 0 0", borderLeft: "3px solid #C23B14", padding: "6px 0 6px 20px", fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, lineHeight: 1.3, fontWeight: 600, letterSpacing: "-0.01em", color: "#111111" }}>{b.text}</p>
      );
    case "table":
      return (
        <div key={i} style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 15 }}>
            <thead>
              <tr>{b.head.map((h) => <th key={h} style={{ textAlign: "left", padding: "10px 14px", background: "#111111", color: "#fff", fontWeight: 600 }}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r[0]}>{r.map((c, j) => <td key={j} style={{ padding: "10px 14px", border: "1px solid #D4D4D0" }}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.summary,
    datePublished: a.iso,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/insights/${a.slug}`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section style={{ padding: "72px 64px 40px", maxWidth: 960, display: "flex", flexDirection: "column", gap: 20 }}>
        <Link href="/insights" style={{ fontSize: 14, fontWeight: 600, color: "#A8330F" }}>← All insights</Link>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", color: "#A8330F" }}>{a.tag} · {a.date}</div>
        <h1 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 56, lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.03em" }}>{a.title}</h1>
        <p style={{ margin: 0, fontSize: 14, color: "#4A4A4A" }}>{SITE_NAME} · {a.read}</p>
      </section>
      <section style={{ padding: "0 64px 72px", maxWidth: 840 }}>
        <article style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 17, lineHeight: 1.7, color: "#3A3A3A" }}>
          {a.body.map(render)}
        </article>
      </section>
      <section style={{ background: "#F1F1EF", borderTop: "1px solid #111111", padding: "72px 64px", display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", color: "#A8330F" }}>KEEP READING</div>
        <Cards items={more} />
      </section>
      <section style={{ background: "#C23B14", padding: "72px 64px", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 44, lineHeight: 1.06, fontWeight: 600, letterSpacing: "-0.025em", color: "#fff", maxWidth: "18em" }}>Tell us where your deals stall.</h2>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#111111", color: "#fff", fontSize: 16, fontWeight: 600, padding: "16px 30px" }}>Book a call</a>
      </section>
    </>
  );
}
