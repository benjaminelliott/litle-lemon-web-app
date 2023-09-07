import { useShoppingCart } from 'context/ShoppingCartContext';
import menuItems from "../data/items.json"
import { CartSection } from './CartSection';
import { animated, useSpring } from '@react-spring/web';
import { useContext, useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from "./Layout";
import React from 'react';

type ShoppingCartProps = {
    contacts: {
        key: number
        name: string
        data: string
        link: string
      }[],
      zips: number[]
}

export const ShoppingCart = (props: ShoppingCartProps) => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

      const loggedIn = useContext(LoginContext)

    const { cartItems, cartQuantity }:any = useShoppingCart()

    const id = useId()

    const [ checkOut, setCheckOut ] = useState<Boolean>(false)
    const [ deliver, setDeliver ] = useState<Boolean>(false)
    const [ collect, setCollect ] = useState<Boolean>(false)

    const updatedCart = useMemo(() => cartItems.reduce((total:number, cartItem:any) => {
        const [ app, ent, des ]:any = menuItems;
        const appItem:any = app.items.find((i:any) => i.id === cartItem.id)
        const entItem:any = ent.items.find((i:any) => i.id === cartItem.id)
        const desItem:any = des.items.find((i:any) => i.id === cartItem.id)
    return total + (appItem?.price * cartItem.quantity || 0 ) + (entItem?.price * cartItem.quantity || 0 ) + (desItem?.price  * cartItem.quantity|| 0)
    }, 0), [cartItems])

    return (
      <animated.section style={{...fade}}className="shopping-cart">
        <div className='cart-items'>
            <div className='cart-header'>
                <h1 className="text-section-title">🍋Shopping Cart </h1>
                <div className='cart-total'>
                    <h1 className="text-section-title"><strong className='cart-total-items'>{cartQuantity}</strong> items</h1>
                    <h1 className={ checkOut ? 'text-section-title cart-total-sub' : "text-section-title"}>
                        Sub-total
                        <strong className={ checkOut ? 'cart-total-sub' : "cart-total-total"}>
                            {
                                updatedCart
                            }
                        </strong>
                    </h1>
                    {
                        checkOut &&
                            <div className='cart-total-div'>
                                <h1 className="text-section-title">
                                Total
                                <strong className='cart-total-total'>
                                { Number(updatedCart * 1.1175).toFixed(2) + "*"}
                                </strong>
                            </h1>
                            <p className='cart-total-disclaimer'>*Little Lemon charges the standard 11.75% taxes, mandated by the Chicago Restaurant Board</p>
                        </div>
                    }
                </div>
            </div>
            <div className='cart-options'>
                <div className='cart-options-buttons'>
                    {
                        !checkOut
                        ?   <>
                                {
                                    loggedIn && cartQuantity > 0
                                    ?   <button
                                            onClick={() => { return setCheckOut(true)}}
                                            className={ deliver ? 'cart-options-button-selected' : 'cart-options-button'}
                                        >
                                            Checkout
                                        </button>
                                    :   cartQuantity > 0
                                        ?   <h1 className='prompt-h1'>Please login to checkout</h1>
                                        :   <h1 className='prompt-h1'>Please add items to checkout</h1>
                                }
                            </>
                        :   <>
                                <button
                                    onClick={() => { return setCheckOut(false)}}
                                    className={ deliver ? 'cart-options-button-selected' : 'cart-options-button'}
                                >
                                    Back to cart
                                </button>
                                <div className='order-type'>
                                    <button
                                        onClick={() => { return (setDeliver(!deliver), setCollect(false))}}
                                        className={ deliver ? 'order-type-button-selected' : 'order-type-button'}
                                    >
                                        Delivery
                                    </button>
                                    <button
                                        onClick={() => { return (setDeliver(false), setCollect(!collect))}}
                                        className={ collect ? 'order-type-button-selected' : 'order-type-button'}
                                    >
                                        Collection
                                    </button>
                                </div>
                                <>
                            </>
                            </>
                    }
                </div>
                { deliver && checkOut &&
                    <div className='delivery'>
                        {
                            props.zips.includes(Number(localStorage.getItem("zip")))
                            ?   <div className='delivery-options'>
                                    <h1 className='header-success'>Congrats! Little Lemon can deliver to your address.</h1>
                                    <div className='payment'>
                                        <button className='buttonh1 payment-button'><Link to="https://buy.stripe.com/dR616hdwLe2y2sg3cc">Proceed to payment</Link></button>
                                        <img src="stripe.png" className='stripe' alt="stripe"/>
                                    </div>
                                </div>
                            :   <div className='delvery-options'>
                                    <h1 className='header-failure'>Unfortunately, Little Lemon cannot offer delivery to your address.</h1>
                                    <p>We offer a free delivery service to the following zipcodes:</p>
                                    <ul className='zips'>
                                        {
                                            props.zips.map((zip) => {
                                                return (
                                                    <li key={zip} className='zip'>{zip}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <p>If you'd like to continue with your order, please select "Collect" above.</p>
                                </div>
                        }
                    </div>
                                    }
                { collect && checkOut &&
                    <div className='collection'>
                        <div className='payment'>
                            <button className='buttonh1 payment-button'><Link to="https://buy.stripe.com/dR616hdwLe2y2sg3cc">Proceed to payment</Link></button>
                            <img src="stripe.png" className='stripe' alt="stripe"/>
                        </div>
                        <div className='collection-contacts'>
                            {
                                props.contacts.map((contact) => {
                                    return (
                                        <li key={contact.key} className='collection-contact'>
                                            <Link to={contact.link}>
                                                <strong>{contact.name}:</strong> {contact.data}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
            {
                !checkOut &&
                    <div className='cart-items'>
                        {
                            cartItems.map((item: any) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <hr />
                                        <CartSection key={id} course={item.id} {...item} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
            }
            
        </div>
      </animated.section>
    );
}