import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            //these as string vs ! is the same thing to force type to be string instead of undefined
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
}