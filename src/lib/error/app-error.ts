// ============================================================
// YDS EXAM – Tip tabanlı hata sistemi (Hata Kalkanı Modülü)
// İlke: Kod içinde ham Error fırlatılmaz; her hata AppError'dır,
// bir KOD taşır ve kullanıcıya gösterilecek Türkçe mesajı hazırdır.
// ============================================================

export type ErrorCode =
  // Auth (Modül 1)
  | 'AUTH_REQUIRED'
  | 'AUTH_EMAIL_UNCONFIRMED'
  | 'AUTH_INVALID_CREDENTIALS'
  | 'AUTH_WEAK_PASSWORD'
  | 'AUTH_EMAIL_EXISTS'
  | 'AUTH_RATE_LIMITED'
  | 'AUTH_OTP_INVALID'
  | 'AUTH_OTP_EXPIRED'
  // Veritabanı
  | 'DB_QUERY_FAILED'
  | 'DB_ROW_NOT_FOUND'
  | 'DB_CONSTRAINT'
  | 'DB_UNAVAILABLE'
  // Storage / ses (Modül 3)
  | 'STORAGE_UPLOAD_FAILED'
  | 'STORAGE_NOT_FOUND'
  | 'AUDIO_NOT_READY'
  // Push (Modül 2)
  | 'PUSH_UNSUPPORTED'
  | 'PUSH_SUBSCRIBE_FAILED'
  | 'PUSH_SEND_FAILED'
  // Genel
  | 'VALIDATION_FAILED'
  | 'RATE_LIMITED'
  | 'NETWORK'
  | 'CRON_UNAUTHORIZED'
  | 'UNKNOWN'

export interface AppErrorOptions {
  status?: number
  cause?: unknown
  context?: Record<string, unknown>
}

/** Uygulama genelinde fırlatılan TEK hata tipi */
export class AppError extends Error {
  readonly code: ErrorCode
  readonly userMessage: string
  readonly status: number
  readonly context?: Record<string, unknown>

  constructor(code: ErrorCode, userMessage: string, opts: AppErrorOptions = {}) {
    super(userMessage, { cause: opts.cause })
    this.name = 'AppError'
    this.code = code
    this.userMessage = userMessage
    this.status = opts.status ?? httpStatusFor(code)
    this.context = opts.context
  }

  toJSON() {
    return { code: this.code, message: this.userMessage }
  }
}

const STATUS: Partial<Record<ErrorCode, number>> = {
  AUTH_REQUIRED: 401,
  AUTH_EMAIL_UNCONFIRMED: 403,
  AUTH_INVALID_CREDENTIALS: 401,
  AUTH_WEAK_PASSWORD: 422,
  AUTH_EMAIL_EXISTS: 409,
  AUTH_RATE_LIMITED: 429,
  AUTH_OTP_INVALID: 422,
  AUTH_OTP_EXPIRED: 410,
  DB_ROW_NOT_FOUND: 404,
  DB_CONSTRAINT: 409,
  DB_UNAVAILABLE: 503,
  STORAGE_NOT_FOUND: 404,
  AUDIO_NOT_READY: 404,
  PUSH_UNSUPPORTED: 422,
  VALIDATION_FAILED: 400,
  RATE_LIMITED: 429,
  NETWORK: 502,
  CRON_UNAUTHORIZED: 401,
  UNKNOWN: 500,
}

export function httpStatusFor(code: ErrorCode): number {
  return STATUS[code] ?? 500
}

