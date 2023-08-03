import { VStack, HStack, Container} from '@chakra-ui/react'
import { useReducer } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { BookingPageForm } from "./BookingPageForm"

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
    dispatch: any
    toggleShowTimes: any
    toggleShowUser: any
    toggleShowSubmit: any
}

export const BookingPage = (props: Props) => {

    return (
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <BookingPageForm occasions={props.occasions} guests={props.guests} availableTimes={props.availableTimes} show={props.show} handleComplete={props.handleComplete} toggleShowTimes={props.toggleShowTimes} toggleShowUser={props.toggleShowUser} toggleShowSubmit={props.toggleShowSubmit} ACTION={props.ACTION} dispatch={props.dispatch}/>
        </Container>
    )
};