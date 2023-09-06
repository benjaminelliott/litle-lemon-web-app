import { animated, useSpring } from '@react-spring/web';
import { Hero } from './HomePageHero';

export const HomePage = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    return (
        <animated.section className="section home" style={{...fade}}>
            <Hero />
        </animated.section>
    )
};