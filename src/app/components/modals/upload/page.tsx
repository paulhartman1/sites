'use client';
import { Grid, Dropdown, Modal } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Dropzone from '../../dropzone/page.tsx';
import categories from '../../../../../public/cats.json';
import storage from '@/lib/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function UploadModal(props: any) {
  const [files, setFiles] = useState<any>([]);
  const [images, setImages] = useState([]);
  const [menuItems, setMenuItems] = useState(categories);

  const testUploadFirebase = async (acceptedFiles: any) => {
    const fileExt = acceptedFiles[0].name.split('.').pop();
    const fileName = uuidv4();
    const storageRef = ref(storage,  `${fileName}.${fileExt}`);
    uploadBytes(storageRef, acceptedFiles[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }).catch((error) => {
      console.log(error);
    });

    console.log('posting vercel');
    fetch(`api/upload?name=${fileName}&type=${fileExt}&categoryid=1`, {
      method: 'POST',
      body: acceptedFiles[0],
    });

    setImages(
      acceptedFiles.map((file: Blob | MediaSource) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const handleClose = () => {
    props.onClose();
    setFiles([]);
    setImages([]);
  };

  return (
    <UserProvider>
      <Modal
        width="100%"
        closeButton
        aria-labelledby="modal-title"
        open={props.open}
        onClose={handleClose}
        fullScreen
      >
        <Modal.Body>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} md={6}>
              <Dropzone onDrop={testUploadFirebase} files={images} />
            </Grid>
            <Grid xs={12} md={6}>
              {files.length > 0 && (
                <Dropdown>
                  <Dropdown.Button flat>
                    Select a category - or don't
                  </Dropdown.Button>
                  <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
                    {(item: any) => (
                      <Dropdown.Item
                        key={item.key}
                        color={item.key === 'delete' ? 'error' : 'default'}
                      >
                        {item.name}
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Grid>
          </Grid.Container>
        </Modal.Body>
      </Modal>
    </UserProvider>
  );
}
