'use client';
import React from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
export default function ArtCard(props: any) {
  return (
    <UserProvider>
      <Card
        css={{ width: '200px', display: `${props.display}` }}
        onPress={
          props.isPressable
            ? () => window.open(props.image, '_blank')
            : () => {}
        }
        isPressable={props.isPressable || true}
      >
        <Card.Image
          src={props.image}
          objectFit="cover"
          width="100%"
          height={240}
          alt={props.title}
        />
      </Card>
    </UserProvider>
  );
}
