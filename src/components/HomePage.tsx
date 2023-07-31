import { Container } from '@chakra-ui/react'
import { Hero } from './HomePageHero';
import { Specials } from './HomePageSpecials';
import { Testimonials } from './HomePageTestimonials'

export const HomePage = () => {

    return (
        <Container as="section" className="home" m="0" p="0" w="100vw">
            <Hero />
            <Specials />
            <Testimonials />
        </Container>
    )
};