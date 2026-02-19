import Reveal from "../components/Reveal.jsx";

const WHATSAPP_NUMBER = "573001234567"; // cámbialo
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola Karolina, vi tu portafolio y me gustaría solicitar una asesoría. ¿Tienes disponibilidad esta semana?"
);

export default function Home() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      {/* HERO */}
      <Reveal>
        <section className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 fluid-sm text-zinc-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Consultoría económica • Análisis aplicado
            </p>

            <h1 className="mt-6 fluid-h1 font-semibold tracking-tight text-zinc-900">
              Economía aplicada a decisiones estratégicas.
            </h1>

            <p className="mt-6 fluid-lg text-zinc-600 leading-relaxed">
              Karolina ofrece consultoría económica enfocada en análisis riguroso,
              claridad ejecutiva y resultados accionables para negocios y organizaciones.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-zinc-900 px-8 py-4 text-white font-medium transition hover:bg-zinc-800 fluid-sm"
              >
                Solicitar asesoría
              </a>

              <a
                href="/portfolio"
                className="rounded-2xl border border-zinc-300 bg-white px-8 py-4 font-medium text-zinc-900 transition hover:bg-zinc-50 fluid-sm"
              >
                Ver portafolio
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SERVICIOS */}
      <Reveal className="mt-28">
        <section>
          <h2 className="fluid-h2 font-semibold text-zinc-900">Servicios</h2>
          <p className="mt-4 fluid-base max-w-3xl text-zinc-600 leading-relaxed">
            Entregables claros, listos para presentar. Enfoque en impacto y toma de decisiones.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Análisis financiero y proyecciones",
                desc: "Modelos, escenarios y sensibilidad para planificación y decisiones de inversión.",
              },
              {
                title: "Investigación de mercado",
                desc: "Segmentación, competencia, tamaño de mercado y estrategia de precio.",
              },
              {
                title: "KPIs y tableros",
                desc: "Indicadores y dashboards para seguimiento ejecutivo y decisiones rápidas.",
              },
              {
                title: "Informes ejecutivos",
                desc: "Comunicación clara: hallazgos, implicaciones y recomendaciones accionables.",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <h3 className="fluid-h3 font-semibold text-zinc-900">{s.title}</h3>
                <p className="mt-4 fluid-base leading-relaxed text-zinc-600">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CÓMO TRABAJO */}
      <Reveal className="mt-28">
        <section>
          <h2 className="fluid-h2 font-semibold text-zinc-900">Cómo trabajo</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1) Diagnóstico",
                desc: "Objetivo, contexto y datos disponibles. Acordamos alcance y entregables.",
              },
              {
                step: "2) Análisis",
                desc: "Limpieza, hipótesis, modelos y validación de supuestos.",
              },
              {
                step: "3) Resultados",
                desc: "Informe ejecutivo con recomendaciones y próximos pasos accionables.",
              },
            ].map((x) => (
              <div
                key={x.step}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm"
              >
                <p className="fluid-base font-semibold text-zinc-900">{x.step}</p>
                <p className="mt-4 fluid-base leading-relaxed text-zinc-600">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* CONTACTO */}
      <Reveal className="mt-28">
        <section
          id="contacto"
          className="rounded-3xl bg-zinc-900 p-12 text-white"
        >
          <h2 className="fluid-h2 font-semibold">¿Hablamos por WhatsApp?</h2>
          <p className="mt-6 fluid-base max-w-2xl text-white/80 leading-relaxed">
            Cuéntame tu necesidad (sector, objetivo y fecha) y te respondo con una propuesta.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-8 py-4 text-zinc-900 font-semibold transition hover:opacity-90 fluid-sm"
            >
              Escribir a Karolina
            </a>

            <a
              href="/portfolio"
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-medium text-white transition hover:bg-white/10 fluid-sm"
            >
              Ver portafolio
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
