import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import Navbar from "../Navbar";
import Amazon from "../Amazon";
import Cart from "./Cart";
import Categories from "../Categories";

const CardsGroup = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <Router>
      {" "}
      {/* Wrap your CardsGroup component with Router */}
      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />
        <Routes>
          {" "}
          {/* Use Routes for defining your routes */}
          <Route
            path="/"
            element={
              show ? (
                <Amazon handleClick={handleClick} />
              ) : (
                <Cart cart={cart} setCart={setCart} />
              )
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>

        {warning && (
          <div className="warning">Item is already added to your cart!</div>
        )}
      </React.Fragment>
    </Router>
  );
};

export default CardsGroup;
