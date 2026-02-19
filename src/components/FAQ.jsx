import { useState } from "react";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "¿Qué necesito para empezar?",
    a: "Un breve contexto del negocio, el objetivo (qué decisión necesitas tomar) y los datos disponibles. Si no hay datos, igual podemos definir un plan de levantamiento.",
  },
  {
    q: "¿Cuánto tarda un entregable inicial?",
    a: "Depende del alcance y la disponibilidad de datos. Como referencia, un diagnóstico breve suele estar entre 3 y 7 días.",
  },
  {
    q: "¿Qué tipo de entregables recibo?",
    a: "Normalmente: informe ejecutivo (PDF/Slides), tablas/resúmenes accionables y, si aplica, modelo (Excel/Sheets) o dashboard (Looker/Power BI/Sheets).",
  },
  {
    q: "¿Trabajas remoto?",
    a: "Sí. La asesoría se puede realizar 100% remoto, con reuniones breves y entregables claros para avanzar rápido.",
  },
  {
    q: "¿Cómo se define el costo?",
    a: "Se define por alcance y complejidad. Se puede trabajar por proyecto (entregables cerrados) o por acompañamiento mensual.",
  },
];

function Item({ q, a, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        "w-full text-left rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition",
        "hover:shadow-md",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="fluid-h3 font-semibold text-zinc-900">{q}</p>
          <div
            className={[
              "grid transition-all duration-300 ease-out",
              isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0",
            ].join(" ")}
          >
            <p className="overflow-hidden fluid-base text-zinc-600 leading-relaxed">
              {a}
            </p>
          </div>
        </div>

        <span
          className={[
            "mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border",
            isOpen ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-900",
          ].join(" ")}
          aria-hidden="true"
        >
          {isOpen ? "–" : "+"}
        </span>
      </div>
    </button>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Reveal className="mt-28">
      <section>
        <h2 className="fluid-h2 font-semibold text-zinc-900">Preguntas frecuentes</h2>
        <p className="mt-4 fluid-base max-w-3xl text-zinc-600 leading-relaxed">
          Respuestas rápidas para entender el proceso, tiempos y entregables.
        </p>

        <div className="mt-10 grid gap-4">
          {FAQS.map((x, idx) => (
            <Item
              key={x.q}
              q={x.q}
              a={x.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
