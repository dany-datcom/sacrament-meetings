'use client';


import { useActionState } from 'react';
import { createMeeting } from '@/lib/actions';



const initialState = {
  message: '',
  errors: {},
};



export default function CreateMeetingPage() {


  const [
    state,
    formAction,
    isPending
  ] = useActionState(
    createMeeting,
    initialState
  );



  return (

    <main className="p-6">


      <h1 className="text-2xl font-bold mb-6">
        Create Sacrament Meeting
      </h1>



      <form
        action={formAction}
        className="space-y-4"
      >



        <div>

          <label
            htmlFor="date"
          >
            Date
          </label>


          <input
            id="date"
            type="date"
            name="date"
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

          <label
            htmlFor="meetingType"
          >
            Meeting Type
          </label>


          <select
            id="meetingType"
            name="meetingType"
            aria-describedby="meetingType-error"
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


          <div
            id="meetingType-error"
            aria-live="polite"
          />

        </div>




        <div>

          <label
            htmlFor="presiding"
          >
            Presiding
          </label>


          <input
            id="presiding"
            name="presiding"
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

          <label
            htmlFor="conducting"
          >
            Conducting
          </label>


          <input
            id="conducting"
            name="conducting"
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

          <label
            htmlFor="openingPrayer"
          >
            Opening Prayer
          </label>


          <input
            id="openingPrayer"
            name="openingPrayer"
            aria-describedby="openingPrayer-error"
            className="border p-2 w-full"
          />

        </div>




        <div>

          <label
            htmlFor="closingPrayer"
          >
            Closing Prayer
          </label>


          <input
            id="closingPrayer"
            name="closingPrayer"
            aria-describedby="closingPrayer-error"
            className="border p-2 w-full"
          />

        </div>




        <input
          type="hidden"
          name="openingHymn"
          value={JSON.stringify({
            number:1,
            title:"Opening Hymn"
          })}
        />


        <input
          type="hidden"
          name="sacramentHymn"
          value={JSON.stringify({
            number:1,
            title:"Sacrament Hymn"
          })}
        />


        <input
          type="hidden"
          name="closingHymn"
          value={JSON.stringify({
            number:1,
            title:"Closing Hymn"
          })}
        />


        <input
          type="hidden"
          name="speakers"
          value="[]"
        />


        <input
          type="hidden"
          name="wardBusiness"
          value="[]"
        />


        <input
          type="hidden"
          name="stakeBusiness"
          value="false"
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
            ? 'Creating...'
            : 'Create Meeting'
          }

        </button>



      </form>


    </main>

  );

}