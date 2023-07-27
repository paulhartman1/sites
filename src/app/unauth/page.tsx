import Nav from '../../app/components/nav/page';
import Layout from '../../app/components/layout/page';
import Event from '../components/event/page';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Event as EventType } from '../components/event/types';
import { google } from 'googleapis';



export default async function PerformaceSchedule() {
  

  return (
    <UserProvider>
      <Nav />
      <Layout
        className="unauth-body"
        title="Unauthorized"
        description="You are not authorized to view this page."
        
      />
    </UserProvider>
  );
}
