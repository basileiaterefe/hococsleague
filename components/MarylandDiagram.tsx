import { site } from "@/content/site";

export function MarylandDiagram() {
  const diagram = site.maryland.diagram;
  const [frederick, montgomery, princeGeorges] = diagram.counties;

  return (
    <div>
      <div className="relative mx-auto hidden max-w-3xl md:block">
        <svg
          viewBox="0 0 640 460"
          className="pointer-events-none absolute inset-0 h-full w-full text-white/40"
          aria-hidden="true"
        >
          <path
            d="M320 86 V180 M120 230 H250 M390 230 H520 M320 280 V340"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <div className="relative grid min-h-[460px] grid-cols-3 grid-rows-3">
          <div className="col-start-2 row-start-1 flex items-start justify-center">
            <County name={frederick} />
          </div>
          <div className="col-start-1 row-start-2 flex items-center justify-start">
            <County name={montgomery} />
          </div>
          <div className="col-start-2 row-start-2 flex items-center justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-navy px-4 text-center font-display text-lg font-bold text-white shadow-lg">
              {diagram.center}
            </div>
          </div>
          <div className="col-start-3 row-start-2 flex items-center justify-end">
            <County name={princeGeorges} />
          </div>
          <div className="col-start-2 row-start-3 flex items-end justify-center">
            <p className="rounded-full border border-white bg-white px-4 py-3 text-center text-sm font-bold text-navy">
              {diagram.eventLabel}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        <div className="rounded-2xl border border-white/20 bg-navy px-4 py-6 text-center font-display text-lg font-bold text-white">
          {diagram.center}
        </div>
        <ul className="space-y-3">
          {diagram.counties.map((county) => (
            <li key={county}>
              <County name={county} />
            </li>
          ))}
        </ul>
        <p className="rounded-2xl border border-white bg-white px-4 py-3 text-center text-sm font-bold text-navy">
          {diagram.eventLabel}
        </p>
      </div>

      <p className="mt-8 text-sm leading-6 text-muted">{diagram.cadenceNote}</p>
      <ol className="mt-4 grid gap-4 md:grid-cols-3" aria-label="Competition cadence">
        {diagram.steps.map((step, index) => {
          const statewide = index === diagram.steps.length - 1;
          return (
            <li
              key={`${step.title}-${index}`}
              className={`rounded-2xl p-5 ${
                statewide ? "bg-white text-navy" : "border border-line bg-card text-ink"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${statewide ? "text-navy/60" : "text-muted"}`}>
                {step.label}
              </p>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${statewide ? "text-navy/70" : "text-muted"}`}>{step.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function County({ name }: { name: string }) {
  return (
    <p className="max-w-[12rem] rounded-2xl border border-line bg-card px-4 py-3 text-center text-sm font-semibold text-ink backdrop-blur-sm">
      {name}
    </p>
  );
}
