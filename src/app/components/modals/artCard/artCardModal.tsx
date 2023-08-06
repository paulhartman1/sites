'use client';
import { Grid, Text, Modal, Image } from '@nextui-org/react';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function ArtCardModal(props: any) {

  return (
    <UserProvider>
      <Modal
        closeButton={false}
        blur
        aria-labelledby="modal-title"
        open={props.open}
        onClose={props.onClose}
      >
        <Modal.Header>
          <Text h3>
            {props.image.name}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2} justify="center" >
            <Image
              src={props.image.url}
              alt={props.image.alt}
            />
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Text>{props.image.description}</Text>
        </Modal.Footer>
      </Modal>
    </UserProvider>
  );
}
