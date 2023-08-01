import { VStack, HStack, Container} from '@chakra-ui/react'
import { useReducer } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { BookingPageForm } from "./BookingPageForm"

type Props = {
    occasions: {
        occasion: string
    }[]
    guests: {
        min: number,
        max: number
    }[]
    availableTimes: {
        time: string
        booked: boolean
    }[]
    handleSubmit: any
    show: {
        times: boolean
        user: boolean
    }
    ACTION: any
    dispatch: any
    toggleShowTimes: any
}

export const BookingPage = (props: Props) => {

    return (
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <BookingPageForm occasions={props.occasions} guests={props.guests} availableTimes={props.availableTimes} show={props.show} handleSubmit={props.handleSubmit} toggleShowTimes={props.toggleShowTimes} ACTION={props.ACTION} dispatch={props.dispatch}/>
        </Container>
    )
};