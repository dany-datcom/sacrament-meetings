import MeetingDetail from '@/components/MeetingDetail';
import { notFound } from 'next/navigation';
import type { SacramentMeeting } from '@/lib/types';


async function getMeeting(
  id: string
): Promise<SacramentMeeting | null> {

  const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/meetings/${id}`,
  {
    cache: 'no-store',
  }
);


  if (!response.ok) {
    return null;
  }


  return response.json();

}



export default async function MeetingPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {


  const { id } = await params;


  const meeting =
    await getMeeting(id);



  if (!meeting) {
    notFound();
  }


  return (
    <MeetingDetail
      meeting={meeting}
    />
  );

}