'use client';
import React, {useEffect, useState} from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';

import ArtCardEditModal from '../modals/artCardEdit/artCardEditModal';
import ArtCardModal from '../modals/artCard/artCardModal';



export default function ArtCard(props: any) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [border, setBorder] = useState('none');
  const { user } = useUser();

  const image = props.image;

  useEffect(() => {
  if(props.showBorder){
    const color = props.isPrimary ? 'green' : 'black';
    setBorder(`2px solid ${color}`);
  }
}, [props.showBorder])
  return (
   
    <UserProvider>
      <Card
        css={{ width: '200px', display: `${props.display}`, border: `${border}` }}
        onPress={user?.email === 'dave@davidghartman.com' ? () => setShowEditModal(true) : () => setShowModal(true)}
        isPressable={props.isPressable || true}
        borderWeight='bold'
        
      >
        <Card.Image
          src={props.image.url}
          objectFit="cover"
          width="100%"
          height={240}
          alt={props.image.alt}
        />
      </Card>
      <ArtCardEditModal open={showEditModal} image={props.image} onClose={() => setShowEditModal(false)}/>
      <ArtCardModal  open={showModal} image={props.image}  onClose={() => setShowModal(false)}/>

    </UserProvider>
  );
}
