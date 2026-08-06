import { ChalkboardTeacher } from "@phosphor-icons/react/dist/ssr";
import { teaching } from "@/data/teaching";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function TeachingTimeline() {
  return (
    <Section id="teaching" label="03 — Teaching" title="Teaching experience">
      <ol className="relative ml-3 border-l border-line">
        {teaching.map((role, index) => (
          <li key={`${role.role}-${role.institution}`} className="relative pb-12 pl-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            <Reveal delay={index * 0.05}>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-semibold text-accent">
                  <ChalkboardTeacher size={16} weight="duotone" aria-hidden="true" />
                  {role.role}
                </span>
                <span className="text-sm font-medium text-muted">{role.institution}</span>
              </div>
              <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {role.courses.map((course) => (
                  <li
                    key={course.name}
                    className="flex items-start justify-between gap-3 border-b border-line py-2 text-sm"
                  >
                    <span className="text-foreground/85">{course.name}</span>
                    <span className="shrink-0 text-xs text-muted">{course.period}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
