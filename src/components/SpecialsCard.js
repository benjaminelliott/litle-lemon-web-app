import React from 'react';
import { HStack, VStack, Text, Card, Spacer, CardBody, Image } from '@chakra-ui/react'
import specialsButton from '../assets/Basket.svg'

export default class SpecialsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
            title: props.title,
            price: props.price,
            text: props.text
        }
    }

    render() {
        return (
            <div>
                <Card borderRadius={16}>
                    <CardBody className="card-specials" borderRadius={16} p="0px">
                        <VStack display="flex" flexWrap="wrap" maxWidth="300px" p="0px" m="0px">
                            <Image src={this.state.image} boxSize="300px" className="image-specials" objectFit="cover" borderTopRadius={16}/>
                            <HStack display="flex" p="20px" justifyContent="space-between">
                                <Text className="text-card-title">{this.state.title}</Text>
                                <Spacer></Spacer>
                                <Text className="text-highlight">{this.state.price}</Text>
                            </HStack>
                            <Text pl="20px" pr="10px" m="0px">{this.state.text}</Text>
                            <HStack p="20px">
                                <Text className="text-specials">Order a delivery</Text>
                                <Image src={specialsButton} width="20px"></Image>
                            </HStack>
                    </VStack>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


