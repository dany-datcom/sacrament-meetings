import { redirect } from 'next/navigation';
import type { Meeting } from '@/types/meeting';

async function getCurrentMeeting(): Promise<Meeting | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/meetings`, {
      next: { revalidate: 600 }, // Revalidate every 10 minutes
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const meetings: Meeting[] = await res.json();
    
    // Get today's day of week (0 = Sunday, 6 = Saturday)
    const today = new Date().getDay();

    // Find meeting for today
    const currentMeeting = meetings.find(
      (meeting) => meeting.dayOfWeek === today
    );

    return currentMeeting || null;
  } catch (error) {
    console.error('Error fetching current meeting:', error);
    return null;
  }
}

export default async function CurrentMeetingPage() {
  const meeting = await getCurrentMeeting();

  if (!meeting) {
    redirect('/meetings');
  }

  redirect(`/meetings/${meeting.id}`);
}
