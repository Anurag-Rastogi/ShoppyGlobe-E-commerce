import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={{ ...item, quantity: 1 }} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
