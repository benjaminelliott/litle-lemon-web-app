import { useShoppingCart } from "context/ShoppingCartContext";
import menuItems from "../data/items.json"
import { LazyLoadImage } from "react-lazy-load-image-component"

export const MenuSection = (props: any) => {

    const { cartItems, increaseCartQuantity }:any = useShoppingCart()

    return (
        <ul className="menu-section">
            {
                props.courseItems.map((item:any) => {
                    return (
                        <li
                            className={ item.veggie && item.vegan
                                ? "menu-section-item veggie-vegan"
                                : item.veggie
                                    ? "menu-section-item veggie"
                                    : item.vegan
                                    ? "menu-section-item vegan"
                                        : "menu-section-item"}
                            key={item.id}
                        >
                            <p className="menu-section-item-name">{item.name}</p>
                            <p className="menu-section-item-price">{item.price}</p>
                            <button
                                className="menu-basket-button"
                                name="basket"
                                onClick={() => increaseCartQuantity(item)}
                            >
                                <LazyLoadImage src="icons/Basket.svg"/>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}