# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun run dev` — Vite dev server (TanStack Start SSR with HMR).
- `bun run build` / `bun run build:dev` — production / dev-mode Cloudflare Workers build.
- `bun run preview` — preview the built worker.
- `bun run lint` — ESLint over the repo.
- `bun run format` — Prettier write.

There is no test runner configured. The lockfile is `bun.lock`; prefer `bun` over `npm`/`pnpm`.

## Architecture

This is a **single-page scrollytelling landing page** (Russian-language marketing site for the "ИИнутый" AI course) built on **TanStack Start** (file-based routing + SSR), deployed as a **Cloudflare Worker**.

### Vite config is intentionally minimal

[vite.config.ts](vite.config.ts) re-exports `defineConfig` from `@lovable.dev/vite-tanstack-config`. That preset already wires `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, the Cloudflare plugin (build-only), the `componentTagger` (dev-only), `VITE_*` env injection, the `@/*` alias, and React/TanStack dedupe. **Do not add these plugins manually** — duplicating them breaks the app. Pass extra config through the preset's `defineConfig({ vite: { ... } })`.

### SSR entry chain (don't break the error path)

1. `wrangler.jsonc` points `main` at `src/server.ts`.
2. The Vite preset is told `tanstackStart.server.entry = "server"` so TanStack Start's bundled server entry is redirected to [src/server.ts](src/server.ts) — the wrangler `main` alone is not enough.
3. [src/server.ts](src/server.ts) wraps `@tanstack/react-start/server-entry`. It exists to handle two failure modes:
   - Plain throws from the server handler → caught and rendered via `renderErrorPage()`.
   - **h3 swallows in-handler throws** into a 200-ish `Response` with body `{"unhandled":true,"message":"HTTPError"}`. `normalizeCatastrophicSsrResponse` detects that exact shape on `>=500` JSON responses and replaces it with the branded error page.
   - The original `Error` is recovered out-of-band via [src/lib/error-capture.ts](src/lib/error-capture.ts), which listens to global `error` / `unhandledrejection` events and stores the last error with a 5s TTL.
4. [src/start.ts](src/start.ts) registers a `requestMiddleware` that catches non-`statusCode` errors and also serves the branded error page. **Do not** swallow errors with `statusCode` — TanStack Start uses those for redirects/4xx.

If you change SSR error behavior, update both `server.ts` and `start.ts` together.

### Routing

- File-based routes in [src/routes/](src/routes/). [routeTree.gen.ts](src/routeTree.gen.ts) is **auto-generated** by `@tanstack/router-plugin` — never hand-edit.
- [src/router.tsx](src/router.tsx) wires `QueryClient` into route context; `__root.tsx` consumes it via `createRootRouteWithContext<{ queryClient }>`.
- `__root.tsx` defines `NotFoundComponent` and `ErrorComponent` shells; the worker-level `renderErrorPage()` is a separate hard-fallback for when the router itself can't boot.

### Page composition

The whole site lives in [src/routes/index.tsx](src/routes/index.tsx). It's a flat top-down sequence of section components, with the three course chapters rendered by mapping `chapters` from [src/data/chapters.ts](src/data/chapters.ts) through [StickyChapter](src/components/landing/StickyChapter.tsx) + [LogoMarquee](src/components/landing/LogoMarquee.tsx).

- `src/components/sections/` — page sections (Hero, ForWhom, Practice, etc.).
- `src/components/landing/` — reusable scrollytelling primitives (`StickyChapter`, `ManifestoScroll`, `StorySlot`, `LogoMarquee`, `LogoChip`, `BokehOrb`, `ScrollProgress`, …).
- `src/components/ui/` — shadcn/ui (style: `new-york`, base: `slate`, icon lib: `lucide`). See [components.json](components.json) for the registered aliases.

### Scrollytelling pattern

`StickyChapter` is the canonical chapter scene and the model to copy when adding sections:
- A tall outer `<section>` (`md:[height:260vh]`) with an inner sticky `md:sticky md:top-0 md:h-screen` flex container.
- `useScroll({ target: ref, offset: ["start start", "end end"] })` drives `useTransform` for parallax (`y1/y2/y3` on stories), accent-glow opacity, and per-outcome reveal stops.
- Story slots use absolute positioning + per-card `motion` y-values; outcomes mirror left/right based on `index % 2`.
- Important: `useTransform` requires strictly non-decreasing input stops (see the `Math.max` chain in `OutcomeRow`) — Framer Motion will throw at runtime otherwise.
- Respect `prefers-reduced-motion` per the project plan ([.lovable/plan.md](.lovable/plan.md)) when adding new animations.

### Content / data

All marketing copy and lesson definitions are centralized:
- [src/data/chapters.ts](src/data/chapters.ts) — three chapters with `outcomes`, `tools` (logo IDs), `stories` (9:16 slots), `lessons`, `accent` color.
- [src/data/lessons.ts](src/data/lessons.ts) — `block1/2/3`, `practice`, `outcomes` arrays.
- [src/data/ai-logos.ts](src/data/ai-logos.ts) — logo registry referenced by string `id` from `LogoChip`/`LogoMarquee`.
- [src/config.ts](src/config.ts) — all dynamic numbers/links (seats, dates, phone, Telegram, WhatsApp, analytics ID). Edit here, not in components.

### Styling

- **Tailwind v4** via `@tailwindcss/vite` (loaded by the Lovable preset, not configured manually). Source globbing is `@source "../src"` inside [src/styles.css](src/styles.css).
- Design tokens live in [src/styles/tokens.css](src/styles/tokens.css) and are exposed to Tailwind via `@theme inline { --color-*: var(--*) }`.
- The site is dark-only; `:root` background is `--surface-dark-4`. Custom utilities: `.glass-card`, `.cta-gradient`, `.cta-glass`, `.text-on-dark[-muted]`.
- Fonts (Onest, JetBrains Mono) are loaded via Google Fonts `<link>` in `__root.tsx` head — not via `@font-face`.

### TypeScript / linting notes

- `@/*` resolves to `./src/*` ([tsconfig.json](tsconfig.json)).
- ESLint forbids importing `server-only` (Next.js convention); use `*.server.ts` filenames or `@tanstack/react-start/server-only` instead. See [eslint.config.js](eslint.config.js).
- `@typescript-eslint/no-unused-vars` is disabled, but `react-hooks/*` rules and `react-refresh/only-export-components` are enforced.
