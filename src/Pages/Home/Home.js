import './Home.css';
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { HomeAbout } from './HomeAbout';
import { Reviews } from './Reviews';
import bruschetta from '../../images/bruschetta.png';

export function Home() {
    return (
        <main>
            <Hero
                title='Little Lemon'
                subtitle='Chicago, IL'
                text='We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist'
                image={bruschetta}
                textVariant='Reserve Table'
                alt='bruschetta'
                path='/Reservations'
            />
            <Specials />
            <HomeAbout />
            <Reviews />
        </main>
    )
}