// ── Supabase Auth hata mesajlarını Türkçeye ve koda çevir ──
const AUTH_PATTERNS: Array<{ re: RegExp; code: ErrorCode; tr: string }> = [
  {
    re: /email not confirmed/i,
    code: 'AUTH_EMAIL_UNCONFIRMED',
    tr: 'E-posta adresin henüz doğrulanmadı. Gelen kutundaki 6 haneli kodu gir ya da "Kodu tekrar gönder"e tıkla.',
  },
  {
    re: /invalid login credentials/i,
    code: 'AUTH_INVALID_CREDENTIALS',
    tr: 'E-posta veya şifre hatalı. Şifreni unuttuysan "Şifremi unuttum" bağlantısını kullanabilirsin.',
  },
  {
    re: /password should be at least/i,
    code: 'AUTH_WEAK_PASSWORD',
    tr: 'Şifre en az 8 karakter olmalı. Daha uzun ve tahmin edilmesi zor bir şifre seç.',
  },
  {
    re: /already registered|already been registered/i,
    code: 'AUTH_EMAIL_EXISTS',
    tr: 'Bu e-posta ile zaten bir hesap var. Giriş yapmayı dene ya da şifreni sıfırla.',
  },
  {
    re: /rate limit|too many requests|security purposes, you can only request/i,
    code: 'AUTH_RATE_LIMITED',
    tr: 'Çok fazla deneme yapıldı. Güvenlik için kısa bir süre bekleyip tekrar dene (yaklaşık 1 dakika).',
  },
  {
    re: /token has expired|otp expired/i,
    code: 'AUTH_OTP_EXPIRED',
    tr: 'Doğrulama kodunun süresi doldu. Yeni bir kod isteyip tekrar dene.',
  },
  {
    re: /token (is )?invalid|invalid token|otp.*invalid/i,
    code: 'AUTH_OTP_INVALID',
    tr: 'Kod hatalı görünüyor. E-postadaki 6 haneli kodu kontrol edip yeniden gir.',
  },
]

export function fromAuthError(error: { message: string }, context?: Record<string, unknown>): AppError {
  for (const p of AUTH_PATTERNS) {
    if (p.re.test(error.message)) {
      return new AppError(p.code, p.tr, { cause: error, context })
    }
  }
  return new AppError('UNKNOWN', 'Kimlik doğrulama sırasında bir sorun oluştu. Tekrar dene.', {
    cause: error,
    context,
  })
}

// ── PostgREST / DB hatalarını çevir ──
export function fromPostgrestError(
  error: { message: string; code?: string },
  context?: Record<string, unknown>
): AppError {
  const code = error.code ?? ''
  if (code === 'PGRST116') {
    return new AppError('DB_ROW_NOT_FOUND', 'Aradığın kayıt bulunamadı.', { cause: error, context })
  }
  if (code.startsWith('235')) {
    return new AppError('DB_CONSTRAINT', 'Bu işlem benzersiz bir kayıtla çakışıyor. Sayfayı yenileyip tekrar dene.', {
      cause: error,
      context,
    })
  }
  if (code.startsWith('42P')) {
    return new AppError('DB_QUERY_FAILED', 'Veritabanı şemasıyla ilgili bir sorun var. Destek ekibine bildirin.', {
      cause: error,
      context,
    })
  }
  if (code.startsWith('08') || /fetch failed|network/i.test(error.message)) {
    return new AppError('DB_UNAVAILABLE', 'Veritabanına şu anda ulaşılamıyor. Bağlantını kontrol edip birkaç saniye sonra tekrar dene.', {
      cause: error,
      context,
    })
  }
  return new AppError('DB_QUERY_FAILED', 'Veri işlemi sırasında bir sorun oluştu. Tekrar dene.', {
    cause: error,
    context,
  })
}

// ── Her şeyi AppError'a normalize et (catch bloklarının tek kapısı) ──
export function toAppError(e: unknown, context?: Record<string, unknown>): AppError {
  if (e instanceof AppError) return e

  if (e instanceof TypeError && /fetch|network/i.test(e.message)) {
    return new AppError('NETWORK', 'Bağlantı hatası oluştu. İnternet bağlantını kontrol edip tekrar dene.', {
      cause: e,
      context,
    })
  }

  const err = e as { message?: string; code?: string; status?: number; error_description?: string }
  if (err && typeof err.message === 'string') {
    if (AUTH_PATTERNS.some((p) => p.re.test(err.message!)) || /sign ?up|sign ?in|otp|password/i.test(err.message)) {
      return fromAuthError({ message: err.message }, context)
    }
    if (err.code && (err.code.startsWith('PGRST') || err.code.startsWith('23') || err.code.startsWith('08'))) {
      return fromPostgrestError({ message: err.message, code: err.code }, context)
    }
    return new AppError('UNKNOWN', 'Beklenmeyen bir hata oluştu. Tekrar dene, sorun sürerse bize bildir.', {
      cause: e,
      context,
    })
  }

  return new AppError('UNKNOWN', 'Beklenmeyen bir hata oluştu.', { cause: e, context })
}
