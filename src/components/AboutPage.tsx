import { LazyLoadImage } from 'react-lazy-load-image-component';
import logoWhite from "assets/logo-white.png"

export const AboutPage = () => {
    return (
        <section className="about">
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
                <p className="text">Whether you want to stop by or get our cuisine delivered, we look forward to giving you a taste of Little Lemon soon!</p>
            </article>
        </section>
    )
}