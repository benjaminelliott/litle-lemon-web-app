export const BookingPageList = (props: BookingListProps) => {

    return (
        <>
            {props.show.confirm &&
                <div className="bookings-list">
                    <h1 className="text-highlight">Current Bookings</h1>
                    {props.confirmedBookings.map(booking => [
                        <div className="confirmed-booking">
                        <p className="text">{booking.time}, {booking.date}</p>
                        <p className="text"></p>
                        <p className="text text-paragraph">{booking.occasion} party of {booking.guests}</p>
                        </div>
                    ])}
                </div>
            }
        </>
    )
}