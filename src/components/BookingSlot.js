import { React, useState } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';

export default function BookingSlot(props) {

    const [ booking, setBooking ] = useState( [ {time: "", guests: ""}] )

    function updateBooking() {
        const newBooking = {...booking};
        newBooking.time = props.time;
        newBooking.guests = props.guest;
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

