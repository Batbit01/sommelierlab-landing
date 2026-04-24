// URL directa para el iframe (sin pasar por resolver, evita problemas de 302 en iframe)
const QR_DEMO_URL = "https://qr2.sommelierlab.com/?vino_id=V005&anyada=2021&lang=es";
// URL corta vía resolver con token — lo que codifica el QR físico. Emula flujo real de botella.
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

function Nav() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: "blur(12px)", background: "rgba(7,7,11,0.8)", borderBottom: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.03em" }}>SOMMELIERLAB</span>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {["Solución", "Demo", "Planes", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 13, color: theme.textSoft, textDecoration: "none", fontWeight: 500 }}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "140px 0 80px", textAlign: "center" }}>
      <div style={{ position: "absolute", top: -160, right: -80, width: 400, height: 400, borderRadius: "50%", background: theme.glow, filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 100, left: -120, width: 300, height: 300, borderRadius: "50%", background: "rgba(211,177,122,0.06)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <span style={{ display: "inline-flex", padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.05)", border: `1px solid ${theme.border}`, color: theme.gold, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
          Identidad digital del vino
        </span>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 5.6rem)", lineHeight: 1, letterSpacing: "-0.04em", margin: "0 0 24px", color: theme.text }}>
          Tu vino lo explicas tú
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, color: theme.textSoft, maxWidth: 640, margin: "0 auto 36px" }}>
          Controla la narrativa. Activa una experiencia digital premium desde cada botella. Recupera la inteligencia que hoy se pierde entre la bodega y el consumidor.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={QR_DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 16,
            background: "linear-gradient(135deg, #6E1835 0%, #8D2746 52%, #B04667 100%)", color: theme.text, textDecoration: "none",
            fontWeight: 800, border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 16px 40px rgba(122,30,58,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}>
            Ver demo en vivo
          </a>
          <a href="#contacto" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px", borderRadius: 16,
            background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, color: theme.text, textDecoration: "none",
            fontWeight: 700, backdropFilter: "blur(8px)",
          }}>
            Solicitar demo personalizada
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { title: "La contraetiqueta", text: "50 palabras genéricas. Sin espacio para contar nada. El mismo formato desde hace 50 años." },
    { title: "El QR legal", text: "Una tabla nutricional. Obligatoria. Sin narrativa, sin experiencia, sin datos. Cumple la ley y nada más." },
    { title: "Vivino", text: "Reviews de desconocidos. Puntuaciones que no controlas. Tus datos son de Vivino. Tu vino lo explican otros." },
  ];
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>El problema</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          Tu vino tiene una historia extraordinaria.{" "}
          <span style={{ color: theme.textSoft }}>Hoy es invisible.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {cards.map((c) => (
            <div key={c.title} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "28px 24px", backdropFilter: "blur(12px)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px" }}>{c.title}</h3>
              <p style={{ margin: 0, lineHeight: 1.8, color: theme.textSoft, fontSize: 15 }}>{c.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 32, fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.8, color: theme.gold, fontWeight: 600, textAlign: "center", fontStyle: "italic" }}>
          ¿Y si la botella pudiera contar tu historia, en cualquier idioma, a cualquier persona que la tiene en la mano?
        </p>
      </div>
    </section>
  );
}

