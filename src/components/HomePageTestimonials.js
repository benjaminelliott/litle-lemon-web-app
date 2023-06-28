import React from 'react';
import { Container, HStack, Heading, VStack } from '@chakra-ui/react'
import TestimonialsCard from './HomePageTestimonialsCard.js';
//import person1 from '../assets/pexels-pixabay-220453.jpg';
//import person2 from '../assets/k2zaltb9.bmp'
//import person3 from '../assets/epwc4khm.bmp'

const testimonials  = [
    {
        user: "bigshoota87",
        title: "awesome",
        rating: 5,
        text: "Tempor ut dolore pariatur elit ea reprehenderit ut ipsum amet aute tempor labore dolore ullamco. Commodo ex id laboris sit consequat occaecat sint sint. Est incididunt ea sint et sint sunt. Veniam consequat nostrud non deserunt veniam non fugiat minim.",
        image: "person1"
    },
    {
        user: "timbuktu22",
        title: "epic",
        rating: 4,
        text: "Consectetur pariatur labore ex quis do tempor. Sunt adipisicing exercitation mollit dolore dolore veniam laboris. Lorem nisi ullamco proident excepteur esse dolore deserunt non ex qui ipsum ea tempor aute. Voluptate occaecat culpa dolore cillum proident culpa esse nulla fugiat sunt sint ut. Ex non commodo occaecat commodo in ad cillum officia id ut voluptate. Enim esse ipsum incididunt labore incididunt sit dolor tempor proident voluptate qui quis.",
        image: "person1"
    },
    {
        user: "stacyannJ86",
        title: "average",
        rating: 3,
        text: "Id ut commodo esse elit mollit id. Ullamco ipsum laboris non nostrud occaecat proident aliqua. Ullamco aliqua occaecat velit cupidatat mollit nisi non amet dolor ad cillum. Deserunt incididunt ullamco culpa pariatur culpa tempor ad sint. Cillum culpa voluptate deserunt et ex quis id laborum laboris exercitation non magna.",
        image: "person1"
    },

];

export default function Testimonials() {
    
    return (
        <Container as="section" className="testimonials" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack pb="50px" justifyContent="space-evenly">
                <Heading className="text-section-title">Testimonials</Heading>
                <HStack className="testimonial-cards">
                {
                    testimonials.map((testimonial) => <TestimonialsCard user={testimonial.user} image={testimonial.image} title={testimonial.title} rating={testimonial.price} text={testimonial.text}/>)
                }
                </HStack>
            </VStack>
        </Container>
    );
}