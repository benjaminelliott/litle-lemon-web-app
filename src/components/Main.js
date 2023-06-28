import React from 'react'
import { Container }  from '@chakra-ui/react'
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js';

export default function Main() {

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage />
        </Container>
    );
}