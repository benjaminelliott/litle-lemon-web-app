import { Container, Heading, HStack, VStack, Text, Square, Card } from '@chakra-ui/react'
import Hero from './Hero.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js'
import restaurantFood from '../assets/restauranfood.jpg';

function Main() {
    return (
        <div>
            <Hero />
            <Specials />
            <Testimonials />
        </div>
    );
}

export default Main;