import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <h1 className="hero__title">Little Lemon</h1>
                <h5 className="hero__subtitle">Chicago, IL</h5>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <Link to='/Reservations' >
                    <Button textVariant='Reserve Table' />
                </Link>

            </div>
            <img src="../../images/bruschetta.jpg" alt="bruschetta" />
        </section >
    );
}