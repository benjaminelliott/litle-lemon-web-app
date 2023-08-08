import { useRef } from 'react'
import { Formik, Field, Form } from "formik";
import { HStack, VStack, Heading } from '@chakra-ui/react'
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
    toggleShowTimes: any
    toggleShowUser: any
    toggleShowSubmit: any
    handleAnotherBooking: any
}

interface Values {
    firstName: string
    lastName: string
    email: string
    time: string
    occasion: string
    guests: number
    date: string
  }

  interface Confirmed {
    firstName: string
    lastName: string
    email: string
    time: string
    occasion: string
    guests: number
    date: string
  }

export const BookingPageForm = (props: Props) => {

    const validate = (e: string) => {
        let errorMessage = "";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)) {
            errorMessage = 'Invalid email address';
        }
        props.toggleShowSubmit();
    };

    let blankBooking = {
        email: '',
        firstName: '',
        lastName: '',
        time:'',
        occasion: '',
        guests: 0,
        date: ''
    };
    let confirmed:Confirmed = {
        email: '',
        firstName: '',
        lastName: '',
        time:'',
        occasion: '',
        guests: 0,
        date: ''
    }
    let confirmedBookings:any = [];

    const formikRef:any = useRef();

    return (
        <div className='form-booking-page'>
            <Formik
                initialValues={ blankBooking }
                innerRef={formikRef}
                onSubmit={ async (values: Values, actions) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setTimeout(() => {
                        confirmed = values;
                        confirmedBookings.push(values)
                        props.handleComplete(confirmed);
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ errors, touched, values }) => (
                <Form className="form-booking">
                    <div className="container-booking">
                        { !props.show.confirm ?
                        <>
                            <h1 className="text-section-title title-booking">Book a table</h1>
                            <div className="inputs-top">
                                <Field name="occasion" as="select" placeholder="Occasion">{props.occasions.map(occasion => {
                                    return (
                                        <option
                                            disabled={occasion.disabled}
                                            value={ occasion.disabled
                                                ? ""
                                                : occasion.occasion }
                                        >
                                            {occasion.occasion}
                                        </option>
                                    )})}
                                </Field>
                                <Field name="guests" as="select" placeholder="Guests" className="field-booking">{props.guests.map(guests => {
                                    return Array.from(
                                        {length: guests.max+1},
                                        (_, i) => (
                                            <option disabled={ i === 0 ? true : false } value={ i === 0 ? guests.placeholder : i}>{i === 0 ? guests.placeholder : i}</option>
                                        )
                                    )
                                })}
                                </Field>
                                <DatePickerField name="date" id="date" toggleShowTimes={props.toggleShowTimes} values={values} />
                            </div>
                            <Field  as="ul" className="inputs-middle">
                            {props.show.times && props.availableTimes.map(booking => {
                                return (
                                    <BookingSlot id="time" name="time" time={booking.time} booked={booking.booked} toggleShowUser={props.toggleShowUser} />
                                )
                            })}
                            </Field>
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
                                    <button type="submit" className="button-light">Confirm booking</button>
                                }
                            </HStack>
                            </>
                        :
                        <VStack className="confirmation-booking">
                            <Heading className="text-section-title" color="#F4CE14">Booking confirmed</Heading>
                            <h3>Thanks for booking with us, <strong>{values.firstName} {values.lastName.charAt(0)}!</strong></h3>
                            <p>We at Little Lemon are looking forward to seeing your party of <strong>{values.guests}</strong> on <strong>{values.date}</strong> at <strong>{values.time}</strong>.</p>
                            <p>A confirmation email has been sent to <strong>{values.email}</strong>.</p>
                            <p>See you soon!</p>
                        </VStack>
                        }
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    )
}