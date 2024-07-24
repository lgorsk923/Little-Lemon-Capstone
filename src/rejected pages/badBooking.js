import { BookingForm } from "./BookingForm"
import restaurant from "../../images/restaurant-image.jpg"
import './Booking.css';
import { Hero } from "../Home/Hero";
import React, { useReducer } from 'react';

function createInitialState() {
    return {
        fields: {
            guests: 1,
            date: new Date().toLocaleDateString(),
            time: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            occasion: '',
            notes: '',
        },
        availableTimes: ['11:00AM', '11:30AM', '12:00PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:00PM', '3:30PM', '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM'],
    };
}

var availability = [
    /* Sunday */['7:30PM', '8:00PM', '8:30PM'],
    /* Monday */['11:00AM', '11:30AM', '3:30PM', '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM'],
    /* Tuesday */['11:00AM', '2:30PM', '3:00PM', '3:30PM', '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM'],
    /* Wednesday */['11:00AM', '2:00PM', '2:30PM', '3:00PM', '3:30PM', '8:30PM'],
    /* Thursday */['11:00AM', '8:30PM'],
    /* Friday */[],
    /* Saturday */['11:00AM', '11:30AM', '12:00PM', '1:00PM'],
];

function reduceState(state, action) {
    if (action.type === 'update_field') {
        let newState = {
            ...state,
            fields: {
                ...state.fields,
                [action.field]: action.value,
            },
        };
        const dayOfWeek = new Date(newState.fields.date).getDay();
        newState.availableTimes = availability[dayOfWeek];
        return newState;
    }
    else throw new Error('Invalid action type');
}

export function Booking() {
    const [formState, dispatch] = useReducer(reduceState, createInitialState);

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
            <BookingForm formState={formState} dispatch={dispatch} />
        </>
    )
}