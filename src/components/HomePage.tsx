import { Hero } from './HomePageHero';
import { Specials } from './HomePageSpecials';
import { Testimonials } from './HomePageTestimonials'

export const HomePage = () => {
    return (
        <section className="section home">
            <Hero />
            <Specials />
            <Testimonials />
        </section>
    )
};