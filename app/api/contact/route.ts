import { NextResponse } from "next/server";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const runtime = "nodejs";

// Best-effort per-instance rate limit (5 per 10 minutes per IP). Honeypot and length limits do the rest.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "";
const oneLine = (v: string) => v.replace(/[\n\t]+/g, " ");

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = oneLine(clean(body.name, 120));
  const email = oneLine(clean(body.email, 200));
  const company = oneLine(clean(body.company, 160));
  const stage = oneLine(clean(body.stage, 40));
  const message = clean(body.message, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please add your name, a valid email and a message." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM || `${SITE_NAME} <hello@mail.thevisionlab.com>`;
  const to = process.env.CONTACT_TO || CONTACT_EMAIL;
  if (!key) return NextResponse.json({ error: "The form is not available right now." }, { status: 503 });

  const text = `${message}\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nStage: ${stage || "-"}\n`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `TVL Partners contact: ${name}${company ? ` (${company})` : ""}`, text }),
  });
  if (!res.ok) return NextResponse.json({ error: "We could not send your note." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
