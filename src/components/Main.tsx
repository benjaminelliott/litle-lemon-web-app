import { useReducer } from 'react'
import { Container }  from '@chakra-ui/react'
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage';

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
            occasion: "Birthday"
        },
        {
            id: 1,
            occasion: "Anniversary"
        },
        {
            id: 2,
            occasion: "Other"
        },
    ],
    guests: [
        {
            min: 1,
            max: 10
        }
    ],
    show: {
        times: false,
        user: true
    }
};

const ACTION = {
    SHOW_TIMES: "SHOW-TIMES",
    SHOW_USER: "SHOW-USER",
    MAKE_BOOKING: "MAKE-BOOKING"
}

export const Main = () => {

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case ACTION.MAKE_BOOKING:
                return {...state, booked: !state.booked}
            case ACTION.SHOW_TIMES:
                return {...state, times: !state.times}
            case ACTION.SHOW_USER:
                return {...state, user: !state.users}
            default:
                throw Error('Unknown action.');
        }
    }

    const [state, dispatch ] = useReducer(reducer, initialState);

    const handleSubmit = () => {
        dispatch({ type: ACTION.MAKE_BOOKING })
    }

    const toggleShowTimes = (e: any) => {
        e.preventDefault();
        console.log("hello", initialState.show.times)
        dispatch({ type: ACTION.SHOW_TIMES });
        console.log("goodbye", initialState.show.times)
    }

    const toggleShowUser = () => {
        dispatch({ type: ACTION.SHOW_USER })
    }

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage occasions={state.occasions} guests={state.guests} availableTimes={state.times} show={state.show} handleSubmit={handleSubmit} toggleShowTimes={toggleShowTimes} ACTION={ACTION} dispatch={dispatch}/>
        </Container>
    );
};