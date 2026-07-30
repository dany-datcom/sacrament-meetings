import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { getUserByEmail } from "@/lib/meetings-db";



export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({

  ...authConfig,


  providers:[
    Credentials({

      async authorize(credentials){

        const parsed =
        z.object({
          email:z.string().email(),
          password:z.string().min(6)
        })
        .safeParse(credentials);


        if(!parsed.success)
          return null;


        const user =
        await getUserByEmail(
          parsed.data.email
        );


        if(!user)
          return null;


        const passwordMatch =
        await bcrypt.compare(
          parsed.data.password,
          user.passwordHash
        );


       if(passwordMatch){

  return {
    id: String(user.id),
    name: user.name,
    email: user.email
  };

}

        return null;
      }

    })
  ]

});