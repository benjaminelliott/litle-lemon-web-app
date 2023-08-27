export {};

declare global {
    interface initialStateProps {
        times: {
            id: number
            time: string
            booked: boolean
        }[],
        occasions:{
            id: number
            occasion: string
            disabled: boolean
        }[],
        guests: {
            placeholder: string
            min: number
            max: number
        }[],
        show: {
            times: boolean
            user: boolean
            submit: boolean
            confirm: boolean
        },
        confirmedBookings: {
            id: number,
            firstName: string
            lastName: string
            email: string
            occasion: string
            guests: number
            date: string
            time: string
        }[]
    }

    interface BookingPageProps {
        occasions: {
            id: number
            occasion: string
        }[]
        guests: {
            min: number,
            max: number,
            placeholder: string
        }[]
        availableTimes: {
            id: number
            time: string
            booked: boolean
        }[]
        handleComplete: any
        show: {
            times: boolean
            user: boolean
            submit: boolean
            confirm: boolean
        },
        confirmedBookings: {
            id: number,
            firstName: string
            lastName: string
            email: string
            occasion: string
            guests: number
            date: string
            time: string
        }[],
        ACTION: any
        toggleShowTimes: any
        toggleShowUser: any
        toggleShowSubmit: any
        handleAnotherBooking: any
    }

    interface BookingPageFormProps {
        occasions: {
            id: number
            occasion: string
        }[]
        guests: {
            min: number,
            max: number,
            placeholder: string
        }[]
        availableTimes: {
            time: string
            booked: boolean
            id: number
        }[]
        handleComplete: any
        show: {
            times: boolean
            user: boolean
            submit: boolean
            confirm: boolean
        }
        ACTION: any
        toggleShowTimes: any
        toggleShowUser: any
        toggleShowSubmit: any
        handleAnotherBooking: any
    }

    interface BookingListProps {
        show: {
            times: boolean
            user: boolean
            submit: boolean
            confirm: boolean
        },
        confirmedBookings: {
            id: number,
            firstName: string
            lastName: string
            email: string
            occasion: string
            guests: number
            date: string
            time: string
        }[],
    }
    type SpecialsCardProps = {
        image: string;
        title: string;
        price: string;
        text: string;
    }
    type TestimonialsCardProps = {
        user: string;
        title: string;
        rating: number;
        text: string;
    }
}

