# DİL MASTER — Changelog (`CHANGELOG.md`)

## [2026.10.20] — Full Project Reliability Audit, 7-Accent Real MP3 TTS, Scrollable Toolbar & Strict Build Gates

### Added
- **Server-Side 7-Accent MP3 Stream Fallback (`src/lib/tts/tts-provider.ts`):** Added `synthesizeViaCloudHttpMp3` inside `EdgeTtsProvider` so `/api/tts` returns genuine binary `audio/mpeg` streams across all 7 accents (`en-GB`, `en-US`, `en-CA`, `en-AU`, `en-NZ`, `en-GB-scotland`, `en-IN`) and 14 voice profiles even when Microsoft's Edge WebSocket handshake returns HTTP 403.
- **TTS Client Validation & Honest Voice Matcher (`src/lib/tts/audio-response.ts`, `src/lib/tts/browser-speech.ts`):**
  - Added `requestPronunciationAudio` and `AudioRequestError` to enforce `res.ok`, `Content-Type: audio/*`, and `blob.size > 0`.
  - Added `ACCENTS` and `chooseVoice` with strict Scottish voice name verification so generic British browser voices are never mislabeled as Scottish.
- **Horizontal Scrollable Top Navigation Toolbar (`src/components/navigation/ScrollableToolbar.tsx`, `scrollable-toolbar.css`):**
  - Integrated into `src/components/Header.tsx` with touch swipe, mouse wheel horizontal scrolling, resize observer, and left/right scroll buttons.
- **Automated Tests & Documentation Suite:**
  - Added `tests/tts/audio-response.test.ts` and `tests/e2e/production-smoke.spec.ts`.
  - Added complete engineering documentation under `docs/` (`INITIAL_AUDIT.md`, `ROOT_CAUSE_REPORT.md`, `TEST_RESULTS.md`, `DEPLOYMENT_RUNBOOK.md`, `MOBILE_RELEASE.md`, `TTS_ARCHITECTURE.md`, `INTEGRATION_SETUP.md`, `CHANGELOG.md`).

### Changed
- **Strict `/api/tts` HTTP Error Contract (`src/app/api/tts/route.ts`):** Replaced legacy `HTTP 200` JSON fallback responses with `HTTP 503` (`code: "PROVIDER_ERROR"`) when synthesis fails, and added `X-TTS-Provider` header on `HTTP 200` `audio/mpeg` responses.
- **Removed Build Error Suppression (`next.config.mjs`):** Set `typescript.ignoreBuildErrors: false` and `eslint.ignoreDuringBuilds: false`.
- **Service Worker HTML Navigation Fallback (`public/sw.js`):** Bumped cache version to `dil-master-offline-v2026.10.20` and ensured offline `navigate` requests always receive `text/html; charset=utf-8` instead of `text/plain`.
- **Single-Project (`dil-master`) Alignment (`package.json`, `vercel.json`, `.vercel/project.json`):** Standardized project identity to `dil-master` (`https://dil-master.vercel.app`).
