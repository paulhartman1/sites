'use client'

import React, {useState} from 'react';
import Nav from '../../app/components/nav/page';
import Layout from '../../app/components/layout/page';
import Event from '../components/event/page';
import _events from '../../../public/events.json';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function PerformaceSchedule() {

    const [events, setEvents] = useState(_events);
    return (
        <UserProvider>
        <Nav />
        <Layout className='events-body' bodyData={events.map((event,i) => {
            return (
                <Event key={i} event={event}/>
            )
        })} />
        </UserProvider>
    );
    }
