export const TestimonialsCard = (props: TestimonialsCardProps) => {

    const stars = [...Array(props.rating)];

    return (
        <article className="testimonials-card">
            <div>
                <p className="text-card-title">{props.user}</p>
                <span className="stars">
                    {
                        stars.map((e: number) => {
                            return (
                                <img key={stars[e]} src="star-icon.svg" className="star-rating" alt="star" />
                            )
                        })
                    }
                </span>
            </div>
            <div>
                <p className="text-highlight">{props.title}</p>
                <p className="text-testimonials">{props.text}</p>
            </div>
        </article>
    );
};