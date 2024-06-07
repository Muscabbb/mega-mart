"use client";
import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartState } from "../Context/context";

function BestDeals({ images }: { images: string[] }) {
  const { state, dispatch } = CartState();

  return (
    <section className="py-8 space-y-5">
      <div className="title py-4 relative border-b-2 border-[#d9d9d9]">
        <h2 className=" text-lg lg:text-2xl text-col">
          Grab the best deals on{" "}
          <span className="primary-col">SmartPhones</span>
        </h2>
      </div>
      <div className="products py-3 flex items-center justify-center gap-4 flex-wrap">
        {images.map((image, i) => (
          <div
            key={image}
            className="card w-[227px] h-[295px] hover:border-[#008ecc] hover:scale-105 transition hover:shadow-md cursor-pointer rounded-md border border-[#d9d9d9]"
          >
            <div className="img flex justify-center items-center h-2/4 bg rounded-s-md">
              <Image
                src={image}
                alt="test"
                width={100}
                height={100}
                className=" max-h-[150px] max-w-[150px]"
              />
            </div>
            <div className="details rounded-e-md flex flex-col gap-4 p-3">
              <h3>Galaxy S22 Ultra</h3>
              <p>
                $32999 <span className=" line-through">$3999</span>
              </p>
              <div className="action py-3 border-t border-[#d9d9d9] flex justify-between items-center flex-wrap">
                <span className="  text-[#249B3E]">Save - ₹32999</span>
                <button
                  className=" bg-blue-300 text-xs p-1 flex items-center gap-1 rounded-md text-white cursor-pointer focus:outline-none hover:bg-[#008ecc] transition "
                  onClick={() =>
                    dispatch({ type: "add", payload: { id: i, url: image } })
                  }
                >
                  Add to Cart <CiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestDeals;
