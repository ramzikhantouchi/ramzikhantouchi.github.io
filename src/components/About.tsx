import { profile } from "@/data/profile";
import { memberships } from "@/data/memberships";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" label="01 — About" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I am a Ph.D. student in Artificial Intelligence at{" "}
              <span className="font-medium text-foreground">{profile.affiliation}</span>, working
              on deep learning algorithms for real-world problems. My expertise spans machine
              learning, deep learning, self-supervised learning, reinforcement learning, computer
              vision, natural language processing, and recommender systems.
            </p>
            <p>
              My research focuses on building efficient and effective models — from on-device
              quantized recommender systems to graph neural networks and LLM-based approaches that
              improve recommendation quality in sparse scenarios. I am equally passionate about
              teaching and have taught a broad range of computer science courses at the
              university level.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Membership
            </h3>
            <ul className="mt-4 space-y-3">
              {memberships.map((membership) => (
                <li key={membership} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {membership}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
