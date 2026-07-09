import { NextResponse } from 'next/server';
import type { Meeting } from '@/types/meeting';

// Mock data - Same as in /api/meetings
const MOCK_MEETINGS: Meeting[] = [
  {
    id: '1',
    name: 'Main Sacrament Meeting',
    dayOfWeek: 0,
    time: '10:00 AM',
    duration: 90,
    location: 'Main Chapel',
    items: [
      {
        id: '1',
        title: 'Opening Hymn',
        speaker: 'Branch President',
        time: '10:00 AM',
        duration: 3,
      },
      {
        id: '2',
        title: 'Opening Prayer',
        speaker: 'Elder Smith',
        time: '10:03 AM',
        duration: 2,
      },
      {
        id: '3',
        title: 'Sacrament Address',
        speaker: 'Bishop Johnson',
        time: '10:05 AM',
        duration: 15,
      },
      {
        id: '4',
        title: 'Intermediate Hymn',
        speaker: 'Branch Choir',
        time: '10:20 AM',
        duration: 3,
      },
      {
        id: '5',
        title: 'Special Address',
        speaker: 'Sister Williams',
        time: '10:23 AM',
        duration: 12,
      },
      {
        id: '6',
        title: 'Closing Hymn',
        speaker: 'Congregation',
        time: '10:35 AM',
        duration: 3,
      },
      {
        id: '7',
        title: 'Closing Prayer',
        speaker: 'Elder Brown',
        time: '10:38 AM',
        duration: 2,
      },
    ],
  },
  {
    id: '2',
    name: 'Women\'s Meeting',
    dayOfWeek: 1,
    time: '7:00 PM',
    duration: 60,
    location: 'Meeting Room',
    items: [
      {
        id: '1',
        title: 'Opening Hymn',
        speaker: 'President',
        time: '7:00 PM',
        duration: 2,
      },
      {
        id: '2',
        title: 'Personal Development',
        speaker: 'Sister Martinez',
        time: '7:02 PM',
        duration: 20,
      },
      {
        id: '3',
        title: 'Community Activity',
        speaker: 'All Members',
        time: '7:22 PM',
        duration: 30,
      },
      {
        id: '4',
        title: 'Closing',
        speaker: 'President',
        time: '7:52 PM',
        duration: 8,
      },
    ],
  },
  {
    id: '3',
    name: 'Youth Meeting',
    dayOfWeek: 5,
    time: '6:00 PM',
    duration: 120,
    location: 'Gymnasium',
    items: [
      {
        id: '1',
        title: 'Sports Activity',
        speaker: 'Coordinators',
        time: '6:00 PM',
        duration: 60,
      },
      {
        id: '2',
        title: 'Refreshments and Socializing',
        speaker: 'All Members',
        time: '7:00 PM',
        duration: 30,
      },
      {
        id: '3',
        title: 'Closing Message',
        speaker: 'Youth Leader',
        time: '7:30 PM',
        duration: 30,
      },
    ],
  },
];

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { id } = params;

    // In production, fetch from database
    // const meeting = await db.meetings.findById(id);

    const meeting = MOCK_MEETINGS.find((m) => m.id === id);

    if (!meeting) {
      return NextResponse.json(
        { error: 'Meeting not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(meeting, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching meeting:', error);
    return NextResponse.json(
      { error: 'Failed to fetch meeting' },
      { status: 500 }
    );
  }
}
