import { getMeetingById } from '@/lib/meetings-db';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;


  const meeting = await getMeetingById(
    Number(id)
  );


  if (!meeting) {
    return Response.json(
      { error: 'Meeting not found' },
      { status: 404 }
    );
  }


  return Response.json(meeting);
}