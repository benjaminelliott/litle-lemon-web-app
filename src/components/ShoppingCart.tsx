import { useShoppingCart } from 'context/ShoppingCartContext';
import { CartItem } from './CartItem';
import menuItems from "../data/items.json"
import { animated, useSpring } from '@react-spring/web';
import React from 'react';

type ShoppingCartProps = {
    id: number
    name: string
    items: {}[]
}

export const ShoppingCart = () => {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
      })

    const { cartItems, cartQuantity }:any = useShoppingCart()

    return (
      <animated.section style={{...fade}}className="shopping-cart">
        <div className='cart-items'>
            <h1 className="text-section-title">🍋Little Lemon </h1>
            {
                    cartItems.map((item: any) => {
                        return (
                            <React.Fragment key={item.id}>
                                <hr />
                                <h2 className="text-lead course">{item.name}</h2>

                                <CartItem key={item.id} {...item} />
                            </React.Fragment>
                        )
                    })
                }
        </div>
        <div className='cart-total'>
            <h1>Total</h1>
        {
            cartItems.reduce((total: number, cartItem: any) => {
                const item:any = menuItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
            }, 0)
        }
        {
            cartQuantity
        }
        </div>
      </animated.section>
    );
}