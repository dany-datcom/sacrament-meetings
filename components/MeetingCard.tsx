'use client';

import Link from 'next/link';
import type { Meeting } from '@/types/meeting';

interface MeetingCardProps {
  meeting: Meeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayName = dayNames[meeting.dayOfWeek];

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h3 className="text-xl font-bold">{meeting.name}</h3>
        <p className="text-blue-100">{dayName}</p>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <p className="text-gray-600 text-sm">Time</p>
          <p className="font-semibold text-gray-900">{meeting.time}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm">Duration</p>
          <p className="font-semibold text-gray-900">{meeting.duration} minutes</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm">Location</p>
          <p className="font-semibold text-gray-900">{meeting.location}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm">Agenda Items</p>
          <p className="font-semibold text-gray-900">{meeting.items.length} items</p>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Link
          href={`/meetings/${meeting.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
