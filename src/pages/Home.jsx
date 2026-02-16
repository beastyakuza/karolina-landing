const WHATSAPP_NUMBER = "573001234567"; 
// 🔁 Cambia esto por el número real (sin +, sin espacios)

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
          
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Consultoría económica • Análisis aplicado
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 fade-up">
            Karolina — Economista
          </h1>

          <p className="max-w-2xl text-zinc-600 leading-relaxed fade-up">
            Consultoría económica y análisis de datos para apoyar decisiones estratégicas.
            Informes claros, modelos financieros y recomendaciones accionables.
          </p>

          <div className="mt-3 flex flex-wrap gap-3 fade-up">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-900 bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
            >
              Hablar por WhatsApp
            </a>

            <a
              href="/portfolio"
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            >
              Ver portafolio
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section id="servicios" className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Servicios
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Análisis de datos e indicadores",
              desc: "Dashboards e informes para entender ventas, costos y desempeño.",
            },
            {
              title: "Investigación de mercado",
              desc: "Tamaño de mercado, competencia, segmentación y precios.",
            },
            {
              title: "Modelos y proyecciones financieras",
              desc: "Escenarios base, optimista y conservador con supuestos claros.",
            },
            {
              title: "Informes ejecutivos y presentaciones",
              desc: "Storytelling estratégico para comunicar resultados.",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section id="sobre-mi" className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Sobre Karolina
        </h2>

        <p className="mt-3 max-w-3xl text-zinc-600 leading-relaxed">
          Economista con enfoque en análisis aplicado, métricas y comunicación de resultados.
          Traduce datos en decisiones estratégicas: qué significa, por qué importa y qué hacer.
        </p>

        <ul className="mt-5 grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
          <li className="rounded-xl border border-zinc-200 bg-white p-3">
            ✔ Experiencia en análisis financiero y mercado
          </li>
          <li className="rounded-xl border border-zinc-200 bg-white p-3">
            ✔ Modelos de proyección personalizados
          </li>
          <li className="rounded-xl border border-zinc-200 bg-white p-3">
            ✔ Informes claros y ejecutivos
          </li>
          <li className="rounded-xl border border-zinc-200 bg-white p-3">
            ✔ Trabajo remoto y asesorías estratégicas
          </li>
        </ul>
      </section>

      {/* ================= CONTACTO (IMPORTANTE PARA SCROLL) ================= */}
      <section
        id="contacto"
        className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm"
      >
        <h2 className="text-xl font-semibold tracking-tight">
          ¿Hablamos por WhatsApp?
        </h2>

        <p className="mt-3 max-w-2xl text-white/80 leading-relaxed">
          Cuéntame tu necesidad (sector, objetivo y fecha) y te responderé con una propuesta personalizada.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:opacity-95"
          >
            Escribir a Karolina
          </a>

          <a
            href="/portfolio"
            className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Ver portafolio
          </a>
        </div>
      </section>

    </main>
  );
}
