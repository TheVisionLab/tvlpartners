import type { Metadata } from "next";
import Prose from "@/components/Prose";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "Terms", description: "Terms of use for the TVL Partners website.", alternates: { canonical: "/terms" } };

const h2 = { margin: "16px 0 0", fontFamily: "'Space Grotesk',sans-serif", fontSize: 24, fontWeight: 600, color: "#111111" } as const;

export default function Page() {
  return (
    <Prose eyebrow="TERMS" title="Terms of use" updated="1 November 2026">
      <p>These terms cover your use of this website. By using it, you agree to them.</p>
      <h2 style={h2}>General information only</h2>
      <p>The content on this site is general information about our services and our views on enterprise sales. It is not legal, financial or other professional advice, and reading it does not create a client relationship. Work with TVL Partners starts only when we agree it in writing.</p>
      <h2 style={h2}>Our content</h2>
      <p>The text, design and logos on this site belong to TVL Partners or are used with permission. Company names and logos of other organizations belong to their owners and appear only to show where our team has worked. You may link to this site. Please do not copy it without asking.</p>
      <h2 style={h2}>Links to other sites</h2>
      <p>We link to LinkedIn, Calendly and other sites. We do not control them and are not responsible for what they say or do.</p>
      <h2 style={h2}>No guarantees</h2>
      <p>We try to keep this site accurate and available, but we provide it as it is, without warranties. To the extent the law allows, we are not liable for loss arising from using it.</p>
      <h2 style={h2}>Questions</h2>
      <p>Email <a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>{CONTACT_EMAIL}</a>.</p>
    </Prose>
  );
}
