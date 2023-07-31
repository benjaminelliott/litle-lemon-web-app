import { VStack, HStack, Container} from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { BookingPageForm } from "./BookingPageForm"
import { BookingSlot } from './BookingSlot';

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

export const BookingPage = (props: Props) => {

    return (
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack spacing="5vw">
                <BookingPageForm occasions={props.occasions} guests={props.guests} availableTimes={props.availableTimes}/>
                <HStack as="ul" className="container-booking-slots">
                    {props.availableTimes.map(time => {
                        return (
                            <BookingSlot time={time.time}/>
                        )
                    })}
                </HStack>
            </VStack>
        </Container>
    )
};