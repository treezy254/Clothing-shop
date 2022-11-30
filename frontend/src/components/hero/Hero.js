import React, { useState, useEffect } from "react";
import { getProducts } from "../../core/helper/coreapicalls";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from '../card/Product'
import "./hero.css"

const Hero = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);


  return (
      <div className="hero--desc">
        <div className='hero--description'>
          <p>CLOTHING AND ACCESSORIES SHOP.</p>
        </div>

        <div className="hero--add">
          <p>Easy, Fun Shopping</p>
        </div>
        
        
        <div className="product--carousel">
            {products.map((product, index) => {
          return (
            
            <div key={index} className="shop--col">
              <Product product={product} />
            </div>
            
          );
        })}
        </div>
        
        

      </div>
  )
}

export default Hero