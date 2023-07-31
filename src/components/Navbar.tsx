import { Flex, Spacer, HStack, UnorderedList } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <Flex
        as="nav"
        p="10px"
        maxWidth="xxl" pl="125px"  pr="125px"
        align="center"
        justify="space-around">
            <img src="Logo .svg" alt="default"></img>
            <Spacer />
            <UnorderedList
            spacing="30px"
            styleType="none"
            fontWeight="bold">
                <HStack>
                    <a>Home</a>
                    <a>About</a>
                    <a>Menu</a>
                    <a>Order Online</a>
                    <a>Booking</a>
                    <a>Login</a>
                </HStack>
            </UnorderedList>
        </Flex>
    );
}