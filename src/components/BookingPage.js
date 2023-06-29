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
    NumberDecrementStepper, Text, Spacer, Heading
  } from '@chakra-ui/react'
    import DatePicker from "react-datepicker";
    import "react-datepicker/dist/react-datepicker.css";
    import BookingPageForm from "./BookingPageForm.js"
    import { DatePickerField } from "./BookingPageFormDatePicker.js";
    import BookingSlot from "./BookingSlot.js";

export default function BookingPage() {

    return (

        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack>
                <BookingPageForm />
                <BookingSlot />
            </VStack>
        </Container>

    )

}