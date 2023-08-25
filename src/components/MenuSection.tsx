import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { BasketContext } from "App";

export const MenuSection = (props: any, addToBasket: Function) => {

    const { basket, setBasket } = useContext<any>(BasketContext);

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
                            <p className="menu-section-item-price">{item.price}</p>
                            <button
                                className="menu-basket-button"
                                onClick={()=> {
                                    setBasket([...basket, item])
                                    console.log(basket)}
                                }
                            ><LazyLoadImage src="icons/Basket.svg"/></button>
                        </li>
                    )
                })
            }
        </ul>
    )
}