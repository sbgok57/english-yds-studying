#!/usr/bin/env bash
# ============================================================
# YDS EXAM — Vercel ⇄ GitHub ⇄ Supabase otomatik kurulum (Modül 4)
# Kullanım: chmod +x scripts/otomatik-kurulum.sh && ./scripts/otomatik-kurulum.sh
# ============================================================
set -uo pipefail

G='\033[0;32m'; Y='\033[1;33m'; R='\033[0;31m'; B='\033[0;34m'; N='\033[0m'
ok()   { echo -e "${G}✔ $1${N}"; }
info() { echo -e "${B}➜ $1${N}"; }
warn() { echo -e "${Y}⚠ $1${N}"; }
fail() { echo -e "${R}✘ $1${N}"; exit 1; }

echo "=================================================="
echo " YDS EXAM — GitHub ⇄ Vercel ⇄ Supabase kurulumu"
echo "=================================================="

# ---------- 0) CLI kontrolleri ----------
command -v git  >/dev/null || fail "git kurulu değil"
command -v node >/dev/null || fail "node kurulu değil"
ok "git & node hazır"

HAVE_GH=0;       command -v gh >/dev/null       && HAVE_GH=1
HAVE_SUPABASE=0; SUPA_CMD="supabase"
if command -v supabase >/dev/null; then
  HAVE_SUPABASE=1
elif npx supabase --version >/dev/null 2>&1; then
  HAVE_SUPABASE=1; SUPA_CMD="npx supabase"
fi

HAVE_VERCEL=0; VERCEL_CMD="vercel"
if command -v vercel >/dev/null; then
  HAVE_VERCEL=1
elif npx vercel --version >/dev/null 2>&1; then
  HAVE_VERCEL=1; VERCEL_CMD="npx vercel"
fi

[ $HAVE_GH -eq 1 ]       && ok "GitHub CLI (gh) hazır"       || warn "gh kurulu değil → https://cli.github.com (secret eklemeyi kolaylaştırır)"
[ $HAVE_SUPABASE -eq 1 ] && ok "Supabase CLI hazır ($SUPA_CMD)" || warn "Supabase CLI yok → 'npm i -D supabase' çalıştır ve scripti tekrar başlat"
[ $HAVE_VERCEL -eq 1 ]   && ok "Vercel CLI hazır ($VERCEL_CMD)"     || warn "Vercel CLI yok → 'npm i -g vercel' çalıştır ve scripti tekrar başlat"

# ---------- 1) Supabase init + login + link ----------
if [ $HAVE_SUPABASE -eq 1 ]; then
  if [ -f supabase/config.toml ]; then
    ok "supabase/ zaten başlatılmış"
  else
    info "supabase init çalıştırılıyor…"
    $SUPA_CMD init || fail "supabase init başarısız"
  fi

  if $SUPA_CMD projects list >/dev/null 2>&1; then
    ok "Supabase oturumu açık"
  else
    info "Supabase girişi (tarayıcı açılacak)…"
    $SUPA_CMD login || fail "supabase login başarısız"
  fi

  if [ -f supabase/.temp/project-ref ] 2>/dev/null || $SUPA_CMD status >/dev/null 2>&1; then
    ok "Proje bağlı görünüyor"
  else
    warn "Proje bağlı değilse: $SUPA_CMD link --project-ref <PROJE_REF>"
  fi
fi

# ---------- 2) Vercel link + env çek ----------
if [ $HAVE_VERCEL -eq 1 ]; then
  if $VERCEL_CMD whoami >/dev/null 2>&1; then
    ok "Vercel oturumu açık"
  else
    info "Vercel girişi (tarayıcı açılacak)…"
    $VERCEL_CMD login || fail "vercel login başarısız"
  fi

  if [ -f .vercel/project.json ]; then
    ok "Vercel projesine bağlı"
  else
    info "vercel link çalıştırılıyor…"
    $VERCEL_CMD link --yes 2>/dev/null || $VERCEL_CMD link || warn "vercel link elle yapılmalı"
  fi

  info "Vercel env değişkenleri .env.local'a çekiliyor…"
  $VERCEL_CMD env pull .env.local --yes 2>/dev/null || $VERCEL_CMD env pull .env.local || warn "env pull elle yapılmalı"
fi

# ---------- 3) .env iskeleti ----------
if [ ! -f .env.local ] && [ -f .env.example ]; then
  cp .env.example .env.local
  ok ".env.local oluşturuldu (.env.example'tan)"
elif [ -f .env.local ]; then
  ok ".env.local mevcut"
fi
grep -q "^\.env\.local" .gitignore 2>/dev/null || echo ".env.local" >> .gitignore

# ---------- 4) Git remote kontrolü ----------
REMOTE=$(git remote get-url origin 2>/dev/null || echo "")
if [ -n "$REMOTE" ]; then
  ok "GitHub remote: $REMOTE"
else
  warn "git remote 'origin' yok. Önce repoyu GitHub'da oluştur:"
  [ $HAVE_GH -eq 1 ] && echo "   gh repo create yds-exam --private --source=. --push" \
                     || echo "   https://github.com/new"
fi

# ---------- 5) Tarayıcıda yapılacak 3 OAuth adımı ----------
echo ""
echo "=================================================="
echo " ŞİMDİ TARAYICIDA 3 ADIM (tek seferlik):"
echo "=================================================="
cat <<'EOF'

1) SUPABASE ⇄ GITHUB INTEGRATION
   https://supabase.com/dashboard/account/integrations/github
   → "Install GitHub App" → organizasyon + BU repoyu seç
   → proje içinden: Project Settings → Integrations → GitHub → Enable
   → "Preview Branching" anahtarını AÇ

2) VERCEL ⇄ SUPABASE INTEGRATION
   Terminalde:  npx vercel integration add supabase
   (veya https://vercel.com/dashboard/integrations → Supabase → Add)
   → Supabase projen + Vercel projenizi eşleştirin
   → Doğrulama: npx vercel env ls

3) GITHUB SECRETS (Actions için)
   Repo → Settings → Secrets and variables → Actions → New repository secret
     • SUPABASE_ACCESS_TOKEN  (Supabase: Account → Access Tokens → Generate)
     • SUPABASE_DB_PASSWORD   (Supabase: Project → Database → Settings)
   gh CLI varsa:
     gh secret set SUPABASE_ACCESS_TOKEN
     gh secret set SUPABASE_DB_PASSWORD

EOF

# ---------- 6) Doğrulama özeti ----------
echo "=================================================="
echo " DOĞRULAMA KOMUTLARI (3 adımı bitirince çalıştır):"
echo "=================================================="
echo "   npx vercel env ls            # integration env'leri"
[ $HAVE_GH -eq 1 ] && echo "   gh secret list               # GitHub secrets"
echo "   git commit --allow-empty -m 'ci: entegrasyon testi' && git push"
echo "   # GitHub → Actions sekmesinde 'Supabase Deploy' yeşil yanmalı"
echo ""
ok "Otomatik kurulum aşaması tamam. Sıra tarayıcıdaki 3 OAuth adımında."
