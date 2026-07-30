"use client";


import { useActionState } from "react";
import { authenticate } from "@/lib/actions";


export function LoginForm(){

const [
errorMessage,
formAction,
isPending
]=useActionState(
authenticate,
undefined
);


return (

<form action={formAction}
className="space-y-4">


<input
name="email"
type="email"
placeholder="Email"
required
className="border p-2"
/>


<input
name="password"
type="password"
placeholder="Password"
required
className="border p-2"
/>


<button
disabled={isPending}
className="bg-blue-500 text-white p-2"
>

{
isPending
?"Signing in..."
:"Sign In"
}

</button>


{
errorMessage &&
<p>{errorMessage}</p>
}


</form>

)

}