import MeetingCard from '@/components/MeetingCard';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import { MeetingSearch } from '@/components/MeetingSearch';
import { Pagination } from '@/components/Pagination';

export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {


  const params = await searchParams;


  const query =
    params.query ?? '';


  const currentPage =
    Number(params.page) || 1;



  const [
    meetings,
    totalPages
  ] = await Promise.all([

    getMeetings(
      query,
      currentPage
    ),

    getMeetingsTotalPages(
      query
    ),

  ]);



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



      <MeetingSearch />



      <section>


        {meetings.length === 0 ? (

          <p className="text-gray-600">
            No meetings found.
          </p>


        ) : (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {meetings.map((meeting) => (

              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />

            ))}

          </div>

        )}


      </section>



      <Pagination totalPages={totalPages} />


    </main>

  );
}