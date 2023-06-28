import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Radio,
    HStack,
    VStack,
    RadioGroup,
    Button,
    Container,
    Square,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Text
  } from '@chakra-ui/react'
    import DatePicker from "react-datepicker";
    import "react-datepicker/dist/react-datepicker.css";
    import { DatePickerField } from "./BookingPageDatePicker.js";

export default function BookingPage() {

    return (
        
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack>
                <Formik
                initialValues={
                    {
                        firstName: "First name",
                        lastName: "last name",
                        email: "Email address",
                        date: new Date(),
                        time: "",
                        guests: ""
                    }}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <VStack>
                            <HStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="firstName">First Name</label>
                                    <Field name="firstName" type="text"/>
                                </VStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field name="lastName" type="text"/>
                                </VStack>
                            </HStack>
                            <VStack alignItems="flex-start">
                                <label htmlFor="email">Email address</label>
                                <Field name="email" type="email" min-width="100%" />
                            </VStack>
                            <HStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="time">Time</label>
                                    <Field name="time" type="number"/>
                                </VStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="guests">Guests</label>
                                    <Field name="guests" type="number"/>
                                </VStack>
                            </HStack>
                            <HStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="date">Date</label>
                                    <DatePickerField name="date" />
                                </VStack>
                                <Square>
                                <button type="submit">Submit</button>
                                </Square>
                            </HStack>
                        </VStack>
                    </Form>
                </Formik>
            </VStack>
        </Container>
)

}

//    Date & time

//Number of guests

//Occasion (Birthday, Anniversary)

//Submit reservation button (to submit the form)

//https://chakra-ui.com/docs/components/form-control