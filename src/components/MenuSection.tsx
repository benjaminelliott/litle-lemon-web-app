import { useShoppingCart } from "context/ShoppingCartContext";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export const MenuSection = (props: any) => {

    const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity, removeFromCart }:any = useShoppingCart()

    return (
        <article className="menu-section">
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
                                <Button
                                    className="menu-basket-button"
                                    name="basket"
                                    onClick={() => decreaseCartQuantity(item.id)}
                                >
                                    <MinusIcon  />
                                </Button>
                                <p>{getItemQuantity(item.id)}</p>
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
                })
            }
        </article>
    )
}