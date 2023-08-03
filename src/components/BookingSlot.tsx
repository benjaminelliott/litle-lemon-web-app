interface Props {
    time: string;
    booked: boolean
    toggleShowUser: any
}

export const BookingSlot = (props: Props) => {
    return (
        <>
        {props.booked ?
        ""
        : <button onClick={props.toggleShowUser} className="booking-slot" type="button">
        <span>{props.time}</span>
    </button>
    }
    </>
    )
};