import "react-datepicker/dist/react-datepicker.css";
import { BookingPageForm } from "./BookingPageForm"
import { BookingPageList } from "./BookingPageList"
import { animated, useSpring } from "@react-spring/web";
import { useContext } from "react";
import { LoginContext } from "./Layout";

export const BookingPage = (props: BookingPageProps) => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

     const loggedIn = useContext(LoginContext)

    return (
        <animated.section className="booking" style={{...fade}}>
            {
                loggedIn
                ? <>
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
                        ACTION={props.ACTION} />
                    <BookingPageList
                        confirmedBookings={props.confirmedBookings}
                        show={props.show} /></>
                : <div className="booking-login-prompt">
                    <h1 className="prompt-h1">Please login to create a reservation</h1>
                    <div className="prompt-img"></div>
                </div>
            }
        </animated.section>
    )
};