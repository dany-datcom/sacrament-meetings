import { Suspense } from 'react';
import MeetingCard from '@/components/MeetingCard';
import type { Meeting } from '@/types/meeting';

async function getMeetings(): Promise<Meeting[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
      throw new Error('NEXT_PUBLIC_API_URL environment variable is required');
    }

    const res = await fetch(`${baseUrl}/api/meetings`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching meetings:', error);
    return [];
  }
}

async function MeetingsList() {
  const meetings = await getMeetings();

  if (meetings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No meetings available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
}

export default function MeetingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Sacrament Meetings
        </h1>
        <p className="text-gray-600">
          View the complete agenda for all our meetings
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <MeetingsList />
      </Suspense>
    </div>
  );
}
