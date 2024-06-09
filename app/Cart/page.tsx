"use client";
import React from "react";
import { CartState } from "../Context/context";

function Cart() {
  const {
    state: { cart },
  } = CartState();

  const allProducts = cart.map((product: any) => (
    <div key={product.id}>
      <img src={product.img} alt="ss" />
    </div>
  ));
  return <div className="flex justify-center items-center">{allProducts}</div>;
}

export default Cart;
