import Calendar from '@/app/components/calendar/page';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';

export default function Events() {

  return <UserProvider><h1>Events</h1></UserProvider>;
}
