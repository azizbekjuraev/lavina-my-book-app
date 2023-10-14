import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const quantity = cart.reduce((total, item) => total + item.amount, 0);

  function increment(index) {
    const updatedCart = [...cart];
    updatedCart[index].amount += 1;
    setCart(updatedCart);
  }

  function decrement(index) {
    const updatedCart = [...cart];
    if (updatedCart[index].amount > 1) {
      updatedCart[index].amount -= 1;
    }
    setCart(updatedCart);
  }

  //Total price har cart ozgarsa almashadi
  useEffect(() => {
    // Calculate the total price whenever cart changes
    const newTotalPrice = cart.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
    setPrice(newTotalPrice);
  }, [cart]);

  return (
    <div className="relative overflow-x-auto md:px-14 md:py-10">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs uppercase bg-gray-100  dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Item
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item, index) => (
            <tr className="" key={item.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                {item.title}
              </th>
              <td className="px-6 py-4">
                <img src={item.img} className="w-10" alt={item.title} />
              </td>
              <td>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white mr-2"
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                  <td className="md:px-6 py-4">{item.amount}</td>
                  <button
                    onClick={() => decrement(index)}
                    className="px-2 py-1 bg-red-500 text-white ml-2"
                  >
                    -
                  </button>
                </div>
              </td>

              <td className="px-6 py-4">{item.price} UZS</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-gray-900 text-xs uppercase bg-gray-100 ">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">{cart.length}</td>
            <td className="px-6 py-3">{quantity}</td>
            <td className="px-6 py-3">{price} UZS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
