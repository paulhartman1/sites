'use client';
import { UserProvider } from "@auth0/nextjs-auth0/client";
import RC from "react-calendar"
import 'react-calendar/dist/Calendar.css';


enum TileClasses {
    'BOOKED',
    'AVAILABLE',
    'UNAVAILABLE'
}

function tileDisabled({date, view}:any) {
    return false;
}


export default function Calendar(props:any) {
   

    return (
        <UserProvider>
        <RC onChange={props.onChange} value={props.date} tileClassName={'red'} tileDisabled={tileDisabled}/>
        </UserProvider>
    )
}