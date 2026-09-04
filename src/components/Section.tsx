import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id?: string;
  label: string;
  title: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, label, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 sm:py-20", className)}>
      <Reveal>
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{label}</span>
        </div>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
