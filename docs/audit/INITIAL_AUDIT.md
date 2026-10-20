# DİL MASTER — Initial Project Audit (`INITIAL_AUDIT.md`)

**Date:** 2026-10-20  
**Repository:** `https://github.com/sbgok57/english-yds-studying`  
**Canonical Production URL:** `https://dil-master.vercel.app`  
**Audit Branch:** `fix/full-project-reliability-audit`

---

## 1. Repository & Stack Inventory

| Layer | Technology / Version | Location / Notes |
|---|---|---|
| Framework | Next.js `14.2.18` (App Router) | `src/app/` |
| UI Runtime | React `18.3.1`, TypeScript `5.6.3` | Strict mode enabled (`tsconfig.json`) |
| Styling | Tailwind CSS `3.4.14` + Custom CSS | `src/app/globals.css`, `src/components/navigation/scrollable-toolbar.css` |
| Database / ORM | Prisma `5.22.0` (SQLite local/serverless fallback) + Supabase SSR `0.12.7` | `prisma/schema.prisma`, `src/lib/supabase/` |
| 3D & Visuals | Three.js `0.169.0`, `@react-three/fiber`, `@react-three/drei` | `src/components/vocabulary/Vocabulary3DScene.tsx` |
| TTS / Audio | `msedge-tts` + Cloud HTTPS MP3 Stream Fallback + Web Speech API | `src/app/api/tts/route.ts`, `src/lib/tts/` |
| PWA / Offline | Web App Manifest + Service Worker | `public/manifest.json`, `public/sw.js` |
| Mobile Wrapper | Android WebView / Gradle project | `android/app/build.gradle` (`com.dilmaster.app`) |
| CI/CD | GitHub Actions (`zero-error.yml`, `ci.yml`, `android-release.yml`) | `.github/workflows/` |

---

## 2. Baseline Diagnostic Findings

### 2.1 Vercel Deployment Inspection (`Resource provisioning failed`)
- **Command Run:** `npx vercel ls --yes` & `npx vercel inspect dpl_32cL5U18m94zY5vHba9yWpW8S2f7`
- **Observed Status:** `● Error (BUILD_FAILED)` after `1s–3s`
- **Observed Error Code / Message:**
  - `errorCode: "BUILD_FAILED"`
  - `errorMessage: "One or more integration resources failed to provision for this deployment"`
- **Finding:** The build never reached `npm ci` or `next build` on Vercel because the linked Supabase Marketplace integration (`mcjdoisypyparezuqlgr`) is currently in a `suspended` (paused) state. Vercel halts pre-build provisioning when a linked store/resource integration is paused.

### 2.2 Build Flag Masking in `next.config.mjs`
- `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` were previously set to `true`.
- **Action Taken:** Both flags have been set to `false` in `next.config.mjs` after verifying zero TypeScript and ESLint errors across the entire codebase.

### 2.3 TTS / Audio Pipeline Audit
- **Server-Side WebSocket Handshake:** `msedge-tts` direct WebSocket connections to `speech.platform.bing.com` intermittently return `HTTP 403` from Microsoft's edge endpoint when called without browser token headers.
- **API Status Contract Issue:** Previously, `/api/tts` returned `HTTP 200` with JSON `{ ok: false, fallbackToClient: true }` when synthesis failed, which required clients to inspect JSON inside a `200` status instead of relying on standard HTTP error codes.
- **Action Taken:**
  1. Added `synthesizeViaCloudHttpMp3` in `src/lib/tts/tts-provider.ts` so server-side synthesis reliably produces genuine `audio/mpeg` binary MP3 data across all 7 accents (`en-GB`, `en-US`, `en-CA`, `en-AU`, `en-NZ`, `en-GB-scotland`, `en-IN`) even when Edge WebSocket returns 403.
  2. Updated `/api/tts/route.ts` to return `HTTP 503` (`code: "PROVIDER_ERROR"`) on provider failure and never return `HTTP 200` JSON on synthesis errors.
  3. Added `src/lib/tts/audio-response.ts` and `src/lib/tts/browser-speech.ts` for strict MIME/blob validation and honest Scottish/accent voice matching.

### 2.4 Top Navigation Toolbar & Mobile Viewport Audit
- At `360px` mobile widths, top navigation items risked crowding or relying on global CSS overrides.
- **Action Taken:** Implemented `ScrollableToolbar` (`src/components/navigation/ScrollableToolbar.tsx` + `scrollable-toolbar.css`) with horizontal swipe, wheel-to-horizontal translation, left/right scroll buttons, and `white-space: nowrap`, integrated into `src/components/Header.tsx`.

### 2.5 Service Worker Navigation Fallback Audit
- Previously, `public/sw.js` fell back to a `text/plain` response when offline and `/` was not in cache.
- **Action Taken:** Updated `public/sw.js` (`dil-master-offline-v2026.10.20`) so `event.request.mode === 'navigate'` always returns a styled `text/html; charset=utf-8` offline page if cached `/` is unavailable.
