import { useState } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';

interface Props {
    time: string;
}

export const BookingSlot = (props: Props) => {
    return (
        <li className="booking-slot">
            <span>{props.time}</span>
        </li>
    )
};