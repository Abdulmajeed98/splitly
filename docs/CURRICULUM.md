# Splitly Curriculum

**Goal:** Make Abdul a production-ready backend engineer who can work confidently on `D:\WorkPlace\fib-backend-typescript`.

## Definition of "Ready BE Developer"

1. Read any file in `fib-backend-typescript` and explain why each line exists
2. Pick up a ticket in that codebase and implement following team patterns without hand-holding
3. Design a new feature end-to-end: entity → schema → store → command → controller → tests
4. Write unit tests (mocked stores) and integration tests (Testcontainers) to the 80% / 90% coverage bar
5. Debug failing tests, misbehaving queries, and flaky auth checks
6. Participate in code review with meaningful architectural feedback
7. Handle operational concerns: graceful shutdown, env validation, health checks, structured logging

---

## Milestone 0 — Foundation Phase

Must complete before writing any Splitly code. Four focused sessions, dependency-ordered.

### F1 — NestJS Re-foundation (~2h)

- Request lifecycle: `Request → Middleware → Guards → Interceptors → Pipes → Controller → Service → back out`
- Modules deep dive: `imports` / `exports` / `providers`, `@Global()`, circular dependencies
- DI container internals: `useClass`, `useValue`, `useFactory`, why abstract classes are used as DI tokens
- Dynamic modules: `forRoot()` / `forRootAsync()`
- **Done when:** Abdul can draw the request lifecycle from memory and explain why abstract classes are DI tokens (and not interfaces)

### F2 — Data Layer (~2h)

- Drizzle schemas + `$inferInsert` / `$inferSelect`
- Migrations: generate, run, rollback
- Indexes: B-tree vs GIN, when and why to add them
- Transactions: `db.transaction`, atomicity, when it actually matters
- Query patterns: select, joins, `orderBy`, pagination
- **Done when:** Abdul can design a schema, write a migration, and reason about where transaction boundaries belong

### F3 — Either / Effect Pattern (~1.5h)

- Return-value errors vs thrown errors (the type system argument)
- `Either.right` / `Either.left` / `Either.isLeft` / `Either.isRight`
- `.pipe()`, `Either.map`, `Either.flatMap`, `Either.filterOrLeft`
- Composing `Promise<Either<T, E>>`
- Anchored to vavr — Abdul has Java context already
- **Done when:** Abdul can write a function returning `Either` and chain operations with `.pipe()` without reaching for `try/catch`

### F4 — Hexagonal Architecture Live Tour (~2h)

- Ports (abstract classes) and Adapters (implementations)
- Domain vs Infrastructure boundary — pragmatic, not purist
- Commands (write) vs Queries (read), CQRS-lite
- **Live walkthrough of `apps/donation/` end-to-end** — read real files, explain every design choice
- **Done when:** Abdul can take any feature in the `donation` app and explain where each file belongs and why

---

## Milestone 1+ — Splitly Build

To be scoped after F4. High-level shape (subject to change):

| # | Milestone | Theme |
|---|---|---|
| M1 | Project skeleton + first endpoint | Production-shaped hello world |
| M2 | Auth | JWT issuance/validation, `@CurrentUser`, role guards |
| M3 | Groups & Membership | First multi-entity feature + authorization |
| M4 | Expenses & Splits | Atomic multi-row writes, split strategies, domain logic |
| M5 | Balances & Settlements | Aggregation queries, transaction-heavy |
| M6 | Pagination, search, performance | Real index tuning with real data |
| M7 | Operational polish | Health, metrics, logging, graceful shutdown |
| M8+ | Optional depth | Debt simplification, file uploads, cron, webhooks, frontend |

### Open decisions (resolve at M1 kickoff, after F4)

- **Starting stack depth** — match company stack exactly or simplify? Recommendation: match architecture + core libs (NestJS + Drizzle + Effect + Jest + Testcontainers), skip ops extras (OpenTelemetry, Prometheus, Keycloak) until later milestones.
- **Auth** — self-managed JWT (most learning) vs Keycloak in Docker (exact company match) vs Clerk/Supabase (fastest). Recommendation: self-managed JWT for M2, optional Keycloak swap later.
- **Repo layout** — flat NestJS app vs Nx monorepo. Recommendation: flat repo, migrate to Nx as an exercise later.
- **Frontend** — React (Abdul's strength). Same repo or separate? When to start?
