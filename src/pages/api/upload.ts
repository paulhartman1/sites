import { NextApiRequest, NextApiResponse } from 'next';

import { sql } from '@vercel/postgres';

async function uploadFileData(
  fileName: string,
  fileType: string,
  categoryid?: string | null
) {
  //write to vercel postrgres, image table, just the id
  await sql`INSERT INTO images (id, type) VALUES (${fileName}, ${fileType})`;
  await sql`INSERT INTO imagecategory (imageid) VALUES (${fileName})`;
}

export default async function upload(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'POST':
      await uploadFileData(
        req.query.name as string,
        req.query.type as string
        
      );
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
