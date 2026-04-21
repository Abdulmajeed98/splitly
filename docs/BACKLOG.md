# Splitly Backlog

Status legend: `[ ]` todo · `[~]` in progress · `[x]` done

Every story must fit a ~1–2 hour focused window. Split if bigger.

---

## Milestone 0 — Foundation Phase

- [x] **F1** — NestJS Re-foundation (request lifecycle, modules, DI internals, dynamic modules)
  - [x] Topic 1/4 — Request lifecycle (notes: `docs/learnings/F1-request-lifecycle.md`)
  - [x] Topic 2/4 — Modules (notes: `docs/learnings/F1-modules.md`)
  - [x] Topic 3/4 — DI internals (notes: `docs/learnings/F1-di-internals.md`)
  - [x] Topic 4/4 — Dynamic modules
- [~] **F2** — Data layer (Drizzle, migrations, indexes, transactions, queries)
  - [x] Topic 1/4 — Drizzle schema + connection (define tables, types, db instance)
  - [x] Topic 2/4 — Migrations with drizzle-kit (notes: `docs/learnings/F2-migrations.md`)
  - [ ] Topic 3/4 — Queries + indexes (select/insert/update/delete, `.where`, indexes)
  - [ ] Topic 4/4 — Transactions + error handling
- [ ] **F3** — Either / Effect pattern (vavr → Effect translation, `.pipe` chaining)
- [ ] **F4** — Hexagonal architecture live tour of `apps/donation/`

**Milestone 0 status:** F1 complete ✅ · F2 in progress (2/4 topics done) 🔄

---

## Milestone 1 — Splitly Skeleton

_Stories to be defined after F4 is complete and open decisions are resolved._

---

## Later Milestones

See [`CURRICULUM.md`](CURRICULUM.md) for the high-level shape of M2–M8.
