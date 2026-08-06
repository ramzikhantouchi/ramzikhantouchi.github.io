# Ramzi Khantouchi — Academic Portfolio

A modern, responsive academic portfolio for Ramzi Khantouchi, a PhD student in Artificial Intelligence at El Tarf University. Rebuilt from a static HTML site into a Next.js application with an editorial light-and-indigo design.

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript, static export via `output: "export"`)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens) with a few hand-rolled shadcn-style primitives
- **Icons:** Phosphor (`@phosphor-icons/react`) + react-icons (Simple Icons / Font Awesome brands)
- **Typography:** [Chillax](https://www.fontshare.com/fonts/chillax) (variable, self-hosted via `next/font/local`)
- **Motion:** Framer Motion (respects `prefers-reduced-motion`)
- **Theme:** next-themes (light/dark with system detection)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the development server                 |
| `npm run build`    | Lint, type-check, and build the static export into `out/` |
| `npm run lint`     | Run ESLint                                   |

## Content

All site content lives in typed data files under `src/data/`. To update anything — publications, teaching history, education, talks, services — edit the corresponding file:

- `profile.ts` — identity, bio, research areas, social links
- `publications.ts` — papers (authors, venue, year, Paper/Code links)
- `teaching.ts` — teaching roles and courses
- `education.ts` — degrees
- `visits.ts`, `talks.ts`, `services.ts`, `memberships.ts` — the remaining sections

## Deployment (GitHub Pages)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and deploys the `out/` folder to GitHub Pages on every push to `main`.

> **One-time setup:** in the repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The live site is served from the repo root, so no `basePath` is required.

## Project Structure

```
src/
├── app/            # App Router (layout, page, globals.css, fonts)
├── components/     # Nav, Hero, About, Education, TeachingTimeline,
│                   # Publications (+ SVG chart), Talks, Services, Footer, ...
├── data/           # Typed content files
└── lib/            # Utilities (cn)
```
