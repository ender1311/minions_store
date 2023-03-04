import { createContext, useContext, ReactNode, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
import storeItems from "../data/items.json"


/*
This is a special prop in React that represents the child elements that are passed to a component. 
children is of type ReactNode, which means it can accept any valid React node, such as a string, a number, a component, or an array of nodes.
*/

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    removeAll: () => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

const ids = storeItems.map(item => item.id);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const[isOpen, setIsOpen] = useState(false)

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
      )
    
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
        )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item=> item.id === id) == null) {
                return [...currItems, {id, quantity:1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item=> item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
    })
    }

    function removeAll() {
        ids.forEach(id => {
            removeFromCart(id);
          });
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart,
            removeAll,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
            }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}