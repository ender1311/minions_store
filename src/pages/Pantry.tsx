import {Col,Row} from "react-bootstrap"
import storeItems from "../data/pantry.json"
import { PantryItem } from "../components/PantryItem"

export function Pantry() {
    return <><h1>Pantry</h1>
    
    {/*
    Create grid system using bootstrap that is clean
    g-3 gives a small gap between my shop items
    md={2} displays 2 items per row on medium sized screens
    map function is used to iterate over all the store items using unique id's that have been assigned
    ...item allows me to pass all four properties (id, name, price, image url) dynamically without having to specify each one
     */}
     
    <Row md={2} xs={1} lg={3} xl={4} className="g-3">
        {storeItems.map(item => (
            <Col key={item.id}>
                <PantryItem {...item} />
            </Col>
        ))}
        
    </Row>
    
    </>
}