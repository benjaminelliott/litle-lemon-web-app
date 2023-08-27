export const TestimonialsCard = (props: TestimonialsCardProps) => {

    const stars = [...Array(props.rating)];

    return (
        <article className="card-testimonials">
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
            <p className="text-testimoials">{props.text}</p>
            </div>
        </article>
    );
};