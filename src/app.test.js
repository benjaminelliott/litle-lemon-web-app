import { render, screen } from "@testing-library/react";
import { BookingPageForm } from './BookingPageForm';

test('Renders the BookingForm heading', () => {
    render(<BookingPageForm />);
    const headingElement = screen.getByText("Book a table");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct expected value', () => {
    render(<BookingPageForm />);
    const bookingConfirmed = screen.getByText("Booking confirmed");
    expect(bookingConfirmed).toBeInTheDocument();
})