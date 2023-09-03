import { LazyLoadImage } from 'react-lazy-load-image-component';
import logoWhite from "assets/logo-white.png"
import { Link } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';

export const AboutPage = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    return (
        <animated.section className="about" style={{...fade}}>
            <article className="hero-about">
                <div className="hero-about-text">
                    <div>
                        <LazyLoadImage src={logoWhite} />
                    </div>
                </div>
                <div></div>
            </article>
            <article className="article-about">
                <h1 className='title title-display'>Mediterranean on Lake Michigan</h1>
                <p className="text">Mario and Adrian met each other by chance, both having spent numerous vacations in Greece. Along with the memories, they both brought back their passion for Mediterranean food.</p>
                <p className="text">At the forefront of the "Michi-terranean" movement, Little Lemon is bringing a European flair to the Windy City in a big way.</p>
                <p className="text">Fulton Market has become a hotbed for modern American takes on traditional world cuisines, and Little Lemon is proud to be part of this vibrant community</p>
                <p className="text">Whether you want to stop by or get our cuisine delivered, we look forward to giving you a taste of Little Lemon soon!</p>
                <div className='about-buttons'>
                    <button className="buttonh1"><Link to={"/booking"}>Reserve a table</Link></button>
                    <button className="buttonh1"><Link to={"/menu"}>Check out our menu</Link></button>
                </div>
            </article>
        </animated.section>
    )
}