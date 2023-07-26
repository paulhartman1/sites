import { NextApiRequest, NextApiResponse } from 'next';

import { sql } from '@vercel/postgres';

async function uploadFileData(
  fileName: string,
  fileType: string,
  categoryid?: string | null
) {
  //write to vercel postrgres, image table, just the id
  await sql`INSERT INTO images (id, type) VALUES (${fileName}, ${fileType})`;

  if(categoryid === 'null' || categoryid === undefined) categoryid = null;

    await sql`INSERT INTO imagecategory (imageid, categoryid) VALUES (${fileName}, ${categoryid})`
 
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
        req.query.type as string,
        req.query.categoryid as string || null
      );
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
