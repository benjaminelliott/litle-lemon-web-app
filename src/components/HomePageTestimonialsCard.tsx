import { useState } from 'react';
import { HStack, VStack, Text, Card, Spacer, CardBody, Image } from '@chakra-ui/react'

type TestimonialsCardProps = {
    user: string;
    title: string;
    rating: number;
    text: string;
    image: string;
}

const TestimonialsCard:React.FC<TestimonialsCardProps> = () => {

    const [user, setUser ] = useState<string>("");

    const [title, setTitle ] = useState<string>("");

    const [rating, setRating ] = useState<number>(0);

    const [text, setText ] = useState<string>("");

    const [image, setImage ] = useState<string>("");

    return (
        <Card borderRadius={16}>
            <CardBody className="card-testimonials" borderRadius={16} p="0px" w="25vw">
                <VStack display="flex" flexWrap="wrap" maxWidth="300px" p="0px" m="0px">
                    <Text p="0px" className="text-card-title">{title}</Text>
                    <HStack display="flex" p="20px" justifyContent="space-between">
                        <Image src={image} boxSize="300px" className="image-testimonials" objectFit="cover" borderRadius={360} h="200px" w="200px"/>
                        <Spacer></Spacer>
                        <Text className="text-highlight">{user}</Text>
                    </HStack>
                    <Text h="300px" w="400px" pl="20px" pr="10px" m="0px">{text}</Text>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default TestimonialsCard;