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

    const validate = value => {

        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          errorMessage = 'Invalid email address';
        }
        return errorMessage;
      };

    return (
        
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack>
                <Formik
                initialValues={
                    {
                        firstName: "",
                        lastName: "",
                        email: "",
                        date: new Date(),
                        time: "",
                        guests: ""
                    }}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        alert("Booking not confirmed");
                    }}
                >
                    {({ errors, touched }) => (
                    <Form display="flex">
                        <VStack display="flex">
                            <HStack flexGrow={1} min-width="100%">
                                <VStack alignItems="flex-start" min-width="50%">
                                    <label htmlFor="firstName">First Name</label>
                                    <Field name="firstName" type="text"/>
                                </VStack>
                                <VStack alignItems="flex-start" min-width="50%">
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field name="lastName" type="text"/>
                                </VStack>
                                <VStack alignItems="flex-start" width="100%">
                                <label htmlFor="email">Email address</label>
                                <Field validate={validate} name="email" type="email" width="100%" />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </VStack>
                            </HStack>
                            <HStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="occasion">Occasion</label>
                                    <Field name="occasion" as="select">
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="other">Other</option>
                                    </Field>
                                </VStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="guests">Guests</label>
                                    <Field name="guests" as="select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </Field>
                                </VStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="time">Time</label>
                                    <Field name="time" as="select">
                                        <option value="5:00">5:00pm</option>
                                        <option value="5:15">5:15pm</option>
                                        <option value="5:30">5:30pm</option>
                                        <option value="5:45">5:45pm</option>
                                        <option value="6:00">6:00pm</option>
                                        <option value="6:15">6:15pm</option>
                                        <option value="6:30">6:30pm</option>
                                        <option value="6:45">6:45pm</option>
                                        <option value="7:00">7:00pm</option>
                                        <option value="7:15">7:15pm</option>
                                        <option value="7:30">7:30pm</option>
                                        <option value="7:45">7:45pm</option>
                                        <option value="8:00">8:00pm</option>
                                        <option value="8:15">8:15pm</option>
                                        <option value="8:30">8:30pm</option>
                                        <option value="8:45">8:45pm</option>
                                        <option value="9:00">9:00pm</option>
                                        <option value="9:15">9:15pm</option>
                                        <option value="9:30">9:30pm</option>
                                        <option value="9:45">9:45pm</option>
                                        <option value="10:00">10:00pm</option>
                                    </Field>
                                </VStack>
                                <VStack alignItems="flex-start">
                                    <label htmlFor="date">Date</label>
                                    <DatePickerField name="date" />
                                </VStack>
                            </HStack>
                            <Button type="submit" width="33%" height="50px" borderRadius={16}>Reserve a table</Button>
                        </VStack>
                    </Form>
                    )}
                </Formik>
            </VStack>
        </Container>
)

}