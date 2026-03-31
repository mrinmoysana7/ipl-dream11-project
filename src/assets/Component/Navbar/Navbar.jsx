// import { useState } from "react";
import dollerImage from "../../../../../IPL-dream-11-resource/assets/Currency.png"



const Navbar = ({coinValue}) => {
  return (
    <div>
      <div className="w-9/12 container justify-between mx-auto flex-row  navbar bg-base-100 mt-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex gap-12">
          <div className="navbar-center hidden lg:flex text-right">
          <ul className="menu menu-horizontal px-1 space-x-12 ">
            <li>Home</li>
            <li>Fixtures</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
        </div>
        <div className="flex-none">
            {/* <button className="btn btn-outline border-[#1313132f]"><span>0</span> <h3>Coin</h3> <img src={dollerImage} alt="" /></button> */}
            <button className="border border-gray-400 px-3 py-2 cursor-pointer rounded-xl flex justify-between items-center gap-2">
              {coinValue} Coins 
              <img src={dollerImage} alt="" />
            </button>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Navbar;
