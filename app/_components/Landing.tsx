import type { Dict, Lang } from "../../lib/i18n";
import { ContactForm } from "./ContactForm";
import { LangSwitch } from "./LangSwitch";

const QR_SHORT_URL = "https://qr.sommelierlab.com/DEMO";

const theme = {
  bg: "#07070B",
  border: "rgba(255,255,255,0.12)",
  text: "#F6F1EB",
  textSoft: "rgba(246,241,235,0.74)",
  wine: "#7A1E3A",
  gold: "#D3B17A",
  glow: "rgba(122,30,58,0.28)",
};

interface Props {
  t: Dict;
  lang: Lang;
}

function FoundingBanner({ t }: Props) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      background: "linear-gradient(90deg, rgba(122,30,58,0.95) 0%, rgba(176,70,103,0.95) 100%)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap", textAlign: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.text, padding: "3px 8px", borderRadius: 6, background: "rgba(255,255,255,0.15)" }}>
          {t.banner.label}
        </span>
        <span style={{ fontSize: 13, color: theme.text, fontWeight: 500 }}>
          {t.banner.text}
        </span>
        <a href="#contacto" style={{ fontSize: 12, color: theme.text, fontWeight: 700, textDecoration: "underline" }}>
          {t.banner.cta}
        </a>
      </div>
    </div>
  );
}

function Nav({ t, lang }: Props) {
  return (
    <nav style={{ position: "fixed", top: 42, left: 0, right: 0, zIndex: 50, backdropFilter: "blur(12px)", background: "rgba(7,7,11,0.8)", borderBottom: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <a href={`/${lang}`} style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.03em", color: theme.text, textDecoration: "none" }}>SOMMELIERLAB</a>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="#solución" style={{ fontSize: 13, color: theme.textSoft, textDecoration: "none", fontWeight: 500 }}>{t.nav.solution}</a>
          <a href="#demo" style={{ fontSize: 13, color: theme.textSoft, textDecoration: "none", fontWeight: 500 }}>{t.nav.demo}</a>
          <a href="#planes" style={{ fontSize: 13, color: theme.textSoft, textDecoration: "none", fontWeight: 500 }}>{t.nav.plans}</a>
          <a href="#contacto" style={{ fontSize: 13, color: theme.textSoft, textDecoration: "none", fontWeight: 500 }}>{t.nav.contact}</a>
          <LangSwitch current={lang} />
        </div>
      </div>
    </nav>
  );
}

function Hero({ t, lang }: Props) {
  const QR_DEMO_URL = `https://qr2.sommelierlab.com/?vino_id=V005&anyada=2021&lang=${lang}`;
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "180px 0 80px", textAlign: "center" }}>
      <div style={{ position: "absolute", top: -160, right: -80, width: 400, height: 400, borderRadius: "50%", background: theme.glow, filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 100, left: -120, width: 300, height: 300, borderRadius: "50%", background: "rgba(211,177,122,0.06)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <span style={{ display: "inline-flex", padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.05)", border: `1px solid ${theme.border}`, color: theme.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
          {t.hero.eyebrow}
        </span>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 5.6rem)", lineHeight: 1, letterSpacing: "-0.04em", margin: "0 0 24px", color: theme.text }}>
          {t.hero.title}
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, color: theme.textSoft, maxWidth: 640, margin: "0 auto 36px" }}>
          {t.hero.subtitle}
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={QR_DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 16,
            background: "linear-gradient(135deg, #6E1835 0%, #8D2746 52%, #B04667 100%)", color: theme.text, textDecoration: "none",
            fontWeight: 800, border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 16px 40px rgba(122,30,58,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}>
            {t.hero.ctaPrimary}
          </a>
          <a href="#contacto" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 16,
            background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, color: theme.text, textDecoration: "none",
            fontWeight: 700, backdropFilter: "blur(8px)",
          }}>
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem({ t }: Props) {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.problem.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          {t.problem.title1}{" "}
          <span style={{ color: theme.textSoft }}>{t.problem.title2}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {t.problem.cards.map((c) => (
            <div key={c.title} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "28px 24px", backdropFilter: "blur(12px)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px" }}>{c.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.8, color: theme.textSoft, fontSize: 15 }}>{c.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 32, fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, color: theme.gold, fontWeight: 600, textAlign: "center", fontStyle: "italic" }}>
          {t.problem.closing}
        </p>
      </div>
    </section>
  );
}

