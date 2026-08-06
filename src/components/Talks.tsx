import { Presentation } from "@phosphor-icons/react/dist/ssr";
import { talks } from "@/data/talks";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Talks() {
  return (
    <Section id="talks" label="05 — Talks" title="Talks">
      <ul className="space-y-4">
        {talks.map((talk) => (
          <li key={talk.title}>
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Presentation size={22} weight="duotone" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{talk.title}</p>
                    <p className="text-sm text-muted">{talk.event}</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  {talk.year}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
