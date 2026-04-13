# Definition of Done

A story is **Done** when all of these are true:

1. Code is written and committed to a branch
2. Code compiles and the app boots without errors
3. Unit tests exist for the changed domain logic (aiming at the 80% line coverage bar)
4. Integration tests exist where the story touches the database or HTTP
5. All tests pass locally (`npm test` + the integration suite)
6. Abdul has shown the code to Claude and Claude has reviewed it
7. Review feedback is addressed — either applied, or consciously deferred with a note in the backlog
8. Branch is merged (or marked reviewed, for very early milestones where merging isn't yet meaningful)
9. The backlog entry is marked `[x]` and any follow-ups are captured as new stories

## Additional bar when a story introduces a new pattern

- A one-paragraph note is added to `DECISIONS.md` if a new architectural choice was adopted

## Milestone-level Done

A milestone is Done when **all its stories are Done** AND Abdul has demoed the working result to Claude, AND a brief retrospective has been captured ("what felt solid" / "what's still foggy").
