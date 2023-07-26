import { Storage } from '@google-cloud/storage';

export const createWriteStream = (
  filename: string,
  contentType?: string,
  creds: any = {}
) => {
  const storage = new Storage({
    projectId: creds.projectId,
    credentials: {
      client_email: creds.client_email,
      private_key: creds.private_key,
    },
  });
  const bucket = storage.bucket(creds.bucket);
  const ref = bucket.file(filename);

  const stream = ref.createWriteStream({
    gzip: true,
    contentType: contentType,
  });

  return stream;
};
