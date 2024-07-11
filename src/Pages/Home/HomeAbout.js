import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

export function HomeAbout() {
    return (
        <section className="home-about">
            <div className="home-about__container">
                <h1 className="header home-about__title">Who Are We?</h1>
                <h4 className="home-about__description">Little Lemon is a family-owned restaurant just outside downtown Chicago. All of our ingredients are locally grown and prepared by our two excellent chefs Adrian and Mario.</h4>
                <Link to='/About' >
                    <Button textVariant='Learn More' />
                </Link>
            </div>
        </section>

    )
}