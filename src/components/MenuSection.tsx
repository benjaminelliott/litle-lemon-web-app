import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { UserContext } from "App";

export const MenuSection = (props: any) => {

    const { user, setUser } = useContext<any>(UserContext);

    const changeHandler = (e:any) => {
        setUser({...user, [e.target.name]: e.item})
        console.table(user)
     }

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
                                onClick={changeHandler}
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