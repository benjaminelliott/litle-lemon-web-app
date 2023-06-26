import React from 'react';
import { Container, HStack, Heading, VStack } from '@chakra-ui/react'
import TestimonialsCard from './TestimonialsCard.js';

const testimonials  = [{
    user: "bigshoota87",
    title: "awesome",
    rating: 4,
    text: "$4.50"
}];

export default function Testimonials() {
    
    return (
        <div>
            <Container as="section" className="specials" maxWidth="xxl" pl="125px"  pr="125px" pt="50px" pb="50px">
                <VStack pb="50px" justifyContent="space-evenly">
                    <Heading className="text-section-title">Testimonials</Heading>
                    <HStack>
                    {
                        testimonials.map((testimonial) => <TestimonialsCard user={testimonial.user} image={testimonial.image} title={testimonial.title} rating={testimonial.price} text={testimonial.text}/>)
                    }
                    </HStack>
                </VStack>
            </Container>
        </div>
    );
}