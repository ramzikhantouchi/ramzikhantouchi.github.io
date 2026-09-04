import { GraduationCap } from "@phosphor-icons/react/dist/ssr";
import { education } from "@/data/education";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" label="02 — Education" title="Education">
      <ol className="relative ml-3 border-l border-line">
        {education.map((entry, index) => (
          <li key={`${entry.degree}-${entry.field}`} className="relative pb-12 pl-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <Reveal delay={index * 0.06}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} weight="duotone" className="text-accent" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {entry.degree} <span className="font-normal text-muted">·</span>{" "}
                    <span className="font-normal">{entry.field}</span>
                  </h3>
                </div>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  {entry.period}
                </span>
              </div>
              <p className="mt-2 text-muted">{entry.institution}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
