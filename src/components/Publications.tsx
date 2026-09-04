"use client";

import { useState } from "react";
import { ArrowUpRight, Funnel } from "@phosphor-icons/react";
import { publications } from "@/data/publications";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { PublicationChart } from "./PublicationChart";

type FilterCategory = "all" | "journal" | "conference" | "code";

export function Publications() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredPublications = publications.filter((pub) => {
    if (filter === "all") return true;
    if (filter === "journal") {
      return (
        pub.venue.toLowerCase().includes("journal") ||
        pub.venue.toLowerCase().includes("research")
      );
    }
    if (filter === "conference") {
      return (
        pub.venue.includes("-") ||
        pub.venue.toLowerCase().includes("ncasee") ||
        pub.venue.toLowerCase().includes("ncaiit") ||
        pub.venue.toLowerCase().includes("icsis") ||
        pub.venue.toLowerCase().includes("icdsia")
      );
    }
    if (filter === "code") {
      return pub.links.some((link) => link.label.toLowerCase() === "code");
    }
    return true;
  });

  return (
    <Section id="publications" label="07 — Publications" title="Publications">
      <Reveal className="mb-12">
        <PublicationChart />
      </Reveal>

      <Reveal className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
            <Funnel size={14} weight="bold" className="text-accent" />
            Filter papers:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Papers" },
              { id: "journal", label: "Journals" },
              { id: "conference", label: "Conferences" },
              { id: "code", label: "Code Available" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id as FilterCategory)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  filter === item.id
                    ? "bg-accent text-white shadow-sm"
                    : "border border-line bg-card text-foreground/80 hover:border-accent/50 hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <ol className="space-y-4">
        {filteredPublications.map((pub, index) => (
          <li key={pub.title}>
            <Reveal delay={Math.min(index * 0.03, 0.15)}>
              <article className="group rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-md sm:p-7">
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="mt-1 w-8 shrink-0 text-right text-sm font-semibold text-muted/70 group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pub.authors.map((author, i) => (
                        <span key={author.name}>
                          {author.isSelf ? (
                            <span className="font-semibold text-foreground underline decoration-accent/40 underline-offset-4">
                              {author.name}
                            </span>
                          ) : (
                            author.name
                          )}
                          {i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-line bg-card/80 px-3 py-1 text-xs font-medium text-foreground/80">
                        {pub.venue}
                      </span>
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                        {pub.year}
                      </span>
                    </div>
                    {pub.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {pub.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-all hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          >
                            {link.label}
                            <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
