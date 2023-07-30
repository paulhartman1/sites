'use client';
import {
  Grid,
  Text,
  Modal,
  Spacer,
  Image,
  Input,
  Button,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {Image as IMG} from '@/app/types/image';
import Mod from '../modal';


export default function ArtCardModal(props: any) {
  const [menuItems, setMenuItems] = useState([]);

  const imageProps = props.image;
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
        onClose={props.onClose}
       width='500px'
      >
        <Modal.Header>
          <Text h3 id="modal-title">
            {imageProps.name}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2} justify="center" css={{ marginTop: 10 }}>
              <Image src={imageProps.url} alt={imageProps.alt}css={{width:'100%'}}/>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Text>{imageProps.description || 'This is some text'}</Text>
        </Modal.Footer>
      </Modal>
    </UserProvider>
  );
}
