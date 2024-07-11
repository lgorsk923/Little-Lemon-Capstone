import { Button } from "../../components/Button";
import scooter from '../../images/scooter-svgrepo-com.svg';
import bruschetta from '../../images/bruschetta.jpg';
import { Link } from "react-router-dom";

export function Specials() {

    function SpecialsCard({ special }) {
        return (
            <div className="specials__item">
                <img src={special.image} alt={special.title} className="specials__item-image" />
                <div className="item-header">
                    <h3 className="specials__item-title">{special.title}</h3>
                    <p className="specials__item-price">{special.price}</p>
                </div>
                <p className="specials__item-description">{special.description}</p>
                <div className="delivery">
                    <h3>Order a Delivery</h3>
                    <img className='scooter' src={scooter} alt="scooter" />
                </div>
            </div>

        )
    }

    const specials = [
        {
            image: { bruschetta },
            title: 'Greek Salad',
            description: 'The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
            price: '$12.99'
        },
        {
            image: '../../images/bruschetta.png',
            title: 'Bruschetta',
            description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
            price: '$5.99'
        },
        {
            image: '../../images/bruschetta.png',
            title: 'Lemon Dessert',
            description: "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined",
            price: '$5.00'
        }
    ]

    return (
        <section className="specials">
            <div className='specials-header'>
                <h2 className="header specials__title">Weekly Specials</h2>
                <Link to='/Menu' >
                    <Button textVariant='Online Menu' />
                </Link>
            </div>
            <div className="specials__grid">
                {specials.map((special, index) => {
                    return <SpecialsCard key={index} special={special} />
                })}
            </div>
        </section >
    )
}