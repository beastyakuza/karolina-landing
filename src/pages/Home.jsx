const WHATSAPP_NUMBER = "573001234567";

const WHATSAPP_TEXT = encodeURIComponent(
  "Hola Karolina, vi tu portafolio y me gustaría solicitar una asesoría."
);

export default function Home() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* HERO PREMIUM */}
      <section className="flex flex-col gap-10">

        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="fluid-h1 font-semibold tracking-tight text-zinc-900">
            Economía aplicada a decisiones estratégicas.
          </h1>

          <p className="fluid-lg text-zinc-600 leading-relaxed">
            Karolina ofrece consultoría económica enfocada en análisis riguroso,
            claridad ejecutiva y resultados accionables.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-zinc-900 px-8 py-4 text-white font-medium transition hover:bg-zinc-800"
            >
              Solicitar asesoría
            </a>

            <a
              href="/portfolio"
              className="rounded-2xl border border-zinc-300 px-8 py-4 font-medium text-zinc-900 transition hover:bg-white"
            >
              Ver portafolio
            </a>
          </div>
        </div>

      </section>

      {/* SERVICIOS PREMIUM */}
      <section className="mt-32">
        <h2 className="fluid-h2 font-semibold text-zinc-900">
          Servicios
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {[
            "Análisis financiero y modelos de proyección",
            "Investigación de mercado y evaluación competitiva",
            "Optimización de costos y estructura",
            "Informes ejecutivos y presentaciones estratégicas",
          ].map((service) => (
            <div key={service} className="border-t border-zinc-200 pt-6">
              <p className="fluid-lg text-zinc-800 font-medium">
                {service}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE PREMIUM */}
      <section className="mt-32 max-w-3xl">
        <h2 className="fluid-h2 font-semibold text-zinc-900">
          Enfoque
        </h2>

        <p className="mt-6 fluid-base text-zinc-600 leading-relaxed">
          El trabajo se centra en traducir datos en decisiones.
          Cada proyecto combina análisis técnico, interpretación estratégica
          y claridad comunicativa.
        </p>
      </section>

      {/* CTA FINAL PREMIUM */}
      <section className="mt-32 rounded-3xl bg-zinc-900 p-12 text-white">
        <h2 className="fluid-h2 font-semibold">
          ¿Hablamos?
        </h2>

        <p className="mt-6 fluid-base text-white/80">
          Agenda una conversación inicial para evaluar tu necesidad.
        </p>

        <div className="mt-8">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-8 py-4 text-zinc-900 font-semibold transition hover:opacity-90"
          >
            Contactar ahora
          </a>
        </div>
      </section>

    </main>
  );
}
