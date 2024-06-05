import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import {
  CiLocationOn,
  CiSearch,
  CiSettings,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";

function Header() {
  return (
    <nav>
      <div className="upper-part flex items-center text-[8px] md:text-sm justify-around bg py-4 w-full">
        <h3 className="text-col">Welcome to worldwide Megamart!</h3>
        <div className=" flex gap-2 items-center">
          <div className="pr-1 md:pr-4 border-r flex gap-1 md:gap-2 cursor-pointer items-center border-[#D9D9D9]">
            <CiLocationOn className="primary-col text-xs md:text-base" />
            <h4>
              Deliver to <span className="heading font-bold">423651</span>
            </h4>
          </div>
          <div className="pr-1 md:pr-4 border-r flex gap-1 md:gap-2 cursor-pointer items-center border-[#D9D9D9]">
            <TbTruckDelivery className="primary-col text-xs md:text-base" />
            <h4>Track your order</h4>
          </div>
          <div className=" flex gap-1 md:gap-2 cursor-pointer items-center ">
            <CiSettings className="primary-col text-xs md:text-base" />
            <h4>All offers</h4>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex py-4 flex-col gap-4 lg:gap-0 lg:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md light-pr cursor-pointer">
            <HiOutlineBars3BottomLeft className=" text-5xl primary-col" />
          </span>
          <h1 className="logo font-bold text-4xl primary-col">MegaMart</h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-1 basis-2/3">
          <div className="search flex items-center h-10 w-full md:w-auto">
            <span className="rounded-s-md text-xl primary-col light-pr h-full px-4 flex items-center">
              <CiSearch />
            </span>

            <input
              type="text"
              className="light-pr h-full px-2 w-full md:w-96 focus:outline-none text-sm"
              placeholder="Search essentials, groceries and more..."
            />
            <span className="light-pr h-full text-xl primary-col px-4 text-center rounded-e-md flex items-center">
              <AiOutlineBars />
            </span>
          </div>
          <div className="flex items-center justify-around md:justify-start">
            <h3 className=" text-xs pr-2 md:border-r md:border-[#d9d9d9] text-col flex items-center gap-1 cursor-pointer">
              <span>
                <CiUser className="primary-col text-xl" />
              </span>
              Sign Up/Sign In
            </h3>
            <h3 className="text-lg text-col ml-1 flex items-center gap-1 cursor-pointer">
              <span>
                <CiShoppingCart className=" primary-col text-xl" />
              </span>
              Cart
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
