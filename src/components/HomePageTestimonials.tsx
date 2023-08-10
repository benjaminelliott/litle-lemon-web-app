import { TestimonialsCard } from './HomePageTestimonialsCard';

const testimonials  = [
    {
        user: "Benjamin E",
        title: "Awesome",
        rating: 5,
        text: "The Lemon Dessert is out of this world. I had a wonderful time for my birthday",
        image: "pexels-pixabay-220453.jpg"
    },
    {
        user: "Timothy E",
        title: "Epic",
        rating: 4,
        text: "I would've liked more feta with my greek salad. ",
        image: "k2zaltb9.bmp"
    },
    {
        user: "Stacy E",
        title: "Average",
        rating: 3,
        text: "The restaurant was too cold for my liking.",
        image: "epwc4khm.bmp"
    },
];

export const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1 className="text-section-title testimonial-title">Testimonials</h1>
            <div className="testimonial-cards">
            {
                testimonials.map(testimonial => {
                    return (
                        <TestimonialsCard user={testimonial.user} title={testimonial.title} rating={testimonial.rating} text={testimonial.text} />
                    )
                })
            }
            </div>
        </section>
    );
}