function Solution() {
  const values = [
    { num: "01", title: "Tu vino, tu relato", text: "Tú decides la narrativa, el tono y la experiencia. No un marketplace, no un crítico, no una contraetiqueta genérica. La historia es tuya." },
    { num: "02", title: "9 idiomas, una botella", text: "Tu vino habla alemán en Berlín, japonés en Tokio, catalán en Barcelona. Ficha, audio y sommelier en el idioma del consumidor." },
    { num: "03", title: "Un sommelier en cada botella", text: "IA conversacional con voz. Responde preguntas sobre tu vino 24/7. Maridaje, temperatura, historia. Sin contratar personal." },
    { num: "04", title: "Tus datos vuelven a ti", text: "Quién escanea, desde dónde, en qué idioma, cuánto tiempo. Datos que hoy no existen. Inteligencia que se acumula cada mes." },
    { num: "05", title: "Vendes desde la botella", text: "Compra directa, reserva de enoturismo, contacto. Cada escaneo es una oportunidad de conversión. La botella deja de ser muda." },
    { num: "06", title: "Premium de verdad", text: "La calidad de tu experiencia digital dice tanto como la calidad de tu vino. Diseño premium que diferencia." },
    { num: "07", title: "La botella no muere al vaciarse", text: "Cada QR escaneado deja huella en el móvil del consumidor: cava personal, notas de cata, pase en Wallet. Meses después, cuando escanee otra botella tuya, el sistema le saluda. Retención real." },
  ];
  return (
    <section id="solución" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>La solución</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          6 razones para activar la identidad digital de tus vinos
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {values.map((v) => (
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

function Retention() {
  const layers = [
    {
      tag: "Cava local",
      title: "La botella se acaba, tu bodega no",
      text: "Cada vino escaneado queda guardado en la cava personal del consumidor. Sin registro, sin fricción. Una lista visual de botellas que ha descubierto. Una colección íntima que crece con cada cata.",
      pitch: "\"La botella se acaba, pero tu bodega vive en el móvil del consumidor\"",
    },
    {
      tag: "Email opt-in",
      title: "Portabilidad y newsletter",
      text: "El consumidor vincula su email con doble verificación. Su cava viaja entre móviles. Tú ganas un canal directo: cuando sacas una nueva añada, llega un email a quien ya bebió la anterior.",
      pitch: "De anónimo a lead cualificado. Sin apps, sin contraseñas.",
    },
    {
      tag: "Notas privadas",
      title: "Tu libreta de cata",
      text: "Valoración, ocasión, maridaje, impresiones. Notas privadas por botella, solo para el consumidor. Vuelve meses después y recuerda qué pensó de tu vino la noche de su aniversario.",
      pitch: "\"Tu libreta de cata — un diario personal por cada vino tuyo\"",
    },
    {
      tag: "Google Wallet",
      title: "Un pase nativo en el móvil",
      text: "Un toque y tu vino queda en Google Wallet del consumidor. Con foto, añada y QR de vuelta. Sobrevive a borrar cookies, cambiar navegador, cambiar de móvil. Años de permanencia nativa.",
      pitch: "\"Un pase nativo en el Wallet. Años de permanencia.\"",
    },
    {
      tag: "Bienvenido de vuelta",
      title: "El móvil recuerda lo que él olvidó",
      text: "Cuando re-escanea una botella tuya, el sistema le saluda: \"Bienvenido de vuelta · tu 3ª cata · hace 2 meses\". Cierra el ciclo. Refuerza la relación con tu marca sin que tú muevas un dedo.",
      pitch: "\"El móvil del consumidor recuerda la botella que él ya ha olvidado\"",
    },
    {
      tag: "Taste graph",
      title: "El sommelier te reconoce",
      text: "El sommelier IA acumula memoria del catador entre sesiones. Recuerda qué le gustó, qué le aburrió, qué descubrió. La próxima vez que abra otro vino tuyo, la conversación arranca desde su historial.",
      pitch: "\"Tu sommelier te reconoce en cada botella\"",
    },
  ];
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}`, background: "linear-gradient(180deg, rgba(122,30,58,0.04), transparent 70%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>La retención</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 800 }}>
          Tu bodega vive en el móvil del consumidor.{" "}
          <span style={{ color: theme.gold }}>Años después del último sorbo.</span>
        </h2>
        <p style={{ color: theme.textSoft, fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, maxWidth: 680, margin: "0 0 48px" }}>
          Seis capas de permanencia que se apilan. La botella se acaba. Tu marca no.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {layers.map((l) => (
            <div key={l.tag} style={{ position: "relative", background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "28px 24px 24px", backdropFilter: "blur(12px)" }}>
              <span style={{ display: "inline-flex", padding: "4px 10px", borderRadius: 8, background: "rgba(211,177,122,0.12)", color: theme.gold, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{l.tag}</span>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{l.title}</h3>
              <p style={{ margin: "0 0 14px", lineHeight: 1.75, color: theme.textSoft, fontSize: 14 }}>{l.text}</p>
              <p style={{ margin: 0, padding: "10px 12px", borderLeft: `2px solid ${theme.gold}`, fontSize: 12, color: theme.gold, fontStyle: "italic", lineHeight: 1.5, background: "rgba(211,177,122,0.04)", borderRadius: "0 8px 8px 0" }}>{l.pitch}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 48, padding: "24px 28px", borderRadius: 20, background: "rgba(122,30,58,0.08)", border: `1px solid rgba(122,30,58,0.25)`, fontSize: "clamp(1rem, 2.2vw, 1.25rem)", lineHeight: 1.7, color: theme.text, textAlign: "center", fontStyle: "italic", maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
          Tres formas de recordar tu vino: <strong style={{ color: theme.gold, fontStyle: "normal" }}>anónima local</strong>, <strong style={{ color: theme.gold, fontStyle: "normal" }}>con su email</strong>, o <strong style={{ color: theme.gold, fontStyle: "normal" }}>nativa en su móvil</strong>. Elige la que más te guste. O las tres.
        </p>
        <p style={{ marginTop: 28, color: theme.textSoft, fontSize: 14, textAlign: "center", lineHeight: 1.7, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          No competimos con Vivino — Vivino habla de mil vinos. <strong style={{ color: theme.text }}>SommelierLab habla del tuyo.</strong> Y lo sigue haciendo aunque ya no lo tengas en la mano.
        </p>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}`, background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>La experiencia</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 700 }}>
          Descubre lo que tu cliente ve al escanear tu botella
        </h2>
        <p style={{ color: theme.textSoft, fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, maxWidth: 600, margin: "0 0 40px" }}>
          Narrativa propia, audio, sommelier IA, maridaje con fotos, perfil sensorial, valoraciones. En 9 idiomas. Desde la botella.
        </p>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          {/* Mockup móvil con dimensiones reales del QR2 (375×750, relación iPhone) */}
          <div style={{ position: "relative", padding: 10, borderRadius: 44, background: "linear-gradient(135deg, #1a1a20, #0a0a0e)", border: `1px solid ${theme.border}`, boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
            <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", width: 90, height: 22, borderRadius: 14, background: "#000", zIndex: 2 }} />
            <div style={{ width: 360, height: 720, borderRadius: 34, overflow: "hidden", background: "#000", position: "relative" }}>
              <iframe src={QR_DEMO_URL} style={{ width: "100%", height: "100%", border: "none", display: "block" }} title="Demo QR2" />
            </div>
          </div>
          <div style={{ maxWidth: 400 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Escanea con tu móvil</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, margin: "0 0 20px" }}>
              O haz clic en "Ver demo" para experimentar la ficha completa de Inurrieta Puro Vicio 2021: narrativa con audio, sommelier conversacional, maridaje, perfil sensorial, valoraciones y bodega.
            </p>
            <div style={{ padding: 18, borderRadius: 16, background: "#fff", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=0&ecc=M&data=${encodeURIComponent(QR_SHORT_URL)}`}
                alt="QR de la demo SommelierLab"
                width={180}
                height={180}
                style={{ display: "block", borderRadius: 6 }}
              />
              <span style={{ fontSize: 11, color: "#1a1a20", fontWeight: 600 }}>Escanea para ver la demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Control() {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>El control</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          Todo bajo tu control. Sin código.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: 28, backdropFilter: "blur(12px)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: theme.gold }}>Analítica en tiempo real</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, margin: "0 0 16px", fontSize: 14 }}>
              Por primera vez, sabes qué pasa después de vender la botella. Escaneos por país, idioma, tiempo. QRs con contexto: feria, restaurante, tienda. Percepción sensorial del consumidor. Y cada mes que pasa, tus datos valen más.
            </p>
            <div style={{ height: 200, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.06)`, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
              Captura del dashboard de analítica
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: 28, backdropFilter: "blur(12px)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: theme.gold }}>Publication Studio</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, margin: "0 0 16px", fontSize: 14 }}>
              Edita la narrativa, genera audio con IA, traduce a 9 idiomas, publica. Desde un panel visual con preview en vivo. Sin tocar código.
            </p>
            <div style={{ height: 200, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.06)`, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
              Captura del Publication Studio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "1", title: "Envías tu material", text: "Ficha técnica, fotos, historia. Lo que tengas." },
    { num: "2", title: "Creamos la experiencia", text: "Narrativa editorial, audio, traducciones, diseño premium." },
    { num: "3", title: "Apruebas y personalizas", text: "Desde el Publication Studio. Ajustas tono, módulos, idiomas." },
    { num: "4", title: "Tu vino ya tiene presencia digital", text: "QR en pegatina o contraetiqueta. Listo para escanear." },
  ];
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}`, background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>Implementación</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px" }}>
          Sin fricción para la bodega
        </h2>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "20px 18px", borderRadius: 18, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, minWidth: 160, flex: "1 1 160px", maxWidth: 220 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(122,30,58,0.3)", color: theme.gold, fontSize: 14, fontWeight: 800 }}>{s.num}</div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, textAlign: "center" }}>{s.title}</p>
                <p style={{ margin: 0, fontSize: 12, color: theme.textSoft, textAlign: "center", lineHeight: 1.5 }}>{s.text}</p>
              </div>
              {i < steps.length - 1 && <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 22, fontWeight: 300 }}>&rarr;</span>}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 13, color: theme.textSoft, textAlign: "center" }}>
          E-label EU incluido en todos los planes. Un QR para la experiencia premium, otro para cumplir la regulación. Dos resueltos, un proveedor.
        </p>
      </div>
    </section>
  );
}

function TwoQRs() {
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>Dos QRs, una solución</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 40px", maxWidth: 700 }}>
          El legal te lo resolvemos gratis.{" "}
          <span style={{ color: theme.gold }}>El premium transforma tu botella.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <div style={{ borderRadius: 24, padding: "28px 24px", border: `1px solid ${theme.border}`, background: "rgba(255,255,255,0.03)" }}>
            <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 8, background: "rgba(74,222,128,0.1)", color: "#4ade80", fontSize: 11, fontWeight: 700, marginBottom: 16 }}>GRATIS</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>QR Legal (e-label EU)</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px" }}>
              Ingredientes, nutricional, alérgenos. Cumple la regulación EU 2021/2117. Pequeño, en la etiqueta trasera.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Ilimitado — todos los vinos de la bodega", "24 idiomas EU automáticos", "Actualizable en cualquier momento", "Cumplimiento legal garantizado"].map(f => (
                <li key={f} style={{ padding: "5px 0", fontSize: 13, color: theme.textSoft, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#4ade80" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 16, fontSize: 12, color: theme.textSoft, fontStyle: "italic" }}>
              Si hoy pagas Winefo (250€/año) o PinotQR (149€/año), esto te lo ahorras.
            </p>
          </div>
          <div style={{ borderRadius: 24, padding: "28px 24px", border: "1px solid rgba(122,30,58,0.4)", background: "linear-gradient(135deg, rgba(122,30,58,0.15), rgba(54,16,34,0.1))", boxShadow: "0 20px 60px rgba(122,30,58,0.1)" }}>
            <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 8, background: "rgba(122,30,58,0.2)", color: "#e8a0b4", fontSize: 11, fontWeight: 700, marginBottom: 16 }}>PREMIUM</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px" }}>QR Experiencia (SommelierLab)</h3>
            <p style={{ color: theme.textSoft, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px" }}>
              Experiencia digital completa. Visible en contraetiqueta o pegatina premium con CTA "Descubre este vino".
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Narrativa editorial propia + audio", "Hasta 9 idiomas con traducción curada", "Sommelier IA conversacional", "Analítica completa + QRs contextuales", "CTA de compra por país/distribuidor", "Valoraciones y comentarios moderables", "Dashboard de gestión completo"].map(f => (
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

function Pricing() {
  const plans = [
    { name: "Starter", price: "300", setup: "400", vinos: "Hasta 3 vinos", langs: "3 idiomas", sommelier: false, features: ["Narrativa + audio por vino", "Dashboard completo", "Analítica + valoraciones", "CTA compra por país", "QRs contextuales", "Colores/skin personalizables", "E-label legal ilimitado GRATIS"], highlight: false },
    { name: "Pro", price: "600", setup: "800", vinos: "Hasta 8 vinos", langs: "9 idiomas", sommelier: true, features: ["Todo lo de Starter", "Sommelier IA conversacional", "Audio en todos los idiomas", "Juego de cata sensorial"], highlight: true },
    { name: "Bodega", price: "900", setup: "1.200", vinos: "Vinos ilimitados", langs: "9 idiomas", sommelier: true, features: ["Todo lo de Pro", "Vinos ilimitados", "Prioridad en nuevas features", "Inteligencia de mercado"], highlight: false },
  ];
  return (
    <section id="planes" style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.gold, margin: "0 0 12px" }}>Planes</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Elige el plan para tu bodega
        </h2>
        <p style={{ color: theme.textSoft, fontSize: 15, lineHeight: 1.8, margin: "0 0 40px", maxWidth: 600 }}>
          Todos los planes incluyen dashboard completo, analítica, valoraciones y el QR legal EU gratis para todos tus vinos.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {plans.map((p) => (
            <div key={p.name} style={{
              borderRadius: 24, padding: "32px 24px", backdropFilter: "blur(12px)",
              background: p.highlight ? "linear-gradient(135deg, rgba(122,30,58,0.2), rgba(54,16,34,0.15))" : "rgba(255,255,255,0.03)",
              border: `1px solid ${p.highlight ? "rgba(122,30,58,0.4)" : theme.border}`,
              boxShadow: p.highlight ? "0 20px 60px rgba(122,30,58,0.15)" : "none",
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{p.name}</h3>
              <p style={{ color: theme.textSoft, fontSize: 13, margin: "0 0 16px" }}>{p.vinos} &middot; {p.langs}</p>
              <p style={{ fontSize: 28, fontWeight: 800, margin: "0 0 0px" }}>
                <span style={{ color: theme.gold }}>{p.price}€</span>
                <span style={{ fontSize: 14, color: theme.textSoft, fontWeight: 500 }}>/año</span>
              </p>
              <p style={{ fontSize: 12, color: theme.textSoft, margin: "0 0 16px" }}>Setup: {p.setup}€ (una vez)</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ padding: "5px 0", fontSize: 13, color: theme.textSoft, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: f.includes("GRATIS") ? "#4ade80" : theme.gold }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" style={{
                display: "block", textAlign: "center", padding: "14px 0", borderRadius: 14, fontSize: 14, fontWeight: 700,
                textDecoration: "none",
                background: p.highlight ? "linear-gradient(135deg, #6E1835, #B04667)" : "rgba(255,255,255,0.06)",
                color: p.highlight ? "#fff" : theme.textSoft,
                border: `1px solid ${p.highlight ? "rgba(255,255,255,0.14)" : theme.border}`,
              }}>
                Solicitar demo
              </a>
            </div>
          ))}
        </div>
        {/* Comparativa con competencia */}
        <div style={{ marginTop: 48, background: "rgba(255,255,255,0.03)", border: `1px solid ${theme.border}`, borderRadius: 24, padding: "28px 24px", overflow: "auto" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 16px", textAlign: "center" }}>¿Cuánto pagas hoy por un QR que solo muestra ingredientes?</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                <th style={{ textAlign: "left", padding: "8px 12px", color: theme.textSoft, fontWeight: 600 }}></th>
                <th style={{ textAlign: "center", padding: "8px 12px", color: theme.textSoft, fontWeight: 600 }}>Winefo</th>
                <th style={{ textAlign: "center", padding: "8px 12px", color: theme.textSoft, fontWeight: 600 }}>PinotQR</th>
                <th style={{ textAlign: "center", padding: "8px 12px", color: theme.gold, fontWeight: 700 }}>SommelierLab</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["E-label legal", "250€/año", "149€/año", "GRATIS"],
                ["Narrativa propia", "✗", "✗", "✓"],
                ["Audio profesional", "✗", "✗", "✓"],
                ["Multiidioma curado", "✗", "Auto", "9 idiomas"],
                ["Sommelier IA", "✗", "✗", "✓"],
                ["Analítica", "Básica", "✗", "Completa"],
                ["Valoraciones", "✗", "✗", "✓"],
                ["CTA compra/país", "✗", "✗", "✓"],
                ["Dashboard", "✗", "✗", "✓"],
              ].map(([label, w, p, s]) => (
                <tr key={label} style={{ borderBottom: `1px solid rgba(255,255,255,0.04)` }}>
                  <td style={{ padding: "8px 12px", color: theme.textSoft }}>{label}</td>
                  <td style={{ padding: "8px 12px", textAlign: "center", color: "rgba(255,255,255,0.35)" }}>{w}</td>
                  <td style={{ padding: "8px 12px", textAlign: "center", color: "rgba(255,255,255,0.35)" }}>{p}</td>
                  <td style={{ padding: "8px 12px", textAlign: "center", color: s === "GRATIS" ? "#4ade80" : s === "✓" ? theme.gold : theme.text, fontWeight: 600 }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" style={{ padding: "0 0 100px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          borderRadius: 28, padding: "40px 32px", textAlign: "center",
          background: "linear-gradient(135deg, rgba(122,30,58,0.92) 0%, rgba(54,16,34,0.94) 100%)",
          border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(246,241,235,0.6)", margin: "0 0 10px" }}>SommelierLab</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", lineHeight: 1.1, margin: "0 0 12px" }}>
            Descubre cómo activar la identidad digital de tus vinos
          </h2>
          <p style={{ lineHeight: 1.8, color: "rgba(246,241,235,0.75)", fontSize: 15, margin: "0 0 24px" }}>
            Te mostramos cómo funciona con una de tus botellas. Sin compromiso.
          </p>
          <a href="mailto:hola@sommelierlab.com" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 28px",
            borderRadius: 16, background: theme.text, color: theme.wine, textDecoration: "none", fontWeight: 800, fontSize: 15,
          }}>
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "32px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <span style={{ fontSize: 14, fontWeight: 800 }}>SOMMELIERLAB</span>
          <p style={{ fontSize: 11, color: theme.textSoft, margin: "4px 0 0" }}>Identidad digital del vino</p>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "Privacidad", href: "/privacidad" },
            { label: "Cookies", href: "/cookies" },
            { label: "Términos", href: "/terminos" },
          ].map((item) => (
            <a key={item.href} href={item.href} style={{ fontSize: 11, color: theme.textSoft, textDecoration: "none" }}>{item.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at top, rgba(122,30,58,0.14), transparent 50%), linear-gradient(180deg, #07070B 0%, #0A0B10 100%)` }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Retention />
      <Demo />
      <Control />
      <HowItWorks />
      <TwoQRs />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
