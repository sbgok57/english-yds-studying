# DİL MASTER — Deployment Runbook (`DEPLOYMENT_RUNBOOK.md`)

**Canonical Production URL:** `https://dil-master.vercel.app`  
**GitHub Repository:** `https://github.com/sbgok57/english-yds-studying`  
**Vercel Project Name:** `dil-master` (`prj_HtwN3h9b2daGTeF3G4A6B1z0sxyz` / `.vercel/project.json`)

---

## 1. Pre-Deployment Verification Checklist

Before pushing to `main` or triggering a production deployment, run the full verification pipeline locally:

```bash
npm run verify
```

This single command executes in strict order:
1. `npm run typecheck` (`tsc --noEmit`)
2. `npm run zero-error` (`node scripts/zero-error-check.mjs`)
3. `npm run lint` (`next lint`)
4. `npm run validate:data` (`tsx test/validate-data.ts`)
5. `npm run test:unit` (`tsx test/master-test-runner.ts`)
6. `npm run test:integration` (`tts-integration-tests.ts`, `auth-integration-tests.ts`, `module-tests.ts`)
7. `npm run build` (`node prisma/prepare-db.js && prisma generate && next build`)

---

## 2. Resolving Vercel `Resource provisioning failed`

If Vercel reports `BUILD_FAILED: One or more integration resources failed to provision for this deployment`:

1. **Why It Happens:**
   - The Vercel project is connected to a Marketplace Supabase integration (`mcjdoisypyparezuqlgr`).
   - When the free-tier Supabase project pauses due to inactivity (`status: suspended`), Vercel aborts pre-build resource provisioning before starting the build container.
2. **How to Fix It Permanently (2 Options):**
   - **Option A (Resume Supabase):** Visit `https://supabase.com/dashboard/project/mcjdoisypyparezuqlgr` and click **Restore / Resume Project**. Wait ~60 seconds for the database status to become `Active`.
   - **Option B (Disconnect Paused Integration):** Since DİL MASTER has full offline-first and SQLite/local fallback support, open **Vercel Dashboard → `dil-master` → Settings → Integrations**, locate the **Supabase** integration, and remove/unlink it from the project.
3. **Trigger Deployment:**
   ```bash
   npx vercel --prod --yes
   ```
   Or push a commit to `main` on `https://github.com/sbgok57/english-yds-studying`.

---

## 3. Environment Variables Reference

| Variable | Required? | Purpose |
|---|---|---|
| `DATABASE_URL` | Optional (Auto-prepared by `prisma/prepare-db.js`) | SQLite local/serverless database path (`file:./dev.db`) |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for cloud sync |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase public anonymous key |
| `ANTHROPIC_API_KEY` | Optional | Enables live Claude AI question/reading generation (`/api/ai/*`); falls back to local deterministic engines when absent |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | Optional | Web Push notification public key |

---

## 4. Post-Deployment Smoke Checks

After a production deployment completes:
1. Verify `https://dil-master.vercel.app` returns `HTTP 200`.
2. Verify `https://dil-master.vercel.app/manifest.json` and `https://dil-master.vercel.app/sw.js` return `HTTP 200`.
3. Test `POST https://dil-master.vercel.app/api/tts` with `{"text":"sustainable","accent":"en-GB"}` and confirm `HTTP 200` + `Content-Type: audio/mpeg`.
