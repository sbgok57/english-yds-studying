// ============================================================
// app-error.ts — Tip güvenli uygulama hata sınıfı
// ============================================================

export class AppError extends Error {
  public readonly code: string;
  public readonly userMessage: string;
  public readonly context?: Record<string, unknown>;

  constructor(message: string, code = "APP_ERROR", context?: Record<string, unknown>) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.userMessage = message;
    this.context = context;
  }
}

export function toAppError(e: unknown, context?: Record<string, unknown>): AppError {
  if (e instanceof AppError) return e;
  if (e instanceof Error) return new AppError(e.message, "UNKNOWN_ERROR", { ...context, stack: e.stack });
  return new AppError(String(e || "Bilinmeyen bir hata oluştu."), "UNKNOWN_ERROR", context);
}
