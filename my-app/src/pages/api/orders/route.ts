import { getAuthSession } from "@/utils/auth";
import {prisma} from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const session = await getAuthSession();
    if (session){
        try{
            const orders = await prisma.order.findMany();
        }catch(err){
            const error = err as Error;
            return new NextResponse(JSON.stringify({message: error.message}), {status: 500});
        }
    } else 
    {
        return new NextResponse(JSON.stringify({message: "Unauthenticated"}), {status: 401});
    }
   

}
