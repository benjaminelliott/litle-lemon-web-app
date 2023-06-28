import React from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Radio,
    HStack,
    RadioGroup,
    Button,
    Container,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Text
  } from '@chakra-ui/react'

export default function BookingPage() {

return (
    <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
        <HStack>
            <FormControl>
                <FormLabel>Date</FormLabel>
            </FormControl>
            <FormControl>
                <FormLabel>Time</FormLabel>
                <NumberInput max={10} min={5}>
                    <NumberInputField />
                    <Text>PM</Text>
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
        </HStack>
        <HStack>
            <FormControl>
                <FormLabel>Party size</FormLabel>
            </FormControl>
            <FormControl as="fieldset">
                <FormLabel as="legend">
                    Occasion
                </FormLabel>
                <RadioGroup defaultValue="Not a special occasion">
                    <HStack display="flex">
                        <Radio value="Birthday">Birthday</Radio>
                        <Radio value="Anniversary">Anniversary</Radio>
                        <Radio value="Other special occasion">Birthday</Radio>
                        <Radio value="Not a special occasion">Birthday</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>
            <Button>Submit reservation</Button>
        </HStack>
    </Container>
)

}

//    Date & time

//Number of guests

//Occasion (Birthday, Anniversary)

//Submit reservation button (to submit the form)

//https://chakra-ui.com/docs/components/form-control