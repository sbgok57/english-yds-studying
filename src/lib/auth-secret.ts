const KNOWN_INSECURE_SECRET = "yds-mastery-super-secret-key-2025";

/**
 * Returns the server-only key used to sign sessions and email challenges.
 * There is deliberately no built-in fallback: a missing or weak key must make
 * authentication fail closed instead of silently using a publicly known key.
 */
export function getAuthSecret(): string {
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "";

  if (secret.length < 32 || secret === KNOWN_INSECURE_SECRET) {
    throw new Error("AUTH_SECRET must be configured with at least 32 characters.");
  }

  return secret;
}
