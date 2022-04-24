import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import CartItem from "./CartItem/CartItem";
import CreateOrder from "../../actions/order.js";
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const dispatch =  useDispatch();
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const createOrder = (e) => {
    e.preventdefault()
    dispatch(CreateOrder(totalPrice, totalItems))
  };

  return (
    <div className="mx-[20%]">
      <div className="flex flex-wrap overflow-hidden mt-8 mb-8">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-wrap overflow-hidden mt-8 mb-8">
        <h4 className="text-3xl font-semibold mt-5 mb-5">Cart</h4>
        <div className="w-1/4 overflow-hidden">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button onClick={(e) => createOrder(e)} className="mb-8 mt-8 ml-[40%]  px-6 py-2 border-2 border-orange-500 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Create Order
        </button>
      </div>
    </div>
  );
};


export default Cart;