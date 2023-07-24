import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as randomUUID } from 'uuid';
import { Storage } from '@google-cloud/storage';
import { sql } from '@vercel/postgres';
const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY,
  },
});
const fileName = randomUUID();
async function uploadFile(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { buffer } = req.body;

    const bucket = storage.bucket(
      process.env.GOOGLE_CLOUD_STORAGE_BUCKET || 'nextui'
    );

    const blob = bucket.file(fileName);

    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on('error', (err) => {
      console.log(err);
    });

    blobStream
      .on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        console.log(publicUrl);
      })
      .on('error', (err) => {
        console.log(err);
      });

    blobStream.end(buffer);

    res.status(200).json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
}

async function uploadFileData() {
  //write to vercel postrgres, image table, just the id

  await sql`INSERT INTO images (id) VALUES (${fileName})`;
}

export default async function upload(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case 'POST':
      await uploadFile(req, res);
      await uploadFileData();
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
