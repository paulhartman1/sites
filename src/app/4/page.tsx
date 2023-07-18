'use client'

import React, {useState} from 'react';
import Nav from '../../app/components/nav/page';
import Layout from '../../app/components/layout/page';
import Event from '../components/event/page';
import _events from '../../../public/events.json';

export default function PerformaceSchedule() {

    const [events, setEvents] = useState(_events);
    return (
        <>
        <Nav />
        <Layout bodyData={events.map((event,i) => {
            return (
                <Event key={i} event={event}/>
            )
        })}/>
        </>
    );
    }
