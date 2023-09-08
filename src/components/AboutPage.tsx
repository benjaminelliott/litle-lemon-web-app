import { LazyLoadImage } from 'react-lazy-load-image-component';
import logoWhite from "assets/logo-white.png"
import { animated, useSpring } from '@react-spring/web';
import { Text } from '@chakra-ui/react'

export const AboutPage = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    return (
        <animated.main className="about" style={{...fade}}>
            <section className="hero-about">
                <div className="hero-about-text">
                    <div>
                        <LazyLoadImage src={logoWhite} />
                    </div>
                </div>
                <div></div>
            </section>
            <section className="article-about">
                <h1 className='title title-display about-title'>Mediterranean on Lake Michigan</h1>
                <Text>Mario and Adrian met each other by chance, both having spent numerous vacations in Greece. Along with the memories, they both brought back their passion for Mediterranean food.</Text>
                <Text>At the forefront of the "Michi-terranean" movement, Little Lemon is bringing a European flair to the Windy City in a big way.</Text>
                <Text>Fulton Market has become a hotbed for modern American takes on traditional world cuisines, and Little Lemon is proud to be part of this vibrant community</Text>
                <Text>Whether you want to stop by or get our cuisine delivered, we look forward to giving you a taste of Little Lemon soon!</Text>
            </section>
        </animated.main>
    )
}