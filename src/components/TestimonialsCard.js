import React from 'react';
import { HStack, VStack, Text, Card, Spacer, CardBody, Image } from '@chakra-ui/react'
import person1 from '../assets/pexels-pixabay-220453.jpg';
import starFull from '../assets/star-full-icon.svg'
import starHalf from '../assets/star-half-icon.svg'
import starEmpty from '../assets/star-empty-icon.svg'

export default class TestimonialsCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
            title: props.title,
            user: props.user,
            text: props.text
        }
    };

    render() {
        return (
            <div>
                <Card borderRadius={16}>
                    <CardBody className="card-testimonials" borderRadius={16} p="0px" w="25vw">
                        <VStack display="flex" flexWrap="wrap" maxWidth="300px" p="0px" m="0px">
                            <Text p="0px" className="text-card-title">{this.state.title}</Text>
                            <HStack display="flex" p="20px" justifyContent="space-between">
                                <Image src={this.state.image} boxSize="300px" className="image-testimonials" objectFit="cover" borderRadius={360} h="200px" w="200px"/>
                                <Spacer></Spacer>
                                <Text className="text-highlight">{this.state.user}</Text>
                            </HStack>
                            <Text h="300px" w="400px" pl="20px" pr="10px" m="0px">{this.state.text}</Text>
                        </VStack>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


