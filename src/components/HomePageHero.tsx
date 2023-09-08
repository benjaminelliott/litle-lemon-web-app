import { Link } from "react-router-dom";
import { Button, Text } from '@chakra-ui/react'
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidFoodMenu } from "react-icons/bi";

export const Hero = (props: any) => {
    return (
        <section className="hero">
            <article className="hero-content">
                <div className="hero-text">
                    <h1 className="text-section-title menu-title">Little Lemon </h1>
                    <h2 className="title title-sub">Fulton Market, Chicago</h2>
                    <Text >We are a family owned Mediterranean restaurant, focused on traditional recipes & served with a modern twist.</Text>
                    <div className="hero-buttons">
                        <Button
                        rightIcon={<AiFillInfoCircle />}
                        >
                            <Link to={"/about"}>About</Link>
                        </Button>
                        <Button
                        rightIcon={<BiSolidFoodMenu />}
                        >
                            <Link to={"/menu"}>Menu</Link>
                        </Button>
                    </div>
                </div>
                <img className="hero-image" src="restauranfood.jpg" alt="restaurant 1" />
            </article>
        </section>
    );
}