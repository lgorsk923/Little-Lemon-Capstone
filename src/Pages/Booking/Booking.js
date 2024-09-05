import { BookingForm } from "./BookingForm"
import { ConfirmedBooking } from "./ConfirmedBooking"
import restaurant from "../../images/restaurant-image.jpg"
import './Booking.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Hero } from "../Home/Hero";
import { submitAPI } from "../../api";

export function Booking() {
    const navigate = useNavigate();
    const formSubmission = (values) => {
        console.log('Form submitted:', values);
        if (submitAPI(values)) {
            alert('Your reservation has been submitted!');
            navigate('/ConfirmedBooking');
        } else {
            alert('There was an error with your submission. Please try again.');
        }
    }

    return (
        <>
            <Hero
                title='Reservations'
                text="Come enjoy a meal with us in our restaurant space. With our gorgeous Mediterranean decor, you will feel like you have been transported to Greece! Can’t make it in for your event? We also offer catering services!We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"
                image={restaurant}
                alt='restaurant-image'
                textVariant='Catering Menu'
                path='/Menu'
            />
            <Routes>
                <Route path="/BookingForm" element={<BookingForm formSubmission={formSubmission} />} />
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
            </Routes>
            <BookingForm formSubmission={formSubmission} />
        </>
    )
}