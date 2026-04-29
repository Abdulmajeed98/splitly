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
  - [x] Topic 3/4 — Queries + indexes (notes: `docs/learnings/F2-queries-indexes.md`) — closed at fundamentals: `createUser` implemented, index decision defended; remaining CRUD methods deferred to first real use case in M1+
  - [~] Topic 4/4 — Transactions + error handling (syllabus declared, sub-concept 1/11 in progress)
- [ ] **F3** — Either / Effect pattern (vavr → Effect translation, `.pipe` chaining)
- [ ] **F4** — Hexagonal architecture live tour of `apps/donation/`

**Milestone 0 status:** F1 complete ✅ · F2 in progress (3/4 topics done) 🔄

---

## Milestone 1 — Splitly Skeleton

_Stories to be defined after F4 is complete and open decisions are resolved._

---

## Later Milestones

See [`CURRICULUM.md`](CURRICULUM.md) for the high-level shape of M2–M8.
