import { useState } from "react";
import { useSpring, animated } from '@react-spring/web'
import { useShoppingCart } from "context/ShoppingCartContext";
import { CartItem } from "./CartItem";

export const OrderPage = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
    })

    const {  cartItems }:any = useShoppingCart()

    const [ delivery, setDelivery ] = useState<Boolean>()

    return (
        <animated.section className="order" style={{...fade}}>
            <ul className="order-items">
                {
                    cartItems.map((item: {id: number}) =>
                        <CartItem id={item.id} />
                    )
                }
            </ul>
            <div className="order-summary">
                <p className="text-specials">Sub-total</p>
                <h1 className="text-section-title total">
                    {
                        cartItems.reduce((acc: any, obj: any) => Number(acc + (obj.price * obj.amount)), 0)
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