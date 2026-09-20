// Database operation retry and timeout management
// Specifically targets transient connection and pool exhaustions with exponential backoff & jitter

export interface RetryOptions {
  maxRetries?: number;
  timeoutMs?: number;
  requestId?: string;
  operationName?: string;
}

const TRANSIENT_PRISMA_CODES = new Set([
  "P1001", // Can't reach database server
  "P1002", // The database server was reached but timed out
  "P1008", // Operations timed out
  "P1011", // Error opening a TLS connection
  "P1017", // Server has closed the connection
]);

const TRANSIENT_SYSTEM_CODES = new Set([
  "ETIMEDOUT",
  "ECONNRESET",
  "ECONNREFUSED",
  "EPIPE",
  "EHOSTUNREACH",
  "ENETUNREACH",
]);

export function isTransientDbError(error: any): boolean {
  if (!error) return false;

  // 1. Check known Prisma transient error codes
  if (error.code && TRANSIENT_PRISMA_CODES.has(error.code)) {
    return true;
  }

  // 2. Check low-level OS/Network error codes
  if (error.code && TRANSIENT_SYSTEM_CODES.has(error.code)) {
    return true;
  }

  // 3. Check specific message substrings
  const msg = (error.message || "").toLowerCase();
  if (
    msg.includes("connection terminated") ||
    msg.includes("connection closed") ||
    msg.includes("too many clients") ||
    msg.includes("remaining connection slots") ||
    msg.includes("connection pool") ||
    msg.includes("connection timed out") ||
    msg.includes("timeout expired") ||
    msg.includes("deadlock detected") ||
    msg.includes("temporarily unavailable")
  ) {
    return true;
  }

  return false;
}

/**
 * Executes a database operation wrapped in a timeout and transient retry policy.
 */
export async function withDbRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const maxRetries = options.maxRetries ?? 2; // Total up to 3 attempts
  const timeoutMs = options.timeoutMs ?? 5000;
  const requestId = options.requestId || "req_unknown";
  const opName = options.operationName || "db_op";

  let attempt = 0;
  let lastError: any = null;

  while (attempt <= maxRetries) {
    attempt++;

    // Wrap operation in a hard timeout promise
    let timer: NodeJS.Timeout | undefined;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timer = setTimeout(() => {
        const timeoutErr = new Error(`Database query timed out after ${timeoutMs}ms [${opName}]`);
        (timeoutErr as any).code = "ETIMEDOUT";
        (timeoutErr as any).name = "DatabaseTimeoutError";
        reject(timeoutErr);
      }, timeoutMs);
    });

    try {
      const result = await Promise.race([operation(), timeoutPromise]);
      if (timer) clearTimeout(timer);
      return result;
    } catch (err: any) {
      if (timer) clearTimeout(timer);
      lastError = err;

      const isTransient = isTransientDbError(err);
      if (!isTransient || attempt > maxRetries) {
        // Do not retry permanent failures (validation, duplicate records, wrong passwords)
        throw err;
      }

      // Exponential backoff with jitter: 150-250ms on first retry, 400-600ms on second
      const baseDelay = attempt === 1 ? 150 : 400;
      const jitter = Math.floor(Math.random() * 100);
      const delay = baseDelay + jitter;

      console.warn(
        `[DB_RETRY] ${requestId} - Transient error on attempt ${attempt}/${maxRetries + 1} (${err.code || err.name || "unknown"}). Retrying in ${delay}ms...`
      );

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}
