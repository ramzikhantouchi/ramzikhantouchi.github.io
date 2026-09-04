"use client";

import { ArrowUpRight, ArrowUp } from "@phosphor-icons/react";
import { profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";
import { useMounted } from "@/lib/useMounted";

export function Footer() {
  const mounted = useMounted();
  const year = mounted ? new Date().getFullYear() : 2026;

  return (
    <footer className="border-t border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-md">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Let&apos;s work together
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-3xl"
            >
              {profile.email}
              <ArrowUpRight size={24} weight="bold" aria-hidden="true" />
            </a>
            <p className="mt-2 text-sm text-muted">{profile.emailDisplay}</p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={() => {
              const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            }}
            className="inline-flex items-center gap-1.5 font-medium text-foreground/80 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Back to top
            <ArrowUp size={14} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
