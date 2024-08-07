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
            guests: 1,
            date: new Date().toLocaleDateString(),
            time: 'Select Time',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            occasion: 'Occasion',
            otherInfo: '',
            confirmButton: false
        },
        validationSchema: Yup.object().shape({
            guests:
                Yup.number()
                    .positive('Must be a positive number')
                    .min(1, 'There must be at least one guest')
                    .max(25, 'Our maximum party size is 25, for larger groups, please contact us directly to book a private event')
                    .required('Required'),
            date: Yup.date().required('Required'),
            time: Yup.string().required('Required'),
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().email('Please enter a valid email address').required('Required'),
            phone: Yup.string()
                .required('Required')
                .matches(/^[0-9]{10}$/, 'Please enter a valid phone number')
                .min(10, 'Please enter a valid phone number')
        }),
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify('Your booking has been submitted! Please check your inbox for a confirmation email.'));
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
                            className="guestInput"
                            value={formik.values.guests}
                            onChange={formik.handleChange}
                            {...formik.getFieldProps('guests')}
                        />
                        {formik.touched.guests && formik.errors.guests ? <div className='error'>{formik.errors.guests}</div> : null}
                    </div>
                    <div className="date">
                        <label htmlFor='date'>Date</label>
                        <DateComponent
                            selected={formik.values.date}
                            onChange={(d) => formik.setFieldValue('date', d)} />
                        {formik.touched.date && formik.errors.date ? <div className='error'>{formik.errors.date}</div> : null}
                    </div>
                    <div className="dropdown time">
                        <label htmlFor='time'>Time</label>
                        <select
                            id='time'
                            name='time'
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            aria-expanded="false"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                        >
                            <option>Select Time</option>
                            {availabilityForDay.map((time, index) => <option className="dropdown-item" key={index}>{time}</option>)}
                        </select>
                        {formik.touched.time && formik.errors.time ? <div className='error'>{formik.errors.time}</div> : null}
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
                            <div className="col firstName">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id='firstName'
                                    name='time'
                                    type="text"
                                    className="form-control nameinput"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
                            </div>
                            <div className="col lastName">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id='lastName'
                                    name='lastName'
                                    type="text"
                                    className="form-control nameinput"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
                            </div>
                        </div>
                        <div className="row phemail">
                            <div className="col email">
                                <label htmlFor="email" >Email Address</label>
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    className="form-control email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
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
                                    className="form-control number"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.phone && formik.errors.phone ? <div className='error'>{formik.errors.phone}</div> : null}
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
                            <input className="form-check-input" type="checkbox" id="confirmButton" />
                            <label className="form-check-label" htmlFor="confirmButton">
                                Check here to confirm the above information is accurate
                            </label>
                        </div>
                        <div className="col bookButton">
                            <Button type='submit' textVariant=' Book My Table' />
                        </div>
                    </div>
                </fieldset>
            </div>
        </form >
    )
}