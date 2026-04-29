# Decisions Log

Lightweight ADR. One entry per decision.

---

## D-001 — Project is Splitly (group expense splitter)

- **Date:** 2026-04-11
- **Status:** Accepted
- **Context:** Abdul needs a learning project that forces all the backend patterns used in `fib-backend-typescript` (multi-entity relationships, user-scoped auth, transactions, rich domain logic, aggregations). A solo income tracker would plateau at CRUD.
- **Decision:** Build Splitly — a group expense splitter with Splitwise-style features: groups, members, expenses with splits, balances, settlements.
- **Consequences:** Every milestone maps to a real pattern in the `donation` app, giving a tight teaching analogy.

## D-002 — Reference architecture = fib-backend-typescript

- **Date:** 2026-04-11
- **Status:** Accepted
- **Context:** Splitly exists to teach Abdul the patterns his company uses in production.
- **Decision:** Mirror `fib-backend-typescript` architecture — NestJS + Drizzle + PostgreSQL + Effect/Either + pragmatic hexagonal. When stuck, look at `apps/donation/`.
- **Consequences:** Some patterns will feel non-standard compared to online NestJS tutorials — that's intentional. The goal is Abdul's company, not "generic NestJS."

## D-003 — Milestone-based Scrum (not time-boxed)

- **Date:** 2026-04-11
- **Status:** Accepted
- **Context:** Abdul's schedule varies 5–20 hours per week. Fixed sprints don't fit.
- **Decision:** Use milestones grouped by learning goal. Close a milestone when its stories are done, regardless of wall time. See `SCRUM.md`.
- **Consequences:** Story sizing is critical — each must fit a 1–2h window so any session can make progress.

## D-004 — Abdul implements, Claude mentors

- **Date:** 2026-04-11
- **Status:** Accepted
- **Context:** Abdul wants to learn by building, not by watching Claude write code.
- **Decision:** Claude plays mentor, teacher, reviewer, pair programmer, Scrum Master, and PO co-owner — but never writes feature code or scaffolds the project. Small illustrative snippets when teaching a concept are fine.
- **Consequences:** Tasks must be assigned as short PO-style tickets. Claude does not run `nest new` or create source files — only process and documentation files.

## D-005 — Hybrid learning approach (foundation first, then hands-on)

- **Date:** 2026-04-11
- **Status:** Accepted
- **Context:** Pure theory bores; pure hands-on leaves invisible gaps.
- **Decision:** Complete Milestone 0 (F1–F4) before any Splitly code is written. Then build Splitly, filling gaps as they appear.
- **Consequences:** No premature coding. The foundation sessions are blocking for M1.

## D-006 — Lint/format toolchain = OXC (oxlint + oxfmt)

- **Date:** 2026-04-29
- **Status:** Accepted (type-aware fallback active)
- **Context:** ESLint 9 + Prettier + `eslint-plugin-prettier` was the scaffold default. The OXC toolchain (`oxlint` + `oxfmt`) is a Rust-based drop-in running ~50–100× faster, with first-class TS support and official migration tooling. This was a pure tooling swap — no source files changed.
- **Decision:** Replace ESLint + Prettier with `oxlint` + `oxfmt`. Drop `eslint-plugin-prettier` entirely; formatter and linter are now independent. Migration was done with `@oxlint/migrate` and `oxfmt --migrate=prettier`.
- **Consequences:**
  - `pnpm lint` runs `oxlint --fix`; `pnpm format` runs `oxfmt`. Both auto-discover files.
  - `printWidth` explicitly set to 80 in `.oxfmtrc.json` to match Prettier's default and avoid a global reflow.
  - **Type-aware fallback:** `oxlint-tsgolint` (the experimental TS-native rewrite that enables `no-floating-promises` and `no-unsafe-argument`) is incompatible with NestJS's decorator-based DI types — it classifies injected providers as `error` typed. `options.typeAware` is disabled for now. Revisit when `oxlint-tsgolint` stabilises (track: [oxc-project/tsgolint](https://github.com/oxc-project/tsgolint)).
  - `baseUrl: "./"` is retained in `tsconfig.json`; the codebase uses `src/...` absolute import paths that depend on it.

---

## Open Decisions

Resolve at M1 kickoff, after F4 is complete.

- **D-OPEN-1** — Starting stack depth (match company or simplified start)
- **D-OPEN-2** — Auth strategy (self-managed JWT vs Keycloak vs hosted)
- **D-OPEN-3** — Repo layout (flat NestJS app vs Nx monorepo)
- **D-OPEN-4** — Frontend plan (React — same repo vs separate, when to start)
