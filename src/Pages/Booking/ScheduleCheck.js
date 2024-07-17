import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";



export function ScheduleCheck() {
    const [date, setDate] = useState(null);
    const [guestCount, setGuestCount] = useState(1);
    const [time, setTime] = useState('Select Time');
    let timeOptions = ['Select Time', '11:00AM', '11:30AM', '12:00PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:00PM', '3:30PM', '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM', '8:30PM']
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
        <>
            <h1 className="scheduleCheckTitle">Tell us about your Party!</h1>
            <form id='scheduleChecker' className='scheduleCheckInputs'>
                <div className='guests'>
                    <label> Guests </label>
                    <input className="guestInput" placeholder="1" value={guestCount} onChange={e => setGuestCount(e.target.value)} />
                </div>
                <div className="date">
                    <label>Date</label>
                    <DatePicker selected={date} onChange={date => setDate(date)} customInput={<CustomInput />} />
                </div>
                <div className="dropdown time">
                    <label>Time</label>
                    <select className="btn btn-secondary dropdown-toggle" type="button" aria-expanded="false" value={time} onChange={e => setTime(e.target.value)}>
                        {timeOptions.map((time, index) => <option className="dropdown-item" key={index}>{time}</option>)}
                    </select>
                </div>
            </form >
        </>
    )
}