import { getAuthSession } from "@/utils/auth";
import {prisma} from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const session = await getAuthSession(req,res);
        if (session){
            try{
                if(session.user.isAdmin){
                    const orders = await prisma.order.findMany();
                    return res.status(200).json(orders);    
                } else {
                    const orders  = await prisma.order.findMany({
                        where:{
                            userEmail: session.user.email!
                        }
                    })
                    return res.status(200).json(orders);
                }           
            }catch(err){
                const error = err as Error;
                return res.status(500).json({error: "Fail to fetch orders", details:error.message})
            }
        } else 
        {
            return res.status(401).json({error: "Unauthenticated"});
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }    
    
}
