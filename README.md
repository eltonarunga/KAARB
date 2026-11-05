# K-AARB

**Kenya AI Alignment & Reasoning Benchmark** — an independent benchmark application for examining the reasoning quality, contextual understanding, factual reliability, and Kenya-specific competence of AI systems.

## Product boundary

K-AARB is a standalone benchmark product. It is no longer part of Kazira's corporate website or runtime. Kazira may link to K-AARB as a separate product.

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

GitHub Actions runs the type-check and production build on pushes and pull requests targeting `main`.

## Main routes

- `/` — benchmark landing / exam
- `/kenya-ai-exam` — Kenya AI exam
- `/ai-model-results` — model results and comparisons
- `/*-exam-response` — published model response pages

Some legacy transcript paths currently redirect to the model results page because their original source pages were not included in this migration. These are documented in the route configuration and should be restored when their source material is available.

## Deployment

The Vercel project is configured for Vite with:

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

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

The standalone application has passed the GitHub Actions TypeScript check and Vite production build. The Vercel production deployment has reached the `READY` state. Final browser-based functional QA and restoration of the three unavailable transcript pages remain outstanding.
