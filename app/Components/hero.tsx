"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Hero({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [imageIndex, images.length]);

  function showNext() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrev() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section className="relative overflow-hidden">
      <div
        className="l-arrow z-20 absolute top-2/4 -translate-y-2/4 flex items-center justify-center left-0 lg:-left-4 lg:w-16 w-10 lg:h-16 h-10 border-4 lg:border-8 border-white rounded-full light-pr cursor-pointer"
        onClick={() => showPrev()}
      >
        <MdOutlineKeyboardArrowLeft className=" lg:text-2xl text-base primary-col" />
      </div>
      <div
        className="r-arrow z-20 absolute top-2/4 -translate-y-2/4 flex items-center justify-center right-0 lg:-right-4 lg:w-16 w-10 lg:h-16 h-10 border-4 lg:border-8 border-white rounded-full light-pr cursor-pointer"
        onClick={() => showNext()}
      >
        <MdOutlineKeyboardArrowRight className=" lg:text-2xl text-base primary-col" />
      </div>
      <div className="slider flex">
        {images.map((image) => (
          <div
            key={image}
            style={{ translate: `${-100 * imageIndex}%` }}
            className="hero relative z-10 bg-[#212844] w-full h-[400px] py-3 transition rounded-md flex flex-col lg:flex-row grow-0 shrink-0 lg:justify-around gap-4 lg:gap-0 lg:items-center my-5"
          >
            <div className="flex flex-col gap-3 lg:gap-16 text-white z-10">
              <div className="text flex flex-col gap-2 text-center">
                <h2 className="font-semibold text-xl lg:text-3xl">
                  Best Deal Online on smart watches
                </h2>
                <h1 className="text-3xl lg:text-6xl">SMART WEARABLE.</h1>
                <h3 className="font-semibold text-xl lg:text-3xl">
                  UP to 80% OFF
                </h3>
              </div>
              <div className="bullet flex gap-2 items-center justify-center">
                {images.map((img, i) => {
                  if (i === imageIndex) {
                    return (
                      <button
                        key={img}
                        className=" w-4 h-2 rounded-full bg-white transition"
                        onClick={() => setImageIndex(i)}
                      ></button>
                    );
                  } else {
                    return (
                      <button
                        key={img}
                        className=" w-2 h-2 rounded-full bg-white transition"
                        onClick={() => setImageIndex(i)}
                      ></button>
                    );
                  }
                })}
              </div>
            </div>
            <div className="img z-10 flex items-center justify-center h-[200px] -order-1 lg:order-2 ">
              <Image
                src={image}
                alt="image"
                width={270}
                height={200}
                objectFit="cover"
                className=" h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
