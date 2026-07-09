// This file has been deprecated.
// Use /types/meeting.ts and /app/api/meetings/* for meeting data handling.
// All mock data has been moved to the API routes.

import type { Meeting } from '@/types/meeting';

/**
 * @deprecated Use getMeetingsFromAPI() instead
 * This function is kept for backwards compatibility only.
 */
export function getMeetings(date?: string | null): Meeting[] {
  console.warn(
    'getMeetings() is deprecated. Use the /api/meetings endpoint instead.'
  );
  return [];
}

/**
 * @deprecated Use getMeetingFromAPI() instead
 * This function is kept for backwards compatibility only.
 */
export function getMeetingById(id: number): Meeting | null {
  console.warn(
    'getMeetingById() is deprecated. Use the /api/meetings/[id] endpoint instead.'
  );
  return null;
}
