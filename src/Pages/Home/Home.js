import './Home.css';
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { HomeAbout } from './HomeAbout';
import { Reviews } from './Reviews';

export function Home() {
    return (
        <main>
            <Hero />
            <Specials />
            <HomeAbout />
            <Reviews />
        </main>
    )
}