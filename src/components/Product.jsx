// import React from 'react'
import download from "../assets/download.jpg";
const Product = () => {
  return (
    <>
      <div className="pl-8 mt-5">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">Title</h2>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-2 p-8">
        <div className="sm:w-[188px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md">
          <div>
            <img src={download} alt="" />
          </div>
          <p className="">
            <span>Lorem ipsum dolor sit.</span>
            <br />
            <span className="font-bold mt-3">Rs.100</span>
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md">
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>

        <div className="sm:w-[188px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md">
          <div>
            <img src={download} alt="" />
          </div>
          <p className="">
            <span>Lorem ipsum dolor sit.</span>
            <br />
            <span className="font-bold mt-3">Rs.100</span>
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md">
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>

        <div className="sm:w-[188px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md">
          <div>
            <img src={download} alt="" />
          </div>
          <p className="">
            <span>Lorem ipsum dolor sit.</span>
            <br />
            <span className="font-bold mt-3">Rs.100</span>
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md">
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>
        <div className="sm:w-[188px] border-2 p-2 overflow-hidden shadow-sm hover:scale-105 rounded-md">
          <div>
            <img src={download} alt="" />
          </div>
          <p className="">
            <span>Lorem ipsum dolor sit.</span>
            <br />
            <span className="font-bold mt-3">Rs.100</span>
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-lg w-full rounded-md">
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
