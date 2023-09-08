import { Text, Heading } from '@chakra-ui/react'
import { useId } from 'react';

export const TestimonialsCard = (props: TestimonialsCardProps) => {

    const stars = [...Array(props.rating)];

    const iD = useId()

    return (
        <article className="testimonials-card">
            <div>
                <p className="text-card-title">{props.user}</p>
                <span className="stars">
                    {
                        stars.map((e: number) => {
                            return (
                                <img key={e} src="star-icon.svg" className="star-rating" alt="star" />
                            )
                        })
                    }
                </span>
            </div>
            <div>
                <Heading size={"md"}>{props.title}</Heading>
                <Text>{props.text}</Text>
            </div>
        </article>
    );
};