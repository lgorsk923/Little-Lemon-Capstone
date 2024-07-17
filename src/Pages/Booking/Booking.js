import { BookingForm } from "./BookingForm"
import { ScheduleCheck } from "./ScheduleCheck"
import restaurant from "../../images/restaurant-image.jpg"
import './Booking.css';
import { Hero } from "../Home/Hero";

export function Booking() {
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
            <ScheduleCheck />
            <BookingForm />
        </>
    )
}