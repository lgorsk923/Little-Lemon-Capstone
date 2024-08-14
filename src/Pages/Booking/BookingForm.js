import { Button } from '../../components/Button'
import silhouetteLogo from '../../images/silouhette_logo-removebg-preview.png'
import { React } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DateComponent } from '../../components/Date';


import 'bootstrap/dist/css/bootstrap.min.css';

export function BookingForm() {

    const formik = useFormik({
        initialValues: {
            guests: '',
            date: new Date().toLocaleDateString(),
            time: 'Select Time',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            occasion: 'Occasion',
            otherInfo: '',
            confirmButton: false,
        },
        validationSchema: Yup.object().shape({
            guests:
                Yup.number()
                    .positive('Must be a positive number')
                    .min(1, 'There must be at least one guest')
                    .max(25, 'Our maximum party size is 25, for larger groups, please contact us directly to book a private event')
                    .required('Please enter the number of guests.'),
            date: Yup.date()
                .test(
                    'date',
                    'The date you selected has already passed.',
                    function (date) { return new Date(date) >= new Date(); }
                )
                .required('Required'),
            time: Yup.string()
                .notOneOf(['Select Time'], 'Please select one of our available time slots.')
                .required('Please select one of our available time slots.'),
            firstName: Yup.string().required('Required').trim(),
            lastName: Yup.string().required('Required').trim(),
            email: Yup.string().email('Please enter a valid email address').required('Required').trim(),
            phone: Yup.string()
                .required('Required')
                .matches(/^[0-9]{10}$/, 'Please enter a valid phone number')
                .min(10, 'Please enter a valid phone number'),
            confirmButton: Yup.boolean().oneOf([true], 'You must confirm the information above is accurate to submit your booking'),
        }),
        onSubmit:
            (values, { resetForm }) => {
                if (formik.isValid) {
                    console.log('Form submitted:', values);
                    alert('Your reservation has been submitted! We will send you a confirmation email shortly.');
                    resetForm();
                } else {
                    alert('Please fill out all required fields before submitting your reservation.');
                }
            }
    });

    const availability = [
        ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', "5:30 PM", '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'],
        ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', "5:30 PM", '6:00 PM', '7:30 PM', '8:00 PM'],
        ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', "5:30 PM", '6:00 PM', '6:30 PM'],
        ['11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'],
        ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '4:00 PM', '4:30 PM', '5:00 PM', "5:30 PM", '7:00 PM', '7:30 PM', '8:00 PM'],
        ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '5:00 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'],
        ['4:00 PM', '4:30 PM', '5:00 PM', "5:30 PM", '6:00 PM']
    ];

    const onClick = () => {
        !formik.isValid ? alert('Please fill out all required fields before submitting your reservation.') : formik.handleSubmit();
    };

    const dayOfWeek = new Date(formik.values.date).getDay();
    const availabilityForDay = availability[dayOfWeek];

    return (
        <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }}>
            <fieldset className='scheduleCheck'>
                <h1 className="scheduleCheckTitle">Tell us about your Party!</h1>
                <div id='scheduleChecker' className='scheduleCheckInputs'>
                    <div className='guests'>
                        <label htmlFor='guests'> Guests </label>
                        <input
                            id='guests'
                            name='guests'
                            type='number'
                            placeholder='1'
                            className={formik.touched.guests && formik.errors.guests ? "form-control error guestInput" : "form-control guestInput"}
                            value={formik.values.guests}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                    </div>
                    <div className="date">
                        <label htmlFor='date'>Date</label>
                        <DateComponent
                            selected={formik.values.date}
                            className={formik.touched.date && formik.errors.date ? "form-control error date" : "form-control"}
                            onChange={(d) => formik.setFieldValue('date', d)}
                            onChangeRaw={(e) => formik.setFieldTouched('date', e.target.value)}
                            onBlur={formik.handleBlur}
                            required
                        />
                    </div>
                    <div className="dropdown time">
                        <label htmlFor='time'>Time</label>
                        <select
                            id='time'
                            name='time'
                            type="button"
                            className={formik.touched.time && formik.errors.time ? 'btn btn-secondary dropdown-toggle error' : "btn btn-secondary dropdown-toggle"}
                            aria-expanded="false"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        >
                            <option value=''>Select Time</option>
                            {availabilityForDay.map((time, index) => <option className="dropdown-item" value={time} key={index}>{time}</option>)}
                        </select>
                    </div>
                </div >
                <div>
                    {formik.touched.guests && formik.errors.guests ? <div className='schedule-check-error'>{formik.errors.guests}</div> : null}
                    {formik.touched.date && formik.errors.date ? <div className='schedule-check-error'>{formik.errors.date}</div> : null}
                    {formik.touched.time && formik.errors.time ? <div className='schedule-check-error'>{formik.errors.time}</div> : null}
                </div>
            </fieldset>
            <div className='infoInput'>
                <fieldset className='infoInput'>
                    <div className='bookingTitle'>
                        <h1>Complete Your Booking!</h1>
                        <img className='silhouetteLogo' src={silhouetteLogo} alt='little lemon logo' />
                    </div>
                    <div className='contactInfo'>
                        <div className="row name">
                            <div className="col firstName">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id='firstName'
                                    name='firstName'
                                    type="text"
                                    className={formik.touched.firstName && formik.errors.firstName ? "form-control error" : "form-control name-input"}
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder=' '
                                    required
                                />
                                {formik.touched.firstName && formik.errors.firstName ? <div className='error-message'>{formik.errors.firstName}</div> : null}
                            </div>
                            <div className="col lastName">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id='lastName'
                                    name='lastName'
                                    type="text"
                                    className={formik.touched.lastName && formik.errors.lastName ? "form-control error" : "form-control name-input"}
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.touched.lastName && formik.errors.lastName ? <div className='error-message'>{formik.errors.lastName}</div> : null}
                            </div>
                        </div>
                        <div className="row phemail">
                            <div className="col email">
                                <label htmlFor="email" >Email Address</label>
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    className={formik.touched.email && formik.errors.email ? "form-control error" : "form-control email"}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.touched.email && formik.errors.email ? <div className='error-message'>{formik.errors.email}</div> : null}
                            </div>
                            <div className="col number">
                                <label htmlFor="phone" className='phone'>
                                    Phone Number
                                    <h6>(for text updates)</h6>
                                </label>
                                <input
                                    id='phone'
                                    name='phone'
                                    type="text"
                                    className={formik.touched.phone && formik.errors.phone ? "form-control error" : "form-control number"}
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.touched.phone && formik.errors.phone ? <div className='error-message'>{formik.errors.phone}</div> : null}
                            </div>
                        </div>
                        <div className="row occasion">
                            <label className='col' htmlFor="occasion">Celebrating something special? Tell us about it!</label>
                            <select
                                id="occasion"
                                name='occasion'
                                type='button'
                                className=" col form-control occasion"
                                value={formik.values.occasion}
                                onChange={formik.handleChange}
                            >
                                <option>Occasion</option>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group otherInfo">
                            <label htmlFor="otherInfo">Is there anything else you would like us to know?</label>
                            <textarea
                                id="otherInfo"
                                name='otherInfo'
                                className="form-control"
                                rows="3"
                                value={formik.values.otherInfo}
                                onChange={formik.handleChange}></textarea>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="align-items-center completeForm">
                    <div className='row'>
                        <div className="col form-check mb-2 confirm">
                            <input
                                className={formik.touched.confirmButton && formik.errors.confirmButton ? 'error form-check-input' : 'form-check-input'}
                                type="checkbox"
                                id="confirmButton"
                                onChange={formik.handleChange}
                                checked={formik.values.confirmButton}
                                onBlur={formik.handleBlur}
                                required />
                            <label className="form-check-label" htmlFor="confirmButton">
                                Check here to confirm the above information is accurate
                            </label>
                            {formik.touched.confirmButton && formik.errors.confirmButton ? <div className='error-message'>{formik.errors.confirmButton}</div> : null}
                        </div>
                        <div className="col bookButton">
                            <Button type='submit' onClick={onClick} textVariant=' Book My Table' />
                        </div>
                    </div>
                </fieldset>
            </div>
        </form >
    )
}