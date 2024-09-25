import React from "react";
import logo from "../assets/OLX-logo.png";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* <h1>header</h1> */}
      <div className="w-full p-4  flex bg-gray-100 items-center  gap-3">
        <img src={logo} alt="" className="w-[50px]" />

        <div className="flex border-2  border-solid  border-black rounded-md bg-white items-center gap-2 px-2 py-3">
          <CiSearch size={20} />
          <input type="text" className="outline-none border-black" />
          <FaChevronDown size={20} />
        </div>
        <div className="hidden  md:flex h-12 border-2 w-full  gap-2 border-black  items-center rounded-md">
          <input
            type="text"
            placeholder=" Find Cars, Mobile Phones and more..."
            className="w-full h-full outline-none px-3 py-2 "
          />

          <div className="bg-gray-800 w-12 h-full flex items-center justify-center">
            <CiSearch className="text-2xl  text-white " />
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-2 p-3 hidden ">
          <p>English</p>
          <FaChevronDown size={20} />
        </div>
        <>
          <p>Name</p>
          <button className="underline font-bold">Login</button>
        </>
        <div onClick={()=>navigate('sell')} className="flex items-center gap-2 point border-4 rounded-full cursor-pointer p-2 shadow-md shadow-gray-500">
          <div className="flex items-center gap-2 bg-white rounded-full border-2 p-1">
            <TiPlus />
            <span className="cursor-pointer font-bold">SELL</span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-wrap h-10 w-full items-center justify-center">
        <div className=" border-2 w-full py-1 flex justify-center items-center gap-7"> 
          <span className="hover:text-blue-700">Cars</span>

          <span className="hover:text-blue-700">Motorcycles</span>
          <span className="hover:text-blue-700">MobilePhones</span>
          <span className="hover:text-blue-700">
            For Sale: House & Apartments
          </span>
          <span className="hover:text-blue-700">Scooters</span>
          <span className="hover:text-blue-700">
            Commercial & Other Vehicles
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
