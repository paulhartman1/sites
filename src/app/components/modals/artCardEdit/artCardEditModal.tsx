'use client';
import {
  Grid,
  Dropdown,
  Modal,
  Spacer,
  Input,
  Button,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ArtCard from '../../artCard/artCard';

export default function ArtCardModal(props: any) {
  const [name, setName] = useState(props.image.name || '');
  const [description, setDescription] = useState(props.image.description ||'');
  const [alt, setAlt] = useState(props.image.alt || '');
  const [menuItems, setMenuItems] = useState([]);
  const [catId, setCatId] = useState(props.image.categoryId || -1);
  const [dropdownText, setDropdownText] = useState('Select a category');
  const [selected, setSelected] = useState(new Set(['text']));

  const handleClose = () => {
    props.onClose();
  };

  const handleSave = () => {
    fetch('/imageCategory', {
      method: 'PUT',
      body: JSON.stringify({ imageid: props.image.id, categoryid: catId }),
    })
      .then(() => {
        fetch('/imageData', {
            method: 'PUT',
            body: JSON.stringify({ id: props.image.id, name: name, description: description, alt: alt }),
          }).then(() => {
            handleClose();
          })
      })
      
      .catch((err) => console.log(err));

     
  };

  const handleSelectionChange = (e: any) => {
    setSelected(e);
    setCatId(e.currentKey);
  };

useEffect(() => {
  setName(props.image.name);
  setDescription(props.image.description);
  setAlt(props.image.alt);
  setCatId(props.image.categoryId);
 
},[menuItems.length])

useEffect(() => {
  console.log(catId);
  catId == undefined ? setDropdownText('Uncategorized') :
  catId === 0 ? setDropdownText('Uncategorized') :
  catId === -1 ? setDropdownText('Select a category') :
  setDropdownText((menuItems[catId] as any).name);
},[catId])

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
              selectionMode="multiple"
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
                    value={name}
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
                    value={description}
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
                    value={alt}
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
