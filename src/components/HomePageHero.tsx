import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <article className="hero">
            <div className="hero-text">
                <div>
                    <h1 className='title title-display'>Little Lemon</h1>
                    <h2 className="title title-sub">Chicago</h2>
                </div>
                <p className="text text-paragraph">We are a family owned Mediterranean restaurant, focused on traditional recipes & served with a modern twist.</p>
                <Link to={"/booking"}><button className="buttonh1">Reserve a table</button></Link>
            </div>
            <img className="hero-image" src="restauranfood.jpg" alt="restaurant 1" />
        </article>
    );
}