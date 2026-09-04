import Link from "next/link";
import { House } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center sm:px-8">
      <div
        className="absolute -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <span className="rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
        404 — Page Not Found
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Lost in hyperspace?
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
        The page you are looking for doesn&apos;t exist or has been moved. Return back to the portfolio home page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <House size={18} weight="bold" aria-hidden="true" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
