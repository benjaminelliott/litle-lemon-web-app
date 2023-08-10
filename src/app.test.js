import { fireEvent, render, screen } from "@testing-library/react";
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

test('form validation is working as expected', () => {
    render(<BookingPageForm />);
    const submitButton = screen.getByRole("");
    fireEvent.click(submitButton);
    expect(submitButton).not.toBeInTheDocument();
})