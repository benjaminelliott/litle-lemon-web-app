import { MenuSection } from "./MenuSection"

export const MenuPage = (props: any) => {

    return (
        <section className="menu">
            <div className="menu-sheet">
                <h1 className="text-section-title">🍋Little Lemon </h1>
                <h2 className="text-lead">Vegan 🟢 Vegetarian 🟡</h2>
                {
                    props.menu.map((course: number) => {
                        return (
                            <>
                                <hr />
                                <MenuSection course={course} />
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}