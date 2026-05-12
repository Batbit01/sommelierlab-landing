import type { Metadata } from "next";
import {
  LegalLayout,
  Section,
  P,
  UL,
  LI,
  ResponsibleBlock,
} from "../_legal/LegalLayout";

export const metadata: Metadata = {
  title: "Subprocesadores · SommelierLab",
  description:
    "Lista pública y actualizada de los subencargados del tratamiento utilizados por SommelierLab, conforme al Art. 28 RGPD.",
};

/* Tabla pública de subprocesadores. A diferencia de ProviderTable de
   /privacidad (que agrupa por categoría para no revelar el stack al
   consumidor final), esta vista NOMBRA explícitamente cada proveedor
   porque es el documento contractual al que se remite el DPA bilateral
   con la bodega. La transparencia aquí es obligación legal del Art. 28.2
   RGPD ante autorización general de subencargados. */
function SubprocessorTable({
  rows,
}: {
  rows: {
    name: string;
    purpose: string;
    data: string;
    region: string;
    status: "active" | "pending";
  }[];
}) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 14 }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
      >
        <thead>
          <tr style={{ textAlign: "left", color: "#F6F1EB" }}>
            <th
              style={{
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Subprocesador
            </th>
            <th
              style={{
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Finalidad
            </th>
            <th
              style={{
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Datos tratados
            </th>
            <th
              style={{
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Ubicación
            </th>
            <th
              style={{
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontWeight: 600,
                  color: "#F6F1EB",
                }}
              >
                {r.name}
              </td>
              <td
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {r.purpose}
              </td>
              <td
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {r.data}
              </td>
              <td
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {r.region}
              </td>
              <td
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  color: r.status === "active" ? "#9ACFA1" : "#D3B17A",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                {r.status === "active" ? "✓ DPA vigente" : "⏳ En gestión"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SubprocesadoresPage() {
  const subprocessors: Parameters<typeof SubprocessorTable>[0]["rows"] = [
    {
      name: "OpenAI Ireland Ltd",
      purpose:
        "Modelos de IA (GPT-4o sommelier, Whisper transcripción, Vision análisis de etiquetas)",
      data: "Texto de conversaciones, transcripciones de voz, imágenes de etiquetas",
      region: "Irlanda (UE)",
      status: "active",
    },
    {
      name: "Backblaze, Inc.",
      purpose: "Almacenamiento de imágenes y media (CDN)",
      data: "Fotos de etiquetas subidas por consumidores, imágenes de bodega",
      region: "EE.UU. (con SCCs UE→US)",
      status: "active",
    },
    {
      name: "Railway Corporation",
      purpose: "Base de datos PostgreSQL y orquestación de workflows",
      data: "PII de consumidores (email opt-in, user_hash, eventos, conversaciones)",
      region: "EE.UU. (con SCCs UE→US)",
      status: "active",
    },
    {
      name: "Vercel Inc.",
      purpose:
        "Hosting del dashboard editorial y de las páginas QR (frontend)",
      data: "Logs HTTP (IP, user-agent), métricas anónimas de uso",
      region: "Edge global",
      status: "active",
    },
    {
      name: "Cloudflare, Inc.",
      purpose:
        "DNS de sommelierlab.com, Email Routing (legal@), seguridad de red",
      data: "Metadatos DNS, headers HTTP, routing de email",
      region: "Edge global",
      status: "active",
    },
    {
      name: "ElevenLabs Inc.",
      purpose: "Conversational AI (voz del sommelier en tiempo real)",
      data: "Audio de voz del consumidor durante sesiones de chat por voz",
      region: "EE.UU. + Irlanda",
      status: "pending",
    },
    {
      name: "Resend Inc.",
      purpose: "Envío de email transaccional y de marketing opt-in",
      data: "Email del consumidor (opt-in), contenido del mensaje",
      region: "Global",
      status: "pending",
    },
  ];

  return (
    <LegalLayout
      title="Lista de Subprocesadores"
      updated="12 de mayo de 2026"
    >
      <ResponsibleBlock />

      <Section title="1. Propósito de esta página">
        <P>
          Esta página enumera los <strong>subencargados del tratamiento</strong>{" "}
          (subprocesadores) a los que SommelierLab recurre para prestar sus
          servicios, conforme al Art. 28 del Reglamento (UE) 2016/679 (RGPD).
        </P>
        <P>
          Está dirigida a las <strong>bodegas-cliente</strong> que han firmado
          un Acuerdo de Encargo del Tratamiento (DPA) con SommelierLab y han
          autorizado con carácter general el uso de subprocesadores, así como
          a auditores, autoridades de control e interesados que ejerzan
          derechos de acceso.
        </P>
      </Section>

      <Section title="2. Lista actual de subprocesadores">
        <SubprocessorTable rows={subprocessors} />
        <P>
          Para cada subprocesador, SommelierLab mantiene un DPA bilateral
          firmado o, en su defecto, ha aceptado el DPA estándar del proveedor
          incorporado por referencia a sus Términos de Servicio. Las
          transferencias internacionales a destinos fuera del Espacio
          Económico Europeo se realizan al amparo de las{" "}
          <strong>Cláusulas Contractuales Tipo (SCCs)</strong> aprobadas por
          la Comisión Europea (Decisión 2021/914).
        </P>
      </Section>

      <Section title="3. Notificación de cambios">
        <P>
          SommelierLab notificará cualquier alta, baja o sustitución de
          subprocesador a las bodegas-cliente con una antelación mínima de{" "}
          <strong>30 días naturales</strong>, mediante:
        </P>
        <UL>
          <LI>
            Actualización pública de esta página (cabecera con fecha de
            última revisión).
          </LI>
          <LI>
            Notificación por email a la dirección de contacto designada por
            la bodega en el Contrato Marco.
          </LI>
        </UL>
        <P>
          La bodega-cliente podrá oponerse motivadamente al cambio en dicho
          plazo de 30 días. En caso de oposición fundada que no pueda
          resolverse de común acuerdo, la bodega podrá resolver el Contrato
          sin penalización respecto a los servicios afectados, conforme a la
          Cláusula 6.2 del Anexo III (DPA).
        </P>
      </Section>

      <Section title="4. Cómo se cubre legalmente cada subprocesador">
        <P>
          Existen dos modelos válidos bajo Art. 28 RGPD:
        </P>
        <UL>
          <LI>
            <strong>DPA bilateral firmado</strong>: contrato específico
            firmado entre SommelierLab y el subprocesador (OpenAI, Backblaze,
            Railway).
          </LI>
          <LI>
            <strong>DPA incorporado por referencia</strong>: el subprocesador
            publica un DPA estándar que se considera parte de sus Términos de
            Servicio al activar la suscripción. Es el modelo de Vercel y
            Cloudflare, ampliamente aceptado por la AEPD y autoridades
            equivalentes europeas (EDPB Guidelines 07/2020).
          </LI>
        </UL>
        <P>
          Las pruebas documentales (PDFs firmados, capturas del panel,
          versiones públicas con fecha) se conservan en archivo interno y
          están disponibles bajo NDA mutuo en caso de auditoría formal por
          parte de la bodega-cliente (Cláusula 8 del Anexo III).
        </P>
      </Section>

      <Section title="5. Datos de consumidor vs datos de bodega">
        <P>
          Importante: SommelierLab actúa con doble rol según el tipo de dato:
        </P>
        <UL>
          <LI>
            <strong>Datos de consumidor final</strong> (escaneos QR,
            conversaciones, cava personal): SommelierLab es{" "}
            <strong>responsable del tratamiento independiente</strong>. Los
            subprocesadores listados intervienen en esta capa.
          </LI>
          <LI>
            <strong>Datos aportados por la bodega</strong> (personal,
            contactos comerciales, etc.): SommelierLab es{" "}
            <strong>encargado del tratamiento</strong> de la bodega. El DPA
            (Anexo III del Contrato Marco) regula esta relación y autoriza el
            uso de los mismos subprocesadores listados.
          </LI>
        </UL>
      </Section>

      <Section title="6. Contacto">
        <P>
          Para cualquier consulta relativa a esta lista de subprocesadores o
          al ejercicio de derechos derivados:
        </P>
        <UL>
          <LI>
            Email RGPD:{" "}
            <a
              href="mailto:legal@sommelierlab.com"
              style={{ color: "#D3B17A" }}
            >
              legal@sommelierlab.com
            </a>
          </LI>
          <LI>Plazo máximo de respuesta: 1 mes (Art. 12 RGPD)</LI>
        </UL>
      </Section>
    </LegalLayout>
  );
}
