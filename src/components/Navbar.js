import { Flex, Spacer, HStack, UnorderedList, ListItem } from "@chakra-ui/react"
import { Link, Router } from "@reach/router";
import Homepage from './Homepage.js'
import BookingPage from './BookingPage.js'
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
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/order">Order Online</Link>
                        <Link to="/BookingPage">Booking</Link>
                        <Link to="/login">Login</Link>
                    </HStack>
                </UnorderedList>
            </Flex>
            <Router>
                        <Homepage path="/" />
                        <BookingPage path="/BookingPage" />

                    </Router>
        </div>
    );
}

export default Navbar;