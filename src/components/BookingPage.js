import React from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Radio,
    HStack,
    RadioGroup,
    Button
  } from '@chakra-ui/react'

export default function BookingPage() {

return (
    <div>
        <FormControl>
            <FormLabel>E</FormLabel>
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
    </div>
)

}

//    Date

//Time

//Number of guests

//Occasion (Birthday, Anniversary)

//Submit reservation button (to submit the form)

//https://chakra-ui.com/docs/components/form-control