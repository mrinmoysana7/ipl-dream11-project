// import { useState } from "react";
import dollerImage from "../../../../../IPL-dream-11-resource/assets/Currency.png"



const Navbar = ({coinValue}) => {
  return (
    <div>
      <div className="w-9/12 container justify-between mx-auto flex-row  navbar bg-base-100 mt-7">
        <div className="navbar-start">
          <div>
          </div>
          <a className="md:text-2xl font-semibold">Dream 11</a>
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
        <div className="md:flex-none">
            {/* <button className="btn btn-outline border-[#1313132f]"><span>0</span> <h3>Coin</h3> <img src={dollerImage} alt="" /></button> */}
            <button className="border border-gray-400  px-3 py-2 cursor-pointer rounded-xl md:flex justify-between items-center gap-2">
               
              
              {coinValue} <div className="flex gap-2 items-center justify-center"><h3>Coins</h3> <img src={dollerImage} alt="" /></div>
            </button>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default Navbar;
