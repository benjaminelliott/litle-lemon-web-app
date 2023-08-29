import { MinusIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { useShoppingCart } from "context/ShoppingCartContext"
import { LazyLoadImage } from "react-lazy-load-image-component"

type MenuItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
    vegan: boolean
    veggie: boolean
}

export const OrderItem = ({ id, name, price, imgUrl, vegan, veggie }: MenuItemProps) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
      <li
        className={
          veggie && vegan
            ? "menu-section-item veggie-vegan"
            : veggie
            ? "menu-section-item veggie"
            : vegan
            ? "menu-section-item vegan"
            : "menu-section-item"
        }
        key={id}
      >
        <p className="menu-section-item-name">{name}</p>
        <p className="menu-section-item-price">{price}</p>
        <button
          className="menu-basket-button"
          name="basket"
          onClick={() => decreaseCartQuantity(id)}
        >
          <MinusIcon  />
        </button>
        <button
          className="menu-basket-button"
          name="basket"
          onClick={() => increaseCartQuantity(id)}
        >
          <LazyLoadImage src="icons/Basket.svg" />
        </button>
        <button
          className="menu-basket-button"
          name="decrease"
          onClick={() => increaseCartQuantity(id)}
        >
          <AddIcon  />
        </button>
        <button
          className="menu-basket-button"
          name="delete"
          onClick={() => removeFromCart(id)}
        >
          <DeleteIcon  />
        </button>
      </li>
    );
}