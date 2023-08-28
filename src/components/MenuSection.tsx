import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { UserContext } from "App";

export const MenuSection = (props: any) => {

    const { basket, setBasket } = useContext(UserContext);

    const addToBasket:Function = (item: {[x: string]: any;name: string, price: number, key: number, amount: number}) => {
        if (basket.includes(item)) {
            console.log(0, item, basket)
            setBasket((prevState: any) =>
                [
                    ...basket,
                    {
                        ...item,
                        amount: prevState.amount + 1
                    }
                ]
            )
            console.log(item)
        } else {
            console.log(1, item, basket)
            setBasket(
                [
                    ...basket,
                    item
                ]
            )
        }
        return basket;
      };

    return (
        <ul className="menu-section">
            <h2 className="text-lead">{props.course.name}</h2>
            {
                props.course.items.map((item:any) => {
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
                            <p className="menu-section-item-price">{item.price * item.amount}</p>
                            <button
                                className="menu-basket-button"
                                name="basket"
                                onClick={ () => addToBasket(item) }
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