
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

type ShoppingCartProps = {
    isCartOpen: boolean
}

export const ShoppingCart = ({ isCartOpen }: ShoppingCartProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const { isCartOpen, openCart, closeCart, cartItems } = useShoppingCart()

    return (
      <>
        <Drawer
          isOpen={isCartOpen}
          placement="right"
          onClose={closeCart}
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
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
}