import Link from 'next/link';


export default function NotFound(){


  return (

    <main className="p-8 text-center">


      <h2 className="text-3xl font-bold mb-4">
        Meeting not found
      </h2>


      <p className="mb-6">
        The meeting you are looking for does not exist.
      </p>


      <Link
        href="/meetings"
        className="bg-blue-700 text-white px-4 py-2 rounded"
      >

        Back to Meetings

      </Link>


    </main>

  );

}