import { SealCheck, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/services";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <Section id="services" label="06 — Services" title="Academic services">
      <ul className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.venue}>
            <Reveal>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <SealCheck size={22} weight="duotone" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{service.venue}</p>
                    <p className="text-sm text-muted">{service.role}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
