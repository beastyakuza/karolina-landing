import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Reveal from "../components/Reveal.jsx";

const CASOS = [
  {
    titulo: "Análisis de ventas y rentabilidad",
    categoria: "Finanzas",
    descripcion:
      "Diagnóstico de ingresos y costos, márgenes por producto y recomendaciones accionables.",
    entregables: ["Informe ejecutivo", "Tabla de acciones", "KPIs clave"],
    imagen: "/portfolio/ventas.jpg",
  },
  {
    titulo: "Investigación de mercado",
    categoria: "Mercado",
    descripcion:
      "Tamaño de mercado, segmentación, análisis competitivo y recomendación de precio.",
    entregables: ["Competencia", "Segmentación", "Recomendación de precio"],
    imagen: "/portfolio/mercado.jpg",
  },
  {
    titulo: "Proyecciones y escenarios",
    categoria: "Finanzas",
    descripcion:
      "Modelo a 12–24 meses con supuestos claros, sensibilidad y escenarios comparables.",
    entregables: ["Modelo Excel/Sheets", "Escenarios", "Resumen ejecutivo"],
    imagen: "/portfolio/proyecciones.jpg",
  },
  {
    titulo: "Dashboard de indicadores",
    categoria: "Datos",
    descripcion:
      "Definición de KPIs y tablero para seguimiento semanal y mensual orientado a decisiones.",
    entregables: ["KPIs definidos", "Dashboard", "Guía de uso"],
    imagen: "/portfolio/dashboard.jpg",
  },
  {
    titulo: "Evaluación de viabilidad",
    categoria: "Finanzas",
    descripcion:
      "Análisis financiero para apoyar decisiones de inversión con indicadores clave.",
    entregables: ["Flujo de caja", "TIR y VAN", "Recomendación final"],
    imagen: "/portfolio/viabilidad.jpg",
  },
  {
    titulo: "Optimización de costos",
    categoria: "Operación",
    descripcion:
      "Mapa de costos, oportunidades de eficiencia y plan de reducción con impacto estimado.",
    entregables: ["Mapa de costos", "Plan de reducción", "Impacto estimado"],
    imagen: "/portfolio/costos.jpg",
  },
];

const CATEGORIAS = ["Todas", "Finanzas", "Mercado", "Datos", "Operación"];

function Chip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 fluid-sm transition",
        "border",
        active
          ? "border-zinc-900 bg-zinc-900 text-white"
          : "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function Portfolio() {
  const [categoria, setCategoria] = useState("Todas");

  const casosFiltrados = useMemo(() => {
    if (categoria === "Todas") return CASOS;
    return CASOS.filter((c) => c.categoria === categoria);
  }, [categoria]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* HEADER */}
      <Reveal>
        <header className="flex flex-col gap-5">
          <h1 className="fluid-h1 font-semibold tracking-tight text-zinc-900">
            Portafolio
          </h1>

          <p className="fluid-base max-w-3xl text-zinc-600 leading-relaxed">
            Casos de ejemplo que ilustran el enfoque analítico, la claridad en los entregables
            y el impacto en la toma de decisiones estratégicas.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm transition hover:bg-zinc-50 fluid-sm"
            >
              ← Volver al inicio
            </Link>

            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-white shadow-sm transition hover:bg-zinc-800 fluid-sm"
            >
              Contacto
            </Link>
          </div>
        </header>
      </Reveal>

      {/* FILTROS */}
      <Reveal className="mt-10">
        <div className="flex flex-wrap gap-3">
          {CATEGORIAS.map((cat) => (
            <Chip key={cat} active={categoria === cat} onClick={() => setCategoria(cat)}>
              {cat}
            </Chip>
          ))}
        </div>

        <p className="mt-4 fluid-sm text-zinc-500">
          Mostrando: <span className="text-zinc-900 font-medium">{categoria}</span> (
          {casosFiltrados.length} casos)
        </p>
      </Reveal>

      {/* GRID 1/2/3 */}
      <section className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {casosFiltrados.map((caso) => (
          <Reveal key={caso.titulo}>
            <article
              className={[
                "group flex h-full flex-col justify-between rounded-3xl bg-white",
                "border border-zinc-200 shadow-sm transition",
                "hover:shadow-xl hover:-translate-y-1",
                "hover:border-zinc-300",
              ].join(" ")}
            >
              <div className="p-7 md:p-6">
                {/* Imagen con ratio consistente */}
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                  <div className="aspect-[16/10] w-full">
                    <img
                      src={caso.imagen}
                      alt={caso.titulo}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 fluid-sm text-zinc-700">
                    {caso.categoria}
                  </span>

                  <span className="fluid-sm text-zinc-500">Caso</span>
                </div>

                <h3 className="mt-4 fluid-h3 font-semibold text-zinc-900">
                  {caso.titulo}
                </h3>

                <p className="mt-3 fluid-base leading-relaxed text-zinc-600">
                  {caso.descripcion}
                </p>

                <div className="mt-5">
                  <p className="fluid-base font-semibold text-zinc-900">Entregables</p>

                  <ul className="mt-2 space-y-2 text-zinc-600 fluid-sm">
                    {caso.entregables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-zinc-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7 md:px-6 md:pb-6">
                <Link
                  to="/#contacto"
                  className="inline-flex w-full justify-center rounded-2xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800 fluid-sm"
                >
                  Solicitar asesoría similar
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* CTA FINAL */}
      <Reveal className="mt-20">
        <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-12">
          <h2 className="fluid-h2 font-semibold tracking-tight text-zinc-900">
            ¿Quieres un caso adaptado a tu sector?
          </h2>

          <p className="mt-6 fluid-base max-w-3xl text-zinc-600 leading-relaxed">
            Podemos preparar un diagnóstico inicial con base en tus datos y objetivos,
            y proponerte un plan de trabajo con entregables claros y accionables.
          </p>

          <div className="mt-8">
            <Link
              to="/#contacto"
              className="inline-flex rounded-2xl bg-white px-8 py-3 font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-100 fluid-sm"
            >
              Ir a contacto
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
