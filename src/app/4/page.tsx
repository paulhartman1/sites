import Nav from '../../app/components/nav/page';
import Layout from '../../app/components/layout/page';
import Event from '../components/event/page';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Event as EventType } from '../components/event/types';
import { google } from 'googleapis';



const getEvents = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials:{
      client_email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY,
     
    },
    scopes: [
      // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
  });

  const calendar = google.calendar({ version: 'v3', auth: auth });
  const json = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
  });


  const rtn: EventType[] = [];
  json.data.items!.forEach((item: any) => {
    rtn.push({
      date: new Intl.DateTimeFormat("en-US").format(new Date(item.start!.dateTime)),
      title: item.summary || 'Private Event',
      location: item.location || '',
      time: `${new Date(item.start!.dateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${new Date(item.end!.dateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`,
      description: item.description || '',
    });
  }
 
  );
 

  return rtn.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};

export default async function PerformaceSchedule() {
  const events = await getEvents();

  return (
    <UserProvider>
      <Nav />
      <Layout
        className="events-body"
        bodyData={events.map((event: any, i: any) => {
          return <Event key={i} event={event} />;
        })}
      />
    </UserProvider>
  );
}
