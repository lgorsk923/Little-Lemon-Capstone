import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';

export function Hero({ title, subtitle, text, image, alt, textVariant, path }) {
    return (
        <section className="hero">
            <div className="hero__container">
                <h1 className="hero__title">{title}</h1>
                <h5 className="hero__subtitle">{subtitle}</h5>
                <p>{text}</p>
                <Link to={path} >
                    <Button textVariant={textVariant} />
                </Link>

            </div>
            <img className={alt} src={image} alt={alt} />
        </section >
    );
}