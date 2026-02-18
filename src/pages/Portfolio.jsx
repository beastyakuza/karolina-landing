import { Link } from "react-router-dom";

const CASOS = [
  {
    titulo: "Análisis de ventas y rentabilidad (Pyme)",
    descripcion:
      "Diagnóstico de ingresos/costos, márgenes por producto y recomendaciones para mejorar rentabilidad.",
    entregables: ["Informe ejecutivo", "Tabla de acciones", "KPIs clave"],
  },
  {
    titulo: "Investigación de mercado para lanzamiento",
    descripcion:
      "Tamaño de mercado, segmentación, competencia y recomendación de precio.",
    entregables: ["Análisis competitivo", "Segmentación", "Recomendación de precio"],
  },
  {
    titulo: "Proyecciones y escenarios financieros",
    descripcion:
      "Modelo a 12–24 meses con supuestos, sensibilidad y escenarios base/optimista/conservador.",
    entregables: ["Modelo Excel/Sheets", "Escenarios", "Resumen ejecutivo"],
  },
  {
    titulo: "Dashboard de indicadores (operación)",
    descripcion:
      "Definición de KPIs y tablero para seguimiento semanal y mensual.",
    entregables: ["KPIs definidos", "Dashboard", "Guía de uso"],
  },
  {
    titulo: "Evaluación de viabilidad de proyecto",
    descripcion:
      "Análisis financiero y estratégico para apoyar decisiones de inversión.",
    entregables: ["Flujo de caja proyectado", "TIR y VAN", "Recomendación final"],
  },
  {
    titulo: "Optimización de estructura de costos",
    descripcion:
      "Revisión de estructura de costos y propuesta de mejora de eficiencia.",
    entregables: ["Mapa de costos", "Plan de reducción", "Impacto estimado"],
  },
];

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HEADER */}
      <header className="flex flex-col gap-4">
        <h1 className="fluid-h1 font-semibold tracking-tight text-zinc-900">
          Portafolio
        </h1>

        <p className="fluid-base max-w-3xl text-zinc-600 leading-relaxed">
          Casos de ejemplo que muestran el enfoque analítico, la claridad en los entregables
          y el impacto en la toma de decisiones estratégicas.
        </p>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-zinc-900 shadow-sm transition hover:bg-zinc-50 fluid-sm"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* GRID RESPONSIVO: 1 col móvil, 2 col md, 3 col lg */}
      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASOS.map((caso) => (
          <article
            key={caso.titulo}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div>
              <h3 className="fluid-h3 font-semibold text-zinc-900">{caso.titulo}</h3>

              <p className="mt-3 fluid-base leading-relaxed text-zinc-600">
                {caso.descripcion}
              </p>

              <div className="mt-5">
                <p className="fluid-base font-semibold text-zinc-900">
                  Entregables:
                </p>

                <ul className="mt-2 list-disc pl-5 text-zinc-600 space-y-1 fluid-sm">
                  {caso.entregables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/#contacto"
                className="inline-flex w-full justify-center rounded-xl border border-zinc-200 bg-zinc-900 px-4 py-3 font-medium text-white transition hover:opacity-95 fluid-sm"
              >
                Solicitar asesoría similar
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* CTA final */}
      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-7">
        <h2 className="fluid-h2 font-semibold tracking-tight text-zinc-900">
          ¿Quieres un caso adaptado a tu sector?
        </h2>
        <p className="mt-3 fluid-base text-zinc-600 leading-relaxed max-w-3xl">
          Puedo preparar un diagnóstico breve con los datos disponibles y objetivos del negocio,
          y proponerte un plan de trabajo con entregables claros.
        </p>

        <div className="mt-6">
          <Link
            to="/#contacto"
            className="inline-flex rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-zinc-900 shadow-sm transition hover:bg-zinc-100 fluid-sm"
          >
            Ir a contacto
          </Link>
        </div>
      </section>
    </main>
  );
}
