import { NextResponse } from 'next/server';
import type { Meeting } from '@/types/meeting';

// Mock data - Same as in /api/meetings
const MOCK_MEETINGS: Meeting[] = [
  {
    id: '1',
    name: 'Reunión Sacramental Principal',
    dayOfWeek: 0,
    time: '10:00 AM',
    duration: 90,
    location: 'Capilla Principal',
    items: [
      {
        id: '1',
        title: 'Himno de apertura',
        speaker: 'Presidente de rama',
        time: '10:00 AM',
        duration: 3,
      },
      {
        id: '2',
        title: 'Oración de apertura',
        speaker: 'Elder Smith',
        time: '10:03 AM',
        duration: 2,
      },
      {
        id: '3',
        title: 'Discurso sacramental',
        speaker: 'Bishop Johnson',
        time: '10:05 AM',
        duration: 15,
      },
      {
        id: '4',
        title: 'Himno intermedio',
        speaker: 'Coro de rama',
        time: '10:20 AM',
        duration: 3,
      },
      {
        id: '5',
        title: 'Discurso especial',
        speaker: 'Sister Williams',
        time: '10:23 AM',
        duration: 12,
      },
      {
        id: '6',
        title: 'Himno de cierre',
        speaker: 'Congregación',
        time: '10:35 AM',
        duration: 3,
      },
      {
        id: '7',
        title: 'Oración de cierre',
        speaker: 'Elder Brown',
        time: '10:38 AM',
        duration: 2,
      },
    ],
  },
  {
    id: '2',
    name: 'Reunión de Mujeres',
    dayOfWeek: 1,
    time: '7:00 PM',
    duration: 60,
    location: 'Salón de reuniones',
    items: [
      {
        id: '1',
        title: 'Himno de apertura',
        speaker: 'Presidenta',
        time: '7:00 PM',
        duration: 2,
      },
      {
        id: '2',
        title: 'Desarrollo personal',
        speaker: 'Sister Martinez',
        time: '7:02 PM',
        duration: 20,
      },
      {
        id: '3',
        title: 'Actividad comunitaria',
        speaker: 'Todas',
        time: '7:22 PM',
        duration: 30,
      },
      {
        id: '4',
        title: 'Cierre',
        speaker: 'Presidenta',
        time: '7:52 PM',
        duration: 8,
      },
    ],
  },
  {
    id: '3',
    name: 'Reunión de Jóvenes',
    dayOfWeek: 5,
    time: '6:00 PM',
    duration: 120,
    location: 'Gimnasio',
    items: [
      {
        id: '1',
        title: 'Actividad deportiva',
        speaker: 'Coordinadores',
        time: '6:00 PM',
        duration: 60,
      },
      {
        id: '2',
        title: 'Refrigerio y socialización',
        speaker: 'Todos',
        time: '7:00 PM',
        duration: 30,
      },
      {
        id: '3',
        title: 'Mensaje de cierre',
        speaker: 'Líder de jóvenes',
        time: '7:30 PM',
        duration: 30,
      },
    ],
  },
];

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { id } = params;

    // In production, fetch from database
    // const meeting = await db.meetings.findById(id);

    const meeting = MOCK_MEETINGS.find((m) => m.id === id);

    if (!meeting) {
      return NextResponse.json(
        { error: 'Meeting not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(meeting, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching meeting:', error);
    return NextResponse.json(
      { error: 'Failed to fetch meeting' },
      { status: 500 }
    );
  }
}
