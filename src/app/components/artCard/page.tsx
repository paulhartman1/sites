'use client';
import React from 'react';
import { Card, Col, Text } from '@nextui-org/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
export default function ArtCard(props: any) {
  return (
  <UserProvider>
      <Card style={{ width: '200px' }}>
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
