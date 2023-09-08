import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
import { useShoppingCart } from "context/ShoppingCartContext"

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
}

type CartItemProps = {
    id: number
    course: any
}

export const CartItem = ({id, course}: CartItemProps) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }:ShoppingCartContext = useShoppingCart()

    const item:any = course.items.find((i: any) => i.id === id)

    if (item == null) return null

    return (
        <li
                className="cart-item"
                key={item.id}
            >
                <div className="item-text">
                    <p className="menu-section-item-name">{item.name}</p>
                </div>
                <div className="item-quantity">
                    <p className="menu-section-item-price">{item.price} x {getItemQuantity(item.id)} = <strong className="item-total">{item.price * getItemQuantity(item.id)}</strong></p>
                </div>
                <div className="item-buttons">
                    <Button
                        className="menu-basket-button"
                        name="basket"
                        onClick={() => decreaseCartQuantity(item.id)}
                    >
                        <MinusIcon  />
                    </Button>
                    <Button
                        className="menu-basket-button"
                        name="decrease"
                        onClick={() => increaseCartQuantity(item.id)}
                    >
                        <AddIcon  />
                    </Button>
                    <Button
                        className="menu-basket-button"
                        name="delete"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <DeleteIcon  />
                    </Button>
                </div>
            </li>
    )
}