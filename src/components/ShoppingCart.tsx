import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { Button } from "react-bootstrap"
import { useState } from "react";



// this component is used to manage current state of shopping cart
// this convenient react feature allows data to be passed down component tree without having to pass props at each level


type ShoppingCartProps = {
    isOpen: boolean
}



function handlePurchase() {
    //different url's for different payment pages on stripe
    //window.location.href = "https://buy.stripe.com/test_aEU29W9Ei9Np6T6fYY";
    window.location.href = "https://buy.stripe.com/test_4gw9Co6s6aRt2CQ002";
}

function PurchaseButton() {
    return (
        <Button 
            className="w-100" 
            onClick={handlePurchase}
        >
        Purchase
        </Button> 
    );
}
function CartIsEmptyButton() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Button 
            variant="secondary" 
            disabled
            size='lg'
            >
                Cart is Empty
            </Button>
      </div>
    );
  }



export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart()
    const {removeAll} = useShoppingCart();
    
    //get total quantity in cart
    const quantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0)  

    //console.log(`ID: ${cartItems[0].id}`);
    //console.log(`quantity: ${quantity}`);

    function removeAllButton() {
        return (
            <Button 
            onClick={() => removeAll()}
            variant="danger" 
            size="sm"
            >
                Remove all Items
            </Button>
        )
    }  

    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
               {removeAllButton()}
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatCurrency(cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
        }, 0))}
        
                </div>
                
                <div>
                    
                { quantity? 
                    (
                        <>
                        { PurchaseButton() }
                        { }
                        </> 
                    ) : 
                    ( CartIsEmptyButton() ) 
                }
                </div>

            </Stack>
            
        </Offcanvas.Body>
    </Offcanvas>
    )
}