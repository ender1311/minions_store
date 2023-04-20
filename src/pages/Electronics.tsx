import {Col,Row} from "react-bootstrap"
import storeItems from "../data/electronics.json"
import { StoreItem } from "../components/StoreItem"

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  export function Electronics() {
    const shuffledItems = shuffleArray(storeItems);
  
    
    {/*
    Create grid system using bootstrap that is clean
    g-3 gives a small gap between my shop items
    md={2} displays 2 items per row on medium sized screens
    map function is used to iterate over all the store items using unique id's that have been assigned
    ...item allows me to pass all four properties (id, name, price, image url) dynamically without having to specify each one
     */}
     return (
        <>
          <h1>Electronics</h1>
    <Row md={2} xs={1} lg={3} xl={4} className="g-3">
        {shuffledItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
        ))}
        
    </Row>
    
    </>
    )
}