import type { Metadata } from "next";
import Prose from "@/components/Prose";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy", description: "How TVL Partners handles information you send through this website.", alternates: { canonical: "/privacy" } };

const h2 = { margin: "16px 0 0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 600, color: "#111111" } as const;

export default function Page() {
  return (
    <Prose eyebrow="PRIVACY" title="Privacy" updated="1 November 2026">
      <p>This page explains what TVL Partners collects through this website and what we do with it. We keep it short because we collect very little.</p>
      <h2 style={h2}>What we collect</h2>
      <p>If you use the contact form, we receive your name, work email, company, stage and the message you write. We do not ask for anything else. This site does not set advertising cookies and does not run advertising trackers.</p>
      <h2 style={h2}>How we use it</h2>
      <p>We use your details only to reply to you and to decide whether we can help. We do not sell your information or share it for marketing.</p>
      <h2 style={h2}>Who handles it</h2>
      <p>Your message is sent by email through Resend, our email delivery provider, and arrives in our inbox. The website is hosted on Vercel. If you book a call, you go to Calendly, which has its own privacy policy. Links to LinkedIn lead to LinkedIn, which has its own policy too.</p>
      <h2 style={h2}>How long we keep it</h2>
      <p>We keep messages for as long as needed to reply and to keep a record of the conversation, and delete them on request.</p>
      <h2 style={h2}>Your choices</h2>
      <p>You can ask us to show you, correct or delete what we hold about you by emailing <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>{CONTACT_EMAIL}</a>.</p>
    </Prose>
  );
}
