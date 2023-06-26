import { Container, Heading, VStack, Flex, Text, Button, Center, Square } from '@chakra-ui/react'
import restaurantFood from '../assets/restauranfood.jpg';

function Hero() {
    return (
        <div>
            <Container as="section" className="hero">
                <Flex maxWidth="xxl" pl="125px"  pr="125px" pt="50px" pb="50px">
                    <Center
                    flex="1"
                    justifyContent="flex-start">
                        <VStack alignItems="left" spacing={5}>
                            <Heading class='title title-display'>Little Lemon</Heading>
                            <Heading class="title title-sub">Chicago</Heading>
                            <Text class="text text-paragraph">Incididunt exercitation sint nostrud in do duis mollit labore mollit excepteur. Sit ea fugiat anim magna laborum consectetur laboris deserunt adipisicing. Esse exercitation nisi cupidatat do. Sit id labore eiusmod magna ex Lorem velit. Do cupidatat reprehenderit sunt nisi non ex cupidatat.</Text>
                            <Button width="33%" height="50px" borderRadius={16}>Reserve a table</Button>
                        </VStack>
                    </Center>
                    <Square maxWidth="30%" >
                        <img src={restaurantFood}
                        alt="restaurant 1"
                        ></img>
                    </Square>
                </Flex>
            </Container>
        </div>
    );
}

export default Hero;