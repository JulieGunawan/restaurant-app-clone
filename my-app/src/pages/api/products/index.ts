import { prisma } from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";


//FETCH ALL CATEGORIES
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const url = new URL(req.url || '', `http://localhost:3000`);
    const searchParams = url.searchParams;
    const category = searchParams?.get('category');

    
  if(req.method === 'GET') {
    try{
      const products = await prisma.product.findMany({
        where:{         
           ...(category  ? {catSlug: category} : {isFeatured: true})
        }
      });
      return res.status(200).json(products);
    }catch(err){
      const error = err as Error;
      return res.status(500).json({ error: "Fail to fetch products", details: error.message });
    }   
  } 
  else if (req.method === 'POST') {
    return res.status(200).json({ message: "John Doe" });
  }
  else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}