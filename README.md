# Sachi Prasad — Portfolio

A modern, terminal-inspired developer portfolio built for a Computer Science (Cyber Security) undergraduate. Design direction leans into the subject's world — command-line aesthetics, monospace data labels, and a single neon-green accent on a near-black background — instead of a generic template look.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with a custom design-token theme (`tailwind.config.ts`)
- **Framer Motion** for scroll-reveal and the typed-terminal hero animation
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        — fonts, metadata, SEO
  page.tsx           — assembles all sections
  globals.css         — theme tokens, grid background, focus styles
components/
  Nav.tsx             — sticky terminal-style nav
  Hero.tsx            — typed "whoami" terminal hero (signature element)
  About.tsx
  Skills.tsx
  Projects.tsx
  Experience.tsx
  Education.tsx
  Achievements.tsx
  Contact.tsx
  Footer.tsx
  SectionHeading.tsx  — shared numbered section heading
lib/
  data.ts             — all resume content, edit here to update copy
  utils.ts            — cn() class merge helper
```

## Editing your content

All resume-driven content (profile, skills, experience, projects, education, achievements) lives in `lib/data.ts`. Update that file and every section re-renders automatically — no need to touch component markup.

To swap the resume PDF link in the nav, drop your file at `public/Sachi_Prasad_Resume.pdf`.

## Design notes

- **Palette:** near-black `#0A0E14` background, `#11161F` surface, neon green `#00FF94` accent (terminal/cyber cue), amber `#FFB454` secondary accent for labels.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels, eyebrows, data).
- **Signature element:** the hero terminal window types out a `whoami` command and prints profile output line by line — a nod to the cyber security focus, used once and not repeated elsewhere so it stays memorable.
- Respects `prefers-reduced-motion`, has visible focus rings, and is responsive down to mobile.

## Deployment

Deploy directly to Vercel:

```bash
npm run build
vercel deploy
```

Or connect the GitHub repo in the Vercel dashboard for automatic deploys on push.
