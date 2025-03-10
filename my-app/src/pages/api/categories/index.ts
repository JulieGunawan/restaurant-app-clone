import { prisma } from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";

//FETCH ALL CATEGORIES
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method === 'GET') {
    try{
      const categories = await prisma.category.findMany();
      return res.status(200).json(categories);
    }catch(err){
      const error = err as Error;
      return res.status(500).json({ error: "Fail to fetch categories", details: error.message });
    }   
  } 
  else if (req.method === 'POST') {
    return res.status(200).json({ message: "John Doe" });
  }
  else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}