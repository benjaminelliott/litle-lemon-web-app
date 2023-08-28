import { useContext, useState } from "react";
import { UserContext } from "App";

import { useSpring, animated } from '@react-spring/web'

export const OrderPage = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    const { basket, setBasket }  = useContext(UserContext);

    const [ total, setTotal ] = useState(0);

    const [ delivery, setDelivery ] = useState<Boolean>()

    console.log(basket)


    return (
        <animated.section className="order" style={{...fade}}>
            <ul className="order-items">
                {
                    basket.map((item: {key: number, name: string, price: number, vegan:boolean, veggie: boolean}) =>
                        <li className="order-item" key={item.key}>
                            <span className="order-item-name">{item.name}</span>
                            <span className="order-item-price">{item.price}</span>
                        </li>
                    )
                }
            </ul>
            <div className="order-summary">
                <p className="text-specials">Sub-total</p>
                <h1 className="text-section-title total">
                    {
                        basket.reduce((acc: any, obj: any) => Number(acc + obj.price), 0)
                    }
                </h1>
            </div>
            <div className="order-options">
                <button
                    className="buttonh1"
                    onClick={() => setDelivery(true)}
                >
                    Delivery
                </button>
                <button
                    className="buttonh1"
                    onClick={() => setDelivery(false)}
                >
                    Pick-up
                </button>
            </div>
            {
                delivery &&
                <p>Delivery</p>
            }
            {
                delivery == false &&
                <p>Pickup</p>
            }
        </animated.section>
    )
}