import silhouetteBorder from '../images/silouhette-logo-border.png';
import './Footer.css';
import { Link } from 'react-router-dom';
export function Footer() {
    return (
        <>
            <footer>
                <div className="row mx-5">
                    <div className="col-12 col-md light-color">
                        <img className="mb-2" src={silhouetteBorder} alt="" width="75" height="75" />
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1 ">1234 Straight Street</li>
                            <li className="mb-1">Chicago, IL 60001</li>
                            <li className="mb-1">123-456-7890</li>
                            <li className="mb-1">contactlittlelemon@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><Link className="link-light text-decoration-none" to="/">Home</Link></li>
                            <li className="mb-1"><Link className="link-light text-decoration-none" to="/About">About</Link></li>
                            <li className="mb-1"><Link className="link-light text-decoration-none" to="/Login-Signup">Login/Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><Link className="link-light text-decoration-none" to="/Menu">Menu</Link></li>
                            <li className="mb-1"><Link className="link-light text-decoration-none" to="/Order">Order</Link></li>
                            <li className="mb-1"><Link className="link-light text-decoration-none" to="/Reservations">Reservations</Link></li>
                        </ul>
                    </div>
                    <p>© Copyright 2024</p>
                </div>
            </footer>
        </>
    )
}