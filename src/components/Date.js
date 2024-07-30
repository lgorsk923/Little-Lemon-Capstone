import React from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function DateComponent({ selected, onChange }) {

    const CustomInput = forwardRef(
        ({ value, onClick }, ref) => (
            <div className="input-group">
                <div className='input-group-append'>
                    <span className='input-group-text'>
                        <FaCalendarAlt />
                    </span>
                </div>
                <input
                    id='selectDate'
                    placeholder='MM/DD/YYYY'
                    type='text'
                    className='form-control'
                    onClick={onClick}
                    value={value}
                    ref={ref}
                    readOnly />
            </div>
        ));

    return (
        <DatePicker
            label="date"
            id="date"
            name="date"
            selected={(selected && new Date(selected)) || null}
            onChange={onChange}
            customInput={
                <CustomInput />}
        />
    )
}