import Image from 'next/image';
import Link from 'next/link';


export default function Home() {

  return (

    <main className="space-y-10">


      <section className="text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          Sacrament Meeting Planner
        </h1>


        <p className="mt-4 text-lg text-gray-600">
          Plan, review, and print sacrament meeting programs.
        </p>


      </section>



      <section className="flex justify-center">

        <Image
          src="/family.webp"
          alt="Sacrament meeting chapel"
          width={700}
          height={400}
        />

      </section>



      <section className="text-center">

        <Link
          href="/meetings"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          View Meetings
        </Link>

      </section>


    </main>

  );

}