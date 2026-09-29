// SAFETY: Server-side persistent cloud authentication service via Supabase Auth & PostgreSQL
import { adminClient } from "@/lib/supabase/admin";
import { createClient } from "@supabase/supabase-js";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { SafeUser } from "@/lib/auth-contract";

function getSupabaseAuthClient() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_URL ||
    "";
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.englishydsstudying_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_englishydsstudying_SUPABASE_PUBLISHABLE_KEY ||
    "";
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export interface RegisterResult {
  success: boolean;
  user?: SafeUser;
  error?: string;
  field?: "email" | "username" | "password";
  code?: string;
}

export interface LoginResult {
  success: boolean;
  user?: SafeUser;
  error?: string;
  field?: "identifier" | "password";
  code?: string;
}

/**
 * Creates a permanent user in Supabase cloud Auth and profiles table.
 * Also synchronizes to local SQLite for offline/development fallback.
 */
export async function registerPermanentUser(params: {
  email: string;
  username: string;
  password: string;
}): Promise<RegisterResult> {
  const email = params.email.trim().toLowerCase();
  const username = params.username.trim();
  const password = params.password.trim();

  // 1. Check existing in Supabase profiles
  try {
    const { data: existingProfile } = await adminClient
      .from("profiles")
      .select("id, email, full_name")
      .or(`email.eq.${email},full_name.ilike.${username}`)
      .limit(1)
      .maybeSingle();

    if (existingProfile) {
      if (existingProfile.email?.toLowerCase() === email) {
        return {
          success: false,
          field: "email",
          error: "Bu e-posta adresiyle zaten kayıtlı bir hesap var kanka. Giriş yapmayı dene!",
          code: "EMAIL_ALREADY_IN_USE",
        };
      }
      if (existingProfile.full_name?.toLowerCase() === username.toLowerCase()) {
        return {
          success: false,
          field: "username",
          error: "Bu kullanıcı adı zaten alınmış kanka. Lütfen başka bir kullanıcı adı seç!",
          code: "USERNAME_ALREADY_IN_USE",
        };
      }
    }
  } catch (err) {
    console.warn("[AUTH_PERMANENT] Check profile error (proceeding to auth):", err);
  }

  // 2. Check existing in Prisma SQLite
  try {
    const existingPrisma = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });
    if (existingPrisma) {
      if (existingPrisma.email.toLowerCase() === email) {
        return {
          success: false,
          field: "email",
          error: "Bu e-posta adresiyle zaten kayıtlı bir hesap var kanka. Giriş yapmayı dene!",
          code: "EMAIL_ALREADY_IN_USE",
        };
      }
      return {
        success: false,
        field: "username",
        error: "Bu kullanıcı adı zaten alınmış kanka. Lütfen başka bir kullanıcı adı seç!",
        code: "USERNAME_ALREADY_IN_USE",
      };
    }
  } catch (err) {
    // Non-fatal if Prisma is unavailable
    console.warn("[AUTH_PERMANENT] Prisma check notice:", err);
  }

  // 3. Create permanent user in Supabase Auth (with resilient Prisma fallback)
  let userId = "";
  let cloudSuccess = false;
  const nowIso = new Date().toISOString();

  try {
    const { data: authData, error: authError } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        username,
        avatarId: "astronaut",
        level: "A1",
      },
    });

    if (authError || !authData.user) {
      const msg = authError?.message || "";
      if (msg.includes("already registered") || msg.includes("unique")) {
        return {
          success: false,
          field: "email",
          error: "Bu e-posta adresiyle zaten kayıtlı bir hesap var kanka. Giriş yapmayı dene!",
          code: "EMAIL_ALREADY_IN_USE",
        };
      }
      console.warn("[AUTH_PERMANENT] Supabase admin.createUser notice (falling back to local DB):", msg);
    } else {
      userId = authData.user.id;
      cloudSuccess = true;
    }
  } catch (cloudErr) {
    console.warn("[AUTH_PERMANENT] Supabase unreachable (proceeding with local DB):", cloudErr);
  }

  // 4. Save profile in Supabase PostgreSQL if cloud succeeded
  if (cloudSuccess && userId) {
    try {
      await adminClient.from("profiles").upsert({
        id: userId,
        email,
        full_name: username,
        avatar_url: "astronaut",
        level: "A1",
        target_score: 70,
        updated_at: nowIso,
      });
    } catch (profErr) {
      console.warn("[AUTH_PERMANENT] Profile upsert notice:", profErr);
    }
  }

  // 5. Always persist into Prisma SQLite (as primary local storage or fallback)
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const localRecord = await prisma.user.upsert({
      where: { email },
      create: {
        id: userId || undefined,
        email,
        username,
        passwordHash,
        level: "A1",
        streak: 1,
        totalPoints: 50,
        avatarId: "astronaut",
      },
      update: {
        username,
        passwordHash,
      },
    });

    if (!userId) {
      userId = localRecord.id;
    }
  } catch (prismaErr) {
    console.warn("[AUTH_PERMANENT] Prisma sync notice:", prismaErr);
    if (!userId) {
      return {
        success: false,
        error: "Kullanıcı veritabanına kaydedilemedi.",
        code: "DATABASE_UNAVAILABLE",
      };
    }
  }

  const safeUser: SafeUser = {
    id: userId,
    email,
    username,
    avatarId: "astronaut",
    level: "A1",
    streak: 1,
    totalPoints: 50,
    createdAt: nowIso,
  };

  return {
    success: true,
    user: safeUser,
  };
}

