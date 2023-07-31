import { HStack, VStack, Text, Card, Spacer, CardBody, Image } from '@chakra-ui/react'

type Props = {
    user: string;
    title: string;
    rating: number;
    text: string;
    image: string;
}

export const TestimonialsCard = (props: Props) => {

    const stars = [...Array(props.rating)];
    console.log(stars);

    return (
        <Card borderRadius={16}>
            <CardBody className="card-testimonials" borderRadius={16} p="0px" pt="20px" pb="20px" w="25vw" display="flex">
                <VStack display="flex" w="25vw" p="0px" m="0px">
                    <HStack display="flex" p="20px" justifyContent="space-between">
                        <Image src={props.image} boxSize="300px" className="image-testimonials" objectFit="cover" borderRadius={360} h="200px" w="200px"/>
                        <Spacer></Spacer>
                        <Text className="text-highlight">{props.user}</Text>
                    </HStack>
                    <HStack className="stars" display="flex">
                        {stars.map(star => {
                            return (
                                <img src="star-icon.svg" className="star-rating" />
                            )
                        })}
                    </HStack>
                    <Text p="0px" className="text-card-title">{props.title}</Text>
                    <Text className ="text-testimoials" h="10vw" w="25vw" pl="20px" pr="10px" m="0px">{props.text}</Text>
                </VStack>
            </CardBody>
        </Card>
    );
};