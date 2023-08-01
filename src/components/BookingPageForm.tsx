import { Formik, Field, Form } from "formik";
import { useReducer } from 'react'
import { HStack, VStack, Button, Heading } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerField } from "./BookingPageFormDatePicker";
import { BookingSlot } from './BookingSlot';

type Props = {
    occasions: {
        occasion: string
    }[]
    guests: {
        min: number,
        max: number
    }[]
    availableTimes: {
        time: string
        booked: boolean
    }[]
    handleSubmit: any
    show: {
        times: boolean
        user: boolean
    }
    ACTION: any
    dispatch: any
    toggleShowTimes: any
}

export const BookingPageForm = (props: Props, dispatch: any) => {

    const validate = (e: string) => {
        let errorMessage = "";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)) {
            errorMessage = 'Invalid email address';
        }
        return errorMessage;
    };

    const bookings = [
        {

        }
    ]

    return (
        <VStack>
            <Formik
                initialValues={{ email: '', firstName: '', lastName: '', time:'', occasion: '', guests: 0, date: '' }}
                onSubmit={ async (values, actions) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setTimeout(() => {
                        alert(`Thanks for your booking, ` + values.firstName + ` ` + values.lastName + `! We at Little Lemon look forward to seeing you at ` + values.time + ` PM on ` + values.date + `. A confirmation email has been sent to ` + values.email + ` .`);
                        actions.setSubmitting(false);
                    }, 1000);
                    bookings.push(values);
                    console.log(bookings);
                }}
            >
                {({ errors, touched }) => (
                <Form className="form-booking">
                    <VStack display="flex" className="container-booking">
                        <Heading className="text-section-title" color="#F4CE14">Book a table</Heading>
                        <HStack className="hstack-booking">
                            <Field name="occasion" as="select">{props.occasions.map(occasion => {
                                return (
                                    <option value={occasion.occasion}>{occasion.occasion}</option>
                                )})}
                            </Field>
                            <Field name="guests" as="select" className="field-booking">{props.guests.map(guests => {
                                return Array.from(
                                    {length: guests.max},
                                    (_, i) => (
                                        <option value={i+1}>{i+1}</option>
                                    )
                                )
                            })}
                            </Field>
                            <DatePickerField name="date" />
                        </HStack>
                        <HStack as="ul" className="container-booking-slots">
                        {props.show.times && props.availableTimes.map(booking => {
                            return (
                                <BookingSlot time={booking.time} booked={booking.booked} />
                            )
                        })}
                        </HStack>
                        <HStack className="hstack-booking">
                            <VStack className="vstack-booking" alignItems="flex-start">
                                <Field name="firstName" type="text" placeholder={ "" ? "First Name" : ""}/>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <Field name="lastName" type="text"/>
                            </VStack>
                            <VStack alignItems="flex-start">
                                <Field validate={validate} name="email" type="email" />
                            </VStack>
                        </HStack>
                        {errors.email && touched.email ? <div className="email-error">{errors.email}</div> : null}
                        <HStack className="hstack-booking">
                            <button onClick={(() => dispatch({ type: props.ACTION.MAKE_BOOKING}))} type="submit" className="button-light">Confirm booking</button>
                            <button onClick={props.toggleShowTimes}>SHOW TIMES</button>
                        </HStack>
                    </VStack>
                </Form>
                )}
            </Formik>
        </VStack>
    )
}