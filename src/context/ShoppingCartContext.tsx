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

// only need id and quantity to figure out totals.
type CartItem = {
    id: number
    quantity: number
}

// these functions enable the app to do basic operations on the shopping cart
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

    // useLocalStorage allows app to save changes made to the shopping cart in previous sessions

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
      )
    
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
        )
        
    // enables user to open cart or close cart

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    // find item with current id, if we have that value, return the quantity of it
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            //if this item doesn't already exist in the cart, then it needs to be added to cart

            if (currItems.find(item=> item.id === id) == null) {

                //add item to cart following previous items in cart
                return [...currItems, {id, quantity:1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        // otherwise, increase the item quantity by 1
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
                // if the quantity is 1, then when user dereases it, the item will be removed from currItems
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        // otherwise, just decrease the quantity by 1
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
            // this removes the item from cart completely independent of quantity number
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