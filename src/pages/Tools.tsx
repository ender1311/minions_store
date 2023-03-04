import {Col,Row} from "react-bootstrap"
import storeItems from "../data/tools.json"
import { StoreItem } from "../components/StoreItem"

{/*
    Create grid system using bootstrap that is clean
    g-3 gives a small gap between my shop items
    md={2} displays 2 items per row on medium sized screens
    map function is used to iterate over all the store items using unique id's that have been assigned
    ...item allows me to pass all four properties (id, name, price, image url) dynamically without having to specify each one
     */}
     
export function Tools() {
    return <><h1>Tools</h1>
    <Row md={2} xs={1} lg={3} xl={4} className="g-3">
        {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
        
    </Row>
    
    </>
}