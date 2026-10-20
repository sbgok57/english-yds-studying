# DİL MASTER — Root Cause Report (`ROOT_CAUSE_REPORT.md`)

**Date:** 2026-10-20  
**Project:** `dil-master` (`https://dil-master.vercel.app`)

---

## 1. Root Cause #1: Vercel `BUILD_FAILED: Resource provisioning failed`

### Symptoms
- Deployments triggered via GitHub push or `vercel deploy --prod` fail within 1–3 seconds before any build container starts.
- Vercel CLI output: `Error: Resource provisioning failed` (`One or more integration resources failed to provision for this deployment`).

### Root Cause Analysis
1. Inspecting deployment metadata (`vercel curl /v13/deployments/<id>`) revealed:
   - `errorCode: "BUILD_FAILED"`
   - `errorMessage: "One or more integration resources failed to provision for this deployment"`
   - `readySubstate: "STOPPED"`
2. Inspecting `.env.production.check` showed Vercel Marketplace Supabase integration variables bound to Supabase project ID `mcjdoisypyparezuqlgr` (`https://mcjdoisypyparezuqlgr.supabase.co`).
3. When a Vercel Marketplace-linked Supabase database is paused due to inactivity (`status: suspended`), Vercel's deployment pipeline attempts to sync/provision the integration resource before starting the build container and aborts immediately when Supabase reports the project is suspended.

### Remediation
- **Codebase Readiness:** The Next.js build (`npm run build`) succeeds 100% locally and in GitHub Actions with `ignoreBuildErrors: false` and `ignoreDuringBuilds: false`.
- **Platform Action Required (User Dashboard):**
  1. Open [Supabase Dashboard (`mcjdoisypyparezuqlgr`)](https://supabase.com/dashboard/project/mcjdoisypyparezuqlgr) and click **Restore / Resume Project**, **OR**
  2. Open [Vercel Dashboard → `dil-master` → Settings → Integrations](https://vercel.com/dashboard) and disconnect/remove the paused Supabase Marketplace integration.
  3. Trigger a fresh deployment (`npx vercel --prod` or push to `main`).

---

## 2. Root Cause #2: `/api/tts` Silent Fallback & Edge WebSocket 403

### Symptoms
- Calling `msedge-tts` from Node.js received `HTTP 403` during the WebSocket handshake to `speech.platform.bing.com`.
- Previously, when `synthesizeWithFallback` failed, `/api/tts` returned `HTTP 200` with JSON `{ ok: false, fallbackToClient: true }`, which masked server synthesis failures as `HTTP 200`.

### Root Cause Analysis
- Microsoft restricted unauthenticated WebSocket connections on `speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1`.
- Returning `HTTP 200` with `application/json` on a binary audio endpoint violated HTTP semantics and required clients to parse JSON on 200 responses.

### Fix Applied
1. **Resilient Multi-Stage Server Provider (`src/lib/tts/tts-provider.ts`):**
   - Stage 1: Primary `msedge-tts` neural synthesis with 4.5s timeout.
   - Stage 2: Automatic fallback to `synthesizeViaCloudHttpMp3`, which chunks text safely (≤ 180 chars) and fetches real MP3 audio streams mapped to each of the 7 accent locales (`en-GB`, `en-US`, `en-CA`, `en-AU`, `en-NZ`, `en-GB-scotland`, `en-IN`).
2. **Strict HTTP Status Contract (`src/app/api/tts/route.ts`):**
   - Success returns `HTTP 200` with `Content-Type: audio/mpeg`, `X-TTS-Voice`, `X-TTS-Locale`, `X-TTS-Provider`, and binary MP3 payload.
   - Validation errors return `HTTP 400` (`INVALID_TEXT`, `TEXT_TOO_LONG`).
   - Rate limit returns `HTTP 429` (`RATE_LIMITED`).
   - Provider failure returns `HTTP 503` (`PROVIDER_ERROR`, `fallbackToClient: true`) — never `HTTP 200`.
3. **Client Validation & Honest Accent Matching (`src/lib/tts/audio-response.ts`, `src/lib/tts/browser-speech.ts`):**
   - `requestPronunciationAudio` verifies `res.ok`, `content-type` starting with `audio/`, and `blob.size > 0`.
   - `chooseVoice` in `browser-speech.ts` requires explicit Scottish hints (`scot`, `fiona`, `alba`, `edinburgh`, `glasgow`) before matching `en-GB-scotland` in browser speech mode.

---

## 3. Root Cause #3: Top Toolbar Horizontal Crowding on Narrow Viewports

### Symptoms
- Global CSS rules (`header nav { width: 100%; overflow-x: auto }`) conflicted with scoped scrollable toolbar containers on 360px viewports.

### Fix Applied
- Created `src/components/navigation/ScrollableToolbar.tsx` and `src/components/navigation/scrollable-toolbar.css` implementing `.toolbar-shell`, `.toolbar-viewport`, `.toolbar-content`, and `.toolbar-arrow`.
- Scoped `src/app/globals.css` rule to `header nav:not(.toolbar-content)` so `.toolbar-content` maintains `width: max-content` and smooth horizontal scrolling without overflowing the document viewport.
