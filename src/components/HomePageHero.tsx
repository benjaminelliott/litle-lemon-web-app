import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <article className="hero">
            <div className="hero-text">
                    <h1 className='title title-display'>Little Lemon</h1>
                    <h2 className="title title-sub">Chicago</h2>
                <p className="text text-paragraph">We are a family owned Mediterranean restaurant, focused on traditional recipes & served with a modern twist.</p>
                <div className="hero-buttons">
                    <Link to={"/about"}><button className="buttonh1">Read our story</button></Link>
                    <Link to={"/menu"}><button className="buttonh1">Checkout our menu</button></Link>
                    <Link to={"/booking"}><button className="buttonh1">Reserve a table</button></Link>
                </div>
            </div>
            <img className="hero-image" src="restauranfood.jpg" alt="restaurant 1" />
        </article>
    );
}