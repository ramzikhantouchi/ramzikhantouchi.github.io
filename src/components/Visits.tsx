import { Airplane } from "@phosphor-icons/react/dist/ssr";
import { visits } from "@/data/visits";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Visits() {
  return (
    <Section id="visits" label="04 — Visits" title="Short-term visits">
      <ul className="space-y-4">
        {visits.map((visit) => (
          <li key={`${visit.institution}-${visit.period}`}>
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Airplane size={22} weight="duotone" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{visit.role}</p>
                    <p className="text-sm text-muted">{visit.institution}</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  {visit.period}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
