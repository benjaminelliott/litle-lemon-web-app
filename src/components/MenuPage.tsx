import React from "react"
import { MenuSection } from "./MenuSection"
import { animated, useSpring } from "@react-spring/web"

export const MenuPage = (props: any) => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    return (
        <animated.section className="menu" style={{...fade}}>
            <div className="menu-sheet">
                <h1 className="text-section-title">🍋Little Lemon </h1>
                <h2 className="text-lead">Available for <strong>Vegan 🟢</strong> & <strong>Vegetarian 🟡</strong> diets</h2>
                {
                    props.menu.map((course: any) => {
                        return (
                            <React.Fragment key={course.key}>
                                <hr />
                                <MenuSection course={course} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </animated.section>
    )
}