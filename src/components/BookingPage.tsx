import "react-datepicker/dist/react-datepicker.css";
import { BookingPageForm } from "./BookingPageForm"
import { BookingPageList } from "./BookingPageList"

export const BookingPage = (props: BookingPageProps) => {

    return (
        <section className="booking">
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
        </section>
    )
};