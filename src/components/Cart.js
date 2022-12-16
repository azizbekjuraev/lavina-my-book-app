import React, { useState } from "react";
import "./styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const [price, SetPrice] = useState(0);
  return (
    <article>
      {cart?.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button>Remove</button>
          </div>
        </div>
      ))}
      <div>
        <span>Total price of your Cart,</span>
        <span> UZS {price}</span>
      </div>
    </article>
  );
};

export default Cart;
