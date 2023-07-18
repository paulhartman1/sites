'use client';
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
        <RC onChange={props.onChange} value={props.date} tileClassName={'red'} tileDisabled={tileDisabled}/>
    )
}