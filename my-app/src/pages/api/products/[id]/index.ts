import { prisma } from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try{
            const product = await prisma.product.findUnique({
                where:{
                    id: req.query.id as string
                }
            })
            return res.status(200).json(product);
        }catch(err){
            const error = err as Error;
            return res.status(500).json({error: "Fail to fetch single product", details: error.message})
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}