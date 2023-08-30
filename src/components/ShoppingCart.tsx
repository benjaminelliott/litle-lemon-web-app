import { useShoppingCart } from 'context/ShoppingCartContext';
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

    return (
      <animated.section style={{...fade}}className="shopping-cart">
        <div className='cart-items'>
            <div className='cart-header'>
                <h1 className="text-section-title">🍋Shopping Cart </h1>
                <div className='cart-total'>
                    <h1 className="text-section-title">{cartQuantity} items</h1>
                    <h1 className="text-section-title">
                        Total
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
                    <div className='delivery-options'>
                        <h1>hello</h1>
                    </div>
                }
                { collect &&
                    <div className='collection-options'>
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