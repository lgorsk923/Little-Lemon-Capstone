import './Main.css';
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { HomeAbout } from './HomeAbout';
import { Reviews } from './Reviews';

export function Main() {
    return (
        <>
            <main>
                <Hero />
                <Specials />
                <HomeAbout />
                <Reviews />
            </main>
        </>
    )
}