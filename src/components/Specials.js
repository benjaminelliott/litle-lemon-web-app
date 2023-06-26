import React from 'react';
import { Container, HStack, Heading, Button, Spacer } from '@chakra-ui/react'
import SpecialsCard from './SpecialsCard.js';
import restaurantFood from  '../assets/restauranfood.jpg'


 const specials  = [{
    image: restaurantFood,
    title: "Greek Salad",
    price: "$4.50",
    text:  "Non anim cillum ullamco duis aliqua. Proident quis ad dolore dolor labore officia Lorem.",
    delivery: "",
    include: true
},
{
    image: restaurantFood,
    title: "Greek Salad",
    price: "$4.50",
    text:  "Non anim cillum ullamco duis aliqua. Proident quis ad dolore dolor labore officia Lorem.",
    delivery: "",
    include: true
}];

export default function Specials() {
    
    return (
        <div>
            <Container as="section" className="specials" maxWidth="xxl" pl="125px"  pr="125px" pt="50px" pb="50px">
                <HStack pb="50px" justifyContent="space-evenly">
                    <Heading className="text-section-title">Specials</Heading>
                    <Spacer></Spacer>
                    <Button className="button button-dark" width="33%" height="50px" borderRadius={16}>Online Menu</Button>
                </HStack>
                <HStack>
                    {
                        specials.map((special) => special.include ? <SpecialsCard image={special.image} title={special.title} price={special.price} text={special.text}/> : "")
                    }
                </HStack>
            </Container>
        </div>
    );
}