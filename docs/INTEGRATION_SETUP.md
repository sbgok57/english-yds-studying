# DİL MASTER — External Integration Setup (`INTEGRATION_SETUP.md`)

**Date:** 2026-10-20  
**Project:** `dil-master` (`https://dil-master.vercel.app`)

---

## 1. Design Philosophy: Zero-Crash Local & Offline Fallbacks

DİL MASTER is architected so that **no external third-party outage can crash the application**:
- **Database:** Uses Prisma SQLite (`prisma/dev.db`, auto-initialized by `prisma/prepare-db.js`) + client-side IndexedDB/LocalStorage persistence (`src/lib/storage/safe-storage.ts`).
- **Authentication:** Supports both Supabase Auth and local session/guest mode (`src/lib/auth-Mode.ts`).
- **TTS:** Uses server-side `EdgeTtsProvider` with automatic HTTPS MP3 stream fallback and client Web Speech fallback.
- **AI Content:** `/api/ai/generate-question`, `/api/ai/generate-reading`, and `/api/ai/explain` use `ANTHROPIC_API_KEY` when configured, and gracefully fall back to deterministic local academic YDS/YDT question banks when the key is absent.

---

## 2. Supabase Integration (Vercel Marketplace)

### Current Status
- Linked Project ID: `mcjdoisypyparezuqlgr`
- Host: `https://mcjdoisypyparezuqlgr.supabase.co`
- **Important Note:** If this Supabase project enters `suspended` (paused) status due to free-tier inactivity, Vercel's Marketplace integration provisioning step will fail with `Resource provisioning failed` before starting a deployment build.

### How to Manage
1. **To Keep Cloud Sync Active:** Log in to [Supabase Dashboard](https://supabase.com/dashboard/project/mcjdoisypyparezuqlgr) and click **Restore Project**.
2. **To Deploy Without Supabase Dependency:** In **Vercel Dashboard → `dil-master` → Settings → Integrations**, remove the Supabase Marketplace integration. The app will continue functioning seamlessly via Prisma + local storage.

---

## 3. Optional Environment Variables

Configure in `.env.local` (for local development) or **Vercel Dashboard → Settings → Environment Variables**:

```env
# Optional: Supabase Cloud Sync
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"

# Optional: Live Claude AI Question & Reading Generation
ANTHROPIC_API_KEY="sk-ant-..."

# Optional: Web Push Notifications
NEXT_PUBLIC_VAPID_PUBLIC_KEY="..."
VAPID_PRIVATE_KEY="..."

# Optional: SMTP Password Reset Emails
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="..."
SMTP_PASS="..."
```
