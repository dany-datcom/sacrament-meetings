'use client';

import { useEffect } from 'react';

export default function MeetingsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Meetings page error:', error);
  }, [error]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Error</h1>
        <p className="text-gray-600">Failed to load meetings</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-700 mb-4">
          An error occurred while loading the meetings page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
