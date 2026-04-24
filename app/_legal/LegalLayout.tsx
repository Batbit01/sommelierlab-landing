import type { ReactNode } from "react";
import Link from "next/link";

const theme = {
  bg: "#07070B",
  border: "rgba(255,255,255,0.12)",
  text: "#F6F1EB",
  textSoft: "rgba(246,241,235,0.74)",
  wine: "#7A1E3A",
  gold: "#D3B17A",
  glow: "rgba(122,30,58,0.28)",
};

/**
 * Layout compartido de las páginas legales (Privacidad, Cookies, Términos).
 * Mantiene coherencia visual con la landing (tema oscuro, granate, dorado).
 * Ancho máx 860 pensado para lectura cómoda de texto largo.
 */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main
      style={{
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at top, rgba(122,30,58,0.12), transparent 55%), linear-gradient(180deg, #07070B 0%, #0A0B10 100%)`,
        minHeight: "100vh",
        color: theme.text,
      }}
    >
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(7,7,11,0.8)",
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: theme.text,
              textDecoration: "none",
            }}
          >
            SOMMELIERLAB
          </Link>
          <Link
            href="/"
            style={{
              fontSize: 13,
              color: theme.textSoft,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Volver
          </Link>
        </div>
      </nav>

      <article
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "80px 24px 120px",
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: theme.gold,
            margin: "0 0 12px",
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 13,
            color: theme.textSoft,
            margin: "0 0 48px",
          }}
        >
          Última actualización: {updated}
        </p>

        <div className="legal-body" style={{ color: theme.textSoft, fontSize: 15, lineHeight: 1.8 }}>
          {children}
        </div>

        <div
          style={{
            marginTop: 72,
            paddingTop: 24,
            borderTop: `1px solid ${theme.border}`,
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Link href="/privacidad" style={linkFoot}>Privacidad</Link>
          <Link href="/cookies" style={linkFoot}>Cookies</Link>
          <Link href="/terminos" style={linkFoot}>Términos</Link>
          <Link href="/" style={linkFoot}>Inicio</Link>
        </div>
      </article>
    </main>
  );
}

const linkFoot = {
  fontSize: 12,
  color: "rgba(246,241,235,0.5)",
  textDecoration: "none",
} as const;

/** Sección (h2 + contenido). */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#F6F1EB",
          margin: "0 0 14px",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}

/** Párrafo con espaciado consistente. */
export function P({ children }: { children: ReactNode }) {
  return <p style={{ margin: "0 0 14px" }}>{children}</p>;
}

/** Lista sin bullet point visible pero con sangría. */
export function UL({ children }: { children: ReactNode }) {
  return <ul style={{ margin: "0 0 14px", paddingLeft: 20 }}>{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return <li style={{ marginBottom: 8 }}>{children}</li>;
}

/** Tabla simple para listas de proveedores. */
export function ProviderTable({ rows }: { rows: { name: string; purpose: string; country: string }[] }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 14 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ textAlign: "left", color: "#F6F1EB" }}>
            <th style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Proveedor</th>
            <th style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>Finalidad</th>
            <th style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>País</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{r.name}</td>
              <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{r.purpose}</td>
              <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{r.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Bloque "identificación del responsable" para la cabecera de cada página. */
export function ResponsibleBlock() {
  return (
    <div
      style={{
        padding: "20px 24px",
        borderRadius: 16,
        border: "1px solid rgba(211,177,122,0.25)",
        background: "rgba(211,177,122,0.04)",
        marginBottom: 32,
      }}
    >
      <p
        style={{
          margin: "0 0 10px",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#D3B17A",
        }}
      >
        Responsable del tratamiento
      </p>
      <p style={{ margin: "0 0 4px", color: "#F6F1EB", fontWeight: 600 }}>
        Iñaki Zazpe Pérez de Ciriza
      </p>
      <p style={{ margin: 0, fontSize: 13 }}>
        NIF: 47758938J · Olesa de Bonesvalls (xx), 08795 Barcelona, España
        <br />
        Email de contacto legal:{" "}
        <a
          href="mailto:legal@sommelierlab.com"
          style={{ color: "#D3B17A", textDecoration: "none" }}
        >
          legal@sommelierlab.com
        </a>
      </p>
    </div>
  );
}
