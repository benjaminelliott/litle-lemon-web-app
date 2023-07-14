import React from 'react'
import { Flex, Spacer, HStack, UnorderedList } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import logo from '../assets/Logo.svg';

function Navbar() {
    return (
        <Flex
        as="nav"
        p="10px"
        maxWidth="xxl" pl="125px"  pr="125px"
        align="center"
        justify="space-around">
            <img src={logo} alt="default"></img>
            <Spacer />
            <UnorderedList
            spacing="30px"
            styleType="none"
            fontWeight="bold">
                <HStack>
                    <Link to="homepage">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="menu">Menu</Link>
                    <Link to="order">Order Online</Link>
                    <Link to="bookingpage">Booking</Link>
                    <Link to="login">Login</Link>
                </HStack>
            </UnorderedList>
        </Flex>
    );
}

export default Navbar;