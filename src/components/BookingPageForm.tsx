import { useRef } from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerField } from "./BookingPageFormDatePicker";
import { BookingSlot } from './BookingSlot';
import { Button, Text } from '@chakra-ui/react'
import { GiConfirmed } from "react-icons/gi";

const SignupSchema = Yup.object().shape({

firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
email: Yup.string().email('Invalid email').required('Required'),
date: Yup.string().nullable().required(),
occasions: Yup.string()
});

export const BookingPageForm = (props: BookingPageFormProps) => {

      const nodeRef = useRef(null);

    let blankBooking = {
        email: localStorage.getItem("email") || "",
        firstName: localStorage.getItem("firstName") || "",
        lastName: localStorage.getItem("lastName") || "",
        time:'',
        occasion: '',
        guests: 0,
        date: ''
    };

    return (
        <article className='form-booking-page'>
            <Formik
                initialValues={ blankBooking }
                validationSchema={SignupSchema}
                onSubmit={ async (values, actions) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setTimeout(() => {
                        localStorage.setItem("bookingTime", values.time);
                        localStorage.setItem("bookingDate", values.date);
                        localStorage.setItem("bookingGuests", values.guests.toString());
                        localStorage.setItem("bookingOccasion", values.occasion);
                        props.handleComplete(values);
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ errors, touched, values }) => (
                <Form className='form-booking'>
                    { !props.show.confirm ?
                        <>
                            <h1 className="text-section-title title-booking">Book a table</h1>
                            <div className="inputs-top">
                                <div className='input-occasion-guests'>
                                    <div className='input-stack'>
                                        <label htmlFor="occasion">Occasion</label>
                                        <Field name="occasion" as="select" placeholder="Occasion" id="occasion" className={ !values.occasion ? "field-booking" : "field-booking-confirmed"}>

                                            <option disabled defaultValue={""} value="">Occasion</option>
                                                {
                                                    props.occasions.map(occasion => {
                                                        return (
                                                            <option key={occasion.id}>
                                                                {occasion.occasion}
                                                            </option>
                                                        )
                                                    })
                                                }
                                        </Field>
                                    </div>
                                    <div className='input-stack'>
                                        <label htmlFor="guests">Guests</label>
                                        <Field name="guests" as="select" className={  !values.guests ? "field-booking" : "field-booking-confirmed"}>
                                            {
                                                !touched.guests
                                                ? <option>Guests</option>
                                                : <option value="default" disabled>Guests</option>
                                            }
                                            {
                                                props.guests.map(guests => {
                                                    return Array.from(
                                                        {length: guests.max},
                                                        (_, i) => (
                                                            <option key={i} value={i+1}>{i+1}</option>
                                                        )
                                                    )
                                                })
                                            }
                                        </Field>
                                    </div>
                                </div>
                                <div className='input-stack'>
                                    <label htmlFor='date'>Date</label>
                                    <DatePickerField
                                    name="date"
                                    id="date"
                                    placeholder="Date"
                                    className={ !values.date ? "field-booking" : "field-booking-confirmed"}
                                    toggleShowTimes={props.toggleShowTimes}
                                    values={values} />
                                </div>
                            </div>
                            <div className={props.show.times ? "inputs-middle" : "inputs-middle-hidden"}>
                                <div className='input-stack'>
                                    <label htmlFor="time">Time</label>
                                    <Field as="ul" className="input-times">
                                        {
                                            props.show.times && values.occasion && values.guests > 0 && values.date && props.availableTimes.map(booking => {
                                                return (
                                                    <BookingSlot
                                                    key={booking.id}
                                                    id="time"
                                                    name="time"
                                                    time={booking.time}
                                                    booked={booking.booked}
                                                    toggleShowUser={props.toggleShowUser} />
                                                )
                                            })
                                        }
                                    </Field>
                                </div>
                            </div>
                            { props.show.user &&
                                <div ref={nodeRef} className="inputs-bottom">
                                    <div className='input-names'>
                                        <div className='input-stack name'>
                                            <label htmlFor="firstName">First name</label>
                                            <Field id ="firstName" name="firstName" type="text" placeholder="First Name" className={ errors.firstName ? "field-booking" : "field-booking-confirmed"}/>
                                        </div>
                                        <div className='input-stack name'>
                                            <label htmlFor="lastName">Last name</label>
                                            <Field id="lastName" name="lastName" type="text" placeholder="Last Name" className={ errors.lastName ? "field-booking" : "field-booking-confirmed"}/>
                                        </div>
                                    </div>
                                    <div className='input-stack'>
                                        <label htmlFor="email">Email address</label>
                                        <Field id="email" name="email" type="email" placeholder="Email address" className={ errors.email ? "field-booking" : "field-booking-confirmed"}/>
                                    </div>
                                    {
                                        props.show.times && values.time !== "" && !errors.firstName && !errors.lastName && !errors.email &&
                                            <Button
                                                type="submit"
                                                rightIcon={<GiConfirmed />}
                                            >
                                                Confirm booking
                                            </Button>
                                    }
                                </div>
                            }
                        </>
                    :
                    <section className="confirmation-booking">
                        <h1 className="text-section-title">Booking confirmed</h1>
                        <h3>Thanks for booking with us, <strong>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")?.charAt(0)}!</strong></h3>
                        <Text>We at Little Lemon are looking forward to seeing your party of <strong>{localStorage.getItem("bookingGuests")}</strong> on <strong>{localStorage.getItem("bookingDate")}</strong> at <strong>{localStorage.getItem("bookingTime")}</strong>.</Text>
                        <Text>A confirmation email has been sent to <strong>{values.email}</strong>.</Text>
                        <h3>See you soon!</h3>
                    </section>
                    }
                </Form>
                )}
            </Formik>
        </article>
    )
}