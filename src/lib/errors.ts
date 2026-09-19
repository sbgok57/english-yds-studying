// Centralized Error Management and Application Error Code Definitions

export type AppErrorCode =
  | "VALIDATION_ERROR"
  | "AUTH_REQUIRED"
  | "INVALID_CREDENTIALS"
  | "EMAIL_NOT_VERIFIED"
  | "USER_ALREADY_EXISTS"
  | "USERNAME_ALREADY_EXISTS"
  | "RATE_LIMITED"
  | "DATABASE_UNAVAILABLE"
  | "EMAIL_SERVICE_UNAVAILABLE"
  | "SESSION_EXPIRED"
  | "NOT_FOUND"
  | "CORRUPT_LOCAL_DATA"
  | "EXAM_DATA_INVALID"
  | "LEVEL_TEST_INVALID"
  | "NETWORK_ERROR"
  | "INTERNAL_ERROR";

export interface AppErrorDetails {
  code: AppErrorCode;
  message: string;
  field?: string;
}

export interface AppErrorPayload {
  ok: false;
  error: AppErrorDetails;
  message: string; // Backward compatibility
  requestId: string;
}

export class ApplicationError extends Error {
  public readonly code: AppErrorCode;
  public readonly field?: string;
  public readonly statusCode: number;

  constructor(message: string, code: AppErrorCode, statusCode = 400, field?: string) {
    super(message);
    this.name = "ApplicationError";
    this.code = code;
    this.field = field;
    this.statusCode = statusCode;
  }
}

export function createAppErrorResponse(
  code: AppErrorCode,
  message: string,
  requestId: string,
  field?: string
): AppErrorPayload {
  return {
    ok: false,
    error: {
      code,
      message,
      ...(field ? { field } : {}),
    },
    message,
    requestId,
  };
}
