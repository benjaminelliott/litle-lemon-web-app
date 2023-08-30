import { useShoppingCart } from "context/ShoppingCartContext"
import menuItems from "../data/items.json"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { ShoppingCart } from "./ShoppingCart"

type CartItemProps = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

export const CartItem = ({ id }: CartItemProps) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }:ShoppingCartContext = useShoppingCart()



    const item:any = menuItems[0].items.find((i: any) => i.id === id)

    if (item == null) return null

    //needs to iterate through menuitems.items !!!!
    //have to map over menuItems, everything else OK
    //cart rendering below other pages
    //add images for each dish
    //add input for any requirements (veggie, vegan)

        return (
            <li
                className="cart-item"
                key={item.id}
            >
                <div className="item-text">
                    <p className="menu-section-item-name">{item.name}</p>
                    <p className="menu-section-item-price">{item.price}</p>
                </div>
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
}