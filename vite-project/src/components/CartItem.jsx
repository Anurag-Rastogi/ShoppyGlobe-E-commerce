import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import "./CartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addItem(item));
  };

  const handleDecrease = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={handleIncrease} className="btn">
          +
        </button>
        <button onClick={handleDecrease} className="btn">
          -
        </button>
      </div>
    </div>
  );
}

export default CartItem;
