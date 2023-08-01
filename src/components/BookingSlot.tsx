interface Props {
    time: string;
    booked: boolean
}

export const BookingSlot = (props: Props) => {
    return (
        <>
        {props.booked ?
        ""
        : <button className="booking-slot">
        <span>{props.time}</span>
    </button>
    }
    </>
    )
};