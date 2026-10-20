# DİL MASTER — 7-Accent Hybrid TTS Architecture (`TTS_ARCHITECTURE.md`)

**Date:** 2026-10-20  
**Supported Accents (7):** `en-GB`, `en-US`, `en-CA`, `en-AU`, `en-NZ`, `en-GB-scotland`, `en-IN`  
**Supported Voice Profiles (14):** Female & Male neural voice profiles for every accent.

---

## 1. Architecture Overview

DİL MASTER implements a resilient two-tier pronunciation and reading synthesis pipeline:

1. **Tier 1 — Server-Side Binary MP3 Synthesis (`POST /api/tts`):**
   - Primary engine: `EdgeTtsProvider` (`src/lib/tts/tts-provider.ts`)
     - Stage 1A: Attempts neural WebSocket synthesis via `msedge-tts` (`OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3`).
     - Stage 1B: If Microsoft's Edge WebSocket endpoint returns `HTTP 403` or times out, automatically executes `synthesizeViaCloudHttpMp3`, splitting text into safe chunks (`<= 180` characters) and fetching genuine MP3 stream buffers mapped to the target regional accent (`tl=en-GB`, `en-US`, `en-CA`, `en-AU`, `en-NZ`, `en-IN`).
   - Returns `HTTP 200` with `Content-Type: audio/mpeg`, `X-TTS-Voice`, `X-TTS-Locale`, `X-TTS-Provider`, and non-empty binary MP3 bytes.
   - Never returns `HTTP 200` JSON on error. If all server providers fail, returns `HTTP 503` with `{ ok: false, code: "PROVIDER_ERROR", fallbackToClient: true }`.

2. **Tier 2 — Validated Client Audio & Honest Browser Speech Fallback:**
   - `src/lib/tts/audio-response.ts`: `requestPronunciationAudio` validates `res.ok`, verifies `Content-Type` starts with `audio/`, and ensures `blob.size > 0` before attempting playback. Throws `AudioRequestError` (`HTTP_ERROR`, `INVALID_CONTENT_TYPE`, `EMPTY_AUDIO`) on any contract violation.
   - `src/lib/tts/browser-speech.ts` & `src/lib/tts/audio-client.ts`:
     - When falling back to `window.speechSynthesis`, `chooseVoice()` selects a matching system voice.
     - **Scottish Honesty Rule:** `en-GB-scotland` requires explicit Scottish voice name hints (`scot`, `fiona`, `alba`, `edinburgh`, `glasgow`). A generic British `en-GB` system voice is never silently mislabeled as a native Scottish voice.

---

## 2. 7-Accent Voice Registry (`src/lib/tts/voices.ts`)

| Accent Key | Region | Female Voice ID | Male Voice ID |
|---|---|---|---|
| `en-GB` | British English | `en-GB-SoniaNeural` | `en-GB-RyanNeural` |
| `en-US` | American English | `en-US-JennyNeural` | `en-US-GuyNeural` |
| `en-CA` | Canadian English | `en-CA-ClaraNeural` | `en-CA-LiamNeural` |
| `en-AU` | Australian English | `en-AU-NatashaNeural` | `en-AU-WilliamNeural` |
| `en-NZ` | New Zealand English | `en-NZ-MollyNeural` | `en-NZ-MitchellNeural` |
| `en-GB-scotland` | Scottish English | `en-GB-LibbyNeural` | `en-GB-ThomasNeural` |
| `en-IN` | Indian English | `en-IN-NeerjaNeural` | `en-IN-PrabhatNeural` |
