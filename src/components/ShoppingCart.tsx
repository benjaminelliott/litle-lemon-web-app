
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useShoppingCart } from 'context/ShoppingCartContext';
import { useRef } from 'react';
import { CartItem } from './CartItem';
import menuItems from "../data/items.json"

type ShoppingCartProps = {
    isCartOpen: boolean
}

export const ShoppingCart = ({ isCartOpen }: ShoppingCartProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const { closeCart, cartItems }:any = useShoppingCart()

    const btnRef = useRef(null)

    return (
      <>
        <Drawer
          isOpen={isCartOpen}
          placement="right"
          onClose={closeCart}
          isFullHeight={true}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>
            <DrawerBody>
                <div className='cart-items'>
                    {
                        cartItems.map((item: any) => <CartItem key={item.id} {...item} />)
                    }
                </div>
                <div className='cart-total'>
                {
                    cartItems.reduce((total: number, cartItem: any) => {
                        const item:any = menuItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0)
                }
                </div>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={closeCart}>
                Cancel
              </Button>
              <Button colorScheme="blue">Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
}