import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

// typescript requires that I specify the type of each property
// prop type is named StoreItemProps
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart
    } = useShoppingCart()
    
    const quantity = getItemQuantity(id);

    return ( 
      // Each card contains the content of a specific shop item using h-100 or 100% of the height
    <Card className="h-100">

      {/* sets styling of each shop item image */}
        <Card.Img 
        variant="top" 
        src={imgUrl} 
        height="200px"
        style={{ objectFit: "contain", padding:"20px"}} 
        
        />
         <Card.Body className="d-flex flex-column">

          {/* use bootstrap to style card body and title */}

        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>

        {/* use utility called formatCurrent to make prices readable with numbers set to 2 decimal places */}
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {/* mt-auto will cause the add to cart buttons to fill the rest of the space */}
        <div className="mt-auto">
          {/* if quantity is zero, then thill render Add to cart button */}
            {quantity === 0 ? (
                <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                    + Add To Cart
                </Button>
            ) : 

            // if quantity is not zero, meaning that user that there is at least 1 item in the cart, then render the addition and subtraction buttons
            (
                <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
                
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >

                {/* onClick is a listener event and triggers decrease function that modifies the quantity in the cart */}
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                {/* display current quantity of shop item in cart */}
                <div>
                    <span className="fs-3">{quantity}</span> in Cart 
                </div>
                
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>

              {/* onClick is a listener event and triggers remove function that finds the item and removes all of its quantity */}
              <Button 
                onClick={() => removeFromCart(id)}
                variant="danger" 
                size="sm"
                >
                    Remove
                </Button>
              </div>
            )}
        </div>
        </Card.Body>
    </Card>
    )
}