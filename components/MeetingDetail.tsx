'use client';

import type { Meeting } from '@/types/meeting';

interface MeetingDetailProps {
  meeting: Meeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
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
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">{meeting.name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-blue-100 text-sm">Day</p>
            <p className="text-xl font-semibold">{dayName}</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm">Time</p>
            <p className="text-xl font-semibold">{meeting.time}</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm">Duration</p>
            <p className="text-xl font-semibold">{meeting.duration} min</p>
          </div>
          <div>
            <p className="text-blue-100 text-sm">Location</p>
            <p className="text-xl font-semibold">{meeting.location}</p>
          </div>
        </div>
      </div>

      {/* Agenda */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Agenda</h2>
        <div className="space-y-4">
          {meeting.items.map((item, index) => (
            <div key={item.id} className="bg-white border-l-4 border-blue-600 p-6 rounded shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-11">Speaker: {item.speaker}</p>
                </div>
              </div>
              <div className="mt-4 ml-11 flex gap-6 text-sm text-gray-600">
                <span>⏰ {item.time}</span>
                <span>⏱️ {item.duration} minutes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
