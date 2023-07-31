import { useReducer, useState } from 'react'
import { Container }  from '@chakra-ui/react'
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage';

type State = { booked: boolean}

type Action = | {type: 'make-booking'}

const reducer = (state: State, action: Action) => {
    if (action.type === 'make-booking') {return { booked: !state.booked}};
    return state;
}

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

    const initializeTimes = [
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

    const availableTimes = initializeTimes;

    const [state, dispatch ] = useReducer(reducer, initializeTimes);

    return (
        <Container as="section" className="main"  maxWidth="xxl" p="0">
            <HomePage />
            <BookingPage occasions={occasions} guests={guests} availableTimes={availableTimes} />
            <button onClick={() => dispatch({type: 'make-booking'})}>Make booking</button>
        </Container>
    );
};