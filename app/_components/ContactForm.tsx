"use client";

import { useState } from "react";

const ENDPOINT = "https://sommelierlab-dashboard.vercel.app/api/public/contact";

const theme = {
  border: "rgba(255,255,255,0.18)",
  text: "#F6F1EB",
  textSoft: "rgba(246,241,235,0.74)",
  gold: "#D3B17A",
  wine: "#7A1E3A",
};

export function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    bodega: "",
    email: "",
    telefono: "",
    mensaje: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const r = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const j = await r.json();
      if (!r.ok || !j.ok) {
        setStatus("error");
        setErrorMsg(j.error || "Error al enviar");
        return;
      }
      setStatus("success");
      setForm({ nombre: "", bodega: "", email: "", telefono: "", mensaje: "", website: "" });
    } catch {
      setStatus("error");
      setErrorMsg("No se pudo conectar. Inténtalo más tarde o escríbenos a hola@sommelierlab.com");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <p style={{ fontSize: 32, margin: "0 0 12px" }}>✓</p>
        <p style={{ fontSize: 16, color: theme.text, margin: "0 0 8px", fontWeight: 600 }}>
          Mensaje recibido
        </p>
        <p style={{ fontSize: 14, color: theme.textSoft, margin: 0, lineHeight: 1.6 }}>
          Te contactamos en menos de 24h con una demo personalizada para tu bodega.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${theme.border}`,
    color: theme.text,
    fontSize: 14,
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(246,241,235,0.6)",
    margin: "0 0 6px",
  };

  return (
    <form onSubmit={submit} style={{ textAlign: "left", maxWidth: 540, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Tu nombre *</label>
          <input
            required
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            disabled={status === "sending"}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Bodega *</label>
          <input
            required
            type="text"
            value={form.bodega}
            onChange={(e) => setForm({ ...form, bodega: e.target.value })}
            disabled={status === "sending"}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            disabled={status === "sending"}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Teléfono</label>
          <input
            type="tel"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            disabled={status === "sending"}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle}>Cuéntanos algo (opcional)</label>
        <textarea
          rows={3}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          disabled={status === "sending"}
          placeholder="Cuántos vinos tenéis, qué buscáis, cuándo queréis arrancar…"
          style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit", lineHeight: 1.5 }}
        />
      </div>

      {/* Honeypot — campo oculto que los humanos no rellenan, los bots sí */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        autoComplete="off"
        tabIndex={-1}
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
        aria-hidden="true"
      />

      {errorMsg && (
        <p style={{ color: "#ff8b9c", fontSize: 13, margin: "0 0 14px", textAlign: "center" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          width: "100%",
          minHeight: 52,
          padding: "0 28px",
          borderRadius: 16,
          background: theme.text,
          color: theme.wine,
          border: "none",
          fontWeight: 800,
          fontSize: 15,
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.6 : 1,
          fontFamily: "inherit",
        }}
      >
        {status === "sending" ? "Enviando…" : "Solicitar demo"}
      </button>

      <p style={{ fontSize: 11, color: "rgba(246,241,235,0.4)", margin: "12px 0 0", textAlign: "center" }}>
        Tus datos solo se usan para contactarte. Sin spam, sin newsletter.
      </p>
    </form>
  );
}
