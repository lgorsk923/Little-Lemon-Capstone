import silhouetteBorder from '../images/silouhette-logo-border.png';
import './Footer.css';
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
                            <li className="mb-1"><a className="link-light text-decoration-none" href="#">Home</a></li>
                            <li className="mb-1"><a className="link-light text-decoration-none" href="#about">About</a></li>
                            <li className="mb-1"><a className="link-light text-decoration-none" href="#login">Login/Sign Up</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-light text-decoration-none" href="#menu">Menu</a></li>
                            <li className="mb-1"><a className="link-light text-decoration-none" href="#order">Order</a></li>
                            <li className="mb-1"><a className="link-light text-decoration-none" href="#reservations">Reservations</a></li>
                        </ul>
                    </div>
                    <p>© Copyright 2024</p>
                </div>
            </footer>
        </>
    )
}