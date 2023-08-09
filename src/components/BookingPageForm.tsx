import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
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

  const SignupSchema = Yup.object().shape({

    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.string().nullable().required(),
    occasions: Yup.string()
  });

export const BookingPageForm = (props: Props) => {

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

    return (
        <article className='form-booking-page'>
            <Formik
                initialValues={ blankBooking }
                validationSchema={SignupSchema}
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
                <Form className='form-booking'>
                    { !props.show.confirm ?
                    <>
                        <div className="inputs-top">
                        <h1 className="text-section-title title-booking">Book a table</h1>
                            <Field name="occasion" as="select" placeholder="Occasion" className={ !touched.occasion ? "field-booking" : "field-booking-confirmed"}>
                            <option disabled selected value="">Occasion</option>
                                {
                                props.occasions.map(occasion => {
                                    return (
                                        <option>
                                            {occasion.occasion}
                                        </option>
                                    )})}
                            </Field>
                            <Field name="guests" as="select" placeholder="Guests" className={ !touched.guests ? "field-booking" : "field-booking-confirmed"}>{props.guests.map(guests => {
                                return Array.from(
                                    {length: guests.max+1},
                                    (_, i) => (
                                        <option disabled={ i === 0 ? true : false } value={ i === 0 ? guests.placeholder : i}>{i === 0 ? guests.placeholder : i}</option>
                                    )
                                )
                            })}
                            </Field>
                            <DatePickerField name="date" id="date" className={ !values.date ? "field-booking" : "field-booking-confirmed"} toggleShowTimes={props.toggleShowTimes} values={values} />
                        </div>
                        <Field  as="ul" className="inputs-middle">
                        {props.show.times && props.availableTimes.map(booking => {
                            return (
                                <BookingSlot id="time" name="time" time={booking.time} booked={booking.booked} toggleShowUser={props.toggleShowUser} />
                            )
                        })}
                        </Field>
                        {values.time !== "" &&
                        <div className="inputs-bottom">
                            <Field name="firstName" type="text" placeholder="First Name" className={ errors.firstName ? "field-booking" : "field-booking-confirmed"}/>
                            <Field name="lastName" type="text" placeholder="Last Name" className={ errors.lastName ? "field-booking" : "field-booking-confirmed"}/>
                            <Field name="email" type="email" placeholder="Email address" className={ errors.email ? "field-booking" : "field-booking-confirmed"}/>
                            {props.show.times && props.show.user && !errors.firstName && !errors.lastName && !errors.email &&
                            <button type="submit" className="buttonh1">Confirm booking</button>
                        }
                        </div>
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