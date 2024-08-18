import '@testing-library/jest-dom'
import { render, fireEvent, screen, cleanup, getAllByTestId, queryAllByTestId } from '@testing-library/react';
import { BookingForm } from '../Pages/Booking/BookingForm';

afterEach(() => cleanup());

test('Renders second half of form', () => {
    render(<BookingForm />);

    const ContactHeading = screen.getByText('Complete Your Booking!');

    expect(ContactHeading).toBeInTheDocument();
});

test('default value for time selection is rendering', () => {
    render(<BookingForm />);

    const timeSelection = screen.getByText('Select Time');

    expect(timeSelection).toBeInTheDocument();
});

test('time options are updating depending on the date selected', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Date');
    const timeSelection = screen.getByText('Select Time');

    fireEvent.change(dateInput, { target: { value: '09/30/2024' } });

    expect(dateInput).toHaveValue('09/30/2024');

    let availability = screen.getAllByTestId('time-option');

    expect(timeSelection).toHaveValue('Select Time');
    expect(availability).toHaveLength(15);
});
