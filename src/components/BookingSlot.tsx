import { useState } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';

interface Slot {
    time: number;
    guests: number;
}

export default function BookingSlot(props: Slot) {

    const [ booking, setBooking ] = useState( {time: 0, guests: 0} )

    function updateBooking() {
        const newBooking = {...booking};
        newBooking.time = props.time;
        newBooking.guests = props.guests;
        setBooking(newBooking);
    }
    return (

        <div>
            <p>{booking.guests}</p>
            <p>{booking.time}</p>
            <button onClick={updateBooking}>Update bookings</button>
        </div>
    )
};

