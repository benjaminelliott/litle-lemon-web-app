import { useReducer } from 'react'
import { Container }  from '@chakra-ui/react'
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage';
import { Formik } from 'formik';

type State = {
    id: number
    time: string
    booked: boolean
}

type Booking = {
    times: [{}]
    id: number
    time: string
    booked: boolean
}

type Action = {
    type: string;
    id: number
    payload: any
}

const initialState: any = {
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
    }
};

const ACTION = {
    SHOW_TIMES: "SHOW-TIMES",
    SHOW_USER: "SHOW-USER",
    MAKE_BOOKING: "MAKE-BOOKING"
}

const reducer = (state: any, action: any) => {
    let array = [];
    switch (action.type) {
        case "SHOW-TIMES":
            return {
                ...state,
                show: {
                    times: true
                }
            }
        case "SHOW-USER":
            return {
                ...state,
                show: {
                    times: true,
                    user: true
                }
            }
        case "SHOW-SUBMIT":
            return {
                ...state,
                show: {
                    times: true,
                    user: true,
                    submit: true
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
                    confirm: true
                }
            }
        default:
            throw new Error('Unknown action.');
    }
}

export const Main = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const handleComplete = (e: any) => {
        dispatch({ type: "MAKE-BOOKING" })
        console.log(state)
    }

    const toggleShowTimes = () => {
        console.log("hello", initialState.show.times)
        dispatch({ type: "SHOW-TIMES" });
        console.log("goodbye", state.show.times)
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

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage occasions={state.occasions} guests={state.guests} availableTimes={state.times} show={state.show} handleComplete={handleComplete} toggleShowTimes={toggleShowTimes} toggleShowUser={toggleShowUser} toggleShowSubmit={toggleShowSubmit} ACTION={ACTION} dispatch={dispatch}/>
        </Container>
    );
};