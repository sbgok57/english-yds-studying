// Automated database provider selector and schema synchronizer
// Dynamically aligns prisma/schema.prisma with the active DATABASE_URL
// Supports PostgreSQL (Supabase, Neon, Vercel Postgres), MySQL, and SQLite (local)

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function sanitizeUrl(url) {
  if (!url) return "";
  let clean = url.trim();
  if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
    clean = clean.slice(1, -1).trim();
  }
  return clean;
}

function resolveDbEnvironment() {
  // Check common Vercel / Cloud environment variables
  const rawDbUrl =
    sanitizeUrl(process.env.DATABASE_URL) ||
    sanitizeUrl(process.env.POSTGRES_PRISMA_URL) ||
    sanitizeUrl(process.env.POSTGRES_URL);

  const rawDirectUrl =
    sanitizeUrl(process.env.DIRECT_URL) ||
    sanitizeUrl(process.env.POSTGRES_URL_NON_POOLING);

  let provider = "sqlite";
  let activeUrl = rawDbUrl;
  let activeDirect = rawDirectUrl;

  if (activeUrl.startsWith("postgresql://") || activeUrl.startsWith("postgres://")) {
    provider = "postgresql";
    if (!activeDirect) {
      activeDirect = activeUrl;
    }
  } else if (activeUrl.startsWith("mysql://")) {
    provider = "mysql";
  } else {
    provider = "sqlite";
    if (!activeUrl || !activeUrl.startsWith("file:")) {
      const dbPath = path.resolve(__dirname, "dev.db");
      activeUrl = `file:${dbPath}`;
    }
  }

  // Export back to process.env so subsequent prisma CLI calls inherit sanitized values
  process.env.DATABASE_URL = activeUrl;
  if (activeDirect) {
    process.env.DIRECT_URL = activeDirect;
  }

  return { provider, activeUrl, activeDirect };
}

function updateSchemaPrisma(provider) {
  const schemaPath = path.join(__dirname, "schema.prisma");
  if (!fs.existsSync(schemaPath)) {
    console.error("[PREPARE_DB] schema.prisma not found at:", schemaPath);
    return false;
  }

  let content = fs.readFileSync(schemaPath, "utf8");

  // Replace datasource block cleanly
  const datasourceRegex = /datasource\s+db\s*\{[\s\S]*?\}/;
  let newBlock = "";

  if (provider === "postgresql") {
    newBlock = `datasource db {\n  provider  = "postgresql"\n  url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")\n}`;
  } else if (provider === "mysql") {
    newBlock = `datasource db {\n  provider = "mysql"\n  url      = env("DATABASE_URL")\n}`;
  } else {
    newBlock = `datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}`;
  }

  if (content.match(datasourceRegex)) {
    content = content.replace(datasourceRegex, newBlock);
  } else {
    content = `${newBlock}\n\n${content}`;
  }

  fs.writeFileSync(schemaPath, content, "utf8");
  console.log(`[PREPARE_DB] Synchronized schema.prisma datasource for provider: '${provider}'`);
  return true;
}

function syncDatabaseSchema(provider, activeUrl) {
  // In remote database environments (PostgreSQL / MySQL), ensure all tables exist
  if (provider === "postgresql" || provider === "mysql") {
    console.log(`[PREPARE_DB] Verifying table schemas on remote ${provider} database...`);
    try {
      execSync("npx prisma db push --skip-generate", {
        stdio: "inherit",
        timeout: 20000,
        env: process.env,
      });
      console.log(`[PREPARE_DB] ✅ Remote database schema verified successfully.`);
    } catch (err) {
      console.warn(`[PREPARE_DB] ⚠️ Note: Remote schema push encountered an issue (will proceed with build):`, err.message || err);
    }
  }
}

function main() {
  const { provider, activeUrl } = resolveDbEnvironment();
  updateSchemaPrisma(provider);
  syncDatabaseSchema(provider, activeUrl);
}

if (require.main === module) {
  main();
}

module.exports = { resolveDbEnvironment, updateSchemaPrisma };
