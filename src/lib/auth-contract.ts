// Standardized Authentication & API Response Contract for YDS Master

export interface SafeUser {
  id: string;
  email: string;
  username: string;
  avatarId: string | null;
  level: string;
  streak: number;
  totalPoints: number;
  createdAt?: string | Date;
  role?: "admin" | "user";
  isAdmin?: boolean;
}

export interface AuthSuccessResponse<T = unknown> {
  ok: true;
  data: T;
  message?: string;
  requestId: string;
}

export interface AuthErrorDetails {
  code: string;
  message: string;
  field?: string;
}

export interface AuthErrorResponse {
  ok: false;
  error: AuthErrorDetails;
  // Backward compatibility convenience fields
  message?: string;
  requestId: string;
}

export type AuthResponse<T = unknown> = AuthSuccessResponse<T> | AuthErrorResponse;

export const AUTH_ERROR_CODES = {
  MISSING_FIELDS: "MISSING_FIELDS",
  INVALID_EMAIL: "INVALID_EMAIL",
  INVALID_USERNAME: "INVALID_USERNAME",
  WEAK_PASSWORD: "WEAK_PASSWORD",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  EMAIL_ALREADY_IN_USE: "EMAIL_ALREADY_IN_USE",
  USERNAME_ALREADY_IN_USE: "USERNAME_ALREADY_IN_USE",
  INVALID_OR_EXPIRED_CODE: "INVALID_OR_EXPIRED_CODE",
  RATE_LIMITED: "RATE_LIMITED",
  EMAIL_DELIVERY_FAILED: "EMAIL_DELIVERY_FAILED",
  DATABASE_UNAVAILABLE: "DATABASE_UNAVAILABLE",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  UNAUTHORIZED: "UNAUTHORIZED",
} as const;

export type AuthErrorCode = keyof typeof AUTH_ERROR_CODES;

export function generateRequestId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `req_${timestamp}_${randomPart}`;
}

export function authSuccess<T>(data: T, message?: string, customRequestId?: string): AuthSuccessResponse<T> {
  return {
    ok: true,
    data,
    message,
    requestId: customRequestId || generateRequestId(),
  };
}

export function authError(
  code: AuthErrorCode | string,
  message: string,
  field?: string,
  customRequestId?: string
): AuthErrorResponse {
  return {
    ok: false,
    error: {
      code,
      message,
      ...(field ? { field } : {}),
    },
    message, // convenience for legacy callers expecting res.message
    requestId: customRequestId || generateRequestId(),
  };
}
