"use client";

import { motion } from "framer-motion";
import { ArrowDown, Envelope, MapPin } from "@phosphor-icons/react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { teaching } from "@/data/teaching";
import { services } from "@/data/services";
import { SocialLinks } from "./SocialLinks";

const stats = [
  { value: publications.length, label: "Publications" },
  { value: teaching.length, label: "Teaching roles" },
  { value: services.length, label: "Reviewer roles" },
];

export function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  };

  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-20 sm:px-8 lg:pt-24"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div className="order-last lg:order-none">
          <motion.p
            {...fadeUp}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Ph.D. Student · Artificial Intelligence
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
          >
            Ramzi <br /> Khantouchi
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.about}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {profile.researchAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent"
              >
                {area}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#publications"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View publications
              <ArrowDown size={16} weight="bold" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Envelope size={16} weight="regular" aria-hidden="true" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="mt-10 flex items-center gap-4"
          >
            <SocialLinks size="sm" />
            <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
            <span className="hidden items-center gap-1.5 text-sm text-muted sm:flex">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="relative mx-auto mt-0 w-full max-w-xs sm:max-w-sm lg:mt-8"
        >
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-[2rem] border border-line bg-card p-2 shadow-xl">
            <Image
              src={profile.photo}
              alt="Portrait of Ramzi Khantouchi"
              width={1080}
              height={1080}
              preload
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-line bg-card px-5 py-4 shadow-lg sm:-left-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted">Affiliation</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{profile.affiliation}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-20 grid grid-cols-3 gap-4 border-t border-line pt-8 sm:mt-24"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-semibold text-foreground sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
