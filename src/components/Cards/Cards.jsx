import React from "react";
import "../styles/Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="img-box ">
        <img src={img} alt="" className="" />
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price: {price} UZS</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
