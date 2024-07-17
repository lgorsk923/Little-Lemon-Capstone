import { Button } from '../../components/Button'
import silhouetteLogo from '../../images/silouhette_logo-removebg-preview.png'
import { useState } from 'react';
export function BookingForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [occasion, setOccasion] = useState('Occasion');
    const [otherInfo, setOtherInfo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted')
        setFirstName('');
        setLastName('');
        setEmail();
        setNumber('');
        setOccasion('Occasion');
        setOtherInfo('');
    }

    return (
        <>
            <div className='bookingTitle'>
                <h1>Complete Your Booking!</h1>
                <img className='silhouetteLogo' src={silhouetteLogo} alt='little lemon logo' />
            </div>
            <form id='bookingForm' className='booking' onSubmit={handleSubmit}>
                <fieldset className="row name">
                    <div className="col">
                        <label htmlFor="fname">First Name</label>
                        <input id='fname' type="text" className="form-control nameinput" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="lname">Last Name</label>
                        <input id='lname' type="text" className="form-control nameinput" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                </fieldset>
                <fieldset className="row phemail">
                    <div className="col email">
                        <label htmlFor="email" >Email Address</label>
                        <input id='email' type="email" className="form-control emailInput" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="col number">
                        <label htmlFor="phone">
                            Phone Number
                            <h6>(for text updates)</h6>
                        </label>
                        <input id='phone' type="text" className="form-control numberInput" value={number} onChange={e => setNumber(e.target.value)} />
                    </div>
                </fieldset>
                <fieldset className="row occasion">
                    <label className='col' htmlFor="occasion">Celebrating something special? Tell us about it!</label>
                    <select id="occasion" className=" col form-control occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Occasion</option>
                        <option>Birthday</option>
                        <option>Engagement</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </fieldset>
                <fieldset className="form-group otherInfo">
                    <label htmlFor="otherInfo">Is there anything else you would like us to know?</label>
                    <textarea className="form-control" id="otherInfo" rows="3" value={otherInfo} onChange={e => setOtherInfo(e.target.value)}></textarea>
                </fieldset>
                <fieldset className="complete-form form-row align-items-center">
                    <div className="col">
                        <div className="form-check mb-2 confirm">
                            <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                            <label className="form-check-label" htmlFor="autoSizingCheck">
                                Check here to confirm the above information is accurate
                            </label>
                        </div>
                    </div>
                    <div className="col-auto bookButton">
                        <Button type='submit' textVariant=' Book a Table' disable={!firstName} />
                    </div>
                </fieldset>
            </form >
        </>
    )
}