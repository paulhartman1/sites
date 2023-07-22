'use client';
import { Modal } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Calendar from '@/app/components/calendar/page';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// export interface CalendarModalProps {
//     open: boolean;
//     onClose(): void;
//     onChange(date?:Date): void;
//     date?: Date;
// }



export default function CalendarModal(props: any) {
  const [events, setEvents] = useState([]);
  

  return (
    <UserProvider>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.open}
        onClose={props.onClose}
      >
        <Modal.Body>
          <Calendar onChange={props.onChange} date={props.date} />
        </Modal.Body>
      </Modal>
    </UserProvider>
  );
}
