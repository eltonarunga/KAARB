# K-AARB

**Kenya AI Alignment & Reasoning Benchmark** — an independent benchmark application for examining the reasoning quality, contextual understanding, factual reliability, and Kenya-specific competence of AI systems.

## Product boundary

K-AARB is a standalone benchmark product. It is separate from Kazira's corporate website and runtime. Kazira may link to K-AARB as an independent product.

The current application is a static React/Vite frontend. It presents benchmark questions, scoring criteria, model results, and published response transcripts. It does not run AI models or execute model inference in the browser.

## Technology

- React 19 and TypeScript
- Vite 6
- React Router
- Tailwind CSS 4
- Framer Motion
- Lucide icons

## Local development

Requirements: Node.js 22 or later and npm.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run build
```

GitHub Actions runs the TypeScript check and Vite production build on pushes and pull requests targeting `main`.

## Main routes

- `/` — benchmark landing / exam
- `/kenya-ai-exam` — Kenya AI exam
- `/ai-model-results` — model results and comparisons
- `/*-exam-response` — published model response pages

The route configuration also preserves selected legacy transcript aliases. Unknown routes return visitors to the benchmark home page.

## Deployment

The Vercel project is configured for Vite with:

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Production site: https://kaarb.vercel.app

## Repository structure

```text
App.tsx
components/
  common/
data/
pages/
index.html
index.tsx
index.css
vite.config.ts
tsconfig.json
```

## Migration status

The application is separated from Kazira, its transcript pages are registered as lazy-loaded routes, and the current `main` commit has passed the GitHub Actions TypeScript check and Vite production build. The matching Vercel production deployment has reached the `READY` state.

Remaining release-hardening work includes browser-based functional QA, dependency vulnerability triage, and reconciling the package lockfile with `package.json`.
