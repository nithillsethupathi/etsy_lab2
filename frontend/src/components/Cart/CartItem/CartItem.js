import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../actions/cart.js";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
   const dispatch = useDispatch()
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  const remove = () => {
      dispatch(removeFromCart(item.id))
  }
  return (
    <div className="mx-[20%]">
      <img
        src={item.image}
        alt={item.title}
      />
      <div className="text-3xl font-semibold mt-5 mb-5">
        <p className="w-1/4 overflow-hidden">{item.title}</p>
        <p className="w-1/4 overflow-hidden">{item.description}</p>
        <p cclassName="w-1/4 overflow-hidden">$ {item.price}</p>
      </div>
      <div className="">
        <div className="">
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={() => remove(item.id)}className=" mt-[15%] bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;