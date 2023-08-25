import { useContext, useState } from "react";
import { BasketContext } from "App";

export const OrderPage = () => {

    const { basket, setBasket }  = useContext<any>(BasketContext);

    const [ total, setTotal ] = useState(0);

    const [ delivery, setDelivery ] = useState<Boolean>()

    console.log(basket)

    return (
        <section className="order">
            <ul className="order-items">
                {
                basket.map((item: any) => {
                    return (
                        <li className="order-item">
                            <p className="order-item-name">{item.name}</p>
                            <p className="order-item-price">{item.price}</p>
                        </li>
                    )
                })
            }
            </ul>
            <div className="order-summary">
                <p className="text-specials">Sub-total</p>
                <h1 className="text-section-title total">
                    {
                        basket.reduce((acc: any, obj: any) => {
                            return (
                                acc + obj.price
                            )
                        }, 0)
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
        </section>
    )
}