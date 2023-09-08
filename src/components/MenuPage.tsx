import React from "react"
import { MenuSection } from "./MenuSection"
import { animated, useSpring } from "@react-spring/web"
import menuItems from "../data/items.json"

export const MenuPage = (props: any) => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    return (
        <animated.main className="menu" style={{...fade}}>
            <section className="menu-sheet">
                <h1 className="text-section-title menu-title">Little Lemon </h1>
                <h2 className="text-lead">Available for <strong>Vegan 🟢</strong> & <strong>Vegetarian 🟡</strong> diets</h2>
                {
                    menuItems.map((course: any) => {
                        return (
                            <React.Fragment key={course.id}>
                                <hr />
                                <h2 className="text-lead">{course.name}</h2>
                                <MenuSection courseItems={course.items} />
                            </React.Fragment>
                        )
                    })
                }
            </section>
        </animated.main>
    )
}