# Antigravity Workflow — Background-safe Dil Master repair

Use this workflow from the repository workspace. Keep all edits on the current repair branch unless the user explicitly asks for another branch.

## Phase A — Preserve and inspect
- Run git status and identify the current branch and uncommitted work.
- Read AGENTS.md, .agent/rules/zero-bugs.md, package.json, lockfile, next.config.mjs, all existing CI workflows, PWA files, TTS client/provider/API files, and Android wrapper configuration.
- Do not overwrite user changes. Do not expose environment variables or secrets.

## Phase B — Reproduce
- Install dependencies with the package manager indicated by the lockfile.
- Run the existing typecheck, lint, tests, and production build scripts; record exact commands and exit codes.
- For Vercel failures, inspect deployment/build events. If logs say Resource provisioning failed and no compiler output exists, classify this as platform provisioning until evidence proves otherwise.
- Exercise /api/tts and verify status, content type, body length, provider errors, and timeout behavior without logging credentials.

## Phase C — Background execution
- Determine exactly which work stops when the screen locks: local Antigravity agent, local dev server, web client JavaScript/audio, or remote build/deploy.
- Move unattended code checks and builds to GitHub Actions; include timeout-minutes, concurrency control, least-privilege permissions, logs/artifacts, and clear success/failure status.
- Do not create an unbounded process or attempt to keep the screen awake as a workaround.
- For durable app jobs, inspect existing infrastructure first; propose a persistent queue/status model before adding a service or database.
- For audio after screen-off, distinguish browser/PWA limitations from Android native media playback. Implement only the platform-supported solution and document limitations.
- Save user progress and restore it after focus/visibility/resume. Use bounded network retries with exponential backoff and idempotency where appropriate.

## Phase D — Fix and verify
- Make the smallest coherent patch and add/update tests.
- Do not suppress type errors or lint failures to make CI green.
- Run typecheck, lint, unit tests, production build, relevant API tests, and existing zero-error checks.
- Wait for all GitHub checks to finish; capture the actual final conclusions.

## Phase E — Preview, device verification, release gate
- Create a Vercel preview from the repair branch; do not target production.
- Verify TTS accents, actual audio response, browser fallback, toolbar scrolling, manifest, service worker, and mobile layout on the preview.
- If Android support exists, inspect its current Gradle/Capacitor/native configuration before changing it. Build/install a debug APK and test it on a real device before signing a release.
- Do not merge, publish APK/AAB, or promote production unless checks pass and release approval is explicit.

## Completion report
Report the branch/commit, files changed, exact tests and results, CI links, Vercel preview URL/state, device checks, and every blocker. Never say "done" for a test or deployment that has not succeeded.
