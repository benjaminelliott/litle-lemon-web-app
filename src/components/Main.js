import { React, useState } from 'react'
import { Container }  from '@chakra-ui/react'
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js';

export default function Main() {

    const [availableTimes, setAvailableTimes] = useState(new Array( "5:00", "6:00", "7:00", "8:00", "9:00", "10:00"));
    const updateTimes = (k,v) => {
        setAvailableTimes(new Array(availableTimes.set(k,v)));
    }

    const availableTimesList = availableTimes.array() => (

    )

    //https://www.pluralsight.com/guides/passing-state-of-parent-to-child-component-as-props ***

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage />
        </Container>
    );
}