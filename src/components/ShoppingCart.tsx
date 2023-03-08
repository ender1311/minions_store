import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { Button } from "react-bootstrap"

// require('dotenv').config({ path: './.env' })
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//  import  dotenv from "dotenv"
// import fetch from "node-fetch"
//  dotenv.config();

// import dotenv from 'dotenv';
// // import * as Stripe from 'stripe';


// dotenv.config({ path: './.env' });

// const Stripe = require('stripe');
// //const stripe = Stripe('sk_test_...');

//  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//    apiVersion: '2020-08-27',
//  });


// this component is used to manage current state of shopping cart
// this convenient react feature allows data to be passed down component tree without having to pass props at each level


type ShoppingCartProps = {
    isOpen: boolean
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


export function PurchaseButton() {
  const { cartItems } = useShoppingCart();

  /* nested functions here is used to handle purchase request
      nested function helps to encapsulate logic and separate concerns
      handlePurchase triggers purchase request
      handlePurchaseData makes http request to server

      local server: "http://localhost:3000/checkout-session",
      AWS server: http://3.144.115.253/checkout-session
      elastic IP address - IPv4 address: 3.19.9.90
      https://ec2-3-19-9-90.us-east-2.compute.amazonaws.com/checkout-session
  */
 
  const handlePurchase = () => {
    const handlePurhcaseData = () => {
      fetch("https://193.42.0.158:3000/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
        }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then(({ url }) => {
          window.location = url;
        })
        .catch((e) => {
          console.error(e.error);
        });
    };

    handlePurhcaseData();
  };

  return (
    <Button className="w-100" onClick={handlePurchase}>
      Purchase
    </Button>
  );
}