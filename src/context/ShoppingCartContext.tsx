import { ReactNode, createContext, useContext, useState } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext<ShoppingCartContext>({
    getItemQuantity: function (id: number): number {
        throw new Error("Function not implemented.")
    },
    increaseCartQuantity: function (id: number): void {
        throw new Error("Function not implemented.")
    },
    decreaseCartQuantity: function (id: number): void {
        throw new Error("Function not implemented.")
    },
    removeFromCart: function (id: number): void {
        throw new Error("Function not implemented.")
    },
    cartQuantity: 0,
    cartItems: []
})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }
    const increaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [ ...currItems, { id, quantity: 1} ]
            } else {
                return currItems.map(item => {
                    if(item.id ===id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id ===id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    const removeFromCart = (id: number) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0)

    return (
        <ShoppingCartContext.Provider
            value={
                {
                    getItemQuantity,
                    increaseCartQuantity,
                    decreaseCartQuantity,
                    removeFromCart,
                    cartItems,
                    cartQuantity
                }
            }
    >
        {children}
    </ShoppingCartContext.Provider>
    )
}