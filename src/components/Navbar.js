import React from "react";
import "./styles/Navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="nav-logo" onClick={() => (setShow = true)}>
          UZBOOKS
        </span>
        <a href="#" className="login">
          Login
        </a>
        <div className="cart">
          <span>
            <img
              src="./img/512x512.png"
              className="busket-icon"
              onClick={() => (setShow = false)}
            />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
