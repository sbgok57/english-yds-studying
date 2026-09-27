# 🏗️ Entegrasyon Mimarisi — GitHub ⇄ Vercel ⇄ Supabase

## Büyük Resim

```
                          ┌─────────────────────────────┐
      geliştirici ──push──▶        GITHUB REPO          │
                          └──────┬──────────┬───────────┘
                                 │          │
            Supabase GitHub      │          │   Vercel Git entegrasyonu
            Integration          │          │   (zaten kurulu: push → deploy)
        (migrations + preview)   │          │
                                 ▼          ▼
                ┌────────────────────┐   ┌───────────────────────────┐
   main merge ──▶ ANA SUPABASE      │   │ VERCEL                    │
   (db push)     │ PROJESİ          │◀──│ Supabase Integration      │
                 │ • auth.users     │   │ • env'leri otomatik basar │
                 │ • profiles       │   │ • preview → preview DB    │
                 │ • push_subscr.   │   └─────────────┬─────────────┘
                 │ • grammar-audio  │                 │
                 │ • user_stats     │                 ▼
                 └──────────────────┘    production URL + preview URL'ler
```

---

## 1) Supabase GitHub Integration Ne Yapar?
* `supabase/migrations/*` dosyalarını izler.
* Varsayılan branch'e (`main`) merge olduğunda migration'lar ana projeye otomatik uygulanır.
* **Preview Branching** açıkken her PR branch'i için geçici bir preview Supabase projesi oluşturulur; PR kapanınca otomatik temizlenir.
* **Etkinleştirme:** `supabase.com/dashboard` → `Account` → `Integrations` → `GitHub` (App kur) → proje içinden: `Project Settings` → `Integrations` → `GitHub` → repo seç + *"Preview Branching"* ON.

---

## 2) Vercel ⇄ Supabase Integration Ne Yapar?
* Seçilen Supabase projesini Vercel projesine bağlar.
* Ortam değişkenlerini Production + Preview + Development ortamlarına otomatik yazar:
  * `NEXT_PUBLIC_SUPABASE_URL`
  * `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  * `SUPABASE_SERVICE_ROLE_KEY` (isteğe bağlı sunucu tarafı)
* Preview Branching ile birlikte: Vercel preview deploy'ları otomatik olarak o PR'ın preview DB'sine bağlanır.
* **Kurulum:** `npx vercel integration add supabase` (CLI) veya `vercel.com/dashboard/integrations`.

---

## 3) GitHub Actions (Yedek Otomasyon Katmanı)

| Workflow | Tetikleyici | İş |
| :--- | :--- | :--- |
| `supabase-deploy.yml` | `main` branch'ine push + manuel (`workflow_dispatch`) | `supabase db lint` → `supabase db push --linked` |
| `ci.yml` | Her PR | `npm ci` + `npm run build` (kırık kod merge edilmesini engeller) |

### Gerekli GitHub Secrets

| Secret | Nereden Alınır? |
| :--- | :--- |
| `SUPABASE_ACCESS_TOKEN` | Supabase dashboard → Account → Access Tokens |
| `SUPABASE_DB_PASSWORD` | Supabase dashboard → Project → Database → Settings → Database password |

---

## 📋 Ortam Değişkeni Matrisi

| Değişken | Kaynak | Nerede Tanımlı? | Kim Senkronlar? |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase projesi | Vercel (prod + preview) | Vercel integration otomatik |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase projesi | Vercel (prod + preview) | Vercel integration otomatik |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase projesi | Vercel (server) | Entegrasyon / yarı-manuel (asla client'a gitmez) |
| `NEXT_PUBLIC_SITE_URL` | Domain | Vercel manuel (1 kez) | Manuel |
| `VAPID_PUBLIC_KEY` / `VAPID_PRIVATE_KEY` | `web-push` | Vercel + `.env.local` | Manuel (Modül 2) |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | VAPID public | Vercel + `.env.local` | Manuel (Modül 2) |
| `VAPID_CONTACT_EMAIL` | E-posta | Vercel + `.env.local` | Manuel (Modül 2) |
| `CRON_SECRET` | 32-byte hex | Vercel + `.env.local` | Manuel (Modül 2) |
| `NEXT_PUBLIC_AUDIO_BASE_URL` | Storage URL | Vercel | Manuel (Modül 3) |
| `SUPABASE_ACCESS_TOKEN` | Dashboard Access Tokens | GitHub Secrets | `gh secret set` |
| `SUPABASE_DB_PASSWORD` | Database Settings | GitHub Secrets | `gh secret set` |

> [!IMPORTANT]
> `.env.local` yalnız yerel geliştirme içindir ve `.gitignore`'dadır. Production doğruluğunun tek kaynağı `vercel env ls` çıktısıdır.
