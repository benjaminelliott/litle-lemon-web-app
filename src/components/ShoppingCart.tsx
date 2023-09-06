import { useShoppingCart } from 'context/ShoppingCartContext';
import menuItems from "../data/items.json"
import { CartSection } from './CartSection';
import { animated, useSpring } from '@react-spring/web';
import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';

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

    const { cartItems, cartQuantity }:any = useShoppingCart()

    const id = useId()

    const [ checkOut, setCheckOut ] = useState<Boolean>(false)
    const [ deliver, setDeliver ] = useState<Boolean>(false)
    const [ collect, setCollect ] = useState<Boolean>(false)

    return (
      <animated.section style={{...fade}}className="shopping-cart">
        <div className='cart-items'>
            <div className='cart-header'>
                <h1 className="text-section-title">🍋Shopping Cart </h1>
                <div className='cart-total'>
                    <h1 className="text-section-title"><strong className='cart-total-items'>{cartQuantity}</strong> items</h1>
                    <h1 className="text-section-title">
                        Sub-total
                        <strong className='cart-total-total'>
                            {
                                cartItems.reduce((total:number, cartItem:any) => {
                                    const [ app, ent, des ]:any = menuItems;
                                    const appItem:any = app.items.find((i:any) => i.id === cartItem.id)
                                    const entItem:any = ent.items.find((i:any) => i.id === cartItem.id)
                                    const desItem:any = des.items.find((i:any) => i.id === cartItem.id)
                                return total + (appItem?.price * cartItem.quantity || 0 ) + (entItem?.price * cartItem.quantity || 0 ) + (desItem?.price  * cartItem.quantity|| 0)
                                }, 0)
                            }
                        </strong>
                    </h1>
                </div>
            </div>
            <div className='cart-options'>
                <div className='cart-options-buttons'>
                    {
                        !checkOut
                        ?   <>
                                <button
                                    onClick={() => { return setCheckOut(true)}}
                                    className={ deliver ? 'cart-options-button-selected' : 'cart-options-button'}
                                >
                                    Checkout
                                </button>
                            </>
                        :   <>
                                <button
                                    onClick={() => { return setCheckOut(false)}}
                                    className={ deliver ? 'cart-options-button-selected' : 'cart-options-button'}
                                >
                                    Return to cart
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
                                    <p>Please expect a phone call with an updated delivery time shortly.</p>
                                </div>
                            :   <div className='delvery-options'>
                                    <h1 className='header-failure'>Unfortunately, Little Lemon cannot offer delivery to your address.</h1>
                                    <p>We offer a free delivery service to the following zipcodes:</p>
                                    <ul className='zips'>
                                        {
                                            props.zips.map((zip) => {
                                                return (
                                                    <li className='zip'>{zip}</li>
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
                        <h1 className='header-success'>We're looking forward to seeing you!</h1>
                        <p>Please proceed to our location and head to the front desk, where our staff will assist you.</p>
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