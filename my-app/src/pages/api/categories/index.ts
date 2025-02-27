import { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method === 'GET') {
    return res.status(200).json({ message: "Hello" });
  } 
  else if (req.method === 'POST') {
    return res.status(200).json({ message: "John Doe" });
  }
  else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}