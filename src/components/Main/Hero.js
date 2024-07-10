import { Button } from "../Button";

export function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <h1 className="hero__title">Little Lemon</h1>
                <h5 className="hero__subtitle">Chicago, IL</h5>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <Button textVariant='Reserve Table' />
            </div>
            <img src="/src/images/bruschetta.jpg" />
        </section>
    );
}