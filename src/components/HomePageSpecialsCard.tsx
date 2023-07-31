import { useState } from 'react';
import { HStack, VStack, Text, Card, Spacer, CardBody, Image } from '@chakra-ui/react'

type SpecialsCardProps = {
    image: string;
    title: string;
    price: string;
    text: string;
}

export const SpecialsCard = (props: SpecialsCardProps) => {

    const [image, setImage ] = useState<string>("");
    const [title, setTitle ] = useState<string>("");
    const [price, setPrice ] = useState<string>("");
    const [text, setText ] = useState<string>("");

    return (
        <Card borderRadius={16}>
            <CardBody className="card-specials" borderRadius={16} p="0px">
                <VStack display="flex" flexWrap="wrap" maxWidth="300px" p="0px" m="0px">
                    <Image src={props.image} boxSize="300px" className="image-specials" objectFit="cover" borderTopRadius={16}/>
                    <HStack display="flex" p="20px" justifyContent="space-between">
                        <Text className="text-card-title">{props.title}</Text>
                        <Spacer></Spacer>
                        <Text className="text-highlight">{props.price}</Text>
                    </HStack>
                    <Text pl="20px" pr="10px" m="0px">{props.text}</Text>
                    <HStack p="20px">
                        <Text className="text-specials">Order a delivery</Text>
                        <Image src="favicon.ico" width="20px"></Image>
                    </HStack>
            </VStack>
            </CardBody>
        </Card>
    );
};