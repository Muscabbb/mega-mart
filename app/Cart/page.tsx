"use client";
import React, { Suspense } from "react";
import { CartState } from "../Context/context";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import Loading from "./loading";
import { CiShoppingCart } from "react-icons/ci";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);

  const allProducts = cart.map((product: any) => (
    <div
      className="flex justify-around items-center bg-slate-300 rounded shadow"
      key={product.id}
    >
      <Image src={product.img} alt="shit thing" width={150} height={150} />
      <div className="flex basis-2/4 justify-between items-center">
        <h3>Galaxy S22 Ultra</h3>
        <button
          className=" bg-red-300 text-xs p-1 flex items-center gap-1 rounded-md text-white cursor-pointer focus:outline-none hover:bg-[#fa6c6c] transition "
          onClick={() =>
            dispatch({ type: "remove", payload: { id: product.id } })
          }
        >
          Remove from Cart <CiShoppingCart />
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto space-y-5 py-4">
      <Link
        href={"/"}
        className="py-3 bg-slate-300 shadow flex items-center gap-4  w-32 opacity-75 hover:opacity-100 capitalize rounded justify-center"
      >
        <span>
          <FaArrowLeftLong />
        </span>
        Back
      </Link>
      <div className="flex flex-col gap-4 w-3/5">
        <Suspense fallback={<Loading />}>{allProducts}</Suspense>
      </div>
    </div>
  );
}

export default Cart;
