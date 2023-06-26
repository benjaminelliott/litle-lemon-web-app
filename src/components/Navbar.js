import { Flex, Spacer, HStack, UnorderedList, ListItem } from "@chakra-ui/react"
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
                        <ListItem><a href="">Home</a></ListItem>
                        <ListItem><a href="">About</a></ListItem>
                        <ListItem><a href="">Menu</a></ListItem>
                        <ListItem><a href="">Reservations</a></ListItem>
                        <ListItem><a href="">Order Online</a></ListItem>
                        <ListItem><a href="">Login</a></ListItem>
                    </HStack>
                </UnorderedList>
            </Flex>
        </div>
    );
}

export default Navbar;