import React, { useState, useEffect } from "react";

import { getProducts } from "../../core/helper/coreapicalls";

import Product from "../../components/card/Product";
import "./shop.css"

export default function Shop() {
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
    <div className="shop">
      <div className="shop--items">
        {products.map((product, index) => {
          return (
            <div key={index} className="shop--col">
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
