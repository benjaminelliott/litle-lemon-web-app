import { animated, useSpring } from '@react-spring/web';
import { Hero } from './HomePageHero';
import { BookingPageForm } from './BookingPageForm';
import { useContext } from "react";
import { LoginContext } from "./Layout";
import { Heading } from '@chakra-ui/react';

export const HomePage = (props: any) => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

      const loggedIn = useContext(LoginContext)

    return (
        <animated.main className="home" style={{...fade}}>
            <Hero />
            {
                loggedIn &&
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
            }
        </animated.main>
    )
};