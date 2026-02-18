const WHATSAPP_NUMBER = "573001234567"; // <-- cambia por el número real (sin +, sin espacios)

const WHATSAPP_TEXT = encodeURIComponent(
  "Hola Karolina, vi tu portafolio y me gustaría solicitar una asesoría. ¿Tienes disponibilidad esta semana?"
);

export default function Home() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* ================= HERO ================= */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="grid gap-5">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-zinc-700 fluid-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Consultoría económica • Análisis aplicado
          </p>

          <h1 className="fluid-h1 font-semibold tracking-tight text-zinc-900 fade-up">
            Karolina — Economista
          </h1>

          <p className="fluid-lg max-w-2xl text-zinc-600 leading-relaxed fade-up">
            Consultoría económica y análisis de datos para apoyar decisiones estratégicas.
            Informes claros, modelos financieros y recomendaciones accionables.
          </p>

          <div className="mt-3 flex flex-wrap gap-3 fade-up">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-900 bg-zinc-900 px-5 py-3 font-medium text-white shadow-sm transition hover:opacity-95 fluid-sm"
            >
              Hablar por WhatsApp
            </a>

            <a
              href="/portfolio"
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 fluid-sm"
            >
              Ver portafolio
            </a>
          </div>

          <p className="text-zinc-500 fluid-sm">
            Servicios para pymes, emprendedores, equipos de producto y organizaciones.
          </p>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section id="servicios" className="mt-14">
        <h2 className="fluid-h2 font-semibold tracking-tight text-zinc-900">
          Servicios
        </h2>

        <p className="mt-3 fluid-base max-w-3xl text-zinc-600 leading-relaxed">
          Entregables claros y listos para presentar. Enfoque en impacto y decisiones.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Análisis de datos e indicadores",
              desc: "Dashboards e informes para entender ventas, costos, demanda y desempeño.",
            },
            {
              title: "Investigación de mercado",
              desc: "Tamaño de mercado, segmentación, competencia, precios y oportunidades.",
            },
            {
              title: "Modelos y proyecciones financieras",
              desc: "Escenarios base/optimista/conservador con supuestos claros y sensibilidad.",
            },
            {
              title: "Informes ejecutivos y presentaciones",
              desc: "Storytelling estratégico para comunicar resultados con claridad.",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="fluid-h3 font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-3 fluid-base leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CÓMO TRABAJO ================= */}
      <section className="mt-14">
        <h2 className="fluid-h2 font-semibold tracking-tight text-zinc-900">
          Cómo trabajo
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              step: "1) Diagnóstico",
              desc: "Objetivo, contexto y datos disponibles. Acordamos alcance y entregables.",
            },
            {
              step: "2) Análisis",
              desc: "Limpieza, exploración, hipótesis y modelos. Validación de supuestos.",
            },
            {
              step: "3) Resultados",
              desc: "Hallazgos + recomendaciones + próximos pasos. Todo claro y accionable.",
            },
          ].map((x) => (
            <div
              key={x.step}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="fluid-base font-semibold text-zinc-900">{x.step}</p>
              <p className="mt-3 fluid-base leading-relaxed text-zinc-600">
                {x.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section id="sobre-mi" className="mt-14">
        <h2 className="fluid-h2 font-semibold tracking-tight text-zinc-900">
          Sobre Karolina
        </h2>

        <p className="mt-3 fluid-base max-w-3xl text-zinc-600 leading-relaxed">
          Economista con enfoque en análisis aplicado, métricas y comunicación de resultados.
          Traduce datos en decisiones estratégicas: qué significa, por qué importa y qué hacer.
        </p>

        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "Experiencia en análisis financiero y de mercado",
            "Modelos de proyección personalizados y escenarios",
            "Informes claros, ejecutivos y listos para presentar",
            "Asesorías remotas y acompañamiento estratégico",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-zinc-600 shadow-sm fluid-base"
            >
              ✔ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= CONTACTO (IMPORTANTE PARA SCROLL) ================= */}
      <section
        id="contacto"
        className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm"
      >
        <h2 className="fluid-h2 font-semibold tracking-tight">
          ¿Hablamos por WhatsApp?
        </h2>

        <p className="mt-3 fluid-base max-w-2xl text-white/80 leading-relaxed">
          Cuéntame tu necesidad (sector, objetivo y fecha) y te responderé con una propuesta personalizada.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:opacity-95 fluid-sm"
          >
            Escribir a Karolina
          </a>

          <a
            href="/portfolio"
            className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10 fluid-sm"
          >
            Ver portafolio
          </a>
        </div>

        <p className="mt-4 fluid-sm text-white/60">
          (Luego, si quieres, agregamos formulario real con Formspree/EmailJS.)
        </p>
      </section>
    </main>
  );
}
