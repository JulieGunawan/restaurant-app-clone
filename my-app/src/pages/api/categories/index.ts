import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
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
      return res.status(500).json({ error: "Fail to fetch", details: error.message });
    }   
  } 
  else if (req.method === 'POST') {
    return res.status(200).json({ message: "John Doe" });
  }
  else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}