import { Button } from '../../components/Button'
import silhouetteLogo from '../../images/silouhette_logo-removebg-preview.png'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export function BookingForm({ formState, dispatch }) {
    const updateField = (e) => {
        dispatch({
            type: 'update_field',
            field: e.target.name,
            value: e.target.value,
        });
    }

    let availability = formState.availability[formState.dayOfWeek];
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted')
        dispatch({
            type: 'update_field',
            field: {
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
        });

        function CustomInput({ value, onClick }) {
            return (
                <div className="input-group">
                    <div className='input-group-append'>
                        <span className='input-group-text'>
                            <FaCalendarAlt />
                        </span>
                    </div>
                    <input placeholder='MM/DD/YYYY' type='text' className='form-control' value={value} onClick={onClick} readOnly />
                </div>
            )
        }

        return (
            <form onSubmit={handleSubmit}>
                <fieldset className='scheduleCheck'>
                    <h1 className="scheduleCheckTitle">Tell us about your Party!</h1>
                    <div id='scheduleChecker' className='scheduleCheckInputs'>
                        <div className='guests'>
                            <label> Guests </label>
                            <input className="guestInput" name="guests" value={formState.fields.guests} onChange={updateField} />
                        </div>
                        <div className="date">
                            <label>Date</label>
                            <DatePicker name='date' selected={formState.fields.date} onChange={updateField} customInput={<CustomInput />} />
                        </div>
                        <div className="dropdown time">
                            <label>Time</label>
                            <select className="btn btn-secondary dropdown-toggle" name='time' type="button" aria-expanded="false" value={formState.fields.time} onChange={updateField}>
                                <option>Pick a time</option>
                                {availability.map((time, index) => <option className="dropdown-item" key={index}>{time}</option>)}
                            </select>
                        </div>
                    </div >
                </fieldset>
                <div className='infoInput'>
                    <fieldset className='infoInput'>
                        <div className='bookingTitle'>
                            <h1>Complete Your Booking!</h1>
                            <img className='silhouetteLogo' src={silhouetteLogo} alt='little lemon logo' />
                        </div>
                        <div className='contactInfo'>
                            <div className="row name">
                                <div className="col fname">
                                    <label htmlFor="fname">First Name</label>
                                    <input id='fname' name='firstName' type="text" className="form-control nameinput" value={formState.fields.firstName} onChange={updateField} />
                                </div>
                                <div className="col lname">
                                    <label htmlFor="lname">Last Name</label>
                                    <input id='lname' name='lastName' type="text" className="form-control nameinput" value={formState.fields.lastName} onChange={updateField} />
                                </div>
                            </div>
                            <div className="row phemail">
                                <div className="col email">
                                    <label htmlFor="email" >Email Address</label>
                                    <input id='email' name='email' type="email" className="form-control email" value={formState.fields.email} onChange={updateField} />
                                </div>
                                <div className="col number">
                                    <label htmlFor="phone" className='phone'>
                                        Phone Number
                                        <h6>(for text updates)</h6>
                                    </label>
                                    <input id='phone' name='phone' type="text" className="form-control number" value={formState.fields.phone} onChange={updateField} />
                                </div>
                            </div>
                            <div className="row occasion">
                                <label className='col' htmlFor="occasion">Celebrating something special? Tell us about it!</label>
                                <select id="occasion" className=" col form-control occasion" name='occasion' value={formState.fields.occasion} onChange={updateField}>
                                    <option>Occasion</option>
                                    <option>Birthday</option>
                                    <option>Engagement</option>
                                    <option>Anniversary</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group otherInfo">
                                <label htmlFor="otherInfo">Is there anything else you would like us to know?</label>
                                <textarea className="form-control" name='notes' id="otherInfo" rows="3" value={formState.fields.notes} onChange={updateField}></textarea>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="align-items-center completeForm">
                        <div className='row'>
                            <div className="col form-check mb-2 confirm">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                    Check here to confirm the above information is accurate
                                </label>
                            </div>
                            <div className="col bookButton">
                                <Button type='submit' textVariant=' Book My Table' disable={!formState.fields.firstName} />
                            </div>
                        </div>
                    </fieldset>
                </div>
            </form >
        )
    }
}