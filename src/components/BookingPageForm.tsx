import { useRef } from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import { useSpring, animated } from '@react-spring/web'
import { CSSTransition } from 'react-transition-group';
import { DatePickerField } from "./BookingPageFormDatePicker";
import { BookingSlot } from './BookingSlot';

const SignupSchema = Yup.object().shape({

firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
email: Yup.string().email('Invalid email').required('Required'),
date: Yup.string().nullable().required(),
occasions: Yup.string()
});

export const BookingPageForm = (props: BookingPageFormProps) => {

    const drop = useSpring({
        from: {
            y: -70,
            opacity: 0
        },
        to: {
            y: 0,
            opacity: 1
         },
      })

      const nodeRef = useRef(null);

    let blankBooking = {
        email: '',
        firstName: '',
        lastName: '',
        time:'',
        occasion: '',
        guests: 0,
        date: ''
    };
    let confirmed = {
        email: '',
        firstName: '',
        lastName: '',
        time:'',
        occasion: '',
        guests: 0,
        date: ''
    }
    let confirmedBookings = [];

    return (
        <article className='form-booking-page'>
            <Formik
                initialValues={ blankBooking }
                validationSchema={SignupSchema}
                onSubmit={ async (values, actions) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    setTimeout(() => {
                        confirmed = values;
                        confirmedBookings.push(values)
                        props.handleComplete(confirmed);
                        actions.setSubmitting(false);
                        localStorage.setItem('firstName', values.firstName);
                        localStorage.setItem('lastName', values.lastName);
                        localStorage.setItem('email', values.email);
                    }, 1000);
                }}
            >
                {({ errors, touched, values }) => (
                <Form className='form-booking'>
                    { !props.show.confirm ?
                    <>
                        <div className="inputs-top">
                            <h1 className="text-section-title title-booking">Book a table</h1>
                            <Field name="occasion" as="select" placeholder="Occasion" id="occasion" className={ !values.occasion ? "field-booking" : "field-booking-confirmed"}>
                                {<p>{values.occasion}</p>}
                                <label hidden htmlFor="occasion">Occasion</label>
                                <option disabled selected value="">Occasion</option>
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
                            <Field name="guests" as="select" className={  !values.guests ? "field-booking" : "field-booking-confirmed"}>
                                <label hidden htmlFor="guests">Guests</label>
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
                                                <option value={i+1}>{i+1}</option>
                                            )
                                        )
                                    })
                                }
                            </Field>
                            <DatePickerField name="date" id="date" placeholder="Date" className={ !values.date ? "field-booking" : "field-booking-confirmed"} toggleShowTimes={props.toggleShowTimes} values={values} />
                        </div>
                        <Field as="ul" className={props.show.times ? "inputs-middle" : "inputs-middle-hidden"}>
                            <label hidden htmlFor="time">Time</label>
                            {
                                props.show.times && values.occasion && values.guests > 0 && values.date && props.availableTimes.map(booking => {
                                    return (
                                        <BookingSlot id="time" name="time" time={booking.time} booked={booking.booked} toggleShowUser={props.toggleShowUser} />
                                    )
                                })
                            }
                        </Field>
                            { props.show.user &&
                                <CSSTransition in={props.show.user} timeout={500} nodeRef={nodeRef} classNames="drop">
                                    <div ref={nodeRef} className="inputs-bottom">
                                        <Field name="firstName" type="text" placeholder="First Name" className={ errors.firstName ? "field-booking" : "field-booking-confirmed"}/>
                                        <label hidden htmlFor="firstName">Time</label>
                                        <Field name="lastName" type="text" placeholder="Last Name" className={ errors.lastName ? "field-booking" : "field-booking-confirmed"}/>
                                        <label hidden htmlFor="lastName">Time</label>
                                        <Field name="email" type="email" placeholder="Email address" className={ errors.email ? "field-booking" : "field-booking-confirmed"}/>
                                        <label hidden htmlFor="email">Time</label>
                                        {
                                            props.show.times && values.time !== "" && !errors.firstName && !errors.lastName && !errors.email &&
                                                <animated.button type="submit" className="buttonh1" style={{...drop}}>Confirm booking</animated.button>
                                        }
                                    </div>
                                </CSSTransition>
                            }
                        </>
                    :
                    <article className="confirmation-booking">
                        <h1 className="text-section-title">Booking confirmed</h1>
                        <h3>Thanks for booking with us, <strong>{values.firstName} {values.lastName.charAt(0)}!</strong></h3>
                        <p>We at Little Lemon are looking forward to seeing your party of <strong>{values.guests}</strong> on <strong>{values.date}</strong> at <strong>{values.time}</strong>.</p>
                        <p>A confirmation email has been sent to <strong>{values.email}</strong>.</p>
                        <h3>See you soon!</h3>
                    </article>
                    }
                </Form>
                )}
            </Formik>
        </article>
    )
}