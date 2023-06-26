import React from 'react';
import { HStack, VStack, Text, Card, Spacer, CardBody, Image } from '@chakra-ui/react'
import specialsButton from '../assets/Basket.svg'

export default class TestimonialsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
            title: props.title,
            user: props.user,
            text: props.text,
            rating: props.rating
        }
    }

    render() {
        return (
            <div>
                <Card borderRadius={16}>
                    <CardBody className="card-specials" borderRadius={16} p="0px">
                        <VStack display="flex" flexWrap="wrap" maxWidth="300px" p="0px" m="0px">
                            <Text p="0px" className="text-card-title">{this.state.title}</Text>
                            <HStack>
                            {
                                for (let i=0; i < {this.state.rating}; i++) {
                                    <Image src={specialsButton} width="20px"></Image>
                                }
                            }
                            </HStack>
                            <HStack display="flex" p="20px" justifyContent="space-between">
                                <Image src={this.state.image} boxSize="300px" className="image-specials" objectFit="cover" borderTopRadius={16}/>
                                <Spacer></Spacer>
                                <Text className="text-highlight">{this.state.user}</Text>
                            </HStack>
                            <Text pl="20px" pr="10px" m="0px">{this.state.text}</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


