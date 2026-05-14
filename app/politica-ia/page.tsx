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
  title: "Política de uso de IA · SommelierLab",
  description:
    "Cómo SommelierLab utiliza inteligencia artificial generativa (texto, voz, visión) en sus servicios, conforme al art. 50 del Reglamento UE 2024/1689 (AI Act).",
};

export default function PoliticaIAPage() {
  return (
    <LegalLayout
      title="Política de uso de Inteligencia Artificial"
      updated="14 de mayo de 2026"
    >
      <ResponsibleBlock />

      <Section title="1. Qué usos hacemos de la IA">
        <P>
          SommelierLab integra varios sistemas de inteligencia artificial
          generativa en su plataforma. Esta página enumera de forma
          transparente todos los usos actuales, conforme al artículo 50 del{" "}
          <strong>Reglamento (UE) 2024/1689</strong> sobre Inteligencia
          Artificial (AI Act) y a las buenas prácticas del Reglamento (UE)
          2016/679 (RGPD).
        </P>
        <UL>
          <LI>
            <strong>Voz del sommelier conversacional</strong>: generamos audio
            sintético en tiempo real con ElevenLabs (Text-to-Speech con voz
            clonada por bodega y por idioma). Cada conversación incluye un{" "}
            <strong>disclosure verbal al inicio</strong> con la fórmula
            equivalente a &quot;soy un sommelier virtual con IA&quot;.
          </LI>
          <LI>
            <strong>Audio narrativo de fichas de vino</strong>: generamos audio
            TTS de las narrativas con ElevenLabs. Estos audios llevan marcado{" "}
            <strong>AI-Generated en sus metadatos</strong> (tag ID3 y/o
            manifest C2PA cuando es técnicamente posible) y un banner visible
            junto al reproductor.
          </LI>
          <LI>
            <strong>Texto narrativo de fichas</strong>: redactamos los textos
            con modelos de OpenAI (GPT-4 / GPT-4o). Todo texto está sometido a{" "}
            <strong>revisión humana (Quality Gate IA)</strong> antes de su
            publicación; la bodega productora aprueba cada ficha y conserva la{" "}
            <strong>responsabilidad editorial</strong> sobre su contenido.
          </LI>
          <LI>
            <strong>Asistente de analítica</strong>: modelo conversacional
            sobre los datos del bodeguero (OpenAI). Es de uso interno del
            dashboard del bodeguero y no se expone al consumidor final.
          </LI>
          <LI>
            <strong>Importador IA de vinos</strong>: extracción de datos desde
            web/PDFs mediante OpenAI (texto) y modelos de visión (Vision). El
            resultado siempre es revisado por humano antes de publicarse.
          </LI>
        </UL>
      </Section>

      <Section title="2. Voces clonadas">
        <P>
          Cuando una bodega contrata el Plan Premium con voz custom,
          SommelierLab clona la voz elegida (sommelier real, propietario,
          enólogo, locutor profesional) bajo las siguientes condiciones:
        </P>
        <UL>
          <LI>
            <strong>Consentimiento explícito y por escrito</strong> de la
            persona cuya voz se clona, recogido por la bodega contratante y
            archivado.
          </LI>
          <LI>
            <strong>Revocación en cualquier momento</strong>: la persona
            titular de la voz, o la bodega, pueden solicitar la baja de la voz
            clonada y SommelierLab procederá a su retirada del proveedor (
            ElevenLabs) y de la plataforma en un plazo razonable.
          </LI>
          <LI>
            <strong>Uso restringido por bodega</strong>: cada voz clonada se
            asocia exclusivamente a la cuenta y a los vinos de la bodega
            contratante. No se reutiliza para otras bodegas ni para fines
            distintos a los del Contrato.
          </LI>
        </UL>
      </Section>

      <Section title="3. Marcado y transparencia (AI Act art. 50)">
        <P>
          SommelierLab aplica las siguientes capas de transparencia para que
          cualquier persona pueda identificar el contenido generado por IA:
        </P>
        <UL>
          <LI>
            <strong>Disclosure verbal</strong> al inicio de cada conversación
            con el sommelier IA, en el idioma de la sesión.
          </LI>
          <LI>
            <strong>Banner visible</strong> junto a los reproductores de audio
            narrativo en las fichas QR2.
          </LI>
          <LI>
            <strong>Metadatos máquina-legibles</strong>: tag ID3{" "}
            <code>AI-Generated=true</code> en los audios pre-generados, con el
            objetivo de añadir progresivamente manifiestos C2PA cuando la
            cadena de proveedores lo permita.
          </LI>
          <LI>
            <strong>Página pública</strong> con la presente política,
            enlazable desde el footer del sitio.
          </LI>
        </UL>
      </Section>

      <Section title="4. Subprocesadores IA">
        <P>
          Los proveedores tecnológicos que intervienen en las funcionalidades
          de IA son:
        </P>
        <UL>
          <LI>
            <strong>OpenAI Ireland Ltd</strong> — generación de texto,
            embeddings y visión. DPA bilateral firmado.
          </LI>
          <LI>
            <strong>ElevenLabs Inc.</strong> — generación de audio TTS y voz
            conversacional en tiempo real. DPA pendiente de firma a fecha de
            última actualización de esta política.
          </LI>
        </UL>
        <P>
          La lista completa y actualizada de todos los encargados del
          tratamiento (incluidos los relativos a IA) se publica en{" "}
          <a href="/subprocesadores" style={{ color: "#D3B17A" }}>
            /subprocesadores
          </a>
          .
        </P>
      </Section>

      <Section title="5. Tus derechos como consumidor (usuario QR2)">
        <UL>
          <LI>
            Saber qué contenido es generado por IA, mediante esta política,
            los banners y los disclosures verbales.
          </LI>
          <LI>
            Solicitar <strong>acceso, rectificación o borrado</strong> de
            cualquier dato sobre ti escribiendo a{" "}
            <a href="mailto:hola@sommelierlab.com" style={{ color: "#D3B17A" }}>
              hola@sommelierlab.com
            </a>
            .
          </LI>
          <LI>
            Reportar incidencias al <em>deployer</em> (la bodega titular de la
            ficha) o directamente a SommelierLab a través de{" "}
            <a href="mailto:legal@sommelierlab.com" style={{ color: "#D3B17A" }}>
              legal@sommelierlab.com
            </a>
            .
          </LI>
        </UL>
      </Section>

      <Section title="6. Tus derechos como bodega (cliente)">
        <UL>
          <LI>
            Auditar las generaciones IA realizadas con tu cuenta (textos,
            audios, transcripciones, consumo de tokens).
          </LI>
          <LI>
            Desactivar las funcionalidades IA mediante el toggle{" "}
            <code>genio_enabled</code> y equivalentes desde el dashboard.
          </LI>
          <LI>
            Solicitar el borrado de la voz clonada asociada a tu bodega y de
            cualquier huella vocal residual en el proveedor.
          </LI>
        </UL>
      </Section>

      <Section title="7. Última actualización">
        <P>
          Esta política se actualizó por última vez el{" "}
          <strong>14 de mayo de 2026</strong>. SommelierLab notificará por los
          canales habituales (esta página y, cuando corresponda, email a las
          bodegas-cliente) cualquier cambio relevante en sus proveedores IA o
          en las medidas de transparencia descritas.
        </P>
        <P>
          Fecha de entrada en vigor del art. 50 del AI Act:{" "}
          <strong>2 de agosto de 2026</strong>, conforme al artículo 113.c del
          Reglamento (UE) 2024/1689.
        </P>
      </Section>

      <Section title="8. Contacto">
        <P>
          Para consultas sobre esta política o sobre el uso de IA en
          SommelierLab:
        </P>
        <UL>
          <LI>
            Consumidores:{" "}
            <a href="mailto:hola@sommelierlab.com" style={{ color: "#D3B17A" }}>
              hola@sommelierlab.com
            </a>
          </LI>
          <LI>
            Bodegas, auditores y autoridades:{" "}
            <a href="mailto:legal@sommelierlab.com" style={{ color: "#D3B17A" }}>
              legal@sommelierlab.com
            </a>
          </LI>
        </UL>
      </Section>
    </LegalLayout>
  );
}
