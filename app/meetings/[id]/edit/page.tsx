import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetings-db';
import EditMeetingForm from './EditMeetingForm';



export default async function EditMeetingPage({
 params,
}: {
 params: Promise<{id:string}>
}) {


 const {id}=await params;


 const meetingId=Number(id);


 const meeting =
 await getMeetingById(meetingId);



 if(!meeting){
  notFound();
 }



 return (

  <main className="p-6">

   <h1 className="text-2xl font-bold mb-6">
    Edit Sacrament Meeting
   </h1>


   <EditMeetingForm
    meeting={meeting}
   />


  </main>

 );

}