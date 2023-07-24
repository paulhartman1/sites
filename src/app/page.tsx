'use client';
import React from 'react';
import Nav from './components/nav/page';
import Layout from './components/layout/page';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Home() {
  console.log(process.env.AUTH0_BASE_URL);
  return (
    <UserProvider>
      <Nav />
      <Layout />
    </UserProvider>
  );
}
