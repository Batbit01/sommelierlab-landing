import type { Metadata } from "next";
import {
  LegalLayout,
  Section,
  P,
  UL,
  LI,
  ProviderTable,
  ResponsibleBlock,
} from "../_legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad · SommelierLab",
  description:
    "Cómo SommelierLab trata tus datos personales conforme al RGPD y la LOPDGDD.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="25 de abril de 2026">
      <ResponsibleBlock />

      <Section title="1. Quién trata tus datos">
        <P>
          El responsable del tratamiento de los datos personales recogidos a
          través del sitio web <strong>sommelierlab.com</strong> y sus
          subdominios (<strong>qr.sommelierlab.com</strong>,{" "}
          <strong>qr2.sommelierlab.com</strong>,{" "}
          <strong>sommelierlab-dashboard.vercel.app</strong>) es la persona
          física identificada en la cabecera de esta política.
        </P>
        <P>
          Para cualquier consulta relacionada con la protección de tus datos,
          puedes escribir a{" "}
          <a href="mailto:legal@sommelierlab.com" style={{ color: "#D3B17A" }}>
            legal@sommelierlab.com
          </a>
          .
        </P>
      </Section>

      <Section title="2. Qué datos recogemos">
        <P>
          SommelierLab está diseñada para funcionar con la{" "}
          <strong>mínima recogida de datos personales posible</strong>. No
          solicitamos nombre, apellidos, teléfono ni ningún dato identificativo
          para acceder al contenido de las fichas de vino.
        </P>
        <P>Datos que podemos tratar según tu uso:</P>
        <UL>
          <LI>
            <strong>Identificador local anónimo</strong>: un identificador
            único generado automáticamente en tu navegador y almacenado
            localmente. Sirve para construir tu &quot;cava personal&quot; y
            las notas privadas. No contiene información personal por sí
            mismo y no se comparte con terceros.
          </LI>
          <LI>
            <strong>Email</strong>: solo si voluntariamente decides vincular tu
            cava a un email para portabilidad entre dispositivos o recibir
            avisos de nuevas añadas. Siempre con doble opt-in.
          </LI>
          <LI>
            <strong>Notas privadas de cata</strong> que tú mismo escribas
            (valoración, ocasión, impresiones, foto opcional).
          </LI>
          <LI>
            <strong>Datos técnicos anónimos</strong>: tipo de dispositivo,
            navegador, sistema operativo, página de referencia, idioma
            preferido.
          </LI>
          <LI>
            <strong>Geolocalización aproximada</strong>: país, región y ciudad
            derivados de la IP, sin precisión de calle ni coordenadas GPS.
          </LI>
          <LI>
            <strong>Eventos de uso</strong>: escaneo de QR, apertura de ficha,
            reproducción de audio, consulta al sommelier IA, valoraciones. Se
            registran de forma agregada para análisis del servicio.
          </LI>
        </UL>
      </Section>

      <Section title="3. Para qué usamos tus datos (finalidades)">
        <UL>
          <LI>
            Prestar el servicio: mostrar la ficha de vino, la cava personal,
            el sommelier conversacional, los pases de Wallet, etc.
          </LI>
          <LI>
            Analítica agregada de uso para mejorar el producto y proveer
            métricas anónimas a las bodegas clientes.
          </LI>
          <LI>
            Comunicación opcional por email si has dado tu consentimiento
            (nuevas añadas, notificaciones de tu cava).
          </LI>
          <LI>
            Seguridad, detección de fraude y abuso (rate limiting, auditoría).
          </LI>
          <LI>
            Cumplimiento de obligaciones legales (fiscales, contables,
            requerimientos judiciales).
          </LI>
        </UL>
      </Section>

      <Section title="4. Base legal del tratamiento">
        <UL>
          <LI>
            <strong>Consentimiento</strong> (art. 6.1.a RGPD): para vincular
            email a la cava, publicar notas como comentarios, o recibir
            comunicaciones comerciales.
          </LI>
          <LI>
            <strong>Ejecución de contrato</strong> (art. 6.1.b): para prestar
            el servicio a las bodegas clientes y a sus consumidores finales.
          </LI>
          <LI>
            <strong>Interés legítimo</strong> (art. 6.1.f): para analítica
            agregada, medidas de seguridad antifraude, auditoría de accesos.
            Puedes oponerte en cualquier momento.
          </LI>
          <LI>
            <strong>Obligación legal</strong> (art. 6.1.c): cuando se nos
            requiera por norma fiscal, mercantil o judicial.
          </LI>
        </UL>
      </Section>

      <Section title="5. Durante cuánto tiempo conservamos tus datos">
        <UL>
          <LI>
            <strong>Identificador local anónimo</strong>: vive en tu navegador
            mientras no borres cookies o almacenamiento local. Lo controlas
            tú.
          </LI>
          <LI>
            <strong>Email vinculado</strong>: mientras mantengas tu cava
            activa. Puedes solicitar baja en cualquier momento.
          </LI>
          <LI>
            <strong>Notas privadas</strong>: hasta que tú las elimines o
            solicites el borrado de tu cuenta.
          </LI>
          <LI>
            <strong>Eventos de uso en bruto</strong>: 180 días. Después se
            conservan solo como métricas agregadas sin identificador.
          </LI>
          <LI>
            <strong>Copias de seguridad cifradas</strong>: hasta 1 año como
            medida de recuperación ante desastres.
          </LI>
          <LI>
            <strong>Datos contables / fiscales</strong>: 6 años (obligación
            legal en España).
          </LI>
        </UL>
      </Section>

      <Section title="6. Con quién compartimos tus datos (encargados del tratamiento)">
        <P>
          Para prestar el servicio trabajamos con proveedores tecnológicos
          especializados que actúan como encargados del tratamiento, sujetos
          a acuerdos conformes al art. 28 RGPD. Declaramos aquí las{" "}
          <strong>categorías de destinatarios</strong> según permite el art.
          14.1.e RGPD; si necesitas la lista nominal y actualizada de
          proveedores concretos puedes solicitarla ejerciendo tu derecho de
          acceso (art. 15 RGPD) a través del email de contacto.
        </P>
        <ProviderTable
          rows={[
            { category: "Hosting y plataforma serverless", purpose: "Servir el sitio web y ejecutar la lógica del servicio", country: "EE.UU. / EEE" },
            { category: "Base de datos y runtime", purpose: "Almacenar la información operativa y ejecutar procesos en segundo plano", country: "EE.UU. / EEE" },
            { category: "Almacenamiento de media y copias de seguridad", purpose: "Servir imágenes, audios y guardar backups cifrados", country: "EE.UU." },
            { category: "Inteligencia artificial generativa", purpose: "Elaborar narrativas y mantener la conversación del sommelier IA", country: "EE.UU." },
            { category: "Síntesis de voz", purpose: "Generar el audio narrado del sommelier", country: "EE.UU." },
            { category: "Envío de email transaccional", purpose: "Enviar verificaciones de email y notificaciones", country: "EE.UU. / EEE" },
            { category: "CDN, DNS y protección perimetral", purpose: "Acelerar la entrega del contenido y proteger el servicio", country: "Red global con presencia en EEE y EE.UU." },
            { category: "Pases digitales (Wallet)", purpose: "Emitir pases para almacenar botellas en el wallet del móvil", country: "EE.UU." },
          ]}
        />
        <P>
          No vendemos ni cedemos tus datos a terceros para fines
          publicitarios. No compartimos tus datos con redes sociales ni
          anunciantes.
        </P>
      </Section>

      <Section title="7. Transferencias internacionales de datos">
        <P>
          Algunos proveedores mencionados están ubicados fuera del Espacio
          Económico Europeo. Estas transferencias se amparan en:
        </P>
        <UL>
          <LI>
            <strong>Cláusulas Contractuales Tipo</strong> de la Comisión
            Europea (SCCs) firmadas con cada proveedor.
          </LI>
          <LI>
            <strong>Marcos de adecuación aplicables</strong> cuando existan
            (p. ej. EU-US Data Privacy Framework).
          </LI>
          <LI>
            Medidas técnicas complementarias (cifrado en tránsito y en reposo,
            control de acceso, anonimización cuando es posible).
          </LI>
        </UL>
      </Section>

      <Section title="8. Tus derechos">
        <P>
          Como titular de los datos, puedes ejercer en cualquier momento los
          siguientes derechos:
        </P>
        <UL>
          <LI>
            <strong>Acceso</strong>: saber qué datos tenemos sobre ti.
          </LI>
          <LI>
            <strong>Rectificación</strong>: corregir datos inexactos.
          </LI>
          <LI>
            <strong>Supresión (&quot;derecho al olvido&quot;)</strong>:
            borrar todos tus datos. Puedes hacerlo tú mismo desde tu cava en
            cualquier momento, o solicitarlo por email.
          </LI>
          <LI>
            <strong>Oposición</strong>: oponerte al tratamiento basado en
            interés legítimo.
          </LI>
          <LI>
            <strong>Limitación</strong>: pedir que suspendamos temporalmente
            el tratamiento mientras se resuelve una disputa.
          </LI>
          <LI>
            <strong>Portabilidad</strong>: recibir tus datos en formato
            estructurado y legible.
          </LI>
          <LI>
            <strong>Retirar el consentimiento</strong> en cualquier momento,
            sin que esto afecte a la licitud del tratamiento previo.
          </LI>
          <LI>
            <strong>Presentar una reclamación</strong> ante la Agencia
            Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              aepd.es
            </a>
            ) si consideras que no hemos atendido tu solicitud correctamente.
          </LI>
        </UL>
        <P>
          Para ejercer cualquiera de estos derechos escribe a{" "}
          <a href="mailto:legal@sommelierlab.com" style={{ color: "#D3B17A" }}>
            legal@sommelierlab.com
          </a>{" "}
          indicando el derecho que quieres ejercer y acreditando tu identidad.
          Responderemos en un plazo máximo de 30 días.
        </P>
      </Section>

      <Section title="9. Menores de edad">
        <P>
          SommelierLab no está dirigida a menores de 18 años. El servicio gira
          en torno al vino, un producto cuyo consumo está regulado en España.
          No recogemos conscientemente datos de menores. Si detectamos que
          hemos recogido datos de un menor, procederemos a eliminarlos.
        </P>
      </Section>

      <Section title="10. Seguridad">
        <P>
          Aplicamos medidas técnicas y organizativas proporcionadas al riesgo:
          cifrado TLS en todas las comunicaciones, control de acceso por rol,
          cabeceras de seguridad (HSTS, CSP, X-Content-Type-Options), rate
          limiting, auditoría de secretos, backups cifrados, validación
          estricta de entradas y monitorización de integridad.
        </P>
      </Section>

      <Section title="11. Cambios en esta política">
        <P>
          Podemos actualizar esta política para reflejar cambios legales o del
          servicio. La fecha de &quot;última actualización&quot; en la cabecera
          indica la versión vigente. Si los cambios son relevantes, te
          avisaremos por email (si lo tenemos) o con un aviso destacado en el
          sitio.
        </P>
      </Section>

      <Section title="12. Legislación aplicable">
        <P>
          Esta política se rige por el Reglamento (UE) 2016/679 (RGPD), la Ley
          Orgánica 3/2018 de Protección de Datos Personales y garantía de los
          derechos digitales (LOPDGDD) y el resto de normativa española y
          europea aplicable.
        </P>
      </Section>
    </LegalLayout>
  );
}
