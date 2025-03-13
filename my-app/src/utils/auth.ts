import { getServerSession, NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./connect";
import { NextApiRequest, NextApiResponse } from "next";

declare module "next-auth" {
    interface Session {
        user: User & {
            isAdmin: boolean
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: boolean
    }
}
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session:{
        strategy:"jwt"
    },
    providers: [
        GoogleProvider({
            //these as string vs ! is the same thing to force type to be string instead of undefined
            // clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks:{
        async session({token, session}){
            if(token){
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        async jwt({token}){
            const userInDB = await prisma.user.findUnique({
                where: {
                    email: token.email!
                }
            })
            token.isAdmin = userInDB?.isAdmin || false;
            return token
        }
    }
}

export const getAuthSession = (req?:NextApiRequest, res?:NextApiResponse) => {
    if (req && res){
        return getServerSession(req, res, authOptions)
    } else {
        return getServerSession(authOptions)
    }
}