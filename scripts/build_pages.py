import re, pathlib
R = pathlib.Path(__file__).parent
def load(n): return (R / f"{n}.jsx.txt").read_text()

def rm_placeholder(s, text):
    pat = re.compile(r'<div style=\{\{[^}]*\}\}>\[' + re.escape(text) + r'[^<]*</div>\n?')
    s2 = pat.sub('', s)
    return s2

def links(s):
    def f(m):
        return f'<Link href="{m.group(1)}"{m.group(2)}>{m.group(3)}</Link>'
    return re.sub(r'<a href="(/[^"]*)"((?:(?!>).)*)>((?:(?!</a>).)*)</a>', f, s, flags=re.S)

def page(name, route, title, desc, body, imports=""):
    body = links(body)
    uses_link = "<Link" in body
    head = ""
    if uses_link: head += 'import Link from "next/link";\n'
    head += imports
    meta = f'export const metadata: Metadata = {{ title: {title!r}, description: {desc!r}, alternates: {{ canonical: "{route or "/"}" }} }};\n' if title else \
           f'export const metadata: Metadata = {{ description: {desc!r}, alternates: {{ canonical: "/" }} }};\n'
    meta = meta.replace("'", '"')
    out = f'import type {{ Metadata }} from "next/metadata";\n'.replace("next/metadata", "next") + head + "\n" + meta + f"\nexport default function Page() {{\n  return (\n{body}\n  );\n}}\n"
    d = R.parent / "app" / route
    d.mkdir(parents=True, exist_ok=True)
    (d / "page.tsx").write_text(out)

# ---------- Home
s = load("Home")
s = rm_placeholder(s, "Client names")
s = re.sub(r'<div style=\{\{ flex: "0 0 320px"[^}]*\}\}>\[Team or office photo, optional\]</div>\n?', '', s)
a = s.index('<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 24 }}>\n<a href="#"')
b = s.index('</section>', a)
s = s[:a] + '<Cards items={ARTICLES.slice(0, 3)} min={300} bordered={false} headingSize={26} />\n' + s[b:]
s = s.replace('<a href="#" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2 }}>All insights</a>', '<a href="/insights" style={{ fontSize: 15, fontWeight: "600", borderBottom: "2px solid #C23B14", paddingBottom: 2 }}>All insights</a>')
s = re.sub(r'<a href="#"([^>]*)>More about us</a>', r'<a href="/about"\1>More about us</a>', s)
page("Home", "", None, "We help AI companies move from early traction to enterprise scale, with the sales systems large buyers expect.", s,
     'import { Cards } from "@/components/ArticleCards";\nimport { ARTICLES } from "@/lib/articles";\n')

# ---------- Services
s = load("Services")
a = s.index('<section style={{ padding: 64, display: "flex", flexDirection: "column", gap: 20, maxWidth: 960 }}>\n<div style={{ fontSize: 13, fontWeight: "600", letterSpacing: "0.14em", color: "#A8330F" }}>IN PRACTICE')
b = s.index('</section>', a) + 10
s = s[:a] + s[b:].lstrip("\n")
s = re.sub(r'<a href="#"([^>]*)>Talk to us about this</a>', r'<a href="/contact"\1>Talk to us about this</a>', s)
page("Services", "services", "Services", "Pipeline architecture, proof of concept to production, forecasting and sales systems for AI companies selling to large organizations.", s)

# ---------- How we work
s = load("HowWeWork")
s = rm_placeholder(s, "Length and fee")
s = rm_placeholder(s, "Typical length")
page("HowWeWork", "how-we-work", "How we work", "Diagnose, design, embed. How TVL Partners works with AI companies on enterprise sales.", s)

# ---------- About
s = load("About")
s = s.replace('src="logos/', 'src="/logos/')
page("About", "about", "About", "Twenty years of selling to large organizations. Experience across enterprise AI, SaaS, financial services and partner-led growth.", s)

# ---------- Contact
s = load("Contact")
a = s.index('<form'); b = s.index('</form>') + 7
s = s[:a] + '<ContactForm />' + s[b:]
s = s.replace('[Contact email]', '<a href={`mailto:${CONTACT_EMAIL}`} style={{ textDecoration: "underline" }}>{CONTACT_EMAIL}</a>')
s = s.replace('[Calendar link, 30 minutes]', '<a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Book a 30-minute call</a>')
s = s.replace(' [Reply time, to be confirmed]', '')
s = s.replace('[Privacy link]', '')
page("Contact", "contact", "Contact", "Tell us where your enterprise deals stall. Send a note or book a 30-minute call.", s,
     'import ContactForm from "@/components/ContactForm";\nimport { CONTACT_EMAIL, CALENDLY_URL } from "@/lib/site";\n')

# ---------- Insights (data driven)
s = load("Insights")
a = s.index('<section style={{ padding: "0 64px 24px" }}>')
s = s[:a] + '''<section style={{ padding: "0 64px 24px" }}>
<Featured />
</section>

<section style={{ padding: "0 64px 88px" }}>
<Cards items={ARTICLES.slice(1)} />
</section>

''' + s[s.index('<section style={{ background: "#C23B14"'):]
page("Insights", "insights", "Insights", "Notes on selling AI to large organizations: pipeline, proof of concept and enterprise deals.", s,
     'import { Featured, Cards } from "@/components/ArticleCards";\nimport { ARTICLES } from "@/lib/articles";\n')
print("pages written")
