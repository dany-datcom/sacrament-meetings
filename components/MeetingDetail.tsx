import type { SacramentMeeting } from '@/lib/types';


interface MeetingDetailProps {
  meeting: SacramentMeeting;
}


export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {

  return (

    <article className="space-y-8">


      <header className="bg-blue-700 text-white p-8 rounded-lg">

        <h1 className="text-3xl font-bold">
          Sacrament Meeting Program
        </h1>

        <p className="mt-2">
          Date: {meeting.date}
        </p>

        <p className="capitalize">
          Type: {meeting.meetingType}
        </p>

      </header>



      <section className="bg-white shadow rounded-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Leadership
        </h2>


        <p>
          Presiding:
          <strong> {meeting.presiding}</strong>
        </p>


        <p>
          Conducting:
          <strong> {meeting.conducting}</strong>
        </p>

      </section>



      <section className="bg-white shadow rounded-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Hymns
        </h2>


        <p>
          Opening Hymn:
          {meeting.openingHymn.number} -
          {meeting.openingHymn.title}
        </p>


        <p>
          Sacrament Hymn:
          {meeting.sacramentHymn.number} -
          {meeting.sacramentHymn.title}
        </p>


        <p>
          Closing Hymn:
          {meeting.closingHymn.number} -
          {meeting.closingHymn.title}
        </p>

      </section>



      <section className="bg-white shadow rounded-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Prayers
        </h2>


        <p>
          Opening Prayer:
          {meeting.openingPrayer}
        </p>


        <p>
          Closing Prayer:
          {meeting.closingPrayer}
        </p>

      </section>




      <section className="bg-white shadow rounded-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Speakers & Musical Numbers
        </h2>


        <ul className="space-y-3">

          {meeting.speakers.map((speaker, index) => (

            <li
              key={index}
              className="border-b pb-2"
            >

              <strong>
                {speaker.name}
              </strong>

              <p>
                {speaker.topic}
              </p>

              <small className="capitalize">
                {speaker.type}
              </small>

            </li>

          ))}

        </ul>

      </section>




      <section className="bg-white shadow rounded-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Ward Information
        </h2>


        {
          meeting.announcements &&
          meeting.announcements.map(
            (announcement) => (
              <p key={announcement}>
                • {announcement}
              </p>
            )
          )
        }


        {
          meeting.wardBusiness.map(
            (item) => (
              <p key={item.description}>
                • {item.description}
              </p>
            )
          )
        }


        <p>
          Stake Business:
          {meeting.stakeBusiness ? ' Yes' : ' No'}
        </p>


      </section>


    </article>

  );
}