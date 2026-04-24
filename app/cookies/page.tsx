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
    <LegalLayout title="Política de Cookies" updated="24 de abril de 2026">
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

      <Section title="2. Qué cookies / almacenamiento usa SommelierLab">
        <P>
          Clasificación según el tipo y la finalidad:
        </P>

        <h3 style={{ color: "#F6F1EB", fontSize: 16, margin: "24px 0 10px" }}>
          A. Técnicas estrictamente necesarias
        </h3>
        <P>
          Exentas del deber de consentimiento conforme al art. 22.2 de la
          LSSI y la Guía de la AEPD sobre cookies.
        </P>
        <UL>
          <LI>
            <strong>sl_user</strong> (localStorage del QR2): UUID anónimo que
            construye tu cava personal. Sin él no se pueden mostrar las
            botellas que has escaneado. Permanece hasta que tú borres los
            datos del sitio.
          </LI>
          <LI>
            <strong>sl_lang</strong> (localStorage): idioma que has elegido
            la última vez (9 disponibles). Permanece hasta que cambies de
            idioma o limpies el sitio.
          </LI>
          <LI>
            <strong>sl_email</strong> (localStorage): caché del email
            vinculado a tu cava, si lo has vinculado voluntariamente. Se
            borra al desvincularlo.
          </LI>
          <LI>
            <strong>sl_email_verified_at</strong> (localStorage): marca
            temporal de cuándo verificaste tu email por primera vez.
          </LI>
          <LI>
            <strong>sl_wallet_pending</strong> (localStorage): flag temporal
            usado durante el flujo de añadir una botella a Google Wallet.
          </LI>
          <LI>
            <strong>Cookies de sesión NextAuth</strong> (solo panel de
            bodegas <em>sommelierlab-dashboard.vercel.app</em>):
            autenticación de la cuenta de la bodega. Nombre técnico:{" "}
            <code>__Secure-authjs.session-token</code>. Expira a los 30 días
            o al cerrar sesión.
          </LI>
        </UL>

        <h3 style={{ color: "#F6F1EB", fontSize: 16, margin: "24px 0 10px" }}>
          B. Analítica propia agregada
        </h3>
        <P>
          No instalamos cookies de analítica de terceros. Nuestra analítica
          interna se basa en eventos enviados desde el navegador a nuestro
          servidor (no en cookies), usando el identificador{" "}
          <em>sl_user</em> descrito arriba y datos técnicos (país, idioma,
          dispositivo). La base legal es el interés legítimo en mejorar el
          producto y ofrecer métricas agregadas a las bodegas.
        </P>

        <h3 style={{ color: "#F6F1EB", fontSize: 16, margin: "24px 0 10px" }}>
          C. Cookies de terceros
        </h3>
        <P>
          Solo cuando interactúas con ciertas funciones:
        </P>
        <UL>
          <LI>
            <strong>YouTube / Vimeo</strong>: si una ficha incluye un vídeo
            embebido, estos servicios pueden instalar sus cookies al
            reproducirlo. Rigen sus propias políticas de privacidad (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              Google
            </a>
            ,{" "}
            <a
              href="https://vimeo.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D3B17A" }}
            >
              Vimeo
            </a>
            ).
          </LI>
          <LI>
            <strong>Google Wallet</strong>: si decides añadir una botella a
            tu Wallet, Google recibe los datos del pase (nombre del vino,
            añada, bodega) conforme a su política.
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
          <strong>Consecuencia</strong> de desactivar <em>sl_user</em>:
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
