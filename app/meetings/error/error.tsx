'use client';


import Link from 'next/link';


export default function ErrorPage({
  reset,
}: {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}) {


  return (

    <main className="p-8 text-center">


      <h2 className="text-3xl font-bold mb-4">
        Something went wrong
      </h2>


      <p className="mb-6">
        We could not load the sacrament meetings.
        Please try again.
      </p>



      <div className="space-x-4">


        <button
          onClick={() => reset()}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Try Again
        </button>



        <Link
          href="/meetings"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back to Meetings
        </Link>


      </div>


    </main>

  );

}