/**
 * Authenticates user permanently using Supabase Auth (with email or username)
 * and falls back to SQLite with automatic migration to cloud storage.
 */
export async function loginPermanentUser(
  rawIdentifier: string,
  rawPassword: string
): Promise<LoginResult> {
  const identifier = rawIdentifier.trim();
  const password = rawPassword.trim();
  const isEmail = identifier.includes("@");
  const authClient = getSupabaseAuthClient();

  let targetEmail = isEmail ? identifier.toLowerCase() : "";
  let resolvedUsername = !isEmail ? identifier : "";

  // 1. If username was provided, look up associated email from Supabase profiles
  if (!isEmail) {
    try {
      const { data: profile } = await adminClient
        .from("profiles")
        .select("id, email, full_name, avatar_url, level")
        .ilike("full_name", identifier)
        .limit(1)
        .maybeSingle();

      if (profile && profile.email) {
        targetEmail = profile.email.toLowerCase();
        resolvedUsername = profile.full_name || identifier;
      }
    } catch (err) {
      console.warn("[AUTH_PERMANENT] Username lookup in profiles notice:", err);
    }
  }

  // 2. Try Supabase Auth sign-in if email is resolved
  if (targetEmail) {
    const { data: signInData, error: signInError } = await authClient.auth.signInWithPassword({
      email: targetEmail,
      password,
    });

    if (!signInError && signInData.user) {
      const user = signInData.user;
      const metadata = user.user_metadata || {};
      const username = resolvedUsername || metadata.username || targetEmail.split("@")[0];
      const avatarId = metadata.avatarId || "astronaut";
      const level = metadata.level || "A1";

      const safeUser: SafeUser = {
        id: user.id,
        email: user.email || targetEmail,
        username,
        avatarId,
        level,
        streak: 1,
        totalPoints: 50,
        createdAt: user.created_at || new Date().toISOString(),
      };

      // Ensure Prisma has synced record
      try {
        const hash = await bcrypt.hash(password, 10);
        await prisma.user.upsert({
          where: { email: targetEmail },
          create: {
            id: user.id,
            email: targetEmail,
            username,
            passwordHash: hash,
            level,
            avatarId,
          },
          update: {
            username,
          },
        });
      } catch (prismaSyncErr) {
        // Non-fatal
      }

      return {
        success: true,
        user: safeUser,
      };
    }
  }

  // 3. Fallback to Prisma SQLite (for accounts created before Supabase integration)
  try {
    const localUser = await prisma.user.findFirst({
      where: isEmail
        ? { email: identifier.toLowerCase() }
        : {
            OR: [
              { username: identifier },
              { username: identifier.toLowerCase() },
            ],
          },
    });

    if (localUser) {
      const isMatch = await bcrypt.compare(password, localUser.passwordHash);
      if (isMatch) {
        // Auto-migrate to Supabase cloud permanently
        try {
          const { data: migratedAuth } = await adminClient.auth.admin.createUser({
            email: localUser.email,
            password,
            email_confirm: true,
            user_metadata: {
              username: localUser.username,
              level: localUser.level,
              avatarId: localUser.avatarId || "astronaut",
            },
          });

          if (migratedAuth?.user?.id) {
            await adminClient.from("profiles").upsert({
              id: migratedAuth.user.id,
              email: localUser.email,
              full_name: localUser.username,
              level: localUser.level,
              avatar_url: localUser.avatarId || "astronaut",
            });
          }
        } catch (migErr) {
          console.warn("[AUTH_PERMANENT] Background auto-migration notice:", migErr);
        }

        const safeUser: SafeUser = {
          id: localUser.id,
          email: localUser.email,
          username: localUser.username,
          avatarId: localUser.avatarId || "astronaut",
          level: localUser.level,
          streak: localUser.streak,
          totalPoints: localUser.totalPoints,
          createdAt: localUser.createdAt.toISOString(),
        };

        return {
          success: true,
          user: safeUser,
        };
      }
    }
  } catch (prismaErr) {
    console.warn("[AUTH_PERMANENT] Prisma fallback notice:", prismaErr);
  }

  return {
    success: false,
    field: "identifier",
    error: "Kullanıcı adı/e-posta veya parola hatalı.",
    code: "INVALID_CREDENTIALS",
  };
}
