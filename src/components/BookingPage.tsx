import { Container} from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { BookingPageForm } from "./BookingPageForm"
import { BookingPageList } from "./BookingPageList"

export const BookingPage = (props: BookingPageProps) => {

    return (
        <Container as="section" className="booking" pl="125px"  pr="125px" pt="50px" pb="50px">
            <BookingPageForm
                occasions={props.occasions}
                guests={props.guests}
                availableTimes={props.availableTimes}
                show={props.show}
                handleComplete={props.handleComplete}
                toggleShowTimes={props.toggleShowTimes}
                toggleShowUser={props.toggleShowUser}
                toggleShowSubmit={props.toggleShowSubmit}
                handleAnotherBooking={props.handleAnotherBooking}
                ACTION={props.ACTION}
            />
            <BookingPageList
                confirmedBookings={props.confirmedBookings}
                show={props.show}
            />
        </Container>
    )
};