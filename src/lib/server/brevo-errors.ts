/**
 * Brevo error handling utility
 * Converts Brevo SDK errors into HTTP-friendly response objects
 */
import { BrevoError } from "@getbrevo/brevo";

export function handleBrevoError(error: unknown): {
  statusCode: number;
  message: string;
} {
  if (error instanceof BrevoError) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Brevo API error";

    if (statusCode === 401) {
      console.error("Invalid Brevo API key");
      return { statusCode: 401, message: "Brevo API authentication failed" };
    }

    if (statusCode === 429) {
      const retryAfter =
        error.rawResponse?.headers?.get("retry-after") || "60";
      console.error(`Rate limited. Retry after ${retryAfter}s`);
      return {
        statusCode: 429,
        message: `Rate limited. Try again in ${retryAfter}s`,
      };
    }

    if (statusCode === 400) {
      return { statusCode: 400, message };
    }

    if (statusCode === 404) {
      return { statusCode: 404, message: "Resource not found" };
    }

    return { statusCode, message };
  }

  console.error("Unknown error:", error);
  return { statusCode: 500, message: "Internal server error" };
}
