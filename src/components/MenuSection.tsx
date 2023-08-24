import { LazyLoadImage } from "react-lazy-load-image-component"

export const MenuSection = (props: any, setBasket: Function) => {

    return (
        <ul className="menu-section">
            <h2 className="text-lead">{props.course.name}</h2>
            {
                props.course.items.map((item:any) => {
                    console.log(item.veggie, item.vegan)

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
                            <p className="menu-section-item-name">{item.name}</p>
                            <p className="menu-section-item-price">{item.price}</p>
                            <button
                                className="menu-basket-button"
                                onSubmit={() => {
                                    return (
                                        setBasket(item)
                                    )
                                }}
                            ><LazyLoadImage src="icons/Basket.svg"/></button>
                        </li>
                    )
                })
            }
        </ul>
    )
}