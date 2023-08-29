import { useShoppingCart } from "context/ShoppingCartContext"
import menuItems from "../data/items.json"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import { LazyLoadImage } from "react-lazy-load-image-component"

type CartItemProps = {
    id: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

export const CartItem = ({id}: CartItemProps) => {
    const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart()
    const item:any = menuItems.find(i => i.id === id)

    //needs to iterate through menuitems.items !!!!
    if(item == null) {
        console.log(0)
        return null;
    } else {
        console.log(1)
        return (
            <li
                className="cart-item"
                key={item.id}
            >
                <p className="menu-section-item-name">{item.name}</p>
                <p className="menu-section-item-price">{item.price}</p>
                <button
                    className="menu-basket-button"
                    name="basket"
                    onClick={() => decreaseCartQuantity(item.id)}
                >
                    <MinusIcon  />
                </button>
                <button
                    className="menu-basket-button"
                    name="basket"
                    onClick={() => increaseCartQuantity(item.id)}
                >
                    <LazyLoadImage src="icons/Basket.svg" />
                </button>
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
            </li>
        )
    }
}