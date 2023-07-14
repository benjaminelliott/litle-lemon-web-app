import { Container } from '@chakra-ui/react'
import Hero from './HomePageHero';
import Specials from './HomePageSpecials';
import Testimonials from './HomePageTestimonials'

export default function HomePage() {

    return (
        <Container as="section" className="home" m="0" p="0">
            <Hero />
            <Specials />
            <Testimonials />
        </Container>
    )
};