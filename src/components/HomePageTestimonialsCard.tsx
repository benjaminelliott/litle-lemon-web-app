export const TestimonialsCard = (props: TestimonialsCardProps) => {

    const stars = [...Array(props.rating)];

    return (
        <article className="card-testimonials">
            <div>
                <p className="text-card-title">{props.user}</p>
                <span className="stars">
                    {stars.map(() => {
                        return (
                            <img src="star-icon.svg" className="star-rating" />
                        )
                    })}
                </span>
            </div>
            <div>
            <p className="text-highlight">{props.title}</p>
            <p className="text-testimoials">{props.text}</p>
            </div>
        </article>
    );
};