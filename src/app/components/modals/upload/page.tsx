'use client';
import { Grid, Dropdown, Modal, Text, Button } from '@nextui-org/react';
import React, { useEffect, useInsertionEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Dropzone from '../../dropzone/page.tsx';
import storage from '@/lib/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function UploadModal(props: any) {
  const [files, setFiles] = useState<any>([]);
  const [images, setImages] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [downloadURL, setDownloadURL] = useState('');
  const [dropdownText, setDropdownText] = useState('Select a category');
  const [catId, setCatId] = useState(-1);
  const [selected, setSelected] = useState<any>('');

  const handleUpload = async () => {
    files.forEach((file: any) => {
      const fileExt = file.name.split('.').pop();
      const fileName = uuidv4();
      const storageRef = ref(storage, `${fileName}.${fileExt}`);
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            setDownloadURL(downloadURL);
            fetch(
              `api/upload?name=${fileName}&type=${fileExt}&categoryid=${catId}&url=${downloadURL}`,
              {
                method: 'POST',
                body: file,
              }
            );
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const testUploadFirebase = async (acceptedFiles: any) => {
    setFiles(acceptedFiles);
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

  const handleSelectionChange = (e: any) => {
    setSelected(e);
    setCatId(e.currentKey);
    setDropdownText((menuItems[e.currentKey] as any).name);
  };

  useEffect(() => {
    fetch('/category')
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
      });
  }, [menuItems.length]);

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
              <Dropdown>
                <Dropdown.Button flat css={{ tt: 'capitalize' }}>
                  {dropdownText}{' '}
                </Dropdown.Button>
                <Dropdown.Menu
                  items={menuItems}
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={handleSelectionChange}
                >
                  {(item: any) => (
                    <Dropdown.Item
                      key={item.key}
                      color={item.key === 'delete' ? 'error' : 'default'}
                      css={{ tt: 'capitalize' }}
                    >
                      {item.name}
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          {files.length > 0 && catId > -1 && (
            <Button auto onClick={handleUpload}>
              Upload
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </UserProvider>
  );
}
