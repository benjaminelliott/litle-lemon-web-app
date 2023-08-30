import { useShoppingCart } from "context/ShoppingCartContext";
import menuItems from "../data/items.json"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";

export const MenuSection = (props: any) => {

    const { cartItems, increaseCartQuantity, decreaseCartQuantity, getItemQuantity, removeFromCart }:any = useShoppingCart()

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
                            <div className="item-buttons">
                                <button
                                    className="menu-basket-button"
                                    name="basket"
                                    onClick={() => decreaseCartQuantity(item.id)}
                                >
                                    <MinusIcon  />
                                </button>
                                <p>{getItemQuantity(item.id)}</p>
                                <button
                                    className="menu-basket-button"
                                    name="decrease"
                                    onClick={() => increaseCartQuantity(item.id)}
                                >
                                    <AddIcon  />
                                </button>
                                <button
                                    className="menu-basket-button"
                                    name="delete"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <DeleteIcon  />
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}