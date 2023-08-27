import { SpecialsCard } from './HomePageSpecialsCard';
import { Link } from "react-router-dom";

 const specials  = [
    {
        id: 0,
        image: "greek-salad.25fc793faeb3d58ed9fb.jpg",
        title: "Greek Salad",
        price: "$12.99",
        text:  "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons..",
        delivery: "",
        include: true
    },
    {
        id: 1,
        image: "bruschetta.d54e450bda5efcf06010.jpg",
        title: "Bruschetta",
        price: "$5.99",
        text:  "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        delivery: "",
        include: true
    },
    {
        id: 2,
        image: "lemon-dessert.a146cfc0ccf8ce82fae4.jpg",
        title: "Lemon Cake",
        price: "$4.99",
        text:  "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        delivery: "",
        include: true
    }
];

export const Specials = () => {
    return (
        <article className="section specials">
            <div className='specials-top'>
                <h1 className="text-section-title">Specials</h1>
                <button className="buttonh1"><Link to={"/menu"}>Check out our menu</Link></button>
            </div>
            <div className='specials-bottom'>
                {
                    specials.map(special => {
                        return (
                            special.include
                            ? <SpecialsCard key={special.id} image={special.image} title={special.title} price={special.price} text={special.text}/>
                            : ""
                        )
                    })
                }
            </div>
        </article>
    );
}