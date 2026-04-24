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
  title: "Términos y Condiciones · SommelierLab",
  description:
    "Condiciones de uso del sitio web y de los servicios de SommelierLab.",
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y Condiciones de Uso" updated="25 de abril de 2026">
      <ResponsibleBlock />

      <Section title="1. Objeto">
        <P>
          Estos Términos regulan el acceso y uso del sitio web{" "}
          <strong>sommelierlab.com</strong> y de los servicios asociados
          prestados a través de sus subdominios (plataforma SaaS para bodegas,
          experiencia digital del consumidor al escanear QR, sommelier
          conversacional IA, pases de Wallet, etc.).
        </P>
        <P>
          El uso del sitio implica la aceptación plena de estos Términos. Si
          no estás conforme, por favor no uses el servicio.
        </P>
      </Section>

      <Section title="2. Tipos de usuario">
        <UL>
          <LI>
            <strong>Consumidor final</strong>: persona que escanea un código
            QR de una botella y accede a la ficha digital del vino. No
            requiere registro. Su interacción se rige por estos Términos y la
            Política de Privacidad.
          </LI>
          <LI>
            <strong>Bodega cliente</strong>: empresa o profesional del sector
            vitivinícola con cuenta en el panel de gestión. Su uso del
            servicio se rige, adicionalmente, por el contrato o condiciones
            particulares firmadas al contratar el plan correspondiente.
          </LI>
        </UL>
      </Section>

      <Section title="3. Uso aceptable">
        <P>Al usar SommelierLab te comprometes a NO:</P>
        <UL>
          <LI>Infringir ninguna ley aplicable.</LI>
          <LI>
            Suplantar a otra persona u organización, ni falsificar tu identidad.
          </LI>
          <LI>
            Intentar acceder a partes del sistema sin autorización,
            especialmente mediante técnicas de fuerza bruta, inyección,
            ingeniería inversa o explotación de vulnerabilidades.
          </LI>
          <LI>
            Realizar scraping masivo, indexación automatizada de contenidos o
            reutilización de datos fuera del consumo individual previsto.
          </LI>
          <LI>
            Usar el contenido del servicio (textos, imágenes, audios,
            narrativas, bases de datos) para entrenar, ajustar o evaluar
            modelos de inteligencia artificial sin autorización expresa.
          </LI>
          <LI>
            Introducir malware, scripts maliciosos o cualquier elemento que
            pueda dañar el servicio o a sus usuarios.
          </LI>
          <LI>
            Publicar valoraciones falsas, difamatorias, ofensivas o ajenas a
            tu experiencia real con el vino.
          </LI>
          <LI>
            Usar el servicio de forma que genere un coste desproporcionado
            para el titular (p. ej. generar peticiones artificiales al
            sommelier IA).
          </LI>
        </UL>
        <P>
          El incumplimiento de estas condiciones podrá suponer el bloqueo
          inmediato del acceso y, en su caso, las acciones legales que
          correspondan.
        </P>
      </Section>

      <Section title="4. Propiedad intelectual e industrial">
        <P>
          Todo el contenido del sitio y del servicio (código fuente, diseño,
          interfaz, textos editoriales, narrativas, audios, traducciones,
          fotografías, iconografía, bases de datos, estructura de los datos,
          prompts de inteligencia artificial, flujos de trabajo, arquitectura
          del sistema, marca &quot;SommelierLab&quot; y signos distintivos)
          es de titularidad exclusiva del responsable indicado en la
          cabecera o de sus licenciantes.
        </P>
        <P>
          Queda <strong>expresamente prohibido</strong>, salvo autorización
          previa por escrito:
        </P>
        <UL>
          <LI>
            Copiar, reproducir, redistribuir, publicar, sublicenciar, vender,
            alquilar o ceder total o parcialmente el servicio o sus
            contenidos.
          </LI>
          <LI>
            Realizar ingeniería inversa, descompilar, desensamblar, observar,
            estudiar o probar el funcionamiento del software con finalidad
            de replicarlo, salvo las excepciones legales imperativas.
          </LI>
          <LI>
            Usar marca, logo, lemas o elementos gráficos de SommelierLab en
            productos o servicios de terceros.
          </LI>
          <LI>
            Extraer, copiar o reutilizar de forma masiva o sistemática las
            bases de datos del servicio (art. 133 del Texto Refundido de la
            Ley de Propiedad Intelectual).
          </LI>
          <LI>
            Utilizar el contenido del servicio para entrenar, afinar o
            evaluar modelos de inteligencia artificial de terceros sin
            autorización expresa y por escrito del titular.
          </LI>
        </UL>
        <P>
          Las bodegas cliente conservan los derechos sobre los contenidos que
          aporten (textos de su historia, fotos de sus vinos, logos, etc.) y
          conceden a SommelierLab una licencia no exclusiva para mostrarlos
          dentro del servicio mientras dure la relación contractual.
        </P>
      </Section>

      <Section title="5. Secreto empresarial y prohibición de análisis competitivo">
        <P>
          La arquitectura técnica del servicio, la metodología editorial, los
          prompts y configuraciones de inteligencia artificial, los criterios
          organolépticos, los flujos de publicación, los datos de uso
          agregados y el conjunto de know-how del servicio constituyen{" "}
          <strong>secretos empresariales</strong> del titular, protegidos por
          la Ley 1/2019, de 20 de febrero, de Secretos Empresariales.
        </P>
        <P>
          Queda expresamente prohibido:
        </P>
        <UL>
          <LI>
            Acceder al servicio con el propósito de obtener información para
            desarrollar, lanzar o mejorar un producto o servicio competidor.
          </LI>
          <LI>
            Realizar pruebas comparativas (<em>benchmarking</em>) cuyos
            resultados se usen para replicar o sustituir funcionalidades del
            servicio.
          </LI>
          <LI>
            Solicitar acceso al servicio ocultando que se actúa por cuenta de
            un competidor directo o indirecto.
          </LI>
          <LI>
            Divulgar información no pública obtenida durante el uso del
            servicio (arquitectura, configuraciones, datos de clientes,
            métricas privadas) a terceros no autorizados.
          </LI>
        </UL>
        <P>
          La infracción de las obligaciones de este apartado faculta al
          titular a ejercer las acciones civiles y penales previstas en la
          Ley 1/2019 y en la Ley 3/1991 de Competencia Desleal (arts. 11 a
          14), sin perjuicio de otras acciones legales que pudieran
          corresponder.
        </P>
      </Section>

      <Section title="6. Disponibilidad del servicio">
        <P>
          Hacemos lo razonable para mantener el servicio disponible 24/7,
          pero no garantizamos una disponibilidad ininterrumpida. Pueden
          producirse cortes por mantenimiento, incidencias de proveedores
          externos (cloud, CDN, IA) o causas de fuerza mayor.
        </P>
        <P>
          Nos reservamos el derecho de modificar, suspender o discontinuar
          (total o parcialmente) cualquier funcionalidad en cualquier
          momento, con aviso razonable cuando ese cambio afecte a clientes
          con contrato activo.
        </P>
      </Section>

      <Section title="7. Contenido de terceros y enlaces externos">
        <P>
          El sitio puede incluir enlaces a webs de terceros (redes sociales,
          distribuidores de vino, webs de bodegas, plataformas de vídeo,
          etc.). No somos responsables del contenido o las prácticas de
          privacidad de esos terceros.
        </P>
        <P>
          Las fichas de vino contienen información facilitada por las propias
          bodegas. Aunque revisamos editorialmente la narrativa, la
          responsabilidad última de la veracidad del contenido técnico (datos
          organolépticos, premios, ingredientes) recae en la bodega titular.
        </P>
      </Section>

      <Section title="8. Limitación de responsabilidad">
        <P>
          El servicio se presta <strong>&quot;tal cual&quot;</strong> y{" "}
          <strong>&quot;según disponibilidad&quot;</strong>, sin garantías
          implícitas de idoneidad para un fin concreto.
        </P>
        <P>
          En la máxima medida permitida por la ley, el titular no será
          responsable de:
        </P>
        <UL>
          <LI>
            Daños indirectos, lucro cesante, pérdida de oportunidades de
            negocio o pérdida de datos derivados del uso del servicio.
          </LI>
          <LI>
            Decisiones de compra o consumo basadas en la información mostrada
            en las fichas de vino.
          </LI>
          <LI>
            Efectos del consumo de alcohol. El consumo responsable es
            responsabilidad personal del usuario. El consumo de bebidas
            alcohólicas por menores de 18 años está prohibido en España.
          </LI>
          <LI>
            Incidencias causadas por proveedores externos (interrupciones de
            servicio de OpenAI, ElevenLabs, Vercel, Railway, Google, etc.).
          </LI>
        </UL>
        <P>
          Nada en estos Términos excluye o limita la responsabilidad por dolo
          o por daños personales causados por negligencia grave, conforme
          permite la ley aplicable.
        </P>
      </Section>

      <Section title="9. Indemnidad">
        <P>
          Te comprometes a mantener indemne a SommelierLab, su titular y
          colaboradores frente a cualquier reclamación de terceros derivada
          de tu uso indebido del servicio o del incumplimiento de estos
          Términos.
        </P>
      </Section>

      <Section title="10. Modificaciones">
        <P>
          Podemos actualizar estos Términos para reflejar cambios del
          servicio o nuevos requisitos legales. La versión vigente es la
          publicada en esta página con la fecha de &quot;última
          actualización&quot;. Los cambios relevantes se comunicarán con un
          aviso destacado en el sitio o, cuando proceda, por email a las
          bodegas cliente.
        </P>
      </Section>

      <Section title="11. Nulidad parcial">
        <P>
          Si alguna cláusula de estos Términos fuera declarada nula o
          inaplicable, el resto conservará su plena vigencia. La cláusula
          nula se sustituirá, en la medida posible, por otra que cumpla el
          objetivo legítimo original.
        </P>
      </Section>

      <Section title="12. Legislación aplicable y jurisdicción">
        <P>
          Estos Términos se rigen por la legislación española. Para la
          resolución de cualquier controversia, las partes se someten
          expresamente a los Juzgados y Tribunales de la provincia de
          Barcelona (España), salvo que por ley corresponda otro fuero
          imperativo (p. ej. el del domicilio del consumidor).
        </P>
      </Section>

      <Section title="13. Contacto">
        <P>
          Para cualquier consulta sobre estos Términos:{" "}
          <a href="mailto:legal@sommelierlab.com" style={{ color: "#D3B17A" }}>
            legal@sommelierlab.com
          </a>
          .
        </P>
      </Section>
    </LegalLayout>
  );
}
