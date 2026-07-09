import { notFound } from 'next/navigation';
import MeetingDetail from '@/components/MeetingDetail';
import type { Meeting } from '@/types/meeting';

interface Props {
  params: {
    id: string;
  };
}

async function getMeeting(id: string): Promise<Meeting | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/meetings/${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`API error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching meeting:', error);
    throw error;
  }
}

export async function generateMetadata({ params }: Props) {
  const meeting = await getMeeting(params.id);

  if (!meeting) {
    return {
      title: 'Reunión no encontrada',
    };
  }

  return {
    title: `${meeting.name} - Sacrament Meetings`,
    description: `Agenda de ${meeting.name}`,
  };
}

export default async function MeetingDetailPage({ params }: Props) {
  const meeting = await getMeeting(params.id);

  if (!meeting) {
    notFound();
  }

  return (
    <div>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}
