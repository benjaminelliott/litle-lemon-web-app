import { Formik, Field, Form } from "formik";
import { useReducer } from 'react'
import { HStack, VStack, Button, Heading } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerField } from "./BookingPageFormDatePicker";
import { BookingSlot } from './BookingSlot';

type Props = {
    occasions: {
        occasion: string,
        disabled: boolean
    }[]
    guests: {
        min: number,
        max: number,
        placeholder: string
    }[]
    availableTimes: {
        time: string
        booked: boolean
    }[]
    handleComplete: any
    show: {
        times: boolean
        user: boolean
        submit: boolean
        confirm: boolean
    }
    ACTION: any
    dispatch: any
    toggleShowTimes: any
    toggleShowUser: any
    toggleShowSubmit: any
}



export const BookingPageForm = (props: Props, dispatch: any) => {

    const validate = (e: string) => {
        let errorMessage = "";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)) {
            errorMessage = 'Invalid email address';
        }
        props.toggleShowSubmit();
    };

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
                }}
            >
                {({ errors, touched }) => (
                <Form className="form-booking">
                    <VStack display="flex" className="container-booking">
                        { !props.show.confirm ?
                        <>
                            <Heading className="text-section-title" color="#F4CE14">Book a table</Heading>
                            <HStack className="hstack-booking">
                                <Field name="occasion" as="select" placeholder="Occasion">{props.occasions.map(occasion => {
                                    return (
                                        <option disabled={occasion.disabled} value={ occasion.disabled ? "" : occasion.occasion }>{occasion.occasion}</option>
                                    )})}
                                </Field>
                                <Field name="guests" as="select" placeholder="Guests" className="field-booking">{props.guests.map(guests => {
                                    return Array.from(
                                        {length: guests.max+1},
                                        (_, i) => (
                                            <option disabled={ i == 0 ? true : false } value={ i === 0 ? guests.placeholder : i}>{i === 0 ? guests.placeholder : i}</option>
                                        )
                                    )
                                })}
                                </Field>
                                <DatePickerField name="date" toggleShowTimes={props.toggleShowTimes}/>
                            </HStack>
                            <HStack as="ul" className="container-booking-slots">
                            {props.show.times && props.availableTimes.map(booking => {
                                return (
                                    <BookingSlot time={booking.time} booked={booking.booked} toggleShowUser={props.toggleShowUser} />
                                )
                            })}
                            </HStack>
                            <VStack className="hstack-booking">
                                {props.show.times && props.show.user &&
                                <HStack className="vstack-booking" alignItems="flex-start">
                                    <Field name="firstName" type="text" placeholder={ "" ? "First Name" : ""}/>
                                    <Field name="lastName" type="text"/>
                                    <Field validate={validate} name="email" type="email" />
                                </HStack>
                                }
                                <HStack>
                                    {errors.email && touched.email ? <div className="email-error">{errors.email}</div> : null}
                                </HStack>

                            </VStack>
                            <HStack className="hstack-booking">
                                {props.show.times && props.show.user && props.show.submit &&
                                    <button onClick={props.handleComplete} type="submit" className="button-light">Confirm booking</button>
                                }
                            </HStack>
                            </>
                        :
                        <Heading className="text-section-title" color="#F4CE14">Booking confirmed</Heading>

                        }
                    </VStack>
                </Form>
                )}
            </Formik>
        </VStack>
    )
}