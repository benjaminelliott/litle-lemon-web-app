import { useShoppingCart } from 'context/ShoppingCartContext';
import menuItems from "../data/items.json"
import { CartSection } from './CartSection';
import { animated, useSpring } from '@react-spring/web';
import React, { useId, useState } from 'react';

export const ShoppingCart = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    const { cartItems, cartQuantity }:any = useShoppingCart()

    const id = useId()

    const [ deliver, setDeliver ] = useState<Boolean>(false)
    const [ collect, setCollect ] = useState<Boolean>(false)

    const zips = [60607, 60608, 60616, 60605, 60604, 60603, 60602, 60601, 60611, 60661, 60654, 60610, 60642, 60622, 60612]

    return (
      <animated.section style={{...fade}}className="shopping-cart">
        <div className='cart-items'>
            <div className='cart-header'>
                <h1 className="text-section-title">🍋Shopping Cart </h1>
                <div className='cart-total'>
                    <h1 className="text-section-title"><strong className='cart-total-items'>{cartQuantity}</strong> items</h1>
                    <h1 className="text-section-title">
                        <strong className='cart-total-total'>
                            {
                                cartItems.reduce((total:number, cartItem:any) => {
                                const [ app, ent, des ]:any = menuItems;
                                console.log(app)
                                const appItem:any = app.items.find((i:any) => i.id === cartItem.id)
                                const entItem:any = ent.items.find((i:any) => i.id === cartItem.id)
                                const desItem:any = des.items.find((i:any) => i.id === cartItem.id)
                                return total + (appItem?.price * cartItem.quantity || 0 ) + (entItem?.price * cartItem.quantity || 0 ) + (desItem?.price  * cartItem.quantity|| 0)
                                }, 0)
                            }
                        </strong> Total
                    </h1>
                </div>
            </div>
            <div className='cart-options'>
                <div className='cart-options-buttons'>
                    <button
                        onClick={() => { return (setDeliver(true), setCollect(false))}}
                        className={ deliver ? 'cart-options-button-selected' : 'cart-options-button'}
                    >
                        Deliver
                    </button>
                    <button
                        onClick={() => { return (setDeliver(false), setCollect(true))}}
                        className={ collect ? 'cart-options-button-selected' : 'cart-options-button'}
                    >
                        Collect
                    </button>
                </div>
                { deliver &&
                    <div className='delivery'>
                        {
                            zips.includes(Number(localStorage.getItem("zip")))
                            ?   <div className='delivery-options'>
                                    <h1 className='header-success'>Congrats! Little Lemon can deliver to your address.</h1>
                                    <p>Please expect a phone call with an updated delivery time shortly.</p>
                                </div>
                            :   <div className='delvery-options'>
                                    <h1 className='header-failure'>Unfortunately, Little Lemon cannot offer delivery to your address.</h1>
                                    <p>We offer a free delivery service to the following zipcodes:</p>
                                    <ul className='zips'>
                                        {
                                            zips.map((zip: number) => {
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
                { collect &&
                    <div className='collection'>
                        <h1>goodbye</h1>
                    </div>
                }
            </div>
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
      </animated.section>
    );
}