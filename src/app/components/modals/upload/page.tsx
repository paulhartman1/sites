'use client';
import { Grid, Dropdown, Modal } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Dropzone from '../../dropzone/page.tsx';
import categories from '../../../../../public/cats.json';

export default function UploadModal(props: any) {
  const [files, setFiles] = useState<any>([]);
  const [images, setImages] = useState([]);
  const [menuItems, setMenuItems] = useState(categories);

  const onDrop = (acceptedFiles: any) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file: any) => {
     
    });
  };

  const handleUpload = (acceptedFiles: any) => {
    setImages(
      acceptedFiles.map((file: Blob | MediaSource) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    setFiles(acceptedFiles);
    acceptedFiles.forEach((file: any) => {
      let formData = new FormData();
      formData.append('file', file.buffer);
      fetch(`api/upload?name=${file.name}&path=${file.preview}`, {
        method: 'POST',
        body: formData,
      });
    });
  };

  // useEffect(() => {
  //   files.forEach((file: any) => {
  //     const { name, buffer } = file;
  //     console.log(file);
  //     fetch(`api/upload?name=${name}&path=${file.preview}`, {
  //       method: 'POST',
  //       body: file,
  //     });
  //   });
  // }, [files]);

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
              <Dropzone onDrop={handleUpload} files={images} />
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
