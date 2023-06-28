import { Flex, Spacer, HStack, UnorderedList } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { Link as ReachLink } from "@reach/router";
import { Router } from "@reach/router";
import HomePage from './HomePage'
import BookingPage from './BookingPage'
import logo from '../assets/Logo.svg';

function Navbar() {
    return (
        <div>
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
                        <Link as={ReachLink} to="homepage">Home</Link>
                        <Link as={ReachLink} to="about">About</Link>
                        <Link as={ReachLink} to="menu">Menu</Link>
                        <Link as={ReachLink} to="order">Order Online</Link>
                        <Link as={ReachLink} to="bookingpage">Booking</Link>
                        <Link as={ReachLink} to="login">Login</Link>
                    </HStack>
                </UnorderedList>
            </Flex>
            <Router>
                <HomePage path="/homepage" />
                <BookingPage path="/bookingpage" />
            </Router>
        </div>
    );
}

export default Navbar;