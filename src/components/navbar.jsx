import React from "react";
import {appleImg, bagImg, searchImg } from "../utils";
import {navLists} from "../constants";
import { RiMenuFill } from "react-icons/ri";

function navbar() {
  return (
    <header className="w-full py-9 md:py-6 px-8 md:px-96 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} className="w-[14px] h-[18px] cursor-pointer " />

        {/* navlist is a array imported from constants which is maped one by one here instead of writing all manually */}
        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav) => (
            <div
              key="nav"
              className="px-5 text-sm cursor-pointer hover:text-white text-gray transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} className="w-[18px] h-[24px] cursor-pointer" />
          <img src={bagImg} className="w-[18px] h-[24px] cursor-pointer" />
          <RiMenuFill className="w-[20px] h-[22px] md:hidden cursor-pointer"/>
        </div>
      </nav>
    </header>
  );
}

export default navbar;
