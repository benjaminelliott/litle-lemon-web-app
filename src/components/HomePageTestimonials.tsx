import { Container, HStack, Heading, VStack } from '@chakra-ui/react'
import { TestimonialsCard } from './HomePageTestimonialsCard';

const testimonials  = [
    {
        user: "bigshoota87",
        title: "awesome",
        rating: 5,
        text: "Tempor ut dolore pariatur elit ea reprehenderit ut ipsum amet aute tempor labore dolore ullamco.",
        image: "pexels-pixabay-220453.jpg"
    },
    {
        user: "timbuktu22",
        title: "epic",
        rating: 4,
        text: "Consectetur pariatur labore ex quis do tempor.",
        image: "k2zaltb9.bmp"
    },
    {
        user: "stacyannJ86",
        title: "average",
        rating: 3,
        text: "Id ut commodo esse elit mollit id. Ullamco ipsum laboris non nostrud occaecat proident aliqua.",
        image: "epwc4khm.bmp"
    },
];

export const Testimonials = () => {
    return (
        <Container as="section" className="testimonials" pl="125px"  pr="125px" pt="50px" pb="50px">
            <VStack pb="50px" justifyContent="space-evenly">
                <Heading className="text-section-title">Testimonials</Heading>
                <HStack className="testimonial-cards">
                {
                    testimonials.map(testimonial => {
                        return (
                            <TestimonialsCard user={testimonial.user} title={testimonial.title} rating={testimonial.rating} text={testimonial.text} image={testimonial.image} />
                        )
                    })
                }
                </HStack>
            </VStack>
        </Container>
    );
}