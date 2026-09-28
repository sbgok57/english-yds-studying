// ============================================================
// Yapılandırılmış loglayıcı + korelasyon kimliği (cid)
// Her istek/olay bir cid taşır; log, API yanıtı ve kullanıcı
// ekranındaki hata kodu aynı cid ile eşleşir → izlenebilirlik.
// ============================================================

const SECRET_RE =
  /(eyJ[A-Za-z0-9_-]{10,}|sk-[A-Za-z0-9_-]{12,}|Bearer\s+[A-Za-z0-9._-]+|"[A-Za-z0-9+/=]{40,}")/g;

/** Log metinlerine sızabilecek anahtar/token'ları temizler */
export function redact(value: string): string {
  return value.replace(SECRET_RE, '[REDACTED]');
}

export function newCid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

type Level = 'info' | 'warn' | 'error';

export interface LogInput {
  cid?: string;
  code?: string;
  message: string;
  context?: Record<string, unknown>;
}

function emit(level: Level, input: LogInput) {
  const line = redact(
    JSON.stringify({
      level,
      ts: new Date().toISOString(),
      cid: input.cid ?? '-',
      code: input.code ?? '-',
      msg: input.message,
      ...(input.context ? { ctx: input.context } : {}),
    })
  );
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.info(line);
}

export const logInfo = (input: LogInput) => emit('info', input);
export const logWarn = (input: LogInput) => emit('warn', input);
export const logError = (input: LogInput) => emit('error', input);
