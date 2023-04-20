import React, { useState } from 'react';
import './css/Landing.css';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  imageUrl: string;
}

// const products: Product[] = Array.from({ length: 5 }).map((_, index) => ({
//   id: index,
//   imageUrl: `https://via.placeholder.com/800x600?text=Product+${index + 1}`,
// }));

export function Landing() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollDistance = 110;

  const handleScrollRight = () => {
    if (scrollPosition > (products.length - 1) * -scrollDistance) {
      setScrollPosition(scrollPosition - scrollDistance);
    }
  };
  

  const handleScrollLeft = () => {
    if (scrollPosition < 0) {
      setScrollPosition(scrollPosition + scrollDistance);
    }
  };

  const products: Product[] = [
    {
      id: 0,
      imageUrl: 'https://www.everysingletopic.com/wp-content/uploads/2019/11/soft-toys.jpg',
    },
    {
      id: 1,
      imageUrl: 'https://www.tubefilter.com/wp-content/uploads/2023/02/cocomelon-squishmallows-1920x1131.jpg',
    },
    {
      id: 2,
      imageUrl: 'https://raw.githubusercontent.com/ender1311/minions_store/main/dist/imgs/roomba1.png',
    },
    {
      id: 3,
      imageUrl: 'https://www.everysingletopic.com/wp-content/uploads/2019/11/soft-toys1.jpg',
    },
    {
        id: 4,
        imageUrl: 'https://helios-i.mashable.com/imagery/articles/048JGGHiHKOLCnMhc1Gitp3/hero-image.fill.size_1200x675.v1623366597.jpg',
      }
  ];
  
  return (
    <div className="App">
      <div className="image-container" style={{ transform: `translateX(${scrollPosition}%)` }}>
        {products.map((product) => (
          <div key={product.id} className="image-wrapper">
            <img src={product.imageUrl} alt={`Product ${product.id + 1}`} style={{ maxHeight: '80vh', objectFit:'cover' }}/>
            
            <Link to="/toys">
                <button className="deals-button">
                    Today's Deals
                </button>
            </Link>
            
          </div>
        ))}
      </div>
      <button className="scroll-button scroll-button-left" onClick={handleScrollLeft}>
        &lt;
      </button>
      <button className="scroll-button scroll-button-right" onClick={handleScrollRight}>
        &gt;
      </button>
    </div>
  );
}
