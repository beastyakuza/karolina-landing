import { Link } from "react-router-dom";

const CASOS = [
  {
    titulo: "Análisis de ventas y rentabilidad (Pyme)",
    descripcion:
      "Diagnóstico de ingresos/costos, márgenes por producto y recomendaciones para mejorar rentabilidad. Entregable: informe ejecutivo + tabla de acciones.",
    entregables: ["Informe ejecutivo", "Tabla de acciones", "KPIs clave"],
  },
  {
    titulo: "Investigación de mercado para lanzamiento",
    descripcion:
      "Estimación de tamaño de mercado, segmentación, competencia y propuesta de precio. Entregable: documento listo para presentar.",
    entregables: ["Análisis competitivo", "Segmentación", "Recomendación de precio"],
  },
  {
    titulo: "Proyecciones y escenarios financieros",
    descripcion:
      "Modelo de proyección a 12–24 meses con supuestos, sensibilidad y escenarios (base/optimista/conservador).",
    entregables: ["Modelo en Excel/Sheets", "Escenarios", "Resumen ejecutivo"],
  },
  {
    titulo: "Dashboard de indicadores (operación)",
    descripcion:
      "Diseño de indicadores y tablero para seguimiento semanal/mensual. Foco en lectura rápida y decisiones.",
    entregables: ["KPIs definidos", "Dashboard", "Guía de uso"],
  },
];

export default function Portfolio() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "grid", gap: 8 }}>
        <h1 style={{ margin: 0 }}>Portafolio</h1>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Casos de ejemplo (demo) para mostrar el tipo de entregables y el valor del análisis.
        </p>

        <div style={{ marginTop: 6 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section style={{ marginTop: 20, display: "grid", gap: 16 }}>
        {CASOS.map((c) => (
          <article
            key={c.titulo}
            style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}
          >
            <h3 style={{ marginTop: 0 }}>{c.titulo}</h3>
            <p style={{ marginBottom: 12 }}>{c.descripcion}</p>

            <strong>Entregables</strong>
            <ul style={{ marginTop: 8, lineHeight: 1.8 }}>
              {c.entregables.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

