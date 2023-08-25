import React from "react"
import { MenuSection } from "./MenuSection"

export const MenuPage = (props: any, addToBasket: Function) => {

    return (
        <section className="menu">
            <div className="menu-sheet">
                <h1 className="text-section-title">🍋Little Lemon </h1>
                <h2 className="text-lead">Available for Vegan 🟢 Vegetarian 🟡 diets</h2>
                {
                    props.menu.map((course: any) => {
                        return (
                            <React.Fragment key={course.key}>
                                <hr />
                                <MenuSection course={course} addToBasket={addToBasket}/>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </section>
    )
}