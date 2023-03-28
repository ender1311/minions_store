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

export function PantryItem({ id, name, price, imgUrl }: StoreItemProps) {
  // enable useShoppingCart to use functions we have implemented in ShoppingCartContext
  const {
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart
    } = useShoppingCart()

    // quantity is now dynamically set
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
          {/* conditional statements for different subscription products */}
            {id=== 301 ? (
                        <Button className="w-100" onClick={() => window.location.href = "https://buy.stripe.com/test_28oaGsaIm3p17Xa9AD"}>
                            Monthly Subscription
                        </Button>
                        )  
            : id === 302 ? (
                        <Button className="w-100" onClick={() => window.location.href = "https://buy.stripe.com/test_4gw9Co6s6aRt2CQ002"}>
                            Monthly Subscription
                        </Button>
            ) : (
                <Button className="w-100" onClick={() => window.location.href = "https://buy.stripe.com/test_4gw9Co6s6aRt2CQ002"}>
                            Monthly Subscription
                        </Button>
            ) }
             
        </div>
        </Card.Body>
    </Card>
    )
}