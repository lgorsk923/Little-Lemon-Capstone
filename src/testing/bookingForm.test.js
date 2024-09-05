import '@testing-library/jest-dom';
import { render, fireEvent, screen, cleanup, act, waitFor, } from '@testing-library/react';
import { BookingForm } from '../Pages/Booking/BookingForm';
import userEvent from '@testing-library/user-event';
import { submitAPI, fetchAPI } from '../api';


afterEach(() => cleanup());

test('Renders second half of form', () => {
    render(<BookingForm />)

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
    let result = fetchAPI('09/30/2024');
    expect(dateInput).toHaveValue('09/30/2024');
    let availability = screen.getAllByTestId('time-option');
    expect(timeSelection).toHaveValue('Select Time');
    expect(availability).toHaveLength(result.length);
});

test('new time is saved when selected', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Date');
    const timeSelection = screen.getByLabelText('Time');
    let availability = screen.getAllByTestId('time-option');

    fireEvent.change(dateInput, { target: { value: '09/30/2024' } });
    userEvent.selectOptions(timeSelection, availability[2]);

    expect(availability[2].selected).toBe(true);
});

test('onSubmit function is called only when all fields are correctly filled', async () => {
    const mockSubmit = jest.spyOn(window, 'alert').mockImplementation(() => { });

    const { getByTestId } = render(<BookingForm />);

    const form = getByTestId('booking-form');
    const guests = screen.getByLabelText('Guests');
    const dateInput = screen.getByLabelText('Date');
    const timeSelection = screen.getByLabelText('Time');
    const availability = await screen.getAllByTestId('time-option');
    const firstName = screen.getByLabelText('First Name');
    const lastName = screen.getByLabelText('Last Name');
    const email = screen.getByLabelText('Email Address');
    const phone = screen.getByTestId('phone');
    const confirmButton = screen.getByText('Check here to confirm the above information is accurate');

    act(() => { fireEvent.change(guests, { target: { value: '2' } }) });
    act(() => { fireEvent.change(dateInput, { target: { value: '09/30/2024' } }) });
    await act(() => { userEvent.selectOptions(timeSelection, availability[2]) });
    act(() => { fireEvent.change(firstName, { target: { value: 'John' } }) });
    act(() => { fireEvent.change(lastName, { target: { value: 'Doe' } }) });
    act(() => { fireEvent.change(email, { target: { value: '123@gmail.com' } }) });
    act(() => { fireEvent.change(phone, { target: { value: '1234567890' } }) });
    act(() => { fireEvent.click(confirmButton) });
    act(() => { fireEvent.submit(form) });

    await waitFor(() => expect(mockSubmit).toHaveBeenCalledWith('Your reservation has been submitted! We will send you a confirmation email shortly.'));

    mockSubmit.mockRestore();
});