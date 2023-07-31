import { Formik, Field, Form } from "formik";
import { HStack, VStack, Button, Heading } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerField } from "./BookingPageFormDatePicker";

type Props = {
    occasions: {
        occasion: string
    }[]
    guests: {
        guests: number
    }[]
    availableTimes: {
        time: string
    }[]
}

export const BookingPageForm = (props: Props) => {

    console.log(props.availableTimes);

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
                            {
                                <Field name="occasion" as="select">{props.occasions.map(occasion => {
                                    return (
                                        <option value={occasion.occasion}>{occasion.occasion}</option>
                                    )})}
                                </Field>
                            }
                                <Field name="guests" as="select" className="field-booking">{props.guests.map(guests => {
                                    return (
                                        <option value={guests.guests}>{guests.guests}</option>
                                    )
                                })}
                                </Field>
                            {
                                <Field type="number" name="times" as="select" className="field-times">{props.availableTimes.map(time => {
                                    return (
                                        <option value={time.time}>{time.time}</option>
                                    )
                                })}</Field>
                            }
                            <DatePickerField name="date" />
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
                            <Button type="submit" width="33%" height="50px" borderRadius={16} className="button-light">Confirm booking</Button>
                        </HStack>
                    </VStack>
                </Form>
                )}
            </Formik>
        </VStack>
    )
}