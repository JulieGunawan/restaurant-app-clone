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
                    const body = await req.body.json();
                    await prisma.order.update({
                        where: {
                            id: req.query.id as string
                        },
                        data: {
                            status: body
                        }
                    });
                    return res.status(200).json({message:"Order updated"});    
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
