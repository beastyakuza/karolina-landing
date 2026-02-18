import { Link } from "react-router-dom";

const CASOS = [
  {
    titulo: "Análisis de ventas y rentabilidad",
    descripcion:
      "Diagnóstico de ingresos y costos, márgenes por producto y recomendaciones accionables.",
    entregables: ["Informe ejecutivo", "Tabla de acciones", "KPIs clave"],
    imagen: "/portfolio/ventas.jpg",
  },
  {
    titulo: "Investigación de mercado",
    descripcion:
      "Tamaño de mercado, segmentación, análisis competitivo y recomendación de precio.",
    entregables: ["Competencia", "Segmentación", "Recomendación de precio"],
    imagen: "/portfolio/mercado.jpg",
  },
  {
    titulo: "Proyecciones y escenarios",
    descripcion:
      "Modelo a 12–24 meses con supuestos claros, sensibilidad y escenarios comparables.",
    entregables: ["Modelo Excel/Sheets", "Escenarios", "Resumen ejecutivo"],
    imagen: "/portfolio/proyecciones.jpg",
  },
  {
    titulo: "Dashboard de indicadores",
    descripcion:
      "Definición de KPIs y tablero para seguimiento semanal y mensual orientado a decisiones.",
    entregables: ["KPIs definidos", "Dashboard", "Guía de uso"],
    imagen: "/portfolio/dashboard.jpg",
  },
  {
    titulo: "Evaluación de viabilidad",
    descripcion:
      "Análisis financiero para apoyar decisiones de inversión con indicadores clave.",
    entregables: ["Flujo de caja", "TIR y VAN", "Recomendación final"],
    imagen: "/portfolio/viabilidad.jpg",
  },
  {
    titulo: "Optimización de costos",
    descripcion:
      "Mapa de costos, oportunidades de eficiencia y plan de reducción con impacto estimado.",
    entregables: ["Mapa de costos", "Plan de reducción", "Impacto estimado"],
    imagen: "/portfolio/costos.jpg",
  },
];

function PortfolioImage({ src, alt }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        className="h-44 w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
        loading="lazy"
        onError={(e) => {
          // Fallback si no existe la imagen todavía
          e.currentTarget.style.display = "none";
        }}
      />
      {/* Fallback visual si no hay imagen */}
      <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
        <span className="fluid-sm">Imagen de caso</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* HEADER */}
      <header className="flex flex-col gap-4">
        <h1 className="fluid-h1 font-semibold tracking-tight text-zinc-900">
          Portafolio
        </h1>

        <p className="fluid-base max-w-3xl text-zinc-600 leading-relaxed">
          Casos de ejemplo para ilustrar el enfoque, el tipo de entregables y la claridad
          en la toma de decisiones.
        </p>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm transition hover:bg-zinc-50 fluid-sm"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* GRID */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CASOS.map((caso) => (
          <article
            key={caso.titulo}
            className="group flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-5">
              <PortfolioImage src={caso.imagen} alt={caso.titulo} />

              <div className="flex flex-col gap-3">
                <h3 className="fluid-h3 font-semibold text-zinc-900">
                  {caso.titulo}
                </h3>

                <p className="fluid-base leading-relaxed text-zinc-600">
                  {caso.descripcion}
                </p>

                <div className="pt-2">
                  <p className="fluid-base font-semibold text-zinc-900">
                    Entregables
                  </p>

                  <ul className="mt-2 space-y-1 text-zinc-600 fluid-sm">
                    {caso.entregables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-zinc-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/#contacto"
                className="inline-flex w-full justify-center rounded-2xl bg-zinc-900 px-5 py-3 font-medium text-white transition hover:bg-zinc-800 fluid-sm"
              >
                Solicitar un caso similar
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50 p-10">
        <h2 className="fluid-h2 font-semibold tracking-tight text-zinc-900">
          ¿Quieres un caso adaptado a tu sector?
        </h2>
        <p className="mt-4 fluid-base max-w-3xl text-zinc-600 leading-relaxed">
          Puedo preparar un diagnóstico breve con los datos disponibles y objetivos del negocio,
          y proponerte un plan de trabajo con entregables claros.
        </p>

        <div className="mt-8">
          <Link
            to="/#contacto"
            className="inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100 fluid-sm"
          >
            Ir a contacto
          </Link>
        </div>
      </section>
    </main>
  );
}
