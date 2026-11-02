"use client";
import { useState } from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const field = { height: 46, border: "1px solid #111111", background: "#fff", padding: "0 12px", fontWeight: 400 } as const;
const label = { display: "flex", flexDirection: "column", gap: 6, fontSize: 14, fontWeight: 600 } as const;

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong.");
      }
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" style={{ flex: "1 1 480px", minWidth: 0, background: "#F1F1EF", border: "1px solid #111111", padding: 36, display: "flex", flexDirection: "column", gap: 12 }}>
        <h2 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>Thanks, we got your note.</h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#3A3A3A" }}>We'll reply by email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ flex: "1 1 480px", minWidth: 0, background: "#F1F1EF", border: "1px solid #111111", padding: 36, display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em" }}>Send a note</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 20 }}>
        <label style={label}>Name<input name="name" type="text" required maxLength={120} autoComplete="name" style={field} /></label>
        <label style={label}>Work email<input name="email" type="email" required maxLength={200} autoComplete="email" style={field} /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 20 }}>
        <label style={label}>Company<input name="company" type="text" maxLength={160} autoComplete="organization" style={field} /></label>
        <label style={label}>Stage
          <select name="stage" style={field} defaultValue="Seed">
            <option>Seed</option><option>Series A</option><option>Series B or later</option><option>Not sure</option>
          </select>
        </label>
      </div>
      <label style={label}>Where do your enterprise deals stall?
        <textarea name="message" rows={5} required maxLength={4000} style={{ border: "1px solid #111111", background: "#fff", padding: 12, fontWeight: 400, resize: "vertical" }} />
      </label>
      {/* Honeypot: real people never see or fill this */}
      <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <button type="submit" disabled={state === "sending"} style={{ background: "#C23B14", color: "#fff", border: 0, fontSize: 16, fontWeight: 600, padding: "16px 30px", cursor: state === "sending" ? "wait" : "pointer", opacity: state === "sending" ? 0.7 : 1 }}>
          {state === "sending" ? "Sending…" : "Send"}
        </button>
        <span style={{ fontSize: 13, color: "#4A4A4A", maxWidth: "22em" }}>We use your details only to reply. <Link href="/privacy" style={{ textDecoration: "underline" }}>Privacy</Link></span>
      </div>
      {state === "error" && (
        <p role="alert" style={{ margin: 0, fontSize: 14, color: "#A8330F" }}>
          {error} You can also email <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
