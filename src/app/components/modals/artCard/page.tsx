'use client';
import {
  Grid,
  Dropdown,
  Modal,
  Spacer,
  Image,
  Input,
  Button,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import storage from '@/lib/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ArtCard from '../../artCard/page';

export default function ArtCardModal(props: any) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [alt, setAlt] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [catId, setCatId] = useState(-1);
  const [dropdownText, setDropdownText] = useState('Select a category');
  const [selected, setSelected] = useState(new Set(['text']));

  const handleClose = () => {
    props.onClose();
  };

  const handleSave = () => {
    fetch('/imageCategory', {
      method: 'PUT',
      body: JSON.stringify({ imageid: props.imageId, categoryid: catId }),
    })
      .then(() => {
        fetch('/imageData', {
            method: 'PUT',
            body: JSON.stringify({ id: props.imageId, name: name, description: description, alt: alt }),
          }).then(() => {
            handleClose();
          })
      })
      
      .catch((err) => console.log(err));

     
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
        closeButton
        aria-labelledby="modal-title"
        open={props.open}
        onClose={handleClose}
        width="60em"
      >
        <Modal.Body>
          <Dropdown>
            <Dropdown.Button
              flat
              css={{ tt: 'capitalize', width: '30%', margin: '0 auto' }}
            >
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
          <Grid.Container gap={2} justify="center" css={{ marginTop: 10 }}>
            <Grid xs={6} justify="center">
              <ArtCard image={props.image} alt={alt} isPressable={false} />
            </Grid>
            <Grid xs={6} justify="center">
              <Grid.Container gap={2}>
                <Grid>
                  <Input
                    underlined
                    clearable
                    width="25em"
                    labelPlaceholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Spacer y={2} />
                  <Input
                    underlined
                    clearable
                    width="25em"
                    labelPlaceholder="Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <Spacer y={2} />
                  <Input
                    underlined
                    clearable
                    width="25em"
                    labelPlaceholder="Alt"
                    onChange={(e) => {
                      setAlt(e.target.value);
                    }}
                  />
                </Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
          <Button
            shadow
            bordered
            color="primary"
            onPress={() =>
              handleSave()
            }
          >
            Save
          </Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </UserProvider>
  );
}
