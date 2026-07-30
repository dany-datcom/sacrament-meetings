'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { auth } from "@/auth";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

import {
  addMeeting,
  updateMeeting as updateMeetingDB,
  deleteMeeting as deleteMeetingDB,
} from '@/lib/meetings-db';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
){

  try{

    await signIn(
      "credentials",
      formData
    );


  }catch(error){

    if(error instanceof AuthError){

      switch(error.type){

        case "CredentialsSignin":

          return "Invalid email or password.";


        default:

          return "Something went wrong.";

      }

    }


    throw error;

  }

}



const MeetingFormSchema = z.object({

  date: z.string().min(1),

  meetingType: z.enum([
    'testimony',
    'regular',
    'stake',
    'general'
  ]),

  presiding: z.string().min(1),

  conducting: z.string().min(1),

  announcements: z.array(
    z.string()
  ).optional(),


  openingHymn: z.object({
    number: z.number(),
    title: z.string()
  }),


  openingPrayer: z.string().min(1),


  wardBusiness: z.array(
    z.object({
      description: z.string()
    })
  ),


  stakeBusiness: z.boolean(),


  sacramentHymn: z.object({
    number: z.number(),
    title: z.string()
  }),


  speakers: z.array(
    z.object({
      name: z.string(),
      topic: z.string(),
      type: z.enum([
        'speaker',
        'musical-number'
      ])
    })
  ),


  closingHymn: z.object({
    number: z.number(),
    title: z.string()
  }),


  closingPrayer: z.string().min(1),

});



// State returned to forms

export type State = {

  message?: string;

  errors?: {
    [key:string]: string[];
  };

};



// Convert FormData

function parseMeetingFormData(
  formData: FormData
) {


  return {


    date:
      formData.get('date') as string,


    meetingType:
      formData.get('meetingType') as
      'testimony' |
      'regular' |
      'stake' |
      'general',


    presiding:
      formData.get('presiding') as string,


    conducting:
      formData.get('conducting') as string,


   announcements:
  (() => {

    const value =
      formData.get('announcements');

    if (!value) return [];

    const parsed =
      JSON.parse(value as string);

    return Array.isArray(parsed)
      ? parsed
      : [];

  })(),



    openingHymn:
formData.get('openingHymn')
? JSON.parse(
    formData.get('openingHymn') as string
  )
: {
 number:1,
 title:'Opening Hymn'
},



    openingPrayer:
      formData.get('openingPrayer') as string,



   wardBusiness:
  (() => {
    const value = formData.get('wardBusiness');

    if (!value) return [];

    const parsed = JSON.parse(value as string);

    return Array.isArray(parsed)
      ? parsed
      : [];

  })(),



    stakeBusiness:
      formData.get('stakeBusiness') === 'true',



    sacramentHymn:
      JSON.parse(
        formData.get('sacramentHymn') as string
      ),



   speakers:
formData.get('speakers')
? JSON.parse(
    formData.get('speakers') as string
  )
: [],


    closingHymn:
      JSON.parse(
        formData.get('closingHymn') as string
      ),



    closingPrayer:
      formData.get('closingPrayer') as string,


  };

}


async function requireOwner(){

const session = await auth();


if(!session?.user){

throw new Error(
"Not authenticated"
);

}


return session;

}

// CREATE

export async function createMeeting(
  prevState: State | undefined,
  formData: FormData
): Promise<State> {
  await requireOwner();


  const rawData =
    parseMeetingFormData(formData);



  const validatedFields =
    MeetingFormSchema.safeParse(rawData);



 if (!validatedFields.success) {

  console.log(
    "ZOD ERROR:",
    JSON.stringify(
      validatedFields.error.flatten(),
      null,
      2
    )
  );

  return {
    message: 'Validation failed',
    errors: validatedFields.error.flatten().fieldErrors,
  };
}



  try {


    await addMeeting(
      validatedFields.data
    );


  } catch(error) {


    console.error(
      'Create meeting error:',
      error
    );


    return {

      message:
      'Unable to create meeting. Please try again.'

    };


  }



  revalidatePath('/meetings');

  redirect('/meetings');

}




// UPDATE

export async function updateMeeting(
  id:number,
  prevState: State,
  formData: FormData
): Promise<State> {
  await requireOwner();



  const rawData =
    parseMeetingFormData(formData);



  const validatedFields =
    MeetingFormSchema.safeParse(rawData);

    console.log(
  "RAW DATA RECEIVED:",
  JSON.stringify(rawData, null, 2)
);



  if(!validatedFields.success){


    return {

      message:
      'Validation failed',


      errors:
      validatedFields.error.flatten()
      .fieldErrors,

    };

  }




  try {


    await updateMeetingDB(
      id,
      validatedFields.data
    );


  }catch(error){


    console.error(
      'Update meeting error:',
      error
    );


    return {

      message:
      'Unable to update meeting. Please try again.'

    };

  }




  revalidatePath('/meetings');

  redirect('/meetings');

}



// DELETE

export async function deleteMeeting(
  id:number
){

  await requireOwner();
  try{


    await deleteMeetingDB(id);



  }catch(error){


    console.error(
      'Delete meeting error:',
      error
    );


  throw new Error(
  'Invalid meeting data'
);

  }



  revalidatePath('/meetings');

  redirect('/meetings');


}