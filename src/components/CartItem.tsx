import { useShoppingCart } from "context/ShoppingCartContext"
import menuItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({id, quantity}: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = menuItems.find(i => i.id === id)
    if(item == null) return null
    return (
        <li className="cart-item"
        >
            {item.name}
            {quantity > 1 && <p>x {quantity}</p>}
        </li>
    )
}