function Solution({ t }: Props) {
  return (
    <section id="solución" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.solution.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          {t.solution.title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {t.solution.items.map((v) => (
            <div key={v.num} style={{ position: "relative", background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "32px 28px 28px", backdropFilter: "blur(12px)" }}>
              <div style={{ position: "absolute", top: 28, right: 24, fontSize: 13, fontWeight: 800, color: "rgba(255,255,255,0.08)", letterSpacing: "0.06em" }}>{v.num}</div>
              <h3 style={{ margin: "0 0 12px", fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.01em" }}>{v.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.8, color: theme.textSoft, fontSize: 15 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Retention({ t }: Props) {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}`, background: "linear-gradient(180deg, rgba(122,30,58,0.04), transparent 70%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.retention.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 800 }}>
          {t.retention.title1}{" "}
          <span style={{ color: theme.gold }}>{t.retention.title2}</span>
        </h2>
        <p style={{ color: theme.textSoft, fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, maxWidth: 680, margin: "0 0 48px" }}>
          {t.retention.intro}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {t.retention.layers.map((l) => (
            <div key={l.tag} style={{ position: "relative", background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "28px 24px 24px", backdropFilter: "blur(12px)" }}>
              <span style={{ display: "inline-flex", padding: "4px 10px", borderRadius: 8, background: "rgba(211,177,122,0.12)", color: theme.gold, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{l.tag}</span>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{l.title}</h3>
              <p style={{ margin: "0 0 14px", lineHeight: 1.75, color: theme.textSoft, fontSize: 14 }}>{l.text}</p>
              <p style={{ margin: 0, padding: "10px 12px", borderLeft: `2px solid ${theme.gold}`, fontSize: 12, color: theme.gold, fontStyle: "italic", lineHeight: 1.5, background: "rgba(211,177,122,0.04)", borderRadius: "0 8px 8px 0" }}>{l.pitch}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 48, padding: "24px 28px", borderRadius: 20, background: "rgba(122,30,58,0.08)", border: `1px solid rgba(122,30,58,0.25)`, fontSize: "clamp(1rem, 2.2vw, 1.25rem)", lineHeight: 1.7, color: theme.text, textAlign: "center", fontStyle: "italic", maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
          {t.retention.summary1} <strong style={{ color: theme.gold, fontStyle: "normal" }}>{t.retention.summary2}</strong>, <strong style={{ color: theme.gold, fontStyle: "normal" }}>{t.retention.summary3}</strong>, {t.retention.closingTitle.startsWith(".") ? "o " : ""}<strong style={{ color: theme.gold, fontStyle: "normal" }}>{t.retention.summary4}</strong>{t.retention.closingTitle}
        </p>
        <p style={{ marginTop: 28, color: theme.textSoft, fontSize: 14, textAlign: "center", lineHeight: 1.7, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          {t.retention.closingText}
        </p>
      </div>
    </section>
  );
}

function Demo({ t, lang }: Props) {
  const QR_DEMO_URL = `https://qr2.sommelierlab.com/?vino_id=V005&anyada=2021&lang=${lang}`;
  return (
    <section id="demo" style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}`, background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.demo.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 700 }}>
          {t.demo.title}
        </h2>
        <p style={{ color: theme.textSoft, fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, maxWidth: 600, margin: "0 0 40px" }}>
          {t.demo.intro}
        </p>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative", padding: 10, borderRadius: 44, background: "linear-gradient(135deg, #1a1a20, #0a0a0e)", border: `1px solid ${theme.border}`, boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
            <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", width: 90, height: 22, borderRadius: 14, background: "#000", zIndex: 2 }} />
            <div style={{ width: 360, height: 720, borderRadius: 34, overflow: "hidden", background: "#000", position: "relative" }}>
              <iframe src={QR_DEMO_URL} style={{ width: "100%", height: "100%", border: "none", display: "block" }} title="Demo QR2" />
            </div>
          </div>
          <div style={{ maxWidth: 400 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>{t.demo.sideTitle}</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, margin: "0 0 20px" }}>
              {t.demo.sideText}
            </p>
            <div style={{ padding: 18, borderRadius: 16, background: "#fff", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=0&ecc=M&data=${encodeURIComponent(QR_SHORT_URL)}`}
                alt="QR de la demo SommelierLab"
                width={180}
                height={180}
                style={{ display: "block", borderRadius: 6 }}
              />
              <span style={{ fontSize: 11, color: "#1a1a20", fontWeight: 600 }}>{t.demo.qrCaption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Control({ t }: Props) {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.control.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          {t.control.title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {t.control.cards.map((c) => (
            <div key={c.title} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: 28, backdropFilter: "blur(12px)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: theme.gold }}>{c.title}</h3>
              <p style={{ color: theme.textSoft, lineHeight: 1.8, margin: "0 0 16px", fontSize: 14 }}>
                {c.text}
              </p>
              <div style={{ height: 200, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.06)`, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
                {c.placeholder}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ t }: Props) {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}`, background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.howItWorks.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px" }}>
          {t.howItWorks.title}
        </h2>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {t.howItWorks.steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "20px 18px", borderRadius: 18, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, minWidth: 160, flex: "1 1 160px", maxWidth: 220 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(122,30,58,0.3)", color: theme.gold, fontSize: 14, fontWeight: 800 }}>{s.num}</div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, textAlign: "center" }}>{s.title}</p>
                <p style={{ margin: 0, fontSize: 12, color: theme.textSoft, textAlign: "center", lineHeight: 1.5 }}>{s.text}</p>
              </div>
              {i < t.howItWorks.steps.length - 1 && <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 22, fontWeight: 300 }}>&rarr;</span>}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 13, color: theme.textSoft, textAlign: "center" }}>
          {t.howItWorks.footer}
        </p>
      </div>
    </section>
  );
}

function TwoQRs({ t }: Props) {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.twoQRs.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          {t.twoQRs.title1}{" "}
          <span style={{ color: theme.gold }}>{t.twoQRs.title2}</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <div style={{ borderRadius: 24, padding: "28px 24px", border: `1px solid ${theme.border}`, background: "rgba(255,255,255,0.03)" }}>
            <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 8, background: "rgba(74,222,128,0.1)", color: "#4ade80", fontSize: 11, fontWeight: 700, marginBottom: 16 }}>{t.twoQRs.legal.badge}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>{t.twoQRs.legal.title}</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px" }}>
              {t.twoQRs.legal.text}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.twoQRs.legal.features.map(f => (
                <li key={f} style={{ padding: "5px 0", fontSize: 13, color: theme.textSoft, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#4ade80" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 16, fontSize: 12, color: theme.textSoft, fontStyle: "italic" }}>
              {t.twoQRs.legal.footnote}
            </p>
          </div>
          <div style={{ borderRadius: 24, padding: "28px 24px", border: "1px solid rgba(122,30,58,0.4)", background: "linear-gradient(135deg, rgba(122,30,58,0.15), rgba(54,16,34,0.1))", boxShadow: "0 20px 60px rgba(122,30,58,0.1)" }}>
            <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 8, background: "rgba(122,30,58,0.2)", color: "#e8a0b4", fontSize: 11, fontWeight: 700, marginBottom: 16 }}>{t.twoQRs.premium.badge}</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>{t.twoQRs.premium.title}</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px" }}>
              {t.twoQRs.premium.text}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.twoQRs.premium.features.map(f => (
                <li key={f} style={{ padding: "5px 0", fontSize: 13, color: theme.textSoft, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: theme.gold }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ t }: Props) {
  return (
    <section id="planes" style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.pricing.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          {t.pricing.title}
        </h2>
        <p style={{ color: theme.textSoft, fontSize: 15, lineHeight: 1.8, margin: "0 0 40px", maxWidth: 600 }}>
          {t.pricing.subtitle}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {t.pricing.plans.map((p, idx) => {
            const highlight = idx === 1;
            return (
              <div key={p.name} style={{
                borderRadius: 24, padding: "32px 24px", backdropFilter: "blur(12px)",
                background: highlight ? "linear-gradient(135deg, rgba(122,30,58,0.2), rgba(54,16,34,0.15))" : "rgba(255,255,255,0.03)",
                border: `1px solid ${highlight ? "rgba(122,30,58,0.4)" : theme.border}`,
                boxShadow: highlight ? "0 20px 60px rgba(122,30,58,0.15)" : "none",
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{p.name}</h3>
                <p style={{ color: theme.textSoft, fontSize: 13, margin: "0 0 16px" }}>{p.vinos} &middot; {p.langs}</p>
                <p style={{ fontSize: 28, fontWeight: 800, margin: "0 0 16px" }}>
                  <span style={{ color: theme.gold }}>{p.price}€</span>
                  <span style={{ fontSize: 14, color: theme.textSoft, fontWeight: 500 }}>/año</span>
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ padding: "5px 0", fontSize: 13, color: theme.textSoft, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: f.includes("GRATIS") || f.includes("FREE") ? "#4ade80" : theme.gold }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" style={{
                  display: "block", textAlign: "center", padding: "14px 0", borderRadius: 14, fontSize: 14, fontWeight: 700,
                  textDecoration: "none",
                  background: highlight ? "linear-gradient(135deg, #6E1835, #B04667)" : "rgba(255,255,255,0.06)",
                  color: highlight ? "#fff" : theme.textSoft,
                  border: `1px solid ${highlight ? "rgba(255,255,255,0.14)" : theme.border}`,
                }}>
                  {p.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.pricing.setupTitle}</p>
          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
            {t.pricing.setupSubtitle}
          </h3>
          <p style={{ color: theme.textSoft, fontSize: 14, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 640 }}>
            {t.pricing.setupHeading}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {t.pricing.setups.map((s, idx) => {
              const highlight = idx === 1;
              return (
                <div key={s.name} style={{
                  borderRadius: 24, padding: "28px 24px", backdropFilter: "blur(12px)",
                  background: highlight ? "linear-gradient(135deg, rgba(211,177,122,0.12), rgba(122,30,58,0.08))" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${highlight ? "rgba(211,177,122,0.3)" : theme.border}`,
                }}>
                  <h4 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>{s.name}</h4>
                  <p style={{ color: theme.textSoft, fontSize: 13, margin: "0 0 14px" }}>{s.desc}</p>
                  <p style={{ fontSize: 26, fontWeight: 800, margin: "0 0 16px" }}>
                    <span style={{ color: theme.gold }}>{s.price}€</span>
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ padding: "5px 0", fontSize: 13, color: theme.textSoft, display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: theme.gold, marginTop: 1 }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 56, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "28px 24px", overflow: "auto" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 16px", textAlign: "center" }}>{t.pricing.comparativaTitle}</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                <th style={{ textAlign: "left", padding: "8px 12px", color: theme.textSoft, fontWeight: 600 }}></th>
                <th style={{ textAlign: "center", padding: "8px 12px", color: theme.textSoft, fontWeight: 600 }}>{t.pricing.comparativaCols.winefo}</th>
                <th style={{ textAlign: "center", padding: "8px 12px", color: theme.textSoft, fontWeight: 600 }}>{t.pricing.comparativaCols.pinotqr}</th>
                <th style={{ textAlign: "center", padding: "8px 12px", color: theme.gold, fontWeight: 700 }}>{t.pricing.comparativaCols.sommelierlab}</th>
              </tr>
            </thead>
            <tbody>
              {t.pricing.comparativaRows.map(([label, w, p, s]) => (
                <tr key={label} style={{ borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                  <td style={{ padding: "8px 12px", color: theme.textSoft }}>{label}</td>
                  <td style={{ padding: "8px 12px", textAlign: "center", color: "rgba(255,255,255,0.35)" }}>{w}</td>
                  <td style={{ padding: "8px 12px", textAlign: "center", color: "rgba(255,255,255,0.35)" }}>{p}</td>
                  <td style={{ padding: "8px 12px", textAlign: "center", color: s === "GRATIS" || s === "FREE" ? "#4ade80" : s === "✓" ? theme.gold : theme.text, fontWeight: 600 }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function MediaProduction({ t }: Props) {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>{t.media.eyebrow}</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 800 }}>
          {t.media.title}
        </h2>
        <p style={{ color: theme.textSoft, fontSize: 15, lineHeight: 1.8, margin: "0 0 40px", maxWidth: 700 }}>
          {t.media.subtitle}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {t.media.items.map((it) => (
            <div key={it.title} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 20, padding: "24px 22px", backdropFilter: "blur(12px)" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 10 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.2 }}>{it.title}</h3>
                <span style={{ fontSize: 11, color: theme.gold, fontWeight: 600, whiteSpace: "nowrap" }}>{it.duration}</span>
              </div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: theme.textSoft }}>{it.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, padding: "24px", borderRadius: 20, background: "linear-gradient(135deg, rgba(211,177,122,0.1), rgba(122,30,58,0.06))", border: `1px solid rgba(211,177,122,0.25)`, textAlign: "center" }}>
          <p style={{ margin: "0 0 14px", fontSize: 14, color: theme.text, lineHeight: 1.6 }}>
            <strong style={{ color: theme.gold }}>{t.media.ctaText}</strong>
          </p>
          <a href="#contacto" style={{
            display: "inline-flex", alignItems: "center", padding: "10px 22px", borderRadius: 12,
            background: "rgba(255,255,255,0.06)", border: `1px solid ${theme.border}`, color: theme.text, textDecoration: "none",
            fontSize: 13, fontWeight: 700,
          }}>
            {t.media.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: Props) {
  return (
    <section id="contacto" style={{ padding: "0 0 100px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          borderRadius: 28, padding: "40px 32px",
          background: "linear-gradient(135deg, rgba(122,30,58,0.92) 0%, rgba(54,16,34,0.94) 100%)",
          border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(246,241,235,0.6)", margin: "0 0 10px" }}>{t.contact.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", lineHeight: 1.1, margin: "0 0 12px" }}>
              {t.contact.title}
            </h2>
            <p style={{ lineHeight: 1.8, color: "rgba(246,241,235,0.75)", fontSize: 15, margin: "0 0 0" }}>
              {t.contact.subtitle}
            </p>
          </div>
          <ContactForm strings={t.contact.form} />
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: Props) {
  return (
    <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "32px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <span style={{ fontSize: 14, fontWeight: 800 }}>SOMMELIERLAB</span>
          <p style={{ fontSize: 11, color: theme.textSoft, margin: "4px 0 0" }}>{t.footer.tagline}</p>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/privacidad" style={{ fontSize: 11, color: theme.textSoft, textDecoration: "none" }}>{t.footer.privacy}</a>
          <a href="/cookies" style={{ fontSize: 11, color: theme.textSoft, textDecoration: "none" }}>{t.footer.cookies}</a>
          <a href="/terminos" style={{ fontSize: 11, color: theme.textSoft, textDecoration: "none" }}>{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}

export default function Landing({ t, lang }: Props) {
  return (
    <main style={{ position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at top, rgba(122,30,58,0.14), transparent 50%), linear-gradient(180deg, #07070B 0%, #0A0B10 100%)` }}>
      <FoundingBanner t={t} lang={lang} />
      <Nav t={t} lang={lang} />
      <Hero t={t} lang={lang} />
      <Problem t={t} lang={lang} />
      <Solution t={t} lang={lang} />
      <Retention t={t} lang={lang} />
      <Demo t={t} lang={lang} />
      <Control t={t} lang={lang} />
      <HowItWorks t={t} lang={lang} />
      <TwoQRs t={t} lang={lang} />
      <Pricing t={t} lang={lang} />
      <MediaProduction t={t} lang={lang} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} />
    </main>
  );
}
