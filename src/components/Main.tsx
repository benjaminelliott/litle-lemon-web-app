import { useReducer, useState } from 'react'
import { Container }  from '@chakra-ui/react'
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage';

type State = {
    id: number
    time: string
    booked: boolean
}

type Booking = {
    id: number
    time: string
    booked: boolean
}

type Action = {
    type: string;
    id: number
    payload: any
}

const initializeTimes: Booking[] = [
    {
        id: 1,
        time: "17:00",
        booked: false
    },
    {
        id: 2,
        time: "18:00",
        booked: false
    },
    {
        id: 3,
        time: "19:00",
        booked: false
    },
    {
        id: 4,
        time: "20:00",
        booked: false
    },
    {
        id: 5,
        time: "21:00",
        booked: false
    },
    {
        id: 6,
        time: "22:00",
        booked: false
    }
];

export const Main = () => {

    const [occasions, setOccasions] = useState([
        {
            occasion: "Birthday",
        },
        {
            occasion: "Anniversary",
        },
        {
            occasion: "Other",
        }
    ]);
    
    const [guests, setGuests] = useState([
        {
            guests: 1,
        },
        {
            guests: 2,
        },
        {
            guests: 3,
        },
        {
            guests: 4,
        },
        {
            guests: 5,
        },
        {
            guests: 6,
        },
        {
            guests: 7,
        },
        {
            guests: 8,
        },
        {
            guests: 9,
        },
        {
            guests: 10,
        }
    ]);

    const reducer = (state: State[], action: Action) => {
        switch (action.type) {
            case "MAKE-BOOKING":
                return state.map(booking => {
                    booking.id === action.payload.id ? {...state, booked: !state.booked}
                })
            default:
                return state;
        }
    }

    const [state, dispatch ] = useReducer(reducer, initializeTimes);

    const handleConfirm = (e: any) => {
        e.preventDefault();
        dispatch({ 
            type: "MAKE-BOOKING",
            payload: {id: booking.id, time: booking.time, booked: booking.booked}});
      };

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage occasions={occasions} guests={guests} availableTimes={state} />
            <button onClick={() => dispatch({ type: "MAKE-BOOKING", id})}>Make booking</button>
        </Container>
    );
};
