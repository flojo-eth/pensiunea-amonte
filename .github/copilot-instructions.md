# Copilot / AI Agent Instructions for this repository

Keep responses concise and actionable. This is a small Next.js app using the App Router (the `app/` directory). When making code changes, prefer minimal, targeted edits and reference the files below.

- Project entry & run commands:
  - Development: `npm run dev` -> see [package.json](package.json)
  - Build: `npm run build` and `npm run start` for the production server
  - Lint: `npm run lint` runs `eslint` (config in [eslint.config.mjs](eslint.config.mjs))

- Big picture:
  - Framework: Next.js App Router (pages live under [app/](app/)). The site is TypeScript-first (`tsconfig.json`) and uses React 19 + Next 16.
  - Styling: Tailwind CSS via PostCSS plugin ([postcss.config.mjs](postcss.config.mjs)) and global styles in [app/globals.css](app/globals.css).
  - Fonts: `next/font` (see [app/layout.tsx](app/layout.tsx)) - prefer using the existing font variables when updating styles.

- Project-specific conventions to follow:
  - Use the App Router structure: root layout at [app/layout.tsx](app/layout.tsx) and page components in [app/page.tsx](app/page.tsx).
  - Keep JSX/TSX markup and Tailwind utility classes tidy; prefer small, composable components if a UI block is reused.
  - Typescript settings: strict mode is enabled and `noEmit` is used - keep type-safety and avoid emitting JS changes manually ([tsconfig.json](tsconfig.json)).
  - Import paths can use `@/*` alias per `tsconfig.json` when adding shared utilities.

- Files to inspect for context before editing:
  - Root app and UI: [app/layout.tsx](app/layout.tsx), [app/page.tsx](app/page.tsx), [app/globals.css](app/globals.css)
  - Build & deps: [package.json](package.json), [next.config.ts](next.config.ts)
  - Tooling: [tsconfig.json](tsconfig.json), [eslint.config.mjs](eslint.config.mjs), [postcss.config.mjs](postcss.config.mjs)

- Patterns and examples (copyable):
  - Tailwind utility usage in components: see hero and cards in [app/page.tsx](app/page.tsx).
  - Global font variables are exported from `next/font` calls in [app/layout.tsx](app/layout.tsx) as `--font-geist-sans` and `--font-geist-mono` - reuse these CSS variables in components.

- Build/test/debug notes:
  - Use `npm run dev` to run locally on port 3000. Hot reload is active for edits inside `app/`.
  - There are no unit tests present. If you add tests, keep them in a new `tests/` folder and update CI accordingly.
  - Linting: run `npm run lint`. ESLint config composes `eslint-config-next` with small overrides in [eslint.config.mjs](eslint.config.mjs).

- Integration & deployment:
  - The app is optimized for Vercel (standard Next.js deployment). There are no special environment variables in the repo.

- When committing changes:
  - Use small, focused commits. For UI tweaks, include before/after screenshots in the PR description if visual regression is possible.
  - Mention the files you changed in the PR summary and any manual steps to re-run locally (e.g. `npm install` if new deps).

- When generating code or refactors:
  - Preserve existing styling and font variables from [app/layout.tsx](app/layout.tsx).
  - Avoid changing Next.js routing conventions unless you update `app/` consistently.
  - If adding dependencies, update `package.json` and prefer lightweight devDeps; mention why the dependency is required.

If any of the referenced files are unclear or you want additional examples (component patterns, CSS variables, or build customizations), ask and I will expand this file.
