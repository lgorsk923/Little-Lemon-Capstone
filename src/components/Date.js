import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

export function DateComponent({ selected, onChange, onChangeRaw, className, id }) {

    const CustomInput = forwardRef(
        ({ value, onClick, className, id }, ref) => (
            <div className="input-group">
                <div className='input-group-append'>
                    <span className='input-group-text'>
                        <FaCalendarAlt />
                    </span>
                </div>
                <input
                    id={id}
                    placeholder='MM/DD/YYYY'
                    type='text'
                    className={className}
                    onClick={onClick}
                    value={value}
                    ref={ref}
                    readOnly />
            </div>
        )
    );

    return (
        <DatePicker
            label="date"
            id={id}
            name="date"
            selected={(selected && new Date(selected)) || null}
            onChange={onChange}
            onChangeRaw={onChangeRaw}
            customInput={<CustomInput className={className} id={id} />}
        />
    )
}