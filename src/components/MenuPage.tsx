import { LazyLoadImage } from "react-lazy-load-image-component"

export const MenuPage = (props: any) => {
    return (
        <section className="menu">
            <div className="menu-sheet">
                <h1 className="text-section-title">🍋Little Lemon </h1>
                <h2 className="text-specials">Vegan 🟢 Vegetarian 🟡</h2>
                <ul className="menu-section">
                    <h2 className="text-lead">Appetizers</h2>
                    {
                        props.menu.appetizers.map((item:any) => {
                            return (
                                <li
                                    className={ item.veggie && item.vegan
                                        ? "menu-section-item veggie vegan"
                                        : item.veggie
                                            ? "menu-section-item veggie"
                                            : item.vegan
                                            ? "menu-section-item vegan"
                                                : "menu-section-item"}
                                    key={item.key}
                                >
                                    <p className="menu-section-item-name">{item.name}</p>
                                    <p className="menu-section-item-price">{item.price}</p>
                                    <button className="menu-basket-button"><LazyLoadImage src="icons/Basket.svg"/></button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                <ul className="menu-section">
                    <h2 className="text-lead">Entrees</h2>
                    {
                        props.menu.entrees.map((item:any) => {
                            return (
                                <li
                                    className={ item.veggie && item.vegan
                                        ? "menu-section-item veggie vegan"
                                        : item.veggie
                                            ? "menu-section-item veggie"
                                            : item.vegan
                                            ? "menu-section-item vegan"
                                                : "menu-section-item"}
                                    key={item.key}
                                >
                                    <p className="menu-section-item-name">{item.name}</p>
                                    <p className="menu-section-item-price">{item.price}</p>
                                    <button className="menu-basket-button"><LazyLoadImage src="icons/Basket.svg"/></button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr></hr>
                <ul className="menu-section">
                    <h2 className="text-lead">Desserts</h2>
                    {
                        props.menu.desserts.map((item:any) => {
                            return (
                                <li
                                    className={ item.veggie && item.vegan
                                        ? "menu-section-item veggie-vegan"
                                        : item.veggie
                                            ? "menu-section-item veggie"
                                            : item.vegan
                                            ? "menu-section-item vegan"
                                                : "menu-section-item"}
                                    key={item.key}
                                >
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <button className="menu-basket-button"><LazyLoadImage src="icons/Basket.svg"/></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}