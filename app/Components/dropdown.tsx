import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Dropdown() {
  return (
    <section className="dropdowns py-3 border-y-2 border-[#d9d9d9] ">
      <div className="container mx-auto flex items-center flex-wrap gap-2">
        <div className="btn-dropdown">
          <button className="flex items-center gap-1 focus:bg-[#008ecc] focus:text-white light-pr heading rounded py-2 px-3 focus:outline-none">
            Groceries
            <MdKeyboardArrowDown className="text-lg" />
          </button>
        </div>
        <div className="btn-dropdown">
          <button className="flex items-center gap-1 focus:bg-[#008ecc] focus:text-white light-pr heading rounded py-2 px-3 focus:outline-none">
            Groceries
            <MdKeyboardArrowDown className="text-lg" />
          </button>
        </div>
        <div className="btn-dropdown">
          <button className="flex items-center gap-1 focus:bg-[#008ecc] focus:text-white light-pr heading rounded py-2 px-3 focus:outline-none">
            Groceries
            <MdKeyboardArrowDown className="text-lg" />
          </button>
        </div>
        <div className="btn-dropdown">
          <button className="flex items-center gap-1 focus:bg-[#008ecc] focus:text-white light-pr heading rounded py-2 px-3 focus:outline-none">
            Groceries
            <MdKeyboardArrowDown className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dropdown;
