import React, { useState, useEffect } from "react";
import { loadCart } from "../../core/helper/cartHelper";
import "./checkout.css"
import Dope from "./Dope";
import { Link } from "react-router-dom";
import Dialog from "./Dialog";
import PaymentB from "../../core/PaymentB";

const Checkout = () => {

        const [reload, setReload] = useState(false);
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
          setProducts(loadCart());
        }, [reload]);
      
        const loadAllProducts = (products) => {
          return (
            <div>
              {products.map((product, index) => (
                <Dope className="product--order"
                  key={index}
                  product={product}
                  removeFromCart={true}
                  addtoCart={false}
                  reload={reload}
                  setReload={setReload}
                />
              ))}
            </div>
          );
        };
      
        const loadCheckout = () => {
          return (
            <div>
              <h1>Checkout</h1>
            </div>
          );
        };

        return (
          <div className='cart'>
                
              <div className='product--side'>
              <h2>My cart</h2>
              <hr/>
              {products.length > 0 ? (loadAllProducts(products)) : (
                <>
                <h4>Cart is empty</h4>
                <p><Link to="/shop">Continue shopping</Link></p>
                </>
                )}
              <p>Enter a promo code</p>
              <p>Add a note</p>
              </div>
              <div className='order--side'>
                      <h2>Order summary</h2>
                      <hr/>
                      
                      <p>Total</p>
                      
                          {products.length > 0
                          ? (
                            <PaymentB products={products} setReload={setReload} />
                          )
                          : (
                            <h3>Please login or add something in cart</h3>
                          )}
                          
                      {/* <button className="checkout--btn">Checkout</button> */}
                      <p>Secure checkout</p>
              </div>

          </div>
        )
}

export default Checkout