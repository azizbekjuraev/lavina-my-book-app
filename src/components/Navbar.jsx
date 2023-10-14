import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./styles/Navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav-box">
        <Link to="/">
          {" "}
          {/* Use Link component to navigate to the home page */}
          <span className="nav-logo" onClick={() => (setShow = true)}>
            UZBOOKS
          </span>
        </Link>

        <div className="cart flex gap-4 items-center">
          <span className="flex gap-1 items-center">
            <Link to="/cart">
              {" "}
              {/* Use Link to navigate to the cart page */}
              <img
                alt="busket"
                src="./img/512x512.png"
                className="busket-icon"
                onClick={() => (setShow = false)}
              />
            </Link>
            <span>{size}</span>
          </span>
          <div>
            <a href="# " className="login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
