# Dil Master — Background Execution and Reliable Recovery

These rules apply to Google Antigravity agents working in this repository.

## Non-negotiable constraints
- Do not claim a task continues after the local computer sleeps unless the task has actually been moved to a remote runner/service and its remote run ID/status is observable.
- Do not attempt to bypass operating-system sleep, lock-screen, browser throttling, or mobile background-execution restrictions with hidden loops, fake activity, or unbounded timers.
- Keep long-running build, test, asset-generation, scheduled, and deployment tasks on GitHub Actions or another approved cloud runner. Use bounded jobs, explicit timeouts, retries with backoff, logs, and durable status.
- Never put secrets, provider credentials, or private tokens in source, logs, client bundles, prompts, or committed files. Use GitHub/Vercel encrypted environment variables.
- Do not deploy to production, publish an APK, or merge a pull request until required checks and explicit release gates pass.

## Required workflow
1. Inspect the current branch, working tree, package manager/lockfile, scripts, existing CI workflows, deployment settings, and relevant implementation before editing.
2. Reproduce and classify failures as source-code/build errors, missing environment configuration, provider/network errors, or Vercel infrastructure/resource-provisioning errors. Do not conflate these categories.
3. Make minimal, reviewable changes on a feature/fix branch. Preserve existing scripts and tests; do not create duplicate CI workflows without a clear reason.
4. Run the repository's actual scripts (install, typecheck, lint, unit tests, production build, and relevant integration tests). Never report a test as passed unless a real command or check completed successfully.
5. Push changes, inspect GitHub Actions and Vercel preview results, and report the exact commit, run URLs, preview URL, failures, and remaining manual checks.
6. Keep production unchanged until the preview is verified and a release is explicitly approved.

## Background execution architecture
- Treat the Antigravity editor/agent on a local computer as an interactive client, not a guaranteed always-on worker. Local work can pause or terminate when the OS sleeps, the process exits, or connectivity is lost.
- Move unattended repository jobs to GitHub Actions with explicit concurrency groups, timeout-minutes, least-privilege permissions, artifacts/logs, and failure notifications.
- For app work that must survive a browser closing, use a server-side durable job system with persisted job state, idempotent handlers, bounded retries, and a status endpoint. Choose a queue/storage system already present in this repository or propose one before adding a new service.
- Do not use in-memory timers or Next.js serverless processes as durable schedulers. Vercel functions may be suspended after a request and must not be treated as indefinitely running processes.
- Use Background Sync only as a best-effort PWA feature with a visible retry/sync status; support browsers that do not implement it. Never promise that browser JavaScript or audio playback continues while the device is asleep.
- If audio must continue with the screen off, validate native Android media/background playback requirements and use an appropriate foreground media service where allowed; ordinary web audio cannot guarantee this.
- Persist user progress before backgrounding and restore it on visibility/focus/resume. Use AbortController and bounded request timeouts; do not cancel healthy requests prematurely.
- For all asynchronous tasks, expose states such as queued, running, succeeded, failed, retrying, and cancelled, with timestamps and actionable errors.

## Dil Master acceptance checks
- TTS API: HTTP status, content type, non-empty audio body, provider failures, timeout, and browser fallback are tested.
- Accents: each configured accent/voice mapping is verified against actual provider/browser voice availability; never label a generic voice as a specific accent.
- PWA: manifest, service-worker registration, offline fallback, cache versioning, and update flow are checked on supported browsers.
- UI: toolbar scrolls by touch, trackpad, keyboard, and buttons without trapping page scroll.
- Android: build and install a debug package, verify audio/background behavior on a physical device, then use a separately configured signing process for release.
- Final report distinguishes verified, failed, blocked, and not-yet-tested items.
