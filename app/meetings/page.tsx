import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';


async function getMeetings(): Promise<SacramentMeeting[]> {

  const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/meetings`,
  {
    cache: 'no-store',
  }
);


  if (!response.ok) {
    throw new Error('Failed to fetch meetings');
  }


  return response.json();

}



export default async function MeetingsPage() {

  const meetings = await getMeetings();


  return (

    <main className="space-y-8">


      <header>

        <h1 className="text-4xl font-bold text-gray-900">
          Sacrament Meetings
        </h1>


        <p className="text-gray-600 mt-2">
          View current and past meeting programs
        </p>

      </header>



      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {
          meetings.map((meeting) => (

            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />

          ))
        }

      </section>


    </main>

  );
}