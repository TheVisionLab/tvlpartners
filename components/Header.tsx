"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, CALENDLY_URL } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  return (
    <header style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center", padding: "24px 64px", borderBottom: "1px solid #111111" }}>
      <Link href="/" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 600, letterSpacing: "0.01em" }}>
        TVL<span style={{ color: "#C23B14" }}>/</span>Partners
      </Link>
      <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", fontSize: 15, fontWeight: 500 }}>
        {NAV.map((n) => {
          const active = path === n.href || path.startsWith(n.href + "/");
          return (
            <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined}
              style={active ? { borderBottom: "2px solid #C23B14", paddingBottom: 2 } : undefined}>
              {n.label}
            </Link>
          );
        })}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
          style={{ background: "#C23B14", color: "#fff", padding: "12px 22px", fontWeight: 600 }}>
          Book a call
        </a>
      </nav>
    </header>
  );
}
