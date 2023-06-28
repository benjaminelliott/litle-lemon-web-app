import React from "react";
import { Container } from '@chakra-ui/react'
import Hero from './HomePageHero.js';
import Specials from './HomePageSpecials.js';
import Testimonials from './HomePageTestimonials.js'

export default function HomePage() {

    return (
        <Container as="section" className="home" m="0" p="0">
            <Hero />
            <Specials />
            <Testimonials />
        </Container>
    )
};