'use client';
import React, {useEffect, useState} from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import ArtCardModal from '../modals/artCard/page';


export default function ArtCard(props: any) {
  const [showModal, setShowModal] = useState(false);
  const [border, setBorder] = useState('none');
  useEffect(() => {
    console.log(props);
  if(props.showBorder){
    const color = props.isPrimary ? 'green' : 'black';
    setBorder(`2px solid ${color}`);
  }
}, [props.showBorder])
  return (
   
    <UserProvider>
      <Card
        css={{ width: '200px', display: `${props.display}`, border: `${border}` }}
        onPress={
          props.isPressable
            ? () => setShowModal(true)
            : () => {}
        }
        isPressable={props.isPressable || true}
        borderWeight='bold'
        
      >
        <Card.Image
          src={props.image}
          objectFit="cover"
          width="100%"
          height={240}
          alt={props.title}
        />
      </Card>
      <ArtCardModal open={showModal} image={props.image} imageId={props.imageId} onClose={() => setShowModal(false)}/>
    </UserProvider>
  );
}
