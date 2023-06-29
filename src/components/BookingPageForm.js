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
    import { DatePickerField } from "./BookingPageFormDatePicker.js";

export default function BookingPageForm() {

    const bookingTimes = ({availableTimes}) => {
        console.log(availableTimes);
    }

    const validate = value => {

        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          errorMessage = 'Invalid email address';
        }
        return errorMessage;
      };

    

    return (
        
        <VStack>
            <Formik
                initialValues={{ email: '', firstName: '', lastName: '', time:'', occasion: '', guests: '' }}
                onSubmit={ async (values, actions) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setTimeout(() => {
                        alert(`Thanks for your booking, ` + values.firstName + ` ` + values.lastName + `! We at Little Lemon look forward to seeing you at ` + values.time + ` PM on ` + values.date + `. A confirmation email has been sent to ` + values.email + ` .`);
                        actions.setSubmitting(false);
                    }, 1000);
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                <Form display="flex" className="form-booking">
                    <VStack display="flex" className="container-booking">
                        <Heading className="text-section-title" color="#F4CE14">Book a table</Heading>
                        <HStack className="hstack-booking">
                            <VStack className="vstack-booking" alignItems="flex-start">
                                <label htmlFor="firstName" class="label-booking">First Name</label>
                                <Field name="firstName" type="text"/>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <label htmlFor="lastName" class="label-booking">Last Name</label>
                                <Field name="lastName" type="text"/>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <label htmlFor="email" class="label-booking">Email address</label>
                                <Field validate={validate} name="email" type="email" />
                            </VStack>
                        </HStack>
                        {errors.email && touched.email ? <div class="email-error">{errors.email}</div> : null}
                        <HStack className="hstack-booking">
                            <VStack alignItems="flex-start">
                                <label htmlFor="occasion" class="label-booking">Occasion</label>
                                <Field name="occasion" as="select">
                                    <option value="birthday" class="label-booking">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </Field>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <label htmlFor="guests" class="label-booking">Guests</label>
                                <Field name="guests" as="select" className="field-booking">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="6">7</option>
                                    <option value="6">8</option>
                                    <option value="6">9</option>
                                    <option value="6">10</option>
                                </Field>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <label htmlFor="time" class="label-booking">Time</label>
                                    <Field name="time" as="select">
                                        {[...availableTimes.values()].map(v => (
                                            <option value={v}>{v}</option>
                                        ))}
                                    </Field>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <label htmlFor="date" class="label-booking">Date</label>
                                <DatePickerField name="date" />
                            </VStack>
                        </HStack>
                        <HStack className="hstack-booking">
                            <Button type="submit" width="33%" height="50px" borderRadius={16} className="button-light">Confirm booking</Button>
                        </HStack>
                    </VStack>
                </Form>
                )}
            </Formik>
        </VStack>
    )
}