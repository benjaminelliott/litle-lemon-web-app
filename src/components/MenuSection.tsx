import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { UserContext } from "App";

export const MenuSection = (props: any) => {

    const { basket, setBasket } = useContext(UserContext);

    const addToBasket:Function = (item: {name: string, price: number, key: number, amount: number}) => {
        console.log("working")

        if (basket.length) {
            console.log(0)
        } else {
            basket.map((b: any, i: any) => {
                if (i === item) {
                   console.log(1)
                   return setBasket([ ...basket, { b: b.amount + 1}])
               } else {
                   console.log(2)
                   return setBasket([ ...basket, b ])
               }
        })
        console.log(basket)
      };

    }

      //https://react.dev/learn/updating-objects-in-state#updating-a-nested-object
      //https://typeofnan.dev/how-to-update-nested-state-in-react/
      //https://react.dev/learn/updating-arrays-in-state

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
                                name="basket"
                                onClick={() => addToBasket(item)}
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