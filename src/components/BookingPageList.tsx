

export const BookingPageList = (props: BookingListProps) => {

    return (
        <>
            {props.show.confirm &&
                <div>
                    <h1>Current Bookings</h1>
                    {props.confirmedBookings.map(booking => [
                        <div>
                        <p>{booking.time}</p>
                        <p>{booking.date}</p>
                        <p>{booking.occasion} party of {booking.guests}</p>
                        </div>
                    ])}
                </div>
            }
        </>
    )
}