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
  title: "Política de Cookies · SommelierLab",
  description:
    "Qué cookies y almacenamiento local usa SommelierLab, para qué sirven y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updated="25 de abril de 2026">
      <ResponsibleBlock />

      <Section title="1. Qué es una cookie y por qué te lo contamos">
        <P>
          Una cookie es un pequeño fichero que un sitio web puede guardar en
          tu navegador para recordar información entre visitas (tu idioma, tu
          sesión, tu carrito de la compra, etc.). Por extensión, aquí también
          incluimos otros mecanismos de almacenamiento del navegador como{" "}
          <em>localStorage</em> y <em>sessionStorage</em>, que funcionan de
          forma similar.
        </P>
        <P>
          SommelierLab intenta usar el mínimo imprescindible. No usamos
          cookies publicitarias ni de seguimiento de terceros (no hay Google
          Analytics, Facebook Pixel, TikTok Pixel, etc.).
        </P>
      </Section>

      <Section title="2. Qué almacenamiento usa SommelierLab">
        <P>
          Declaramos aquí las categorías de información almacenada
          localmente en tu dispositivo. No usamos cookies publicitarias ni
          de seguimiento de terceros.
        </P>

        <h3 style={{ color: "#F6F1EB", fontSize: 16, margin: "24px 0 10px" }}>
          A. Técnicas estrictamente necesarias
        </h3>
        <P>
          Exentas del deber de consentimiento conforme al art. 22.2 de la
          LSSI y la Guía de la AEPD sobre cookies. Solo se almacenan en tu
          navegador, en ningún caso se envían a terceros con fines
          publicitarios.
        </P>
        <UL>
          <LI>
            <strong>Identificador anónimo de dispositivo</strong>:
            identificador único generado localmente que construye tu cava
            personal y vincula tus notas privadas. Sin él no se pueden
            mostrar las botellas que has escaneado. Permanece hasta que
            borres los datos del sitio.
          </LI>
          <LI>
            <strong>Preferencia de idioma</strong>: guarda el idioma que
            has elegido la última vez, entre los 9 disponibles.
          </LI>
          <LI>
            <strong>Vinculación de email (si la activas)</strong>:
            mantiene en caché la dirección vinculada a tu cava cuando has
            optado voluntariamente por esta función, para mostrarla sin
            pedirla de nuevo. Se borra al desvincularla.
          </LI>
          <LI>
            <strong>Estado de flujos en curso</strong>: marcas temporales
            que permiten completar procesos en curso (como añadir una
            botella a tu wallet o verificar tu email). Se eliminan una vez
            completado el proceso.
          </LI>
          <LI>
            <strong>Cookies de sesión</strong>: se utilizan en la zona
            privada del panel de gestión de bodegas para mantener la
            sesión iniciada. Expiran al cerrar sesión o tras un periodo
            razonable de inactividad.
          </LI>
        </UL>

        <h3 style={{ color: "#F6F1EB", fontSize: 16, margin: "24px 0 10px" }}>
          B. Analítica propia agregada
        </h3>
        <P>
          No instalamos cookies de analítica de terceros (no hay Google
          Analytics, Facebook Pixel, TikTok Pixel, ni similares). Nuestra
          analítica interna se basa en eventos enviados desde el navegador
          a nuestro servidor, usando el identificador anónimo descrito
          arriba junto con datos técnicos (país, idioma, tipo de
          dispositivo). La base legal es el interés legítimo en mejorar el
          producto y ofrecer métricas agregadas a las bodegas.
        </P>

        <h3 style={{ color: "#F6F1EB", fontSize: 16, margin: "24px 0 10px" }}>
          C. Cookies de terceros (solo al activar funciones opcionales)
        </h3>
        <P>
          Solo cuando interactúas con ciertas funciones opcionales:
        </P>
        <UL>
          <LI>
            <strong>Reproductores de vídeo embebidos</strong>: si una ficha
            incluye un vídeo y lo reproduces, el proveedor del reproductor
            puede instalar sus propias cookies. Rigen sus políticas.
          </LI>
          <LI>
            <strong>Pases digitales para wallet del móvil</strong>: si
            decides añadir una botella a tu wallet, el proveedor del
            servicio de wallet recibe los datos necesarios del pase
            (nombre del vino, añada, bodega) conforme a su política de
            privacidad.
          </LI>
        </UL>
      </Section>

      <Section title="3. Cómo desactivar o borrar cookies">
        <P>
          Puedes gestionar cookies y almacenamiento desde la configuración de
          tu navegador. Instrucciones oficiales:
        </P>
        <UL>
          <LI>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              Chrome
            </a>
          </LI>
          <LI>
            <a
              href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-rastreo-firefox-computadora"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              Firefox
            </a>
          </LI>
          <LI>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              Safari
            </a>
          </LI>
          <LI>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              Edge
            </a>
          </LI>
        </UL>
        <P>
          También puedes borrar específicamente tu cava y todos los datos
          asociados usando la función{" "}
          <strong>&quot;Eliminar mis datos&quot;</strong> disponible dentro
          de tu cava del QR2. Ese borrado afecta también a los datos
          almacenados en nuestro servidor vinculados a ti.
        </P>
        <P>
          <strong>Consecuencia</strong> de borrar el almacenamiento local:
          perderás la cava personal y las notas privadas, porque no podremos
          reconocer tu dispositivo en siguientes escaneos. Las fichas de
          vino siguen siendo accesibles.
        </P>
      </Section>

      <Section title="4. Actualizaciones de esta política">
        <P>
          Si añadimos o retiramos cookies actualizaremos esta página con la
          nueva fecha de &quot;última actualización&quot;.
        </P>
      </Section>

      <Section title="5. Contacto">
        <P>
          Dudas sobre cookies:{" "}
          <a href="mailto:legal@sommelierlab.com" style={{ color: "#D3B17A" }}>
            legal@sommelierlab.com
          </a>
          .
        </P>
      </Section>
    </LegalLayout>
  );
}
