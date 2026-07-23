import Link from 'next/link';
import { deleteMeeting } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">

      <div className="bg-blue-700 text-white p-5">
        <h2 className="text-xl font-bold">
          Sacrament Meeting
        </h2>

        <p className="text-blue-100">
          {meeting.date}
        </p>

        <p className="mt-2 capitalize">
          Type: {meeting.meetingType}
        </p>
      </div>


      <div className="p-5 space-y-3">

        <div>
          <p className="text-sm text-gray-500">
            Presiding
          </p>

          <p className="font-semibold">
            {meeting.presiding}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Conducting
          </p>

          <p className="font-semibold">
            {meeting.conducting}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Speakers
          </p>

          <p className="font-semibold">
            {meeting.speakers.length}
          </p>
        </div>

      </div>


      <div className="p-5 pt-0 space-y-3">

  <Link
    href={`/meetings/${meeting.id}`}
    className="block text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded"
  >
    View Program
  </Link>


  <Link
    href={`/meetings/${meeting.id}/edit`}
    className="block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
  >
    Edit Meeting
  </Link>


  <form
    action={deleteMeeting.bind(null, meeting.id)}
  >

    <button
      type="submit"
      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
    >
      Delete Meeting
    </button>


  </form>


</div>

    </div>
  );
}