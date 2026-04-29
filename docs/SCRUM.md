# How We Work — Adapted Scrum

Abdul uses Scrum at his company. We adapt it for a 1-on-1 async learning context with variable weekly hours (5–20h/week depending on the day).

## No time-boxed sprints

We use **milestones** grouped by learning goal. A milestone closes when its stories are done — could take 3 days or 3 weeks. No timers, no pressure.

## Small story sizing

Every story must fit a ~1–2 hour focused window. If a story grows, split it before starting.

## Standup = session kickoff, zero writing burden

When Abdul says `continue` / `ready` / `what's next`, Claude replies:

> **Last session:** X.
> **Current milestone:** Y.
> **Next story:** Z.
> Any blockers or priority changes?

Abdul confirms in one line or redirects. Claude reads memory + `BACKLOG.md` to populate X/Y/Z.

## Task review = immediate

Claude reviews every finished task right when it's done — code quality, patterns, teaching moments. Never batched.

## Milestone review

Brief demo of the working result. Claude grades against the milestone's acceptance criteria and the curriculum goals in `CURRICULUM.md`.

## Retrospective

After each milestone, two questions:

- **What felt solid?**
- **What's still foggy?**

Claude uses the answers to adjust the next milestone's content or pacing.

## Roles

- **Product Owner** — co-owned. Abdul provides vision; Claude pushes back on scope creep and drives backlog ordering by curriculum value.
- **Scrum Master / Tech Lead / Reviewer / Teacher / Pair Programmer** — Claude.
- **Implementer** — Abdul. Claude never writes feature code.

## Backlog

Lives in `BACKLOG.md`. Updated after every task change — when a task is taken, finished, blocked, added, or split. Single source of truth.
