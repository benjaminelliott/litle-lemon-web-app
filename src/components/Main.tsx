import { useReducer } from 'react'
import { Container }  from '@chakra-ui/react'
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage';

const initialState: initialStateProps = {
    times: [
        {
            id: 0,
            time: "17:00",
            booked: false
        },
        {
            id: 1,
            time: "18:00",
            booked: false
        },
        {
            id: 2,
            time: "19:00",
            booked: false
        },
        {
            id: 3,
            time: "20:00",
            booked: false
        },
        {
            id: 4,
            time: "21:00",
            booked: false
        },
        {
            id: 5,
            time: "22:00",
            booked: false
        }
    ],
    occasions: [
        {
            id: 0,
            occasion: "Occasion",
            disabled: true
        },
        {
            id: 1,
            occasion: "Birthday",
            disabled: false
        },
        {
            id: 2,
            occasion: "Anniversary",
            disabled: false
        },
        {
            id: 3,
            occasion: "Other",
            disabled: false
        },
    ],
    guests: [
        {
            placeholder: "Guests",
            min: 1,
            max: 10
        }
    ],
    show: {
        times: false,
        user: false,
        submit: false,
        confirm: false
    },
    confirmedBookings: []
};

const ACTION = {
    SHOW_TIMES: "SHOW-TIMES",
    SHOW_USER: "SHOW-USER",
    MAKE_BOOKING: "MAKE-BOOKING"
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "SHOW-TIMES":
            return {
                ...state,
                show: {
                    times: true,
                    user: false,
                    submit: false,
                    confirm: false
                }
            }
        case "SHOW-USER":
            return {
                ...state,
                show: {
                    times: true,
                    user: true,
                    submit: false,
                    confirm: false
                },
                bookings: {
                    time: state.time
                }
            }
        case "SHOW-SUBMIT":
            return {
                ...state,
                show: {
                    times: true,
                    user: true,
                    submit: true,
                    confirm: false
                }
            }
        case "MAKE-BOOKING":
            return {
                ...state,
                times: [
                    { booked: true }
                ],
                show: {
                    times: false,
                    user: false,
                    submit: false,
                    confirm: true
                },
                confirmedBookings: [
                    {
                        id: action.payload.firstName + action.payload.guests,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        email: action.payload.email,
                        occasion: action.payload.occasion,
                        guests: action.payload.guests,
                        date: action.payload.date,
                        time: action.payload.time
                    }
                ]
            }
        case "ANOTHER-BOOKING":
            return {
                ...state,
                show: {
                    times: false,
                    user: false,
                    submit: false,
                    confirm: false
                }
            }
        default:
            throw new Error('Unknown action.');
    }
}

export const Main = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const handleComplete = (values: any) => {
        dispatch({
            type: "MAKE-BOOKING",
            payload: {
                id: values.id,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                occasion: values.occasion,
                guests: values.guests,
                date: values.date,
                time: values.time
            }
        });
    }

    const toggleShowTimes = () => {
        dispatch({ type: "SHOW-TIMES" });
    }

    const toggleShowUser = () => {
        dispatch({ type: "SHOW-USER" })
    }

    const toggleShowSubmit = () => {
        dispatch({ type: "SHOW-SUBMIT" })
    }

    const toggleConfirm = () => {
        dispatch({ type: "SHOW-CONFIRM "})
    }

    const handleAnotherBooking = () => {
        dispatch({ type: "ANOTHER-BOOKING"})
        console.log(state.show)
    }

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage
                confirmedBookings={state.confirmedBookings}
                occasions={state.occasions}
                guests={state.guests}
                availableTimes={state.times}
                show={state.show}
                toggleShowTimes={toggleShowTimes}
                toggleShowUser={toggleShowUser}
                toggleShowSubmit={toggleShowSubmit}
                handleComplete={handleComplete}
                handleAnotherBooking={handleAnotherBooking}
                ACTION={ACTION}
            />
        </Container>
    );
};