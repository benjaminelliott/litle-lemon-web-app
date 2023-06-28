import { Container, Heading, HStack, VStack, Text, Square, Card } from '@chakra-ui/react'
import HomePage from './HomePage.js'
import Navbar from './Navbar.js'
import restaurantFood from '../assets/restauranfood.jpg';
import BookingPage from './BookingPage.js';

function Main() {

    return (
        <div>
            <Container as="section" className="main"  maxWidth="xxl" p="0">
                <HomePage />
                <BookingPage />
            </Container>
        </div>
    );
}

export default Main;