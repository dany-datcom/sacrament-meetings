'use client';

import type { State } from '@/lib/actions';
import { useActionState } from 'react';
import type { SacramentMeeting } from '@/lib/types';
import { updateMeeting } from '@/lib/actions';



const initialState = {
  message: '',
  errors: {},
};



interface Props {
  meeting: SacramentMeeting;
}



export default function EditMeetingForm({
  meeting,
}: Props) {


  const updateMeetingWithId = async (
  prevState: State | undefined,
  formData: FormData
): Promise<State> => {

  return await updateMeeting(
    meeting.id,
    prevState ?? initialState,
    formData
  );

};



  const [
    state,
    formAction,
    isPending
  ] = useActionState(
    updateMeetingWithId,
    initialState
  );



  return (


    <form
      action={formAction}
      className="space-y-4"
    >



      <div>

        <label htmlFor="date">
          Date
        </label>


        <input
          id="date"
          name="date"
          type="date"
          defaultValue={meeting.date}
          aria-describedby="date-error"
          className="border p-2 w-full"
        />


        <div
          id="date-error"
          aria-live="polite"
        >
          {
            state.errors?.date?.map(
              error => (
                <p key={error}>
                  {error}
                </p>
              )
            )
          }
        </div>

      </div>





      <div>

        <label htmlFor="meetingType">
          Meeting Type
        </label>


        <select
          id="meetingType"
          name="meetingType"
          defaultValue={meeting.meetingType}
          className="border p-2 w-full"
        >

          <option value="regular">
            Regular
          </option>

          <option value="testimony">
            Testimony
          </option>

          <option value="stake">
            Stake
          </option>

          <option value="general">
            General
          </option>


        </select>

      </div>






      <div>

        <label htmlFor="presiding">
          Presiding
        </label>


        <input
          id="presiding"
          name="presiding"
          defaultValue={meeting.presiding}
          aria-describedby="presiding-error"
          className="border p-2 w-full"
        />


        <div
          id="presiding-error"
          aria-live="polite"
        >

          {
            state.errors?.presiding?.map(
              error => (
                <p key={error}>
                  {error}
                </p>
              )
            )
          }

        </div>


      </div>






      <div>

        <label htmlFor="conducting">
          Conducting
        </label>


        <input
          id="conducting"
          name="conducting"
          defaultValue={meeting.conducting}
          aria-describedby="conducting-error"
          className="border p-2 w-full"
        />


        <div
          id="conducting-error"
          aria-live="polite"
        >

          {
            state.errors?.conducting?.map(
              error => (
                <p key={error}>
                  {error}
                </p>
              )
            )
          }

        </div>


      </div>






      <div>

        <label htmlFor="openingPrayer">
          Opening Prayer
        </label>


        <input
          id="openingPrayer"
          name="openingPrayer"
          defaultValue={meeting.openingPrayer}
          className="border p-2 w-full"
        />

      </div>






      <div>

        <label htmlFor="closingPrayer">
          Closing Prayer
        </label>


        <input
          id="closingPrayer"
          name="closingPrayer"
          defaultValue={meeting.closingPrayer}
          className="border p-2 w-full"
        />

      </div>





      {/* Required JSON fields */}


      <input
        type="hidden"
        name="openingHymn"
        value={JSON.stringify(meeting.openingHymn)}
      />


      <input
        type="hidden"
        name="sacramentHymn"
        value={JSON.stringify(meeting.sacramentHymn)}
      />


      <input
        type="hidden"
        name="closingHymn"
        value={JSON.stringify(meeting.closingHymn)}
      />


      <input
        type="hidden"
        name="speakers"
        value={JSON.stringify(meeting.speakers)}
      />


      <input
        type="hidden"
        name="wardBusiness"
        value={JSON.stringify(meeting.wardBusiness)}
      />


      <input
        type="hidden"
        name="stakeBusiness"
        value={String(meeting.stakeBusiness)}
      />





      {
        state.message &&
        <p aria-live="polite">
          {state.message}
        </p>
      }





      <button
        disabled={isPending}
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >

        {
          isPending
          ? 'Updating...'
          : 'Update Meeting'
        }

      </button>



    </form>


  );

}