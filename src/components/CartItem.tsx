import { useShoppingCart } from "context/ShoppingCartContext"
import menuItems from "../data/items.json"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import { LazyLoadImage } from "react-lazy-load-image-component"

type CartItemProps = {
    id: number
    quantity: number
    name: string
    price: string
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

export const CartItem = ({id, name, price, quantity}: CartItemProps) => {
    const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart()
    const item:any = menuItems.find(i => i.id === id)
    if(item == null) return null
    return (
        <li className="cart-